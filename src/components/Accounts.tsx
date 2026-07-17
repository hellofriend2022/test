import {
  accounts,
  formatCurrency,
  formatPct,
  type Account,
} from '../data/finance'

const typeLabel: Record<Account['type'], string> = {
  checking: 'Checking',
  savings: 'Savings',
  investment: 'Investment',
  credit: 'Credit',
}

export function Accounts() {
  return (
    <section className="panel reveal" aria-labelledby="accounts-heading">
      <div className="panel-head">
        <div>
          <h2 id="accounts-heading">Accounts</h2>
          <p className="panel-sub">Linked balances</p>
        </div>
      </div>

      <ul className="account-list">
        {accounts.map((account) => (
          <li key={account.id} className="account-row">
            <div className="account-info">
              <span className={`account-type type-${account.type}`}>
                {typeLabel[account.type]}
              </span>
              <div>
                <p className="account-name">{account.name}</p>
                <p className="account-inst">{account.institution}</p>
              </div>
            </div>
            <div className="account-figures">
              <p className="account-balance">{formatCurrency(account.balance)}</p>
              <p className={`account-change${account.change30d >= 0 ? ' is-up' : ' is-down'}`}>
                {formatPct(account.change30d)} 30d
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
