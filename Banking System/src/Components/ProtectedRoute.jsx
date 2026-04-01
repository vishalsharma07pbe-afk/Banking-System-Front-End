import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute() {
  const { isAuthenticated, isBooting } = useAuth();
  const location = useLocation();

  if (isBooting) {
    return (
      <main className="empty-card fade-in">
        <div>
          <p className="eyebrow">Securing session</p>
          <h2>Preparing your workspace</h2>
          <p className="muted">Checking saved credentials and restoring your banking dashboard.</p>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
