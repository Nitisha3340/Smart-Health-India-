import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Doctor patient workflow (public)
import DoctorPatientVerify from "./pages/doctor/DoctorPatientVerify";
import DoctorPatientList from "./pages/doctor/DoctorPatientList";

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
import PharmacyDetails from "./pages/pharmacist/PharmacyDetails";
import ManageUsers from "./pages/admin/ManageUsers";

import RoleRoute from "./components/common/RoleRoute";
import AuthGuardMessage from "./components/common/AuthGuardMessage";
import ErrorBoundary from "./components/common/ErrorBoundary";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <ErrorBoundary>

          {/* ALL ROUTES MUST BE INSIDE <Routes> */}
          <Routes>

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Public discovery pages */}
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/pharmacies" element={<PharmacyList />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Profile shortcut: if not logged in, show message; if logged in, go to patient profile */}
            <Route
              path="/profile"
              element={<AuthGuardMessage redirectTo="/patient/profile" />}
            />

            {/* Patient Dashboard */}
            <Route
              path="/patient/dashboard"
              element={
                <RoleRoute allowedRoles={["patient"]}>
                  <PatientDashboard />
                </RoleRoute>
              }
            />

            {/* Pharmacist Dashboard */}
            <Route
              path="/pharmacist/dashboard"
              element={
                <RoleRoute allowedRoles={["pharmacist"]}>
                  <PharmacistDashboard />
                </RoleRoute>
              }
            /><Route path="/pharmacies/:pharmacyId" element={<PharmacyDetails />} />


            {/* Admin Dashboard */}
            <Route
              path="/admin/users"
             element={
               <RoleRoute allowedRoles={["admin"]}>
               <ManageUsers />
               </RoleRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <RoleRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </RoleRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <RoleRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </RoleRoute>
              }
            />


            {/* Doctor Dashboard */}
            <Route path="/doctors" element={<DoctorList />} />

            <Route
              path="/doctor/dashboard"
              element={
                <RoleRoute allowedRoles={["doctor"]}>
                  <DoctorDashboard />
                </RoleRoute>
              }
            />

            {/* -------- NEW DOCTOR PATIENT WORKFLOW (PUBLIC) -------- */}

            {/* Step 1: Doctor enters name + ID */}
            <Route
              path="/doctor/patients/verify"
              element={<DoctorPatientVerify />}
            />

            {/* Step 2: Show only that doctor’s patients */}
            <Route
              path="/doctor/patients/:doctorId"
              element={<DoctorPatientList />}
            />

            {/* -------------------------------------------------------- */}

            {/* Patient Profile */}
            <Route
              path="/patient/profile"
              element={
                <RoleRoute allowedRoles={["patient"]}>
                  <PatientProfile />
                </RoleRoute>
              }
            />

          </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  );
}

export default App;
