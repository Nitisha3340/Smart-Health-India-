import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common
import Header from "./components/common/Header";
import Home from "./pages/common/Home";
import DoctorList from "./pages/common/DoctorList";
import PharmacyList from "./pages/common/PharmacyList";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Dashboards
import PatientDashboard from "./pages/patient/PatientDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PharmacistDashboard from "./pages/pharmacist/PharmacistDashboard";
import PatientProfile from "./pages/patient/PatientProfile";

import RoleRoute from "./components/common/RoleRoute";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Public lists */}
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/pharmacies" element={<PharmacyList />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Patient */}
            <Route
              path="/patient/dashboard"
              element={
                <RoleRoute allowedRoles={["patient"]}>
                  <PatientDashboard />
                </RoleRoute>
              }
            />
            <Route
              path="/patient/profile"
              element={
                <RoleRoute allowedRoles={["patient"]}>
                  <PatientProfile />
                </RoleRoute>
              }
            />

            {/* Doctor */}
            <Route
              path="/doctor/dashboard"
              element={
                <RoleRoute allowedRoles={["doctor"]}>
                  <DoctorDashboard />
                </RoleRoute>
              }
            />

            {/* Pharmacist */}
            <Route
              path="/pharmacist/dashboard"
              element={
                <RoleRoute allowedRoles={["pharmacist"]}>
                  <PharmacistDashboard />
                </RoleRoute>
              }
            />

            {/* Admin */}
            <Route
              path="/admin/dashboard"
              element={
                <RoleRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </RoleRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
