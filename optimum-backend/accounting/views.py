from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Sum, Q, F
from django.utils import timezone
from datetime import timedelta
from decimal import Decimal

from .models import (
    ChartOfAccounts,
    GeneralLedgerEntry,
    AccountsReceivable,
    AccountsPayable,
    CustomerAccount,
    Payment
)
from .serializers import (
    ChartOfAccountsSerializer,
    GeneralLedgerEntrySerializer,
    AccountsReceivableSerializer,
    AccountsPayableSerializer,
    CustomerAccountSerializer,
    PaymentSerializer,
    AccountingSummarySerializer
)
from orders.models import Order
from customers.models import Customer


class ChartOfAccountsViewSet(viewsets.ModelViewSet):
    """Chart of Accounts - Admin only"""
    queryset = ChartOfAccounts.objects.all()
    serializer_class = ChartOfAccountsSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        if not user.is_staff:  # Only admin/staff can access
            return ChartOfAccounts.objects.none()
        return ChartOfAccounts.objects.filter(is_active=True)


class GeneralLedgerEntryViewSet(viewsets.ModelViewSet):
    """General Ledger Entries - Full accounting for Admin"""
    queryset = GeneralLedgerEntry.objects.all()
    serializer_class = GeneralLedgerEntrySerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        if not user.is_staff:  # Only admin/staff can access
            return GeneralLedgerEntry.objects.none()
        
        queryset = GeneralLedgerEntry.objects.select_related('account', 'order', 'created_by')
        
        # Filters
        account_id = self.request.query_params.get('account', None)
        transaction_type = self.request.query_params.get('transaction_type', None)
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)
        
        if account_id:
            queryset = queryset.filter(account_id=account_id)
        if transaction_type:
            queryset = queryset.filter(transaction_type=transaction_type)
        if start_date:
            queryset = queryset.filter(entry_date__gte=start_date)
        if end_date:
            queryset = queryset.filter(entry_date__lte=end_date)
        
        return queryset
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class AccountsReceivableViewSet(viewsets.ModelViewSet):
    """Accounts Receivable - Customer receivables"""
    queryset = AccountsReceivable.objects.all()
    serializer_class = AccountsReceivableSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            # Admin sees all
            queryset = AccountsReceivable.objects.select_related('customer', 'order')
        else:
            # Customer sees only their own
            try:
                customer = Customer.objects.get(email=user.email)
                queryset = AccountsReceivable.objects.filter(customer=customer).select_related('customer', 'order')
            except Customer.DoesNotExist:
                queryset = AccountsReceivable.objects.none()
        
        # Filters
        status_filter = self.request.query_params.get('status', None)
        customer_id = self.request.query_params.get('customer', None)
        
        if status_filter:
            queryset = queryset.filter(status=status_filter)
        if customer_id:
            queryset = queryset.filter(customer_id=customer_id)
        
        return queryset
    
    @action(detail=True, methods=['post'])
    def record_payment(self, request, pk=None):
        """Record a payment against this AR entry"""
        ar_entry = self.get_object()
        amount = Decimal(request.data.get('amount', 0))
        payment_method = request.data.get('payment_method', 'bank_transfer')
        reference_number = request.data.get('reference_number', '')
        
        if amount <= 0:
            return Response({'error': 'Payment amount must be greater than 0'}, 
                           status=status.HTTP_400_BAD_REQUEST)
        
        if amount > ar_entry.balance:
            return Response({'error': 'Payment amount exceeds outstanding balance'}, 
                           status=status.HTTP_400_BAD_REQUEST)
        
        # Create payment
        payment = Payment.objects.create(
            payment_type='customer_payment',
            payment_date=timezone.now().date(),
            amount=amount,
            payment_method=payment_method,
            reference_number=reference_number,
            ar_entry=ar_entry,
            order=ar_entry.order,
            created_by=request.user,
            description=f"Payment for invoice {ar_entry.invoice_number}"
        )
        
        # Update AR entry
        ar_entry.paid_amount += amount
        ar_entry.save()
        
        # Update customer account
        customer_account, _ = CustomerAccount.objects.get_or_create(customer=ar_entry.customer)
        customer_account.total_paid += amount
        customer_account.balance = customer_account.total_invoiced - customer_account.total_paid
        customer_account.last_transaction_date = timezone.now()
        customer_account.save()
        
        # Create GL entry
        # Debit: Cash/Bank account (assuming account code 1000)
        # Credit: Accounts Receivable (assuming account code 1200)
        cash_account = ChartOfAccounts.objects.filter(code='1000').first()
        ar_account = ChartOfAccounts.objects.filter(code='1200').first()
        
        if cash_account and ar_account:
            GeneralLedgerEntry.objects.create(
                entry_date=timezone.now().date(),
                account=cash_account,
                debit=amount,
                credit=Decimal('0.00'),
                transaction_type='customer_payment',
                reference=f"Payment #{payment.id}",
                description=f"Customer payment for invoice {ar_entry.invoice_number}",
                order=ar_entry.order,
                created_by=request.user
            )
            GeneralLedgerEntry.objects.create(
                entry_date=timezone.now().date(),
                account=ar_account,
                debit=Decimal('0.00'),
                credit=amount,
                transaction_type='customer_payment',
                reference=f"Payment #{payment.id}",
                description=f"Customer payment for invoice {ar_entry.invoice_number}",
                order=ar_entry.order,
                created_by=request.user
            )
        
        return Response(PaymentSerializer(payment).data, status=status.HTTP_201_CREATED)


