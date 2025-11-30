import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path ? "navbar-link active" : "navbar-link";

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="brand-logo">+</span>
          <div className="brand-text">
            <span className="brand-title">Smart Health India+</span>
            <span className="brand-subtitle">Virtual Medical Consultations</span>
          </div>
        </Link>

        <nav className="navbar-links">
          <Link className={isActive("/")} to="/">
            Home
          </Link>
          <Link className={isActive("/doctors")} to="/doctors">
            Doctors
          </Link>
          <Link className={isActive("/pharmacies")} to="/pharmacies">
            Pharmacies
          </Link>

          {!user && (
            <>
              <Link className={isActive("/login")} to="/login">
                Login
              </Link>
              <Link className={isActive("/register")} to="/register">
                Register
              </Link>
            </>
          )}

          {user && user.role === "patient" && (
            <>
              <Link
                className={isActive("/patient/dashboard")}
                to="/patient/dashboard"
              >
                Patient
              </Link>
              <Link
                className={isActive("/patient/profile")}
                to="/patient/profile"
              >
                My Profile
              </Link>
            </>
          )}

          {user && user.role === "doctor" && (
            <Link
              className={isActive("/doctor/dashboard")}
              to="/doctor/dashboard"
            >
              Doctor
            </Link>
          )}

          {user && user.role === "pharmacist" && (
            <Link
              className={isActive("/pharmacist/dashboard")}
              to="/pharmacist/dashboard"
            >
              Pharmacist
            </Link>
          )}

          {user && user.role === "admin" && (
            <Link
              className={isActive("/admin/dashboard")}
              to="/admin/dashboard"
            >
              Admin
            </Link>
          )}

          {user && (
            <button
              className="btn btn-small"
              onClick={() => {
                logout();
                navigate("/login");
              }}
              style={{ marginLeft: "8px" }}
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
