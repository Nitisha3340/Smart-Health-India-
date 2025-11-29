// src/pages/doctor/DoctorPatientVerify.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DOCTORS } from "../../utils/mockData";

export default function DoctorPatientVerify() {
  const [name, setName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const match = DOCTORS.find(
      (doc) =>
        doc.id.toLowerCase() === doctorId.trim().toLowerCase() &&
        doc.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (!match) {
      setError("Doctor not found. Please check your name and ID.");
      return;
    }

    // success → go to that doctor's patients list
    navigate(`/doctor/patients/${match.id}`);
  };

  return (
    <div className="page">
      <div className="card" style={{ maxWidth: 450, margin: "20px auto" }}>
        <h2>Verify Doctor Identity</h2>
        <p className="muted">
          Enter your registered name and unique Doctor ID to view your patient list.
        </p>

        <form className="auth-form" onSubmit={handleSubmit} style={{ marginTop: 12 }}>
          <div className="form-group">
            <label>Doctor Name</label>
            <input
              type="text"
              placeholder="e.g. Dr. Raj Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Doctor ID</label>
            <input
              type="text"
              placeholder="e.g. DR1001"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red", fontSize: 13 }}>{error}</p>}

          <button type="submit" className="btn btn-primary auth-btn" style={{ marginTop: 10 }}>
            View My Patients
          </button>
        </form>

        <p className="muted" style={{ fontSize: 12, marginTop: 10 }}>
          Tip: Each doctor has a unique ID (e.g. <strong>DR1001</strong>) mapped to their
          registered profile.
        </p>
      </div>
    </div>
  );
}
