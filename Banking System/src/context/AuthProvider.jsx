import { useMemo, useState } from "react";
import AuthContext from "./authContext";
import {
  buildDemoSession,
  clearSession,
  persistSession,
  readStoredSession,
} from "./authStorage";

function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readStoredSession());

  const value = useMemo(() => {
    async function login(credentials) {
      await new Promise((resolve) => setTimeout(resolve, 900));

      if (!credentials.email || !credentials.password) {
        throw new Error("Email and password are required.");
      }

      const nextSession = buildDemoSession(credentials);

      setSession(nextSession);
      persistSession(nextSession);

      return nextSession;
    }

    async function signup(details) {
      await new Promise((resolve) => setTimeout(resolve, 1100));

      if (!details.fullName || !details.email || !details.password || !details.phone) {
        throw new Error("Please complete all required sign-up details.");
      }

      const nextSession = buildDemoSession(details);

      setSession(nextSession);
      persistSession(nextSession);

      return nextSession;
    }

    function logout() {
      setSession(null);
      clearSession();
    }

    return {
      session,
      user: session?.user ?? null,
      isAuthenticated: Boolean(session?.token),
      isBooting: false,
      login,
      signup,
      logout,
    };
  }, [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
