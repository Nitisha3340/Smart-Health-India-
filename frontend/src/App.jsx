import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Dashboards
import PatientDashboard from "./pages/patient/PatientDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PharmacistDashboard from "./pages/pharmacist/PharmacistDashboard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/pharmacist/dashboard" element={<PharmacistDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