class AccountsPayableViewSet(viewsets.ModelViewSet):
    """Accounts Payable - Supplier payables"""
    queryset = AccountsPayable.objects.all()
    serializer_class = AccountsPayableSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        if not user.is_staff:  # Only admin can access
            return AccountsPayable.objects.none()
        
        queryset = AccountsPayable.objects.select_related('supplier', 'order')
        
        # Filters
        status_filter = self.request.query_params.get('status', None)
        supplier_id = self.request.query_params.get('supplier', None)
        
        if status_filter:
            queryset = queryset.filter(status=status_filter)
        if supplier_id:
            queryset = queryset.filter(supplier_id=supplier_id)
        
        return queryset
    
    @action(detail=True, methods=['post'])
    def record_payment(self, request, pk=None):
        """Record a payment to supplier"""
        ap_entry = self.get_object()
        amount = Decimal(request.data.get('amount', 0))
        payment_method = request.data.get('payment_method', 'bank_transfer')
        reference_number = request.data.get('reference_number', '')
        
        if amount <= 0:
            return Response({'error': 'Payment amount must be greater than 0'}, 
                           status=status.HTTP_400_BAD_REQUEST)
        
        if amount > ap_entry.balance:
            return Response({'error': 'Payment amount exceeds outstanding balance'}, 
                           status=status.HTTP_400_BAD_REQUEST)
        
        # Create payment
        payment = Payment.objects.create(
            payment_type='supplier_payment',
            payment_date=timezone.now().date(),
            amount=amount,
            payment_method=payment_method,
            reference_number=reference_number,
            ap_entry=ap_entry,
            order=ap_entry.order,
            created_by=request.user,
            description=f"Payment to supplier for bill {ap_entry.bill_number}"
        )
        
        # Update AP entry
        ap_entry.paid_amount += amount
        ap_entry.save()
        
        # Create GL entry
        # Debit: Accounts Payable (assuming account code 2000)
        # Credit: Cash/Bank account (assuming account code 1000)
        cash_account = ChartOfAccounts.objects.filter(code='1000').first()
        ap_account = ChartOfAccounts.objects.filter(code='2000').first()
        
        if cash_account and ap_account:
            GeneralLedgerEntry.objects.create(
                entry_date=timezone.now().date(),
                account=ap_account,
                debit=amount,
                credit=Decimal('0.00'),
                transaction_type='supplier_payment',
                reference=f"Payment #{payment.id}",
                description=f"Payment to supplier for bill {ap_entry.bill_number}",
                order=ap_entry.order,
                created_by=request.user
            )
            GeneralLedgerEntry.objects.create(
                entry_date=timezone.now().date(),
                account=cash_account,
                debit=Decimal('0.00'),
                credit=amount,
                transaction_type='supplier_payment',
                reference=f"Payment #{payment.id}",
                description=f"Payment to supplier for bill {ap_entry.bill_number}",
                order=ap_entry.order,
                created_by=request.user
            )
        
        return Response(PaymentSerializer(payment).data, status=status.HTTP_201_CREATED)


