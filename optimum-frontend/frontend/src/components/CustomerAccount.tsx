import React, { useState, useEffect } from 'react';
import { accountingAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';
import './CustomerAccount.css';

interface CustomerAccount {
  id: number;
  customer_name: string;
  balance: string;
  total_invoiced: string;
  total_paid: string;
  last_transaction_date: string;
}

interface Invoice {
  id: number;
  invoice_number: string;
  invoice_date: string;
  due_date: string;
  amount: string;
  paid_amount: string;
  balance: string;
  status: string;
}

interface Payment {
  id: number;
  payment_date: string;
  amount: string;
  payment_method: string;
  reference_number: string;
}

interface AccountStatement {
  account: CustomerAccount;
  invoices: Invoice[];
  payments: Payment[];
}

const CustomerAccount: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [statement, setStatement] = useState<AccountStatement | null>(null);

  useEffect(() => {
    loadAccountStatement();
  }, []);

  const loadAccountStatement = async () => {
    try {
      setLoading(true);
      // First, get customer accounts to find the user's account
      const accountsRes = await accountingAPI.getCustomerAccounts();
      const accounts = accountsRes.data.results || accountsRes.data;
      
      // Find account by customer email
      const account = Array.isArray(accounts) 
        ? accounts.find((acc: any) => acc.customer_email === user?.email)
        : null;
      
      if (account) {
        const statementRes = await accountingAPI.getCustomerStatement(account.id);
        setStatement(statementRes.data);
      } else {
        toast.info('No account found. Your account will be created when you place your first order.');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.detail || 'Failed to load account statement');
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: string | number): string => {
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP',
      minimumFractionDigits: 2,
    }).format(num);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return <div className="customer-account-loading">Loading your account...</div>;
  }

  if (!statement) {
    return (
      <div className="customer-account-empty">
        <div className="empty-icon">💳</div>
        <h3>No Account Yet</h3>
        <p>Your account will be created automatically when you place your first order.</p>
      </div>
    );
  }

  const { account, invoices, payments } = statement;

  return (
    <div className="customer-account">
      <div className="account-header">
        <h2>My Account</h2>
        <p>View your invoices, payments, and account balance</p>
      </div>

      <div className="account-summary">
        <div className="summary-card balance">
          <div className="card-icon">💰</div>
          <div className="card-info">
            <div className="card-label">Account Balance</div>
            <div className={`card-value ${parseFloat(account.balance) > 0 ? 'positive' : 'zero'}`}>
              {formatCurrency(account.balance)}
            </div>
            {parseFloat(account.balance) > 0 && (
              <div className="card-note">Amount due</div>
            )}
          </div>
        </div>

        <div className="summary-card invoiced">
          <div className="card-icon">📋</div>
          <div className="card-info">
            <div className="card-label">Total Invoiced</div>
            <div className="card-value">{formatCurrency(account.total_invoiced)}</div>
          </div>
        </div>

        <div className="summary-card paid">
          <div className="card-icon">✅</div>
          <div className="card-info">
            <div className="card-label">Total Paid</div>
            <div className="card-value">{formatCurrency(account.total_paid)}</div>
          </div>
        </div>
      </div>

      <div className="account-sections">
        <div className="account-section">
          <h3>Invoices</h3>
          {invoices.length === 0 ? (
            <div className="no-data">No invoices yet</div>
          ) : (
            <div className="invoices-list">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="invoice-item">
                  <div className="invoice-header">
                    <div className="invoice-number">{invoice.invoice_number}</div>
                    <span className={`status-badge status-${invoice.status}`}>
                      {invoice.status}
                    </span>
                  </div>
                  <div className="invoice-details">
                    <div className="invoice-detail">
                      <span className="label">Date:</span>
                      <span>{formatDate(invoice.invoice_date)}</span>
                    </div>
                    <div className="invoice-detail">
                      <span className="label">Due Date:</span>
                      <span>{formatDate(invoice.due_date)}</span>
                    </div>
                    <div className="invoice-detail">
                      <span className="label">Amount:</span>
                      <span className="amount">{formatCurrency(invoice.amount)}</span>
                    </div>
                    <div className="invoice-detail">
                      <span className="label">Paid:</span>
                      <span>{formatCurrency(invoice.paid_amount)}</span>
                    </div>
                    <div className="invoice-detail">
                      <span className="label">Balance:</span>
                      <span className={`balance ${parseFloat(invoice.balance) > 0 ? 'outstanding' : 'paid'}`}>
                        {formatCurrency(invoice.balance)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="account-section">
          <h3>Payment History</h3>
          {payments.length === 0 ? (
            <div className="no-data">No payments yet</div>
          ) : (
            <div className="payments-list">
              {payments.map((payment) => (
                <div key={payment.id} className="payment-item">
                  <div className="payment-header">
                    <div className="payment-date">{formatDate(payment.payment_date)}</div>
                    <div className="payment-amount">{formatCurrency(payment.amount)}</div>
                  </div>
                  <div className="payment-details">
                    <div className="payment-detail">
                      <span className="label">Method:</span>
                      <span>{payment.payment_method.replace('_', ' ')}</span>
                    </div>
                    {payment.reference_number && (
                      <div className="payment-detail">
                        <span className="label">Reference:</span>
                        <span>{payment.reference_number}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerAccount;
