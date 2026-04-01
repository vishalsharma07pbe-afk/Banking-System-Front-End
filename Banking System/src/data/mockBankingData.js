export const dashboardMetrics = [
  {
    label: "Assets under watch",
    value: "₹14.82 Cr",
    trend: "+8.4% from last month",
  },
  {
    label: "Daily settlements",
    value: "1,284",
    trend: "96.8% auto-cleared",
  },
  {
    label: "Risk alerts",
    value: "03",
    trend: "2 need review today",
  },
];

export const balances = [
  {
    name: "Operating Account",
    accountNumber: "•••• 2814",
    amount: "₹84,20,540.00",
    change: "+2.4%",
  },
  {
    name: "Treasury Reserve",
    accountNumber: "•••• 7721",
    amount: "₹1,49,80,000.00",
    change: "-0.6%",
  },
];

export const recentTransactions = [
  {
    id: "txn_001",
    title: "Salary processing batch",
    meta: "Corporate payroll",
    amount: "-₹4,82,300.00",
    status: "Completed",
  },
  {
    id: "txn_002",
    title: "Inbound wire settlement",
    meta: "Acme Logistics Ltd.",
    amount: "+₹1,28,000.00",
    status: "Completed",
  },
  {
    id: "txn_003",
    title: "Vendor disbursement",
    meta: "CloudStack Services",
    amount: "-₹18,920.00",
    status: "Pending review",
  },
];

export const accounts = [
  {
    id: "acct_001",
    name: "Atlas Operations",
    type: "Current",
    status: "Healthy",
    balance: "₹84,20,540.00",
  },
  {
    id: "acct_002",
    name: "Treasury Reserve",
    type: "Savings",
    status: "Monitoring",
    balance: "₹1,49,80,000.00",
  },
  {
    id: "acct_003",
    name: "Client Escrow",
    type: "Escrow",
    status: "Healthy",
    balance: "₹32,84,221.00",
  },
];

export const paymentQueue = [
  {
    id: "pay_001",
    beneficiary: "Nova Retail Imports",
    channel: "Domestic transfer",
    amount: "₹82,450.00",
    urgency: "Priority",
  },
  {
    id: "pay_002",
    beneficiary: "Zenith Tech Holdings",
    channel: "SWIFT wire",
    amount: "₹2,12,000.00",
    urgency: "Scheduled",
  },
  {
    id: "pay_003",
    beneficiary: "UrbanGrid Utilities",
    channel: "Bulk payout",
    amount: "₹41,390.00",
    urgency: "Requires approval",
  },
];
