import { useState } from "react";

// mock pharmacies
const MOCK_PHARMACIES = [
  { id: 1, name: "MediCare Pharmacy", locality: "Hyderabad", open: "Open till 11 PM" },
  { id: 2, name: "City Health Chemists", locality: "Hyderabad", open: "24x7" },
  { id: 3, name: "CareWell Pharmacy", locality: "Bengaluru", open: "Open till 10 PM" },
];

// mock meds from latest e-prescription
const MOCK_E_PRESCRIPTION = {
  id: "RX-2025-001",
  meds: [
    { name: "Paracetamol 650mg", instructions: "1 tablet after food, SOS" },
    { name: "Pantoprazole 40mg", instructions: "1 tablet before breakfast, 5 days" },
  ],
};

const LOCALITIES = ["Hyderabad", "Bengaluru"];

export default function PharmacyList() {
  const [locality, setLocality] = useState("Hyderabad");

  const pharmacies = MOCK_PHARMACIES.filter((p) => p.locality === locality);

  return (
    <div className="page">
      <h2>Pharmacies near you</h2>
      <p>Find medical stores that can fulfill your e-prescriptions.</p>

      <div className="filters-row">
        <div className="form-group">
          <label>Locality</label>
          <select value={locality} onChange={(e) => setLocality(e.target.value)}>
            {LOCALITIES.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <h3 style={{ marginTop: 20 }}>Your latest e-prescription</h3>
      <div className="card">
        <p>
          <strong>ID:</strong> {MOCK_E_PRESCRIPTION.id}
        </p>
        <ul className="list">
          {MOCK_E_PRESCRIPTION.meds.map((med, idx) => (
            <li key={idx}>
              {med.name} — <span className="muted">{med.instructions}</span>
            </li>
          ))}
        </ul>
      </div>

      <h3 style={{ marginTop: 20 }}>Nearby pharmacies</h3>
      <div className="grid">
        {pharmacies.map((ph) => (
          <div key={ph.id} className="card">
            <h3>{ph.name}</h3>
            <p className="muted">{ph.locality}</p>
            <p className="muted">{ph.open}</p>
            <button className="btn btn-primary btn-small">
              Share e-prescription with this store
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
