import { useState } from "react";

// Mock user data
const USERS = [
  {
    id: "U001",
    name: "Ananya Singh",
    role: "patient",
    email: "ananya123@gmail.com",
    lastActive: "Today, 5:30 PM",
  },
  {
    id: "U002",
    name: "Dr. Raj Kumar",
    role: "doctor",
    email: "rajkumar@hospital.com",
    lastActive: "Today, 3:15 PM",
  },
  {
    id: "U003",
    name: "Kunal Mehta",
    role: "patient",
    email: "mehtakunal@gmail.com",
    lastActive: "Yesterday",
  },
  {
    id: "U004",
    name: "MedPlus Pharmacy",
    role: "pharmacist",
    email: "store@medplus.com",
    lastActive: "Today, 1:00 PM",
  },
  {
    id: "U005",
    name: "Dr. Neha Sharma",
    role: "doctor",
    email: "neha@clinic.com",
    lastActive: "Today, 10:45 AM",
  },
];

export default function ManageUsers() {
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  const filteredUsers = USERS.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole = filterRole === "all" || user.role === filterRole;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="page">
      <div className="dashboard-header">
        <h2>Manage Users</h2>
        <p>View, filter, update and remove users across all roles.</p>
      </div>

      {/* Controls */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div className="grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
          {/* Search */}
          <div>
            <label className="muted">Search Users</label>
            <input
              type="text"
              className="form-input"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter dropdown */}
          <div>
            <label className="muted">Filter by Role</label>
            <select
              className="form-input"
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="all">All Users</option>
              <option value="patient">Patients</option>
              <option value="doctor">Doctors</option>
              <option value="pharmacist">Pharmacists</option>
            </select>
          </div>
        </div>
      </div>

      {/* USER LIST TABLE */}
      <div className="card">
        <h3>User List</h3>

        {filteredUsers.length === 0 ? (
          <p className="muted">No users found.</p>
        ) : (
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td style={{ textTransform: "capitalize" }}>{user.role}</td>
                  <td>{user.email}</td>
                  <td>{user.lastActive}</td>
                  <td>
                    <button className="btn btn-small btn-outline">View</button>
                    <button className="btn btn-small btn-outline" style={{ marginLeft: 6 }}>
                      Edit
                    </button>
                    <button
                      className="btn btn-small"
                      style={{
                        marginLeft: 6,
                        background: "red",
                        borderColor: "red",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <style>{`
        .user-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        .user-table th, .user-table td {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          text-align: left;
        }
        .user-table th {
          background: #f9f9f9;
          font-weight: bold;
        }
        .form-input {
          margin-top: 5px;
          width: 100%;
          padding: 8px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
}
