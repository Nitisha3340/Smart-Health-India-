import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Home.css";

export default function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  // -------------------------------------
  // Voice Assistant Setup
  // -------------------------------------
  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        const result = event.results[event.results.length - 1][0].transcript;
        setTranscript(result);
      };

      recognition.onend = () => {
        if (isListening) recognition.start();
      };

      recognitionRef.current = recognition;
    } else {
      console.warn("Speech Recognition not supported");
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) stopListening();
    else startListening();
  };

  return (
    <div className="home-page">

      {/* ----------------------- */}
      {/* NAVIGATION BAR */}
      {/* ----------------------- */}
      <div className="home-navbar">
        <div className="home-logo">
          <div className="home-logo-badge">+</div>
          <div>
            <div className="home-logo-text-main">Smart Health India+</div>
            <div className="home-logo-text-sub">Virtual Medical Consultations</div>
          </div>
        </div>

        <div className="home-nav-links">
          <Link to="/" className="home-nav-link home-nav-link-active">Home</Link>
          <Link to="/doctors" className="home-nav-link">Doctors</Link>
          <Link to="/pharmacies" className="home-nav-link">Pharmacies</Link>
          <Link to="/patient" className="home-nav-link">Patient</Link>
          <Link to="/profile" className="home-nav-link">My Profile</Link>

          <button
            className="home-logout-btn"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* ----------------------- */}
      {/* MAIN CONTAINER */}
      {/* ----------------------- */}
      <div className="home-inner">

        {/* --------------------------------------- */}
        {/* HERO SECTION */}
        {/* --------------------------------------- */}
        <div className="hero-section">

          {/* LEFT CONTENT */}
          <div className="hero-left">
            <h1 className="hero-left-heading">
              Healthcare <span>Reimagined</span> for the Digital Age
            </h1>

            <p className="hero-subtitle">
              Connect with trusted doctors, get e-prescriptions and support from the comfort of your home.
            </p>

            <div className="hero-cta-row">
              <Link to="/doctors" className="hero-cta-btn hero-cta-btn-primary">
                🧑‍⚕️ Find Doctors Near Me
              </Link>

              <Link to="/pharmacies" className="hero-cta-btn hero-cta-btn-secondary">
                💊 Find Pharmacies
              </Link>
            </div>

            <div className="hero-pill-list">
              <div className="hero-pill-item">⚡ Instant Consultation</div>
              <div className="hero-pill-item">🔒 Secure & Private</div>
              <div className="hero-pill-item">💳 Affordable Care</div>
            </div>
          </div>

          {/* RIGHT - DOCTOR CARD */}
          <div className="hero-right-card">
            <div className="hero-right-inner">

              <div className="hero-available-text">Available Now</div>

              <div className="hero-doc-main">
                <div className="hero-doc-avatar">👩‍⚕️</div>
                <div>
                  <div className="hero-doc-name">Dr. Neha Sharma</div>
                  <div className="hero-doc-speciality">General Physician</div>
                </div>
              </div>

              <div className="hero-doc-meta">
                ⭐ 4.9  
                <br />
                🕒 Today, 7:30 PM IST  
                <br />
                ~15 min consultation
              </div>

              <button className="hero-book-btn">Book Instant Video Call</button>

              <div className="hero-card-features">
                <div>🎥 Video Call</div>
                <div>📄 E-Prescription</div>
                <div>💬 Chat Support</div>
              </div>

              <div className="hero-next-appointments">
                <strong>Next Appointments</strong>
                Dr. Raj Kumar → Tomorrow, 10 AM
              </div>

              <div className="hero-stats">
                <div>10K+ Patients Served</div>
                <div>500+ Doctors</div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* ROLES SECTION - FLOATING CARDS */}
        {/* ------------------------------------------------ */}
        <div className="roles-section">
          <div className="roles-heading">
            <h2>Built for every role in healthcare</h2>
            <p>Experience seamless healthcare management tailored to your needs</p>
          </div>

          <div className="role-cards-grid">

            {/* PATIENT */}
            <div className="card card-patient">
           <div className="card-icon">👤</div>
           <h3>Patients</h3>
              <p>
              Book appointments, consult virtually, and access prescriptions.
              </p>
             <Link to="/doctor/patients/verify" className="btn btn-small btn-outline">
              Patient Dashboard →
             </Link>

          </div>


            {/* DOCTOR */}
            <div className="role-card role-card--doctor">
              <div className="role-card-content">
                <div className="role-card-icon">🧑‍⚕️</div>
                <h3 className="role-card-title">Doctors</h3>
                <p className="role-card-text">
                  Manage your schedule, specialties, and virtual consultations.
                </p>
                <Link to="/doctors" className="role-card-btn">
                  Browse Doctors Near Me →
                </Link>
              </div>
            </div>

            {/* PHARMACIST */}
            <div className="role-card role-card--pharmacist">
              <div className="role-card-content">
                <div className="role-card-icon">💊</div>
                <h3 className="role-card-title">Pharmacists</h3>
                <p className="role-card-text">
                  Accept e-prescriptions and manage online medicine orders.
                </p>
                <Link to="/pharmacies" className="role-card-btn">
                  View Nearby Pharmacies →
                </Link>
              </div>
            </div>

            {/* ADMIN */}
            <div className="role-card role-card--admin">
              <div className="role-card-content">
                <div className="role-card-icon">⚙️</div>
                <h3 className="role-card-title">Admins</h3>
                <p className="role-card-text">
                  Manage users, security and platform analytics.
                </p>
                <Link to="/admin" className="role-card-btn">
                  Go to Admin Dashboard →
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --------------------------------------- */}
      {/* FLOATING VOICE ASSISTANT BUTTON */}
      {/* --------------------------------------- */}
      <button
        className={`voice-assistant-btn ${isListening ? "listening" : ""}`}
        onClick={toggleListening}
      >
        🎤
      </button>

    </div>
  );
}
