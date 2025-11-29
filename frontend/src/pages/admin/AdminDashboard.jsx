export default function AdminDashboard() {
  return (
    <div className="page dashboard-page">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <p>Monitor platform activity, manage users and ensure data security.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>User Accounts</h3>
          <p>Doctors: 24 • Patients: 320 • Pharmacists: 12</p>
          <button className="btn btn-small">Manage Users</button>
        </div>

        <div className="card">
          <h3>Platform Settings</h3>
          <p>Configure consultation durations, slots, and notification rules.</p>
          <button className="btn btn-small">Open Settings</button>
        </div>

        <div className="card">
          <h3>Security &amp; Logs</h3>
          <p>Review login activity and security alerts.</p>
          <button className="btn btn-small">View Logs</button>
        </div>
      </div>
    </div>
  );
}

