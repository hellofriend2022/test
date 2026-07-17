import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  PieChart,
  LineChart,
  Settings,
  Compass,
} from 'lucide-react'

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'accounts', label: 'Accounts', icon: Wallet },
  { id: 'cashflow', label: 'Cash flow', icon: ArrowLeftRight },
  { id: 'portfolio', label: 'Portfolio', icon: PieChart },
  { id: 'markets', label: 'Markets', icon: LineChart },
  { id: 'settings', label: 'Settings', icon: Settings },
] as const

type SidebarProps = {
  active: string
  onNavigate: (id: string) => void
}

export function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">
          <Compass size={22} strokeWidth={2.25} />
        </span>
        <div className="brand-text">
          <span className="brand-name">Northline</span>
          <span className="brand-tag">Wealth clarity</span>
        </div>
      </div>

      <nav className="nav" aria-label="Primary">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className={`nav-item${active === id ? ' is-active' : ''}`}
            onClick={() => onNavigate(id)}
            aria-current={active === id ? 'page' : undefined}
          >
            <Icon size={18} strokeWidth={2} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-foot">
        <p className="sidebar-hint">Demo data · Jul 2026</p>
      </div>
    </aside>
  )
}
