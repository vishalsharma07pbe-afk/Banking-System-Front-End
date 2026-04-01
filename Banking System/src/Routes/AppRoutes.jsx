import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "../Components/AppShell";
import ProtectedRoute from "../Components/ProtectedRoute";
import AccountsPage from "../Pages/AccountsPage";
import LoginPage from "../Pages/LoginPage";
import Dashboard from "../Pages/Dashboard";
import PaymentsPage from "../Pages/PaymentsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AppShell />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default AppRoutes;
