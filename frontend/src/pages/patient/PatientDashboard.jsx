import { Link } from "react-router-dom";

export default function PatientDashboard() {
  return (
    <div className="page dashboard-page">
      <div className="dashboard-header">
        <h2>Patient Dashboard</h2>
        <p>Book consultations, track prescriptions and manage your health journey.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Next Appointment</h3>
          <p>Dr. Neha Sharma • General Physician</p>
          <p className="muted">Today • 7:30 PM • Video consultation</p>
          <span className="status status-upcoming">Upcoming</span>
        </div>

        <div className="card">
          <h3>Book a new consultation</h3>
          <p>Find doctors by speciality and locality, and book a virtual slot.</p>
          <Link to="/doctors" className="btn btn-primary btn-small">
            Find Doctors
          </Link>
        </div>

        <div className="card">
          <h3>My e-prescriptions</h3>
          <p>View prescriptions issued by your doctors and share them with pharmacies.</p>
          <Link to="/pharmacies" className="btn btn-small">
            Use with Pharmacy
          </Link>
        </div>

        <div className="card">
          <h3>My Profile & History</h3>
          <p>See your past consultations, prescriptions and pharmacy payments.</p>
          <Link to="/patient/profile" className="btn btn-small">
            Go to My Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
