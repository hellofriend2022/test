import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { formatCurrency, netWorthSeries } from '../data/finance'

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip-label">{label}</p>
      <p className="chart-tooltip-value">{formatCurrency(payload[0].value)}</p>
    </div>
  )
}

export function NetWorthChart() {
  return (
    <section className="panel panel-chart reveal" aria-labelledby="networth-heading">
      <div className="panel-head">
        <div>
          <h2 id="networth-heading">Net worth</h2>
          <p className="panel-sub">Seven-month trajectory</p>
        </div>
        <div className="range-pills" role="group" aria-label="Time range">
          <button type="button" className="range-pill is-active">
            6M
          </button>
          <button type="button" className="range-pill">
            1Y
          </button>
          <button type="button" className="range-pill">
            All
          </button>
        </div>
      </div>

      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={netWorthSeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="netWorthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1A8A7D" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#1A8A7D" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(11, 79, 84, 0.08)" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#5A6B6C', fontSize: 12, fontFamily: 'Source Sans 3' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              width={56}
              tickFormatter={(v: number) => formatCurrency(v, true)}
              tick={{ fill: '#5A6B6C', fontSize: 12, fontFamily: 'Source Sans 3' }}
            />
            <Tooltip content={<ChartTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0B4F54"
              strokeWidth={2.5}
              fill="url(#netWorthFill)"
              animationDuration={1200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
