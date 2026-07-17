export type Transaction = {
  id: string
  merchant: string
  category: string
  amount: number
  date: string
  account: string
}

export type Account = {
  id: string
  name: string
  institution: string
  type: 'checking' | 'savings' | 'investment' | 'credit'
  balance: number
  change30d: number
}

export type Holding = {
  symbol: string
  name: string
  price: number
  changePct: number
  allocation: number
}

export const kpis = {
  netWorth: 284_620.42,
  netWorthChange: 4.8,
  monthlyIncome: 12_450.0,
  monthlyExpenses: 6_812.35,
  savingsRate: 45.3,
}

export const netWorthSeries = [
  { month: 'Jan', value: 242000 },
  { month: 'Feb', value: 248500 },
  { month: 'Mar', value: 251200 },
  { month: 'Apr', value: 258800 },
  { month: 'May', value: 263400 },
  { month: 'Jun', value: 271100 },
  { month: 'Jul', value: 284620 },
]

export const spendingByCategory = [
  { name: 'Housing', value: 2400, color: '#0B4F54' },
  { name: 'Food', value: 980, color: '#1A8A7D' },
  { name: 'Transport', value: 620, color: '#3BA99A' },
  { name: 'Utilities', value: 410, color: '#7DD3C0' },
  { name: 'Lifestyle', value: 1450, color: '#A8E6D8' },
  { name: 'Other', value: 952, color: '#D4F0EA' },
]

export const assetAllocation = [
  { name: 'US Equities', value: 42 },
  { name: 'Intl Equities', value: 18 },
  { name: 'Bonds', value: 22 },
  { name: 'Cash', value: 12 },
  { name: 'Alternatives', value: 6 },
]

export const accounts: Account[] = [
  {
    id: '1',
    name: 'Everyday Checking',
    institution: 'First Harbor Bank',
    type: 'checking',
    balance: 8420.55,
    change30d: 2.1,
  },
  {
    id: '2',
    name: 'Emergency Reserve',
    institution: 'First Harbor Bank',
    type: 'savings',
    balance: 28500.0,
    change30d: 0.4,
  },
  {
    id: '3',
    name: 'Growth Portfolio',
    institution: 'Meridian Brokerage',
    type: 'investment',
    balance: 198420.12,
    change30d: 6.2,
  },
  {
    id: '4',
    name: 'Travel Rewards',
    institution: 'Atlas Card',
    type: 'credit',
    balance: -1720.25,
    change30d: -8.5,
  },
]

export const transactions: Transaction[] = [
  {
    id: 't1',
    merchant: 'Whole Foods Market',
    category: 'Food',
    amount: -86.42,
    date: '2026-07-16',
    account: 'Everyday Checking',
  },
  {
    id: 't2',
    merchant: 'Payroll — Northwind Co.',
    category: 'Income',
    amount: 4225.0,
    date: '2026-07-15',
    account: 'Everyday Checking',
  },
  {
    id: 't3',
    merchant: 'PG&E Utilities',
    category: 'Utilities',
    amount: -142.18,
    date: '2026-07-14',
    account: 'Everyday Checking',
  },
  {
    id: 't4',
    merchant: 'Vanguard VTSAX',
    category: 'Investing',
    amount: -1500.0,
    date: '2026-07-12',
    account: 'Growth Portfolio',
  },
  {
    id: 't5',
    merchant: 'Uber Trip',
    category: 'Transport',
    amount: -24.6,
    date: '2026-07-11',
    account: 'Travel Rewards',
  },
  {
    id: 't6',
    merchant: 'Rent — Harbor Lofts',
    category: 'Housing',
    amount: -2400.0,
    date: '2026-07-01',
    account: 'Everyday Checking',
  },
]

export const watchlist: Holding[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 214.32, changePct: 1.24, allocation: 8.2 },
  { symbol: 'MSFT', name: 'Microsoft', price: 448.61, changePct: 0.87, allocation: 7.5 },
  { symbol: 'VTI', name: 'Vanguard Total Stock', price: 278.14, changePct: 0.42, allocation: 18.0 },
  { symbol: 'BND', name: 'Vanguard Total Bond', price: 73.92, changePct: -0.18, allocation: 12.4 },
  { symbol: 'VXUS', name: 'Vanguard Total Intl', price: 64.28, changePct: 0.65, allocation: 9.1 },
]

export function formatCurrency(value: number, compact = false): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: compact ? 'compact' : 'standard',
    maximumFractionDigits: compact ? 1 : 2,
  }).format(value)
}

export function formatPct(value: number): string {
  const sign = value > 0 ? '+' : ''
  return `${sign}${value.toFixed(1)}%`
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(iso + 'T12:00:00'))
}
