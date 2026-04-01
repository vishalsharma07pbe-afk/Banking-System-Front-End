import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";

const quickActions = [
  "Pay",
  "View History",
  "View Balance",
  "Manage Account",
  "Scan & Pay",
  "Statement",
  "Invest",
];

const products = [
  { name: "Cards", caption: "Manage credit and debit cards" },
  { name: "Deposits", caption: "Track FD and recurring deposits" },
  { name: "Loans", caption: "View EMIs and eligibility" },
  { name: "Invest", caption: "Grow wealth with guided options" },
];

function maskNumber(value) {
  const lastFour = value.slice(-4);
  return `********${lastFour}`;
}

function Dashboard() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <main className="space-y-6">
      <section
        className={`overflow-hidden rounded-[34px] border p-6 shadow-2xl sm:p-8 ${
          isLightTheme
            ? "border-slate-200/70 bg-gradient-to-br from-sky-100 via-white to-indigo-50 shadow-slate-300/40"
            : "border-white/10 bg-gradient-to-br from-sky-400/14 via-indigo-400/10 to-slate-900/90 shadow-slate-950/30"
        }`}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] ${
                isLightTheme
                  ? "border-sky-200 bg-white/80 text-sky-800"
                  : "border-white/10 bg-white/5 text-sky-100"
              }`}
            >
              Hello, {user?.fullName}
            </span>
            <div>
              <h1 className={`text-3xl font-semibold tracking-tight sm:text-5xl ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                Your money, cards, rewards, and support in one place.
              </h1>
              <p className={`mt-3 max-w-2xl text-sm sm:text-base ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>
                Customer ID: {maskNumber(user?.customerId || "0000")} . Account No:
                {" "}
                {maskNumber(user?.accountNumber || "0000")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center">
            <button
              type="button"
              className={`grid h-14 w-14 place-items-center rounded-2xl border text-xl shadow-lg transition ${
                isLightTheme
                  ? "border-slate-200 bg-white/80 text-slate-700 shadow-slate-300/30 hover:bg-white"
                  : "border-white/10 bg-white/[0.08] shadow-slate-950/20 hover:bg-white/[0.12]"
              }`}
            >
              🔔
            </button>
            <button
              type="button"
              className={`grid h-14 w-14 place-items-center rounded-2xl border text-xl shadow-lg transition ${
                isLightTheme
                  ? "border-slate-200 bg-white/80 text-slate-700 shadow-slate-300/30 hover:bg-white"
                  : "border-white/10 bg-white/[0.08] shadow-slate-950/20 hover:bg-white/[0.12]"
              }`}
            >
              ⌁
            </button>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr,0.9fr]">
          <article className={`rounded-[28px] border p-5 backdrop-blur-xl ${isLightTheme ? "border-slate-200/70 bg-white/75" : "border-white/10 bg-slate-950/55"}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={`text-sm ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>Available balance</p>
                <strong className={`mt-2 block text-4xl font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>₹ 8,42,540.28</strong>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${isLightTheme ? "bg-sky-100 text-sky-800" : "bg-sky-300/15 text-sky-100"}`}>
                Active
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className={`rounded-full px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] ${isLightTheme ? "bg-slate-900 text-white" : "bg-white text-slate-950"}`}>
                Manage account
              </button>
              <button className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${isLightTheme ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-50" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`}>
                Statement
              </button>
            </div>
          </article>

          <article className={`rounded-[28px] border p-5 backdrop-blur-xl ${isLightTheme ? "border-slate-200/70 bg-white/75" : "border-white/10 bg-slate-950/55"}`}>
            <p className={`text-sm font-medium ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>Special offers at your fingertips</p>
            <div className={`mt-4 rounded-[22px] p-5 text-slate-950 shadow-xl ${isLightTheme ? "bg-gradient-to-br from-sky-200 via-white to-indigo-200 shadow-slate-300/30" : "bg-gradient-to-br from-sky-200 via-cyan-300 to-indigo-300 shadow-sky-950/25"}`}>
              <div className="text-xs uppercase tracking-[0.24em]">Pre-approved</div>
              <div className="mt-2 text-2xl font-bold">Credit line up to ₹ 5L</div>
              <p className="mt-2 text-sm text-slate-900/80">Instant approval with exclusive customer pricing.</p>
            </div>
          </article>
        </div>
      </section>

      <section className={`rounded-[30px] border p-5 shadow-2xl ${isLightTheme ? "border-slate-200/70 bg-white/75 shadow-slate-300/30" : "border-white/10 bg-slate-950/65 shadow-slate-950/20"}`}>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className={`text-2xl font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>Frequently used features</h2>
            <p className={`mt-1 text-sm ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>Pay, view history, view balance, and more in one tap.</p>
          </div>
          <button className={`rounded-full border px-4 py-2 text-sm transition ${isLightTheme ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-50" : "border-white/10 bg-white/5 text-white hover:border-sky-300/20 hover:bg-white/10"}`}>
            Scan QR code
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-7">
          {quickActions.map((action) => (
            <button
              key={action}
              type="button"
              className={`rounded-[24px] border px-4 py-5 text-sm font-semibold transition hover:-translate-y-0.5 ${
                isLightTheme
                  ? "border-slate-200 bg-white text-slate-800 hover:border-sky-300 hover:bg-sky-50"
                  : "border-white/10 bg-gradient-to-br from-white/[0.07] to-slate-900/70 text-white hover:border-sky-300/20 hover:bg-white/[0.08]"
              }`}
            >
              {action}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <article className={`rounded-[30px] border p-5 shadow-2xl ${isLightTheme ? "border-slate-200/70 bg-white/75 shadow-slate-300/30" : "border-white/10 bg-slate-950/65 shadow-slate-950/20"}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className={`text-2xl font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>Account snapshot</h2>
              <p className={`mt-1 text-sm ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>Masked details for your security.</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${isLightTheme ? "bg-indigo-100 text-indigo-800" : "bg-sky-300/10 text-sky-100"}`}>
              Savings
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className={`rounded-[24px] border p-4 ${isLightTheme ? "border-slate-200 bg-white" : "border-white/8 bg-white/[0.04]"}`}>
              <div className={`text-sm ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>Customer ID</div>
              <div className={`mt-2 text-xl font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                {maskNumber(user?.customerId || "0000")}
              </div>
            </div>
            <div className={`rounded-[24px] border p-4 ${isLightTheme ? "border-slate-200 bg-white" : "border-white/8 bg-white/[0.04]"}`}>
              <div className={`text-sm ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>Account number</div>
              <div className={`mt-2 text-xl font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                {maskNumber(user?.accountNumber || "0000")}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button className={`rounded-[22px] border px-4 py-4 text-left transition ${isLightTheme ? "border-slate-200 bg-white text-slate-900 hover:bg-slate-50" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`}>
                <div className={`text-xs uppercase tracking-[0.22em] ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>Service</div>
                <div className="mt-2 font-semibold">Manage account</div>
              </button>
              <button className={`rounded-[22px] border px-4 py-4 text-left transition ${isLightTheme ? "border-slate-200 bg-white text-slate-900 hover:bg-slate-50" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`}>
                <div className={`text-xs uppercase tracking-[0.22em] ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>Documents</div>
                <div className="mt-2 font-semibold">Statement</div>
              </button>
            </div>
          </div>
        </article>

        <article className={`rounded-[30px] border p-5 shadow-2xl ${isLightTheme ? "border-slate-200/70 bg-white/75 shadow-slate-300/30" : "border-white/10 bg-slate-950/65 shadow-slate-950/20"}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className={`text-2xl font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>Special offers</h2>
              <p className={`mt-1 text-sm ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>Recommended products and benefits.</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-medium ${isLightTheme ? "bg-sky-100 text-sky-800" : "bg-sky-300/10 text-sky-100"}`}>
              New
            </span>
          </div>
          <div className="mt-6 grid gap-3">
            {products.map((product) => (
              <div
                key={product.name}
                className={`rounded-[24px] border p-4 ${isLightTheme ? "border-slate-200 bg-white" : "border-white/8 bg-gradient-to-br from-white/[0.06] to-slate-900/75"}`}
              >
                <div className={`text-lg font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>{product.name}</div>
                <p className={`mt-1 text-sm ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>{product.caption}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
        <article className={`rounded-[30px] border p-5 shadow-2xl ${isLightTheme ? "border-slate-200/70 bg-white/75 shadow-slate-300/30" : "border-white/10 bg-slate-950/65 shadow-slate-950/20"}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className={`text-2xl font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>Banking products</h2>
              <p className={`mt-1 text-sm ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>Cards, deposits, loans, and investments at a glance.</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {products.map((product) => (
              <button
                key={`${product.name}-tile`}
                type="button"
                className={`rounded-[24px] border px-4 py-5 text-left transition ${isLightTheme ? "border-slate-200 bg-white hover:bg-slate-50" : "border-white/8 bg-white/[0.04] hover:bg-white/[0.07]"}`}
              >
                <div className={`text-lg font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>{product.name}</div>
                <div className={`mt-2 text-sm ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>{product.caption}</div>
              </button>
            ))}
          </div>
        </article>

        <article className={`rounded-[30px] border p-5 shadow-2xl ${isLightTheme ? "border-slate-200/70 bg-white/75 shadow-slate-300/30" : "border-white/10 bg-slate-950/65 shadow-slate-950/20"}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className={`text-2xl font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>Relationship manager</h2>
              <p className={`mt-1 text-sm ${isLightTheme ? "text-slate-600" : "text-slate-400"}`}>Dedicated help whenever you need it.</p>
            </div>
          </div>
          <div className={`mt-6 rounded-[26px] p-5 ${isLightTheme ? "bg-gradient-to-br from-sky-100 via-white to-indigo-100" : "bg-gradient-to-br from-sky-300/15 via-indigo-300/10 to-white/[0.03]"}`}>
            <div className="flex items-center gap-4">
              <div className={`grid h-16 w-16 place-items-center rounded-full text-xl font-bold ${isLightTheme ? "bg-slate-900 text-white" : "bg-white text-slate-950"}`}>
                {user?.relationshipManager?.name?.slice(0, 1) || "A"}
              </div>
              <div>
                <div className={`text-lg font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>{user?.relationshipManager?.name}</div>
                <div className={`text-sm ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>Senior Relationship Manager</div>
              </div>
            </div>
            <div className={`mt-6 space-y-3 text-sm ${isLightTheme ? "text-slate-700" : "text-slate-300"}`}>
              <div>Phone: {user?.relationshipManager?.phone}</div>
              <div>Email: {user?.relationshipManager?.email}</div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className={`rounded-full px-4 py-3 text-sm font-semibold transition hover:scale-[1.02] ${isLightTheme ? "bg-slate-900 text-white" : "bg-white text-slate-950"}`}>
                Call
              </button>
              <button className={`rounded-full border px-4 py-3 text-sm font-semibold transition ${isLightTheme ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-50" : "border-white/10 bg-white/5 text-white hover:bg-white/10"}`}>
                Email
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Dashboard;
