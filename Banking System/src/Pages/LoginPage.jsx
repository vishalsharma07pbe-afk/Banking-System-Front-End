import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import BrandMark from "../Components/BrandMark";
import useAuth from "../hooks/useAuth";

const loginInitialForm = {
  email: "vishal@atlasbank.com",
  password: "secure-demo-pass",
  rememberMe: true,
};

const signupInitialForm = {
  fullName: "Vishal Sharma",
  email: "vishal@atlasbank.com",
  phone: "+91 98765 43210",
  password: "secure-demo-pass",
  rememberMe: true,
};

function EyeIcon({ open }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.6 10.7a2 2 0 0 0 2.7 2.7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.4 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a17.4 17.4 0 0 1-4.1 4.9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.2 6.3C3.8 8 2 12 2 12s3.5 7 10 7c1.4 0 2.7-.3 3.8-.7" />
    </svg>
  );
}

function LoginPage() {
  const { isAuthenticated, login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("login");
  const [loginForm, setLoginForm] = useState(loginInitialForm);
  const [signupForm, setSignupForm] = useState(signupInitialForm);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  if (isAuthenticated) {
    const redirectTo = location.state?.from?.pathname ?? "/dashboard";
    return <Navigate to={redirectTo} replace />;
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    const setter = activeTab === "login" ? setLoginForm : setSignupForm;

    setter((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      if (activeTab === "login") {
        await login(loginForm);
      } else {
        await signup(signupForm);
      }

      const redirectTo = location.state?.from?.pathname ?? "/dashboard";
      navigate(redirectTo, { replace: true });
    } catch (submissionError) {
      setError(submissionError.message || "We could not sign you in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function applyDemoCredentials() {
    setLoginForm(loginInitialForm);
    setSignupForm(signupInitialForm);
    setError("");
  }

  const isLoginMode = activeTab === "login";
  const pageThemeClasses = isLoginMode
    ? {
        page:
          "bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.18),_transparent_32%)]",
        title: "from-white via-sky-100 to-cyan-100",
        badge: "bg-gradient-to-br from-sky-200 via-cyan-300 to-blue-300 shadow-sky-950/25",
        tab: "bg-gradient-to-r from-sky-200 via-cyan-300 to-blue-300 text-slate-950",
        button:
          "bg-gradient-to-r from-sky-200 via-cyan-300 to-blue-300 text-slate-950 shadow-sky-950/25",
        inputFocus: "focus:border-sky-300 focus:ring-4 focus:ring-sky-400/10",
        link: "hover:text-cyan-200",
        checkbox: "accent-sky-400",
        logoRing: "ring-sky-200/40",
      }
    : {
        page:
          "bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.25),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.16),_transparent_32%)]",
        title: "from-white via-violet-100 to-fuchsia-100",
        badge: "bg-gradient-to-br from-violet-200 via-fuchsia-300 to-pink-300 shadow-fuchsia-950/25",
        tab: "bg-gradient-to-r from-violet-200 via-fuchsia-300 to-pink-300 text-slate-950",
        button:
          "bg-gradient-to-r from-violet-200 via-fuchsia-300 to-pink-300 text-slate-950 shadow-fuchsia-950/25",
        inputFocus: "focus:border-violet-300 focus:ring-4 focus:ring-violet-400/10",
        link: "hover:text-fuchsia-200",
        checkbox: "accent-fuchsia-400",
        logoRing: "ring-fuchsia-200/40",
      };

  const submitButtonClass = isLoginMode
    ? "w-full rounded-full px-5 py-3.5 text-sm font-semibold bg-gradient-to-r from-sky-200 via-cyan-300 to-blue-300 text-slate-950 shadow-xl shadow-sky-950/25 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
    : "w-full rounded-full px-5 py-3.5 text-sm font-semibold bg-gradient-to-r from-violet-200 via-fuchsia-300 to-pink-300 text-slate-950 shadow-xl shadow-fuchsia-950/25 transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60";

  return (
    <main className={`auth-page transition-colors duration-500 ${pageThemeClasses.page}`}>
      <section className="auth-hero relative">
        <div className="pointer-events-none absolute inset-x-8 top-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div>
          <p className="eyebrow">Nexora Private Bank</p>
          <h1 className={`max-w-[11ch] bg-gradient-to-r bg-clip-text text-transparent ${pageThemeClasses.title}`}>
            Banking that feels premium from the first tap.
          </h1>
          <p className="max-w-xl text-slate-200/90">
            Choose sign up or log in, then step into a customer dashboard built for
            payments, balances, cards, offers, and daily money movement.
          </p>
        </div>

        <div>
          <div className="hero-grid">
            <article className="hero-stat rounded-3xl border border-white/10 bg-white/8 shadow-xl shadow-slate-950/20">
              <span className="muted">Transfers</span>
              <strong className="text-white">Instant & secure</strong>
            </article>
            <article className="hero-stat rounded-3xl border border-white/10 bg-white/8 shadow-xl shadow-slate-950/20">
              <span className="muted">Cards & loans</span>
              <strong className="text-white">One dashboard</strong>
            </article>
            <article className="hero-stat rounded-3xl border border-white/10 bg-white/8 shadow-xl shadow-sky-950/20">
              <span className="muted">Relationship care</span>
              <strong className="text-white">Manager on call</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="auth-panel">
        <div className="auth-card fade-in border-white/10 bg-slate-950/70 shadow-2xl shadow-slate-950/50">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="eyebrow">Secure access</p>
              <h2 className="mt-4 text-white">Welcome to Nexora Bank</h2>
            </div>
            <div className={`grid h-14 w-14 place-items-center rounded-[20px] shadow-lg ring-1 ${pageThemeClasses.badge} ${pageThemeClasses.logoRing}`}>
              <BrandMark className="h-10 w-10" />
            </div>
          </div>
          <p className="muted mt-3">
            Pick an option below. New users can create an account, and existing users can
            log in directly.
          </p>

          <div className="mt-6 grid grid-cols-2 rounded-full border border-white/10 bg-white/[0.05] p-1">
            <button
              type="button"
              className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                activeTab === "login"
                  ? pageThemeClasses.tab
                  : "text-slate-300 hover:text-white"
              }`}
              onClick={() => {
                setActiveTab("login");
                setError("");
              }}
            >
              Login
            </button>
            <button
              type="button"
              className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                activeTab === "signup"
                  ? pageThemeClasses.tab
                  : "text-slate-300 hover:text-white"
              }`}
              onClick={() => {
                setActiveTab("signup");
                setError("");
              }}
            >
              Sign Up
            </button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {activeTab === "signup" ? (
              <div className="field">
                <label htmlFor="fullName" className="text-slate-200">
                  Full name
                </label>
                <input
                  className={`border-white/10 bg-slate-900/70 text-white placeholder:text-slate-500 ${pageThemeClasses.inputFocus}`}
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={signupForm.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>
            ) : null}

            <div className="field">
              <label htmlFor="email" className="text-slate-200">Work email</label>
              <input
                className={`border-white/10 bg-slate-900/70 text-white placeholder:text-slate-500 ${pageThemeClasses.inputFocus}`}
                id="email"
                name="email"
                type="email"
                value={activeTab === "login" ? loginForm.email : signupForm.email}
                onChange={handleChange}
                placeholder="name@bank.com"
              />
            </div>

            <div className="password-row">
              {activeTab === "signup" ? (
                <div className="field">
                  <label htmlFor="phone" className="text-slate-200">
                    Phone number
                  </label>
                  <input
                    className={`border-white/10 bg-slate-900/70 text-white placeholder:text-slate-500 ${pageThemeClasses.inputFocus}`}
                    id="phone"
                    name="phone"
                    type="tel"
                    value={signupForm.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
              ) : null}

              <div className="field">
                <label htmlFor="password" className="text-slate-200">Password</label>
                <div className="relative">
                  <input
                    className={`border-white/10 bg-slate-900/70 pr-20 text-white placeholder:text-slate-500 ${pageThemeClasses.inputFocus}`}
                    id="password"
                    name="password"
                    type={
                      activeTab === "login"
                        ? showLoginPassword
                          ? "text"
                          : "password"
                        : showSignupPassword
                          ? "text"
                          : "password"
                    }
                    value={activeTab === "login" ? loginForm.password : signupForm.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-slate-300 transition hover:bg-white/10 hover:text-white"
                    onClick={() =>
                      activeTab === "login"
                        ? setShowLoginPassword((current) => !current)
                        : setShowSignupPassword((current) => !current)
                    }
                    aria-label={
                      activeTab === "login"
                        ? showLoginPassword
                          ? "Hide password"
                          : "Show password"
                        : showSignupPassword
                          ? "Hide password"
                          : "Show password"
                    }
                  >
                    <EyeIcon
                      open={
                        activeTab === "login" ? showLoginPassword : showSignupPassword
                      }
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="helper-row">
              <label className="checkbox text-slate-300" htmlFor="rememberMe">
                <input
                  className={pageThemeClasses.checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={activeTab === "login" ? loginForm.rememberMe : signupForm.rememberMe}
                  onChange={handleChange}
                />
                <span>Keep me signed in</span>
              </label>

              <button type="button" className={`ghost-button text-link ${pageThemeClasses.link}`}>
                Forgot access?
              </button>
            </div>

            {error ? <div className="alert alert-error border-rose-400/20 bg-rose-400/10">{error}</div> : null}

            <button
              type="submit"
              className={submitButtonClass}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? activeTab === "login"
                  ? "Logging you in..."
                  : "Creating your account..."
                : activeTab === "login"
                  ? "Login to dashboard"
                  : "Create account"}
            </button>
          </form>

          <div className="quick-access mt-8 border-white/10">
            <p className="muted">Demo mode is active until we connect your backend.</p>
            <button
              type="button"
              className="secondary-button mt-4 border-white/10 bg-white/5 hover:bg-white/10"
              onClick={applyDemoCredentials}
            >
              Fill sample details
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
