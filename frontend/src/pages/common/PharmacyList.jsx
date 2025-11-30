import { useState } from "react";

// mock pharmacies with basic inventory
const MOCK_PHARMACIES = [
  { id: 1, name: "MediCare Pharmacy", locality: "Hyderabad", open: "Open till 11 PM", inventory: ["Paracetamol", "Pantoprazole", "Amoxicillin", "Cetrizine"] },
  { id: 2, name: "City Health Chemists", locality: "Hyderabad", open: "24x7", inventory: ["Ibuprofen", "Pantoprazole", "Metformin", "Omeprazole"] },
  { id: 3, name: "CareWell Pharmacy", locality: "Bengaluru", open: "Open till 10 PM", inventory: ["Paracetamol", "Dolo 650", "Azithromycin", "Vitamin C"] },
  { id: 4, name: "HealthPlus Chemists", locality: "Mumbai", open: "Open till 9 PM", inventory: ["Metformin", "Insulin", "Paracetamol", "Atorvastatin"] },
  { id: 5, name: "Wellness Pharmacy", locality: "Pune", open: "24x7", inventory: ["Cetrizine", "Montelukast", "Pantoprazole", "Paracetamol"] },
];

// mock meds from latest e-prescription
const MOCK_E_PRESCRIPTION = {
  id: "RX-2025-001",
  meds: [
    { name: "Paracetamol 650mg", instructions: "1 tablet after food, SOS" },
    { name: "Pantoprazole 40mg", instructions: "1 tablet before breakfast, 5 days" },
  ],
};

const LOCALITIES = ["Hyderabad", "Bengaluru", "Mumbai", "Pune"];

export default function PharmacyList() {
  const [locality, setLocality] = useState("Hyderabad");
  const [query, setQuery] = useState("");
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderItems, setOrderItems] = useState([""]);
  const [orderNote, setOrderNote] = useState("");

  const pharmacies = MOCK_PHARMACIES.filter((p) => p.locality === locality);
  const filteredLocalMock = pharmacies.filter((p) =>
    query.trim() === ""
      ? true
      : p.inventory.some((med) => med.toLowerCase().includes(query.toLowerCase()))
  );

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

        <div className="form-group">
          <label>Search Medicine</label>
          <input
            placeholder="e.g. Paracetamol, Metformin"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* GPS removed for simple frontend-only behavior */}

        <div className="form-group" style={{ alignSelf: "flex-end" }}>
          <button className="btn btn-primary" onClick={() => setOrderOpen(true)}>
            Order Online from Pharmacies
          </button>
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
        {filteredLocalMock.map((ph) => (
          <div key={ph.id} className="card">
            <h3>{ph.name}</h3>
            <p className="muted">{ph.locality}</p>
            <p className="muted">{ph.open}</p>
            {query && (
              <div style={{ marginTop: 8 }}>
                <strong>Matches:</strong>
                <ul className="list">
                  {ph.inventory
                    .filter((med) => med.toLowerCase().includes(query.toLowerCase()))
                    .map((med, idx) => (
                      <li key={idx}>{med}</li>
                    ))}
                </ul>
              </div>
            )}
            <button className="btn btn-primary btn-small">
              Share e-prescription with this store
            </button>
          </div>
        ))}
      </div>

      {orderOpen && (
        <div className="auth-page" style={{ marginTop: 20 }}>
          <div className="auth-card">
            <h2>Order Medicines Online</h2>
            <p className="auth-subtitle">Enter the medicines and optional instructions.</p>
            <div className="auth-form">
              {orderItems.map((item, idx) => (
                <div className="form-group" key={idx}>
                  <label>Medicine #{idx + 1}</label>
                  <input
                    value={item}
                    onChange={(e) => {
                      const next = [...orderItems];
                      next[idx] = e.target.value;
                      setOrderItems(next);
                    }}
                    placeholder="e.g. Paracetamol 650mg"
                  />
                </div>
              ))}
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  className="btn btn-outline btn-small"
                  type="button"
                  onClick={() => setOrderItems((prev) => [...prev, ""])}
                >
                  + Add another medicine
                </button>
                <button
                  className="btn btn-outline btn-small"
                  type="button"
                  onClick={() => setOrderItems((prev) => prev.filter((_, i) => i !== prev.length - 1))}
                  disabled={orderItems.length <= 1}
                >
                  − Remove last
                </button>
              </div>
              <div className="form-group">
                <label>Notes (optional)</label>
                <input
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Delivery address, timing, instructions"
                />
              </div>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  const items = orderItems.map((s) => s.trim()).filter(Boolean);
                  if (items.length === 0) {
                    alert("Please add at least one medicine.");
                    return;
                  }
                  alert(`Order placed for: ${items.join(", ")}\nNotes: ${orderNote || "-"}`);
                  setOrderOpen(false);
                  setOrderItems([""]);
                  setOrderNote("");
                }}
              >
                Place Order
              </button>
              <button
                className="btn btn-outline"
                type="button"
                style={{ marginTop: 8 }}
                onClick={() => setOrderOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
