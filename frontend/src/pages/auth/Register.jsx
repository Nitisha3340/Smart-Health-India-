import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="page auth-page">
      <div className="auth-card">
        <h2>Create your account</h2>
        <p className="auth-subtitle">
          Join Smart Health India+ and start using virtual consultations in minutes.
        </p>

        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            // later: call API
            window.location.href = "/login";
          }}
        >
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a strong password" required />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select defaultValue="" required>
              <option value="" disabled>
                Select your role
              </option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary auth-btn">
            Register
          </button>
        </form>

        <p className="auth-footer-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}


