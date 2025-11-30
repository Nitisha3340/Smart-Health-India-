import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function AuthGuardMessage({ redirectTo = "/" }) {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Login Required</h2>
        <p className="auth-subtitle">Please log in to access this page.</p>
        <div style={{ display: "flex", gap: 8 }}>
          <Link to="/login" className="btn btn-primary">Go to Login</Link>
          <Link to="/register" className="btn btn-outline">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