class CustomerAccountViewSet(viewsets.ReadOnlyModelViewSet):
    """Customer Account - Simple account per customer"""
    queryset = CustomerAccount.objects.all()
    serializer_class = CustomerAccountSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            # Admin sees all
            return CustomerAccount.objects.select_related('customer')
        else:
            # Customer sees only their own
            try:
                customer = Customer.objects.get(email=user.email)
                return CustomerAccount.objects.filter(customer=customer).select_related('customer')
            except Customer.DoesNotExist:
                return CustomerAccount.objects.none()
    
    @action(detail=True, methods=['get'])
    def statement(self, request, pk=None):
        """Get account statement with invoices and payments"""
        account = self.get_object()
        
        # Get invoices (AR entries)
        invoices = AccountsReceivable.objects.filter(customer=account.customer).order_by('-invoice_date')
        
        # Get payments
        payments = Payment.objects.filter(
            ar_entry__customer=account.customer
        ).order_by('-payment_date')
        
        return Response({
            'account': CustomerAccountSerializer(account).data,
            'invoices': AccountsReceivableSerializer(invoices, many=True).data,
            'payments': PaymentSerializer(payments, many=True).data,
        })


class PaymentViewSet(viewsets.ModelViewSet):
    """Payment records"""
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return Payment.objects.select_related('ar_entry', 'ap_entry', 'order', 'created_by')
        else:
            # Customer sees only their payments
            try:
                customer = Customer.objects.get(email=user.email)
                return Payment.objects.filter(
                    ar_entry__customer=customer
                ).select_related('ar_entry', 'ap_entry', 'order', 'created_by')
            except Customer.DoesNotExist:
                return Payment.objects.none()


class AccountingSummaryViewSet(viewsets.ViewSet):
    """Accounting summary for admin dashboard"""
    permission_classes = [IsAuthenticated]
    
    def list(self, request):
        user = request.user
        if not user.is_staff:
            return Response({'error': 'Admin access required'}, 
                          status=status.HTTP_403_FORBIDDEN)
        
        # Calculate totals
        total_receivables = AccountsReceivable.objects.aggregate(
            total=Sum('balance')
        )['total'] or Decimal('0.00')
        
        total_payables = AccountsPayable.objects.aggregate(
            total=Sum('balance')
        )['total'] or Decimal('0.00')
        
        total_customer_balance = CustomerAccount.objects.aggregate(
            total=Sum('balance')
        )['total'] or Decimal('0.00')
        
        # Revenue (from AR invoices)
        total_revenue = AccountsReceivable.objects.aggregate(
            total=Sum('amount')
        )['total'] or Decimal('0.00')
        
        # Expenses (from AP bills)
        total_expenses = AccountsPayable.objects.aggregate(
            total=Sum('amount')
        )['total'] or Decimal('0.00')
        
        net_income = total_revenue - total_expenses
        
        # Overdue
        today = timezone.now().date()
        overdue_receivables = AccountsReceivable.objects.filter(
            due_date__lt=today,
            status__in=['open', 'partial']
        ).aggregate(total=Sum('balance'))['total'] or Decimal('0.00')
        
        overdue_payables = AccountsPayable.objects.filter(
            due_date__lt=today,
            status__in=['open', 'partial']
        ).aggregate(total=Sum('balance'))['total'] or Decimal('0.00')
        
        data = {
            'total_receivables': total_receivables,
            'total_payables': total_payables,
            'total_customer_balance': total_customer_balance,
            'total_revenue': total_revenue,
            'total_expenses': total_expenses,
            'net_income': net_income,
            'overdue_receivables': overdue_receivables,
            'overdue_payables': overdue_payables,
        }
        
        serializer = AccountingSummarySerializer(data)
        return Response(serializer.data)
