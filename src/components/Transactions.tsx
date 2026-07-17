import {
  formatCurrency,
  formatDate,
  transactions,
} from '../data/finance'

export function Transactions() {
  return (
    <section className="panel reveal" aria-labelledby="tx-heading">
      <div className="panel-head">
        <div>
          <h2 id="tx-heading">Recent activity</h2>
          <p className="panel-sub">Latest transactions</p>
        </div>
        <button type="button" className="text-btn">
          View all
        </button>
      </div>

      <div className="table-wrap">
        <table className="tx-table">
          <thead>
            <tr>
              <th scope="col">Merchant</th>
              <th scope="col">Category</th>
              <th scope="col">Account</th>
              <th scope="col">Date</th>
              <th scope="col" className="align-end">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td className="tx-merchant">{tx.merchant}</td>
                <td>
                  <span className="chip">{tx.category}</span>
                </td>
                <td className="muted">{tx.account}</td>
                <td className="muted">{formatDate(tx.date)}</td>
                <td className={`align-end mono${tx.amount > 0 ? ' is-up' : ''}`}>
                  {formatCurrency(tx.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
