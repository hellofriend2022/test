import { TrendingUp, TrendingDown, Wallet, PiggyBank } from 'lucide-react'
import { formatCurrency, formatPct, kpis } from '../data/finance'

const cards = [
  {
    id: 'networth',
    label: 'Net worth',
    value: formatCurrency(kpis.netWorth),
    delta: formatPct(kpis.netWorthChange),
    positive: kpis.netWorthChange >= 0,
    icon: Wallet,
    note: 'vs last month',
  },
  {
    id: 'income',
    label: 'Monthly income',
    value: formatCurrency(kpis.monthlyIncome),
    delta: '+2.4%',
    positive: true,
    icon: TrendingUp,
    note: 'this period',
  },
  {
    id: 'expenses',
    label: 'Monthly expenses',
    value: formatCurrency(kpis.monthlyExpenses),
    delta: '-3.1%',
    positive: true,
    icon: TrendingDown,
    note: 'under budget',
  },
  {
    id: 'savings',
    label: 'Savings rate',
    value: `${kpis.savingsRate}%`,
    delta: '+1.8 pts',
    positive: true,
    icon: PiggyBank,
    note: 'target 40%',
  },
]

export function KpiCards() {
  return (
    <section className="kpi-grid" aria-label="Key metrics">
      {cards.map((card, index) => {
        const Icon = card.icon
        return (
          <article
            key={card.id}
            className="kpi-card"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="kpi-top">
              <span className="kpi-label">{card.label}</span>
              <span className="kpi-icon" aria-hidden="true">
                <Icon size={16} strokeWidth={2} />
              </span>
            </div>
            <p className="kpi-value">{card.value}</p>
            <p className={`kpi-delta${card.positive ? ' is-up' : ' is-down'}`}>
              {card.delta}
              <span className="kpi-note">{card.note}</span>
            </p>
          </article>
        )
      })}
    </section>
  )
}
