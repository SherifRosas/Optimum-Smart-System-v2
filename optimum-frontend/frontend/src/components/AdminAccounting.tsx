import React, { useState, useEffect } from 'react';
import { accountingAPI } from '../services/api';
import { useToast } from '../hooks/useToast';
import './AdminAccounting.css';

interface AccountingSummary {
  total_receivables: number;
  total_payables: number;
  total_customer_balance: number;
  total_revenue: number;
  total_expenses: number;
  net_income: number;
  overdue_receivables: number;
  overdue_payables: number;
}

interface AccountsReceivable {
  id: number;
  invoice_number: string;
  customer_name: string;
  invoice_date: string;
  due_date: string;
  amount: string;
  paid_amount: string;
  balance: string;
  status: string;
  order_id?: number;
}

interface AccountsPayable {
  id: number;
  bill_number: string;
  supplier_name: string;
  bill_date: string;
  due_date: string;
  amount: string;
  paid_amount: string;
  balance: string;
  status: string;
  order_id?: number;
}

interface GeneralLedgerEntry {
  id: number;
  entry_date: string;
  account_code: string;
  account_name: string;
  debit: string;
  credit: string;
  transaction_type: string;
  reference: string;
  description: string;
}

const AdminAccounting: React.FC = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'summary' | 'ar' | 'ap' | 'gl'>('summary');

  const [summary, setSummary] = useState<AccountingSummary | null>(null);
  const [receivables, setReceivables] = useState<AccountsReceivable[]>([]);
  const [payables, setPayables] = useState<AccountsPayable[]>([]);
  const [ledgerEntries, setLedgerEntries] = useState<GeneralLedgerEntry[]>([]);

  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    try {
      setLoading(true);

      if (activeTab === 'summary') {
        const summaryRes = await accountingAPI.getSummary();
        setSummary(summaryRes.data);
      } else if (activeTab === 'ar') {
        const arRes = await accountingAPI.getAccountsReceivable();
        setReceivables(arRes.data.results || arRes.data);
      } else if (activeTab === 'ap') {
        const apRes = await accountingAPI.getAccountsPayable();
        setPayables(apRes.data.results || apRes.data);
      } else if (activeTab === 'gl') {
        const glRes = await accountingAPI.getGeneralLedger();
        setLedgerEntries(glRes.data.results || glRes.data);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.detail || 'Failed to load accounting data');
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: string | number): string => {
    let num = typeof amount === 'string' ? parseFloat(amount) : amount;
    if (isNaN(num) || num === null || num === undefined) num = 0;

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

  const handleRecordPayment = async (arId: number) => {
    const amount = prompt('Enter payment amount:');
    if (!amount || parseFloat(amount) <= 0) return;

    try {
      await accountingAPI.recordPayment(arId, {
        amount: parseFloat(amount),
        payment_method: 'bank_transfer',
      });
      toast.success('Payment recorded successfully');
      loadData();
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to record payment');
    }
  };

  const handleRecordSupplierPayment = async (apId: number) => {
    const amount = prompt('Enter payment amount:');
    if (!amount || parseFloat(amount) <= 0) return;

    try {
      await accountingAPI.recordSupplierPayment(apId, {
        amount: parseFloat(amount),
        payment_method: 'bank_transfer',
      });
      toast.success('Payment recorded successfully');
      loadData();
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'Failed to record payment');
    }
  };

  if (loading && !summary) {
    return <div className="admin-accounting-loading">Loading accounting data...</div>;
  }

  return (
    <div className="admin-accounting">
      <div className="accounting-header">
        <h2>Accounting System</h2>
        <p>Full accounting management - General Ledger, AR, AP</p>
      </div>

      <div className="accounting-tabs">
        <button
          className={activeTab === 'summary' ? 'active' : ''}
          onClick={() => setActiveTab('summary')}
        >
          Summary
        </button>
        <button
          className={activeTab === 'ar' ? 'active' : ''}
          onClick={() => setActiveTab('ar')}
        >
          Accounts Receivable
        </button>
        <button
          className={activeTab === 'ap' ? 'active' : ''}
          onClick={() => setActiveTab('ap')}
        >
          Accounts Payable
        </button>
        <button
          className={activeTab === 'gl' ? 'active' : ''}
          onClick={() => setActiveTab('gl')}
        >
          General Ledger
        </button>
      </div>

      <div className="accounting-content">
        {activeTab === 'summary' && summary && (
          <div className="summary-view">
            <div className="summary-cards">
              <div className="summary-card revenue">
                <div className="card-icon">💰</div>
                <div className="card-info">
                  <div className="card-label">Total Revenue</div>
                  <div className="card-value">{formatCurrency(summary.total_revenue)}</div>
                </div>
              </div>

              <div className="summary-card expenses">
                <div className="card-icon">💸</div>
                <div className="card-info">
                  <div className="card-label">Total Expenses</div>
                  <div className="card-value">{formatCurrency(summary.total_expenses)}</div>
                </div>
              </div>

              <div className="summary-card income">
                <div className="card-icon">📈</div>
                <div className="card-info">
                  <div className="card-label">Net Income</div>
                  <div className="card-value">{formatCurrency(summary.net_income)}</div>
                </div>
              </div>

              <div className="summary-card receivables">
                <div className="card-icon">📋</div>
                <div className="card-info">
                  <div className="card-label">Accounts Receivable</div>
                  <div className="card-value">{formatCurrency(summary.total_receivables)}</div>
                  {summary.overdue_receivables > 0 && (
                    <div className="card-warning">Overdue: {formatCurrency(summary.overdue_receivables)}</div>
                  )}
                </div>
              </div>

              <div className="summary-card payables">
                <div className="card-icon">📄</div>
                <div className="card-info">
                  <div className="card-label">Accounts Payable</div>
                  <div className="card-value">{formatCurrency(summary.total_payables)}</div>
                  {summary.overdue_payables > 0 && (
                    <div className="card-warning">Overdue: {formatCurrency(summary.overdue_payables)}</div>
                  )}
                </div>
              </div>

              <div className="summary-card balance">
                <div className="card-icon">💳</div>
                <div className="card-info">
                  <div className="card-label">Customer Balance</div>
                  <div className="card-value">{formatCurrency(summary.total_customer_balance)}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ar' && (
          <div className="ar-view">
            <div className="table-container">
              <table className="accounting-table">
                <thead>
                  <tr>
                    <th>Invoice #</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Paid</th>
                    <th>Balance</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {receivables.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="no-data">No receivables found</td>
                    </tr>
                  ) : (
                    receivables.map((ar) => (
                      <tr key={ar.id}>
                        <td>{ar.invoice_number}</td>
                        <td>{ar.customer_name}</td>
                        <td>{formatDate(ar.invoice_date)}</td>
                        <td>{formatDate(ar.due_date)}</td>
                        <td>{formatCurrency(ar.amount)}</td>
                        <td>{formatCurrency(ar.paid_amount)}</td>
                        <td>{formatCurrency(ar.balance)}</td>
                        <td>
                          <span className={`status-badge status-${ar.status}`}>
                            {ar.status}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn-small"
                            onClick={() => handleRecordPayment(ar.id)}
                            disabled={parseFloat(ar.balance) <= 0}
                          >
                            Record Payment
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'ap' && (
          <div className="ap-view">
            <div className="table-container">
              <table className="accounting-table">
                <thead>
                  <tr>
                    <th>Bill #</th>
                    <th>Supplier</th>
                    <th>Date</th>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Paid</th>
                    <th>Balance</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payables.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="no-data">No payables found</td>
                    </tr>
                  ) : (
                    payables.map((ap) => (
                      <tr key={ap.id}>
                        <td>{ap.bill_number}</td>
                        <td>{ap.supplier_name}</td>
                        <td>{formatDate(ap.bill_date)}</td>
                        <td>{formatDate(ap.due_date)}</td>
                        <td>{formatCurrency(ap.amount)}</td>
                        <td>{formatCurrency(ap.paid_amount)}</td>
                        <td>{formatCurrency(ap.balance)}</td>
                        <td>
                          <span className={`status-badge status-${ap.status}`}>
                            {ap.status}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn-small"
                            onClick={() => handleRecordSupplierPayment(ap.id)}
                            disabled={parseFloat(ap.balance) <= 0}
                          >
                            Pay Supplier
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'gl' && (
          <div className="gl-view">
            <div className="table-container">
              <table className="accounting-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Account</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th>Type</th>
                    <th>Reference</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {ledgerEntries.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="no-data">No ledger entries found</td>
                    </tr>
                  ) : (
                    ledgerEntries.map((entry) => (
                      <tr key={entry.id}>
                        <td>{formatDate(entry.entry_date)}</td>
                        <td>{entry.account_code} - {entry.account_name}</td>
                        <td>{formatCurrency(entry.debit)}</td>
                        <td>{formatCurrency(entry.credit)}</td>
                        <td>{entry.transaction_type}</td>
                        <td>{entry.reference}</td>
                        <td>{entry.description}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAccounting;
