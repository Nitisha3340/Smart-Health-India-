import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page page-home">
      <section className="hero">
        <div className="hero-content">
          <h1>Consult with doctors from anywhere, anytime.</h1>
          <p>
            Smart Health India+ connects patients, doctors, pharmacists, and admins on a single
            secure platform for virtual consultations, e-prescriptions, and medical records.
          </p>

          <div className="hero-cta">
            <Link to="/doctors" className="btn btn-primary">
              Find Doctors Near Me
            </Link>
            <Link to="/pharmacies" className="btn btn-outline">
              Find Pharmacies Near Me
            </Link>
          </div>

          <div className="hero-tags">
            <span className="tag">Virtual OPD</span>
            <span className="tag">E-Prescriptions</span>
            <span className="tag">Lab Reports</span>
            <span className="tag">Secure &amp; Private</span>
          </div>
        </div>

        <div className="hero-card">
          <h3>Next available consultation</h3>
          <p className="hero-slot">Today, 7:30 PM IST</p>
          <p className="hero-doc">Dr. Neha Sharma • General Physician</p>
          <button className="btn btn-primary hero-btn">Book Instant Slot</button>
          <p className="hero-note">No waiting room • Video call • Digital prescription</p>
        </div>
      </section>

      <section className="role-grid">
        <h2>Built for every role in healthcare</h2>
        <div className="grid">
          {/* Patient card */}
          <div className="card card-link">
            <h3>Patients</h3>
            <p>
              Book appointments, consult virtually, access prescriptions and medical history
              from one dashboard.
            </p>
            <Link to="/patient/dashboard" className="btn btn-small">
              Go to Patient Dashboard
            </Link>
          </div>

          {/* Doctor card → goes to doctors list (for discovery) */}
          <div className="card card-link">
            <h3>Doctors</h3>
            <p>
              View doctor network, specialities and slots available for virtual consultations.
            </p>
            <Link to="/doctors" className="btn btn-small">
              Browse Doctors Near Me
            </Link>
          </div>

          {/* Pharmacist card → pharmacies list */}
          <div className="card card-link">
            <h3>Pharmacists</h3>
            <p>
              Find nearby pharmacies that accept e-prescriptions and support online orders.
            </p>
            <Link to="/pharmacies" className="btn btn-small">
              View Nearby Pharmacies
            </Link>
          </div>

          {/* Admin card → admin dashboard */}
          <div className="card card-link">
            <h3>Admins</h3>
            <p>
              Manage platform settings, users, security and monitor Smart Health India+ usage.
            </p>
            <Link to="/admin/dashboard" className="btn btn-small">
              Go to Admin Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
