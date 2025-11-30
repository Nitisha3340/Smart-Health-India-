import { Link } from "react-router-dom";
export default function PharmacistDashboard() {
  // Temporary mock data for pharmacies near the pharmacist
  const nearbyPharmacies = [
    {
      id: "PH001",
      name: "Apollo Pharmacy",
      distance: "0.8 km",
      status: "Open",
      medsAvailable: 145,
    },
    {
      id: "PH002",
      name: "MedPlus Pharmacy",
      distance: "1.5 km",
      status: "Open",
      medsAvailable: 210,
    },
    {
      id: "PH003",
      name: "HealthyLife Pharmacy",
      distance: "2.1 km",
      status: "Closed",
      medsAvailable: 98,
    },
  ];

  return (
    <div className="page dashboard-page">
      <div className="dashboard-header">
        <h2>Pharmacist Dashboard</h2>
        <p>
          Verify e-prescriptions, track orders, assist patients, and manage your local
          pharmacy network.
        </p>
      </div>

      {/* GRID */}
      <div className="grid">

        {/* New E-Prescriptions */}
        <div className="card">
          <h3>New E-Prescriptions</h3>
          <ul className="list">
            <li>#RX-1023 • Ananya Singh • Amoxicillin 500mg</li>
            <li>#RX-1024 • Kunal Mehta • Metformin 500mg</li>
          </ul>
        </div>

        {/* Orders */}
        <div className="card">
          <h3>Orders in Progress</h3>
          <p>3 prescriptions are being prepared for pickup / delivery.</p>
          <button className="btn btn-small">View Orders</button>
        </div>

        {/* Medication Database */}
        <div className="card">
          <h3>Medication Information</h3>
          <p>Search drug interactions, alternatives, and patient instructions.</p>
          <button className="btn btn-small">Open Drug Database</button>
        </div>
      </div>

      {/* Nearby Pharmacies Section */}
      <div className="section-header" style={{ marginTop: "40px" }}>
        <h2>Nearby Pharmacies</h2>
        <p>Pharmacies around your location within a 3 km radius</p>
      </div>

      <div className="grid">
        {nearbyPharmacies.map((ph) => (
          <div key={ph.id} className="card">
            <h3>{ph.name}</h3>
            <p className="muted">Distance: {ph.distance}</p>

            <p>
              Status:{" "}
              <strong style={{ color: ph.status === "Open" ? "green" : "red" }}>
                {ph.status}
              </strong>
            </p>

            <p className="muted">
              Medicines Available: <strong>{ph.medsAvailable}</strong>
            </p>

            <Link 
              to={`/pharmacies/${ph.id}`} 
                className="btn btn-small"
               >
                View Pharmacy
              </Link>

          </div>
        ))}
      </div>
    </div>
  );
}
