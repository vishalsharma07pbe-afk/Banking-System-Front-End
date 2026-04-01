const AUTH_STORAGE_KEY = "banking-system-session";

const demoUser = {
  id: "usr_demo_001",
  fullName: "Vishal Sharma",
  email: "vishal@atlasbank.com",
  customerId: "8824517364",
  accountNumber: "427634981205",
  relationshipManager: {
    name: "Ananya Mehta",
    phone: "+91 98765 43210",
    email: "ananya.mehta@atlasbank.com",
  },
};

export function readStoredSession() {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function persistSession(session) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
}

export function clearSession() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function buildDemoSession(credentials) {
  const fullName =
    credentials.fullName ||
    credentials.email?.split("@")[0]?.replace(/\./g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) ||
    demoUser.fullName;

  return {
    token: "mock-session-token",
    user: {
      ...demoUser,
      fullName,
      email: credentials.email,
    },
    rememberMe: credentials.rememberMe,
  };
}
