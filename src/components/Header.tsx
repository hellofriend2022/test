import { Bell, Search } from 'lucide-react'

type HeaderProps = {
  title: string
  subtitle: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header-copy">
        <p className="eyebrow">Friday, July 17</p>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>

      <div className="page-header-actions">
        <label className="search-field">
          <Search size={16} strokeWidth={2} aria-hidden="true" />
          <input type="search" placeholder="Search transactions…" aria-label="Search transactions" />
        </label>
        <button type="button" className="icon-btn" aria-label="Notifications">
          <Bell size={18} strokeWidth={2} />
        </button>
        <div className="avatar" title="Alex Rivera" aria-label="Account">
          AR
        </div>
      </div>
    </header>
  )
}
