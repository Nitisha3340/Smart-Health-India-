const MOCK_HISTORY = {
  consultations: [
    { id: 1, doctor: "Dr. Arjun Rao", date: "2025-11-20", reason: "Chest pain", status: "Completed" },
    { id: 2, doctor: "Dr. Ananya Iyer", date: "2025-10-02", reason: "Skin rash", status: "Completed" },
  ],
  prescriptions: [
    { id: "RX-2025-001", doctor: "Dr. Arjun Rao", date: "2025-11-20", pharmacy: "MediCare Pharmacy", amount: "₹1200" },
    { id: "RX-2025-002", doctor: "Dr. Ananya Iyer", date: "2025-10-02", pharmacy: "City Health Chemists", amount: "₹650" },
  ],
  payments: [
    { id: "PAY-01", to: "MediCare Pharmacy", date: "2025-11-20", amount: "₹1200" },
    { id: "PAY-02", to: "City Health Chemists", date: "2025-10-02", amount: "₹650" },
  ],
};

export default function PatientProfile() {
  return (
    <div className="page">
      <h2>My Profile</h2>
      <p className="muted">
        Review your past consultations, prescriptions and pharmacy payments.
      </p>

      <h3 style={{ marginTop: 20 }}>Past Consultations</h3>
      <div className="card">
        <ul className="list">
          {MOCK_HISTORY.consultations.map((c) => (
            <li key={c.id}>
              {c.date} • {c.doctor} — {c.reason}{" "}
              <span className="status status-upcoming" style={{ marginLeft: 8 }}>
                {c.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <h3 style={{ marginTop: 20 }}>Prescriptions & Pharmacies</h3>
      <div className="card">
        <ul className="list">
          {MOCK_HISTORY.prescriptions.map((p) => (
            <li key={p.id}>
              {p.date} • {p.id} — {p.doctor} → {p.pharmacy} ({p.amount})
            </li>
          ))}
        </ul>
      </div>

      <h3 style={{ marginTop: 20 }}>Payments to Pharmacies</h3>
      <div className="card">
        <ul className="list">
          {MOCK_HISTORY.payments.map((pay) => (
            <li key={pay.id}>
              {pay.date} • {pay.to} — {pay.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
