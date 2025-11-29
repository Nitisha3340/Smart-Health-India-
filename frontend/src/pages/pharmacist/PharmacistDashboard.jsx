export default function PharmacistDashboard() {
  return (
    <div className="page dashboard-page">
      <div className="dashboard-header">
        <h2>Pharmacist Dashboard</h2>
        <p>Verify e-prescriptions, track orders, and assist patients with medication info.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>New E-Prescriptions</h3>
          <ul className="list">
            <li>#RX-1023 • Ananya Singh • Amoxicillin 500mg</li>
            <li>#RX-1024 • Kunal Mehta • Metformin 500mg</li>
          </ul>
        </div>

        <div className="card">
          <h3>Orders in Progress</h3>
          <p>3 prescriptions are being prepared for pickup / delivery.</p>
          <button className="btn btn-small">View Orders</button>
        </div>

        <div className="card">
          <h3>Medication Information</h3>
          <p>Search drug interactions, alternatives and patient instructions.</p>
          <button className="btn btn-small">Open Drug Database</button>
        </div>
      </div>
    </div>
  );
}

