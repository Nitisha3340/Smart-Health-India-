import { Link } from "react-router-dom";

export default function AdminDashboard() {
  // ─────────────────────────────────────────────
  // MOCK ANALYTICS
  // ─────────────────────────────────────────────
  const analytics = {
    totalUsers: 1540,
    doctors: 87,
    patients: 1350,
    pharmacists: 32,
    activeConsultations: 42,
    completedToday: 118,
    uptime: "99.98%",
  };

  // Mini weekly bar chart
  const consultationsByDay = [
    { day: "Mon", value: 80 },
    { day: "Tue", value: 95 },
    { day: "Wed", value: 110 },
    { day: "Thu", value: 130 },
    { day: "Fri", value: 150 },
    { day: "Sat", value: 170 },
    { day: "Sun", value: 120 },
  ];

  const maxDaily = Math.max(...consultationsByDay.map((d) => d.value));
  const totalThisWeek = consultationsByDay.reduce((sum, d) => sum + d.value, 0);

  // User role distribution chart
  const roleDistribution = [
    { label: "Patients", value: analytics.patients, color: "#22c55e" },
    { label: "Doctors", value: analytics.doctors, color: "#3b82f6" },
    { label: "Pharmacists", value: analytics.pharmacists, color: "#f97316" },
  ];

  // Detailed consults table
  const weeklyConsultations = [
    {
      id: "C001",
      day: "Mon",
      doctor: "Dr. Raj Kumar",
      patient: "Ananya Singh",
      type: "Video",
      status: "Completed",
    },
    {
      id: "C002",
      day: "Tue",
      doctor: "Dr. Neha Sharma",
      patient: "Rohit Verma",
      type: "Chat",
      status: "Completed",
    },
    {
      id: "C003",
      day: "Wed",
      doctor: "Dr. Ananya Iyer",
      patient: "Kavya Reddy",
      type: "Video",
      status: "In Progress",
    },
    {
      id: "C004",
      day: "Thu",
      doctor: "Dr. Raj Kumar",
      patient: "Aditya Rao",
      type: "Audio",
      status: "Cancelled",
    },
  ];

  return (
    <div className="page dashboard-page">
      {/* HEADER */}
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <p>Manage users, security, and monitor the platform’s performance.</p>
      </div>

      {/* ─────────────────────────────────────────────
           QUICK STATS
      ───────────────────────────────────────────── */}
      <div className="grid">
        <div className="card">
          <h3>Total Users</h3>
          <p className="stat-number">{analytics.totalUsers}</p>
          <p className="muted">Across all roles</p>
        </div>

        <div className="card">
          <h3>Active Consultations</h3>
          <p className="stat-number">{analytics.activeConsultations}</p>
          <p className="muted">Happening right now</p>
        </div>

        <div className="card">
          <h3>System Uptime</h3>
          <p className="stat-number">{analytics.uptime}</p>
          <p className="muted">Past 30 days</p>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
           ADMIN TOOLS
      ───────────────────────────────────────────── */}
      <div className="section-header" style={{ marginTop: 32 }}>
        <h2>Administration Tools</h2>
        <p>Manage platform operations and workflows.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Manage Users</h3>
          <p className="muted">View and manage doctors, patients & pharmacists.</p>
          <ul className="list">
            <li>Doctors: {analytics.doctors}</li>
            <li>Patients: {analytics.patients}</li>
            <li>Pharmacists: {analytics.pharmacists}</li>
          </ul>
          <Link to="/admin/users" className="btn btn-small">
            Open User Manager
          </Link>
        </div>

        <div className="card">
          <h3>Security & Access</h3>
          <p className="muted">Roles, permissions, login logs & data safety.</p>
          <button className="btn btn-small">Open Security Panel</button>
        </div>

        <div className="card">
          <h3>Platform Analytics</h3>
          <p className="muted">Charts, traffic, and consultation insights.</p>
          <a href="#analytics" className="btn btn-small">
            Scroll to Analytics
          </a>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
           ANALYTICS SECTION
      ───────────────────────────────────────────── */}
      <div id="analytics" className="section-header" style={{ marginTop: 40 }}>
        <h2>Platform Analytics</h2>
        <p>Activity & user distribution insights.</p>
      </div>

      <div className="grid">
        {/* Weekly bar mini chart */}
        <div className="card">
          <h3>Consultations This Week</h3>
          <p className="muted">
            Total: <strong>{totalThisWeek}</strong> consultations
          </p>

          <div className="analytics-chart">
            {consultationsByDay.map((item) => (
              <div key={item.day} className="analytics-bar-wrapper">
                <div
                  className="analytics-bar"
                  style={{ height: `${(item.value / maxDaily) * 100}%` }}
                ></div>
                <span className="analytics-bar-label">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Role distribution horizontal bars */}
        <div className="card">
          <h3>User Role Distribution</h3>
          <p className="muted">Breakdown by user type.</p>

          <div className="role-bars">
            {roleDistribution.map((role) => {
              const percentage = Math.round(
                (role.value / analytics.totalUsers) * 100
              );

              return (
                <div key={role.label} className="role-bar-row">
                  <div className="role-bar-label">
                    <span>{role.label}</span>
                    <span className="muted">
                      {role.value} ({percentage}%)
                    </span>
                  </div>

                  <div className="role-bar-track">
                    <div
                      className="role-bar-fill"
                      style={{
                        width: `${percentage}%`,
                        background: role.color,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Daily goal progress */}
        <div className="card">
          <h3>Daily Consultation Goal</h3>
          <p className="muted">
            Target: <strong>200</strong> consultations
          </p>

          <div className="goal-bar-track">
            <div
              className="goal-bar-fill"
              style={{
                width: `${(analytics.completedToday / 200) * 100}%`,
              }}
            ></div>
          </div>

          <p className="muted" style={{ marginTop: 8 }}>
            Completed: <strong>{analytics.completedToday}</strong> / 200
          </p>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
           DETAILED WEEK CONSULTATIONS
      ───────────────────────────────────────────── */}
      <div className="card" style={{ marginTop: 30 }}>
        <h3>Consultations This Week (Details)</h3>
        <p className="muted">Doctor–patient consultation logs for this week.</p>

        <table className="user-table" style={{ marginTop: 12 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Day</th>
              <th>Doctor</th>
              <th>Patient</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {weeklyConsultations.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.day}</td>
                <td>{c.doctor}</td>
                <td>{c.patient}</td>
                <td>{c.type}</td>
                <td
                  style={{
                    color:
                      c.status === "Completed"
                        ? "green"
                        : c.status === "In Progress"
                        ? "#d97706"
                        : "red",
                  }}
                >
                  {c.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ───────────────────────
          INLINE STYLES FOR CHARTS
      ─────────────────────── */}
      <style>{`
        .stat-number { font-size: 24px; font-weight: 700; }

        .analytics-chart {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          height: 150px;
          padding: 8px;
          border-radius: 10px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
        }

        .analytics-bar-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .analytics-bar {
          width: 14px;
          background: linear-gradient(180deg, #3b82f6, #1e40af);
          border-radius: 10px;
        }

        .analytics-bar-label {
          margin-top: 4px;
          font-size: 11px;
          color: #6b7280;
        }

        .role-bars {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .role-bar-row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .role-bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .role-bar-track {
          width: 100%;
          height: 10px;
          background: #f3f4f6;
          border-radius: 10px;
          overflow: hidden;
        }

        .role-bar-fill {
          height: 100%;
          border-radius: 10px;
        }

        .goal-bar-track {
          width: 100%;
          height: 12px;
          border-radius: 10px;
          background: #f3f4f6;
          overflow: hidden;
        }

        .goal-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #15803d);
        }
      `}</style>
    </div>
  );
}
