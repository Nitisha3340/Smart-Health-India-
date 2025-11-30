// src/pages/auth/Login.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const role = form.get("role") || "patient"; // default patient

    const userData = {
      name: "Demo User",
      email,
      role,
    };

    login(userData);

    if (role === "patient") navigate("/patient/dashboard");
    if (role === "doctor") navigate("/doctor/dashboard");
    if (role === "pharmacist") navigate("/pharmacist/dashboard");
    if (role === "admin") navigate("/admin/dashboard");
  };

  return (
    <div className="page auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <p className="auth-subtitle">Login to continue to Smart Health India+.</p>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select name="role" required>
              <option value="">Select your role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary auth-btn">
            Login
          </button>
        </form>

        <p className="auth-footer-text">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
