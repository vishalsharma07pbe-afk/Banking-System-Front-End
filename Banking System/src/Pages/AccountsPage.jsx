import { accounts, balances } from "../data/mockBankingData";

function AccountsPage() {
  return (
    <main className="page-grid fade-in">
      <section className="page-header">
        <div>
          <p className="eyebrow">Portfolio coverage</p>
          <h1 className="bg-gradient-to-r from-white via-emerald-100 to-sky-100 bg-clip-text text-transparent">
            Accounts overview
          </h1>
          <p className="muted">
            Monitor business-critical balances, status flags, and account types from one
            place.
          </p>
        </div>
      </section>

      <section className="balance-grid">
        {balances.map((account) => (
          <article
            key={account.accountNumber}
            className="balance-card border-white/8 bg-gradient-to-br from-slate-900/90 to-slate-900/70"
          >
            <p className="card-kicker">{account.name}</p>
            <strong className="text-white">{account.amount}</strong>
            <div className="balance-row">
              <span className="muted">{account.accountNumber}</span>
              <span className={account.change.startsWith("-") ? "negative" : "positive"}>
                {account.change}
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="data-card border-white/8 bg-slate-900/80">
        <div className="section-heading">
          <div>
            <h2 className="text-white">Managed accounts</h2>
            <p>These records will later be sourced from your backend account service.</p>
          </div>
          <span className="pill border-emerald-400/10 bg-emerald-400/10 text-emerald-100">3 active records</span>
        </div>

        <div className="table-stack">
          <div className="table-row table-head">
            <span>Account</span>
            <span>Type</span>
            <span>Status</span>
            <span>Balance</span>
          </div>

          {accounts.map((account) => (
            <div key={account.id} className="table-row rounded-2xl px-3 py-2 transition-colors hover:bg-white/[0.03]">
              <span className="font-medium text-white">{account.name}</span>
              <span className="text-slate-300">{account.type}</span>
              <span>
                <span className={`badge ${account.status === "Healthy" ? "success" : "warning"}`}>
                  {account.status}
                </span>
              </span>
              <strong className="text-white">{account.balance}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AccountsPage;
