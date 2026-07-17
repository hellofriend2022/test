import { assetAllocation } from '../data/finance'

export function AssetAllocation() {
  return (
    <section className="panel reveal" aria-labelledby="allocation-heading">
      <div className="panel-head">
        <div>
          <h2 id="allocation-heading">Allocation</h2>
          <p className="panel-sub">Portfolio mix</p>
        </div>
      </div>

      <ul className="allocation-list">
        {assetAllocation.map((asset, index) => (
          <li key={asset.name} style={{ animationDelay: `${index * 60}ms` }}>
            <div className="allocation-meta">
              <span>{asset.name}</span>
              <span>{asset.value}%</span>
            </div>
            <div className="allocation-track" aria-hidden="true">
              <div
                className="allocation-fill"
                style={{ width: `${asset.value}%`, animationDelay: `${200 + index * 80}ms` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
