import React from "react";

export default function DoctorDashboard() {
  return (
    <div className="page dashboard-page">
      <div className="dashboard-header">
        <h2>Doctor Dashboard</h2>
        <p>Manage your consultations, e-prescriptions and patient records.</p>
      </div>

      <div className="grid">
        {/* Today’s consultations */}
        <div className="card">
          <h3>Today&apos;s Consultations</h3>
          <ul className="list">
            <li>7:30 PM • Ananya Singh • Follow-up</li>
            <li>8:00 PM • Rohit Verma • New consultation</li>
          </ul>
          <button className="btn btn-primary btn-small">
            Open Consultation View
          </button>
        </div>

        {/* E-prescription workspace */}
        <div className="card">
          <h3>Write E-Prescription</h3>
          <p>Select a completed appointment and issue a digital prescription.</p>
          <button className="btn btn-small">
            Open Prescription Workspace
          </button>
        </div>

        {/* Patient records */}
        <div className="card">
          <h3>Patient Records</h3>
          <p>Review medical histories, past prescriptions and lab reports.</p>
          <button className="btn btn-small">
            View Patient Records
          </button>
        </div>
      </div>
    </div>
  );
}
