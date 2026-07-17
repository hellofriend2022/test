import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { KpiCards } from './components/KpiCards'
import { NetWorthChart } from './components/NetWorthChart'
import { SpendingChart } from './components/SpendingChart'
import { AssetAllocation } from './components/AssetAllocation'
import { Accounts } from './components/Accounts'
import { Transactions } from './components/Transactions'
import { Watchlist } from './components/Watchlist'
import './App.css'

const sectionCopy: Record<string, { title: string; subtitle: string }> = {
  overview: {
    title: 'Good afternoon, Alex',
    subtitle: 'Your money at a glance — balances, cash flow, and markets.',
  },
  accounts: {
    title: 'Accounts',
    subtitle: 'Balances across checking, savings, investing, and credit.',
  },
  cashflow: {
    title: 'Cash flow',
    subtitle: 'Income, spending, and recent activity.',
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'Allocation and holdings performance.',
  },
  markets: {
    title: 'Markets',
    subtitle: 'Watchlist prices and daily moves.',
  },
  settings: {
    title: 'Settings',
    subtitle: 'Preferences for this demo workspace.',
  },
}

export default function App() {
  const [active, setActive] = useState('overview')
  const copy = sectionCopy[active] ?? sectionCopy.overview

  return (
    <div className="app-shell">
      <div className="ambient" aria-hidden="true" />
      <Sidebar active={active} onNavigate={setActive} />

      <div className="main-column">
        <Header title={copy.title} subtitle={copy.subtitle} />

        <main className="dashboard">
          {(active === 'overview' || active === 'accounts') && <KpiCards />}

          {active === 'overview' && (
            <>
              <div className="grid-2">
                <NetWorthChart />
                <SpendingChart />
              </div>
              <div className="grid-3">
                <Accounts />
                <AssetAllocation />
                <Watchlist />
              </div>
              <Transactions />
            </>
          )}

          {active === 'accounts' && (
            <div className="grid-2">
              <Accounts />
              <AssetAllocation />
            </div>
          )}

          {active === 'cashflow' && (
            <>
              <div className="grid-2">
                <SpendingChart />
                <NetWorthChart />
              </div>
              <Transactions />
            </>
          )}

          {active === 'portfolio' && (
            <div className="grid-2">
              <AssetAllocation />
              <Watchlist />
            </div>
          )}

          {active === 'markets' && <Watchlist />}

          {active === 'settings' && (
            <section className="panel reveal settings-panel">
              <h2>Demo workspace</h2>
              <p className="panel-sub">
                Northline is a frontend prototype with sample financial data. Connect real
                accounts later — this view is designed for clarity first.
              </p>
              <ul className="settings-list">
                <li>
                  <span>Currency</span>
                  <strong>USD</strong>
                </li>
                <li>
                  <span>Theme</span>
                  <strong>Coastal light</strong>
                </li>
                <li>
                  <span>Data source</span>
                  <strong>Local mock</strong>
                </li>
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}
