import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import BrandMark from "./BrandMark";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";

const topNavigation = [
  { label: "Home", path: "/dashboard" },
  { label: "Accounts", path: "/accounts" },
  { label: "Payments", path: "/payments" },
  { label: "Support", path: "/dashboard" },
];

const footerNavigation = [
  { label: "Home", path: "/dashboard", icon: "⌂" },
  { label: "Cards", path: "/accounts", icon: "◫" },
  { label: "Loans", path: "/payments", icon: "◌" },
  { label: "Profile", path: "/dashboard", icon: "☺" },
];

const menuLinks = [
  { label: "Support", detail: "Get instant banking assistance" },
  { label: "Help Center", detail: "Browse FAQs and guides" },
  { label: "Terms & Conditions", detail: "Read policy updates" },
  { label: "Privacy Policy", detail: "Know how your data is used" },
  { label: "Security Tips", detail: "Stay protected online" },
  { label: "Branch Locator", detail: "Find nearby Nexora branches" },
];

function AppShell() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLightTheme = theme === "light";
  const shellClasses = isLightTheme
    ? {
        root: "bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.12),_transparent_26%),linear-gradient(180deg,#eff6ff_0%,#dbeafe_45%,#f8fafc_100%)] text-slate-900",
        header: "border-slate-200/80 bg-white/75",
        navWrap: "border-slate-200/80 bg-white/70",
        navActive: "bg-sky-100 text-sky-900",
        navIdle: "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900",
        hello: "border-slate-200/80 bg-white/70 text-slate-700",
        logout: "border-slate-200/80 bg-white/70 text-slate-700 hover:bg-slate-100",
        footer: "border-slate-200/80 bg-white/80",
        footerActive: "bg-sky-100 text-sky-900",
        footerIdle: "text-slate-500 hover:text-slate-900",
        overlay: "bg-slate-900/25",
        menu: "border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#eef6ff_52%,#f8fafc_100%)] text-slate-900",
        close: "border-slate-200/80 bg-white/80 text-slate-700 hover:bg-slate-100",
        signedCard: "border-slate-200/80 bg-white/75",
        menuButton: "border-slate-200/60 bg-white/70 hover:border-sky-300/40 hover:bg-sky-50",
        menuDetail: "text-slate-500",
        contact: "bg-slate-900 text-white",
        menuLogout: "border-slate-200/80 bg-white text-slate-700 hover:bg-slate-100",
      }
    : {
        root: "bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_26%),linear-gradient(180deg,#07111f_0%,#0d1b34_55%,#060d19_100%)] text-white",
        header: "border-white/10 bg-slate-950/80",
        navWrap: "border-white/10 bg-white/[0.04]",
        navActive: "bg-sky-300/15 text-sky-100",
        navIdle: "text-slate-300 hover:bg-white/5 hover:text-white",
        hello: "border-white/10 bg-white/[0.04] text-slate-300",
        logout: "border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]",
        footer: "border-white/10 bg-slate-950/85",
        footerActive: "bg-sky-300/15 text-sky-100",
        footerIdle: "text-slate-400 hover:text-white",
        overlay: "bg-slate-950/55",
        menu: "border-white/10 bg-[linear-gradient(180deg,#0b1628_0%,#10213f_52%,#0a1324_100%)] text-white",
        close: "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",
        signedCard: "border-white/10 bg-white/[0.04]",
        menuButton: "border-white/8 bg-white/[0.04] hover:border-sky-300/20 hover:bg-white/[0.07]",
        menuDetail: "text-slate-400",
        contact: "bg-white text-slate-950",
        menuLogout: "border-white/10 bg-white/5 text-white hover:bg-white/10",
      };

  function handleLogout() {
    setIsMenuOpen(false);
    logout();
    navigate("/", { replace: true });
  }

  return (
    <div className={`fade-in min-h-screen transition-colors duration-300 ${shellClasses.root}`}>
      <header className={`fixed inset-x-0 top-0 z-40 backdrop-blur-2xl ${shellClasses.header}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-200 via-indigo-300 to-fuchsia-200 text-lg font-black text-slate-950 shadow-lg shadow-sky-950/20 ring-1 ring-white/30 transition hover:scale-[1.03]"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label="Open company menu"
            >
              <BrandMark className="h-8 w-8" />
            </button>
            <div>
              <div className={`text-lg font-semibold tracking-tight ${isLightTheme ? "text-slate-900" : "bg-gradient-to-r from-white via-sky-100 to-fuchsia-100 bg-clip-text text-transparent"}`}>
                Nexora Reserve
              </div>
              <div className={`text-xs uppercase tracking-[0.28em] ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>Private Banking</div>
            </div>
          </div>

          <nav className={`hidden items-center gap-2 rounded-full border px-2 py-2 md:flex ${shellClasses.navWrap}`}>
            {topNavigation.map((item) => (
              <NavLink
                key={`${item.label}-${item.path}`}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive ? shellClasses.navActive : shellClasses.navIdle
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className={`hidden rounded-full border px-4 py-2 text-sm sm:block ${shellClasses.hello}`}>
              Hello, {user?.fullName?.split(" ")[0]}
            </div>
            <button
              type="button"
              className={`rounded-full border px-4 py-2 text-sm transition ${shellClasses.logout}`}
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-28 sm:px-6">
        <Outlet />
      </main>

      <nav className={`fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-2xl ${shellClasses.footer}`}>
        <div className="mx-auto grid max-w-3xl grid-cols-4 gap-2 px-3 py-3">
          {footerNavigation.map((item) => (
            <NavLink
              key={`${item.label}-${item.icon}`}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs font-medium transition ${
                  isActive ? shellClasses.footerActive : shellClasses.footerIdle
                }`
              }
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 transition ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          type="button"
          className={`absolute inset-0 backdrop-blur-sm transition ${shellClasses.overlay} ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close company menu"
        />

        <aside
          className={`absolute left-0 top-0 h-full w-[88%] max-w-sm border-r p-5 shadow-2xl shadow-black/40 transition duration-300 ${shellClasses.menu} ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-200 via-indigo-300 to-fuchsia-200 text-lg font-black text-slate-950 shadow-lg shadow-sky-950/20 ring-1 ring-white/20">
                <BrandMark className="h-9 w-9" />
              </div>
              <div>
                <div className={`text-lg font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>Nexora Reserve</div>
                <div className={`text-xs uppercase tracking-[0.24em] ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>Menu</div>
              </div>
            </div>
            <button
              type="button"
              className={`rounded-full border px-3 py-2 text-sm transition ${shellClasses.close}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Close
            </button>
          </div>

          <div className={`mt-6 rounded-[26px] border p-4 ${shellClasses.signedCard}`}>
            <div className={`text-sm ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>Signed in as</div>
            <div className={`mt-2 text-xl font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>{user?.fullName}</div>
            <div className={`mt-1 text-sm ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>{user?.email}</div>
          </div>

          <div className={`mt-6 rounded-[26px] border p-4 ${shellClasses.signedCard}`}>
            <div className={`text-sm ${isLightTheme ? "text-slate-500" : "text-slate-400"}`}>Theme</div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <div className={`font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>
                  {isLightTheme ? "Light mode" : "Dark mode"}
                </div>
                <div className={`text-sm ${isLightTheme ? "text-slate-600" : "text-slate-300"}`}>
                  Switch colors based on your preference.
                </div>
              </div>
              <button
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${isLightTheme ? "bg-slate-900 text-white" : "bg-white text-slate-950"}`}
                onClick={toggleTheme}
              >
                {isLightTheme ? "Use dark" : "Use light"}
              </button>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {menuLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`w-full rounded-[22px] border px-4 py-4 text-left transition ${shellClasses.menuButton}`}
              >
                <div className={`font-semibold ${isLightTheme ? "text-slate-900" : "text-white"}`}>{item.label}</div>
                <div className={`mt-1 text-sm ${shellClasses.menuDetail}`}>{item.detail}</div>
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className={`rounded-full px-4 py-3 text-sm font-semibold transition hover:scale-[1.02] ${shellClasses.contact}`}>
              Contact us
            </button>
            <button
              type="button"
              className={`rounded-full border px-4 py-3 text-sm font-semibold transition ${shellClasses.menuLogout}`}
              onClick={handleLogout}
            >
              Log out
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default AppShell;
