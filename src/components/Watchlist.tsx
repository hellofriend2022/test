import { formatCurrency, formatPct, watchlist } from '../data/finance'

export function Watchlist() {
  return (
    <section className="panel reveal" aria-labelledby="watch-heading">
      <div className="panel-head">
        <div>
          <h2 id="watch-heading">Watchlist</h2>
          <p className="panel-sub">Holdings snapshot</p>
        </div>
      </div>

      <ul className="watch-list">
        {watchlist.map((item) => (
          <li key={item.symbol} className="watch-row">
            <div className="watch-symbol">
              <span className="symbol-badge">{item.symbol}</span>
              <div>
                <p className="watch-name">{item.name}</p>
                <p className="watch-alloc">{item.allocation}% of portfolio</p>
              </div>
            </div>
            <div className="watch-figures">
              <p className="mono">{formatCurrency(item.price)}</p>
              <p className={item.changePct >= 0 ? 'is-up' : 'is-down'}>
                {formatPct(item.changePct)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
