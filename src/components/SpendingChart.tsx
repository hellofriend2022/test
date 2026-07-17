import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { formatCurrency, spendingByCategory } from '../data/finance'

function ChartTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number }>
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-label">{payload[0].name}</p>
      <p className="chart-tooltip-value">{formatCurrency(payload[0].value)}</p>
    </div>
  )
}

export function SpendingChart() {
  const total = spendingByCategory.reduce((sum, item) => sum + item.value, 0)

  return (
    <section className="panel reveal" aria-labelledby="spending-heading">
      <div className="panel-head">
        <div>
          <h2 id="spending-heading">Spending</h2>
          <p className="panel-sub">By category this month</p>
        </div>
        <p className="panel-stat">{formatCurrency(total)}</p>
      </div>

      <div className="donut-layout">
        <div className="donut-chart">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={spendingByCategory}
                dataKey="value"
                nameKey="name"
                innerRadius={58}
                outerRadius={82}
                paddingAngle={2}
                stroke="none"
                animationDuration={1000}
              >
                {spendingByCategory.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="legend-list">
          {spendingByCategory.map((item) => (
            <li key={item.name}>
              <span className="legend-swatch" style={{ background: item.color }} />
              <span className="legend-name">{item.name}</span>
              <span className="legend-value">{formatCurrency(item.value)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
