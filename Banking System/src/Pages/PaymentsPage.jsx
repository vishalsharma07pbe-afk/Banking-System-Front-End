import { paymentQueue, recentTransactions } from "../data/mockBankingData";

function PaymentsPage() {
  return (
    <main className="page-grid fade-in">
      <section className="page-header">
        <div>
          <p className="eyebrow">Money movement</p>
          <h1 className="bg-gradient-to-r from-white via-emerald-100 to-sky-100 bg-clip-text text-transparent">
            Payments and settlements
          </h1>
          <p className="muted">
            Approvals, outgoing instructions, and completed settlements will live here.
          </p>
        </div>

        <button
          type="button"
          className="primary-button bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-300 text-slate-950 shadow-xl shadow-emerald-950/25"
        >
          New payment
        </button>
      </section>

      <section className="section-grid">
        <article className="data-card border-white/8 bg-slate-900/80">
          <div className="section-heading">
            <div>
              <h2 className="text-white">Approval queue</h2>
              <p>Ready for backend-integrated approval workflows.</p>
            </div>
          </div>

          {paymentQueue.map((payment) => (
            <div key={payment.id} className="transfer-row rounded-2xl px-3 py-2 transition-colors hover:bg-white/[0.03]">
              <div className="list-meta">
                <strong className="text-white">{payment.beneficiary}</strong>
                <span className="list-label">{payment.channel}</span>
              </div>
              <div className="list-meta" style={{ textAlign: "right" }}>
                <strong className="text-white">{payment.amount}</strong>
                <span className="list-label">{payment.urgency}</span>
              </div>
            </div>
          ))}
        </article>

        <article className="data-card border-white/8 bg-slate-900/80">
          <div className="section-heading">
            <div>
              <h2 className="text-white">Settlement feed</h2>
              <p>Recent outcomes and exceptions.</p>
            </div>
          </div>

          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="list-row rounded-2xl px-3 py-2 transition-colors hover:bg-white/[0.03]">
              <div className="list-meta">
                <strong className="text-white">{transaction.title}</strong>
                <span className="list-label">{transaction.meta}</span>
              </div>
              <div className="list-meta" style={{ textAlign: "right" }}>
                <span
                  className={`transaction-amount ${
                    transaction.amount.startsWith("-") ? "negative" : "positive"
                  }`}
                >
                  {transaction.amount}
                </span>
                <span className="list-label">{transaction.status}</span>
              </div>
            </div>
          ))}
        </article>
      </section>
    </main>
  );
}

export default PaymentsPage;
