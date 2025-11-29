import { useState } from "react";

// mock data for now
const MOCK_DOCTORS = [
  { id: 1, name: "Dr. Neha Sharma", locality: "Hyderabad", speciality: "General Physician", fee: "₹500" },
  { id: 2, name: "Dr. Arjun Rao", locality: "Hyderabad", speciality: "Cardiologist", fee: "₹800" },
  { id: 3, name: "Dr. Ananya Iyer", locality: "Bengaluru", speciality: "Dermatologist", fee: "₹700" },
  { id: 4, name: "Dr. Rohit Mehta", locality: "Mumbai", speciality: "Orthopedic", fee: "₹900" },
];

const LOCALITIES = ["Hyderabad", "Bengaluru", "Mumbai"];
const SPECIALITIES = ["All", "General Physician", "Cardiologist", "Dermatologist", "Orthopedic"];

export default function DoctorList() {
  const [locality, setLocality] = useState("Hyderabad");
  const [speciality, setSpeciality] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = MOCK_DOCTORS.filter((doc) => {
    const matchesLoc = doc.locality === locality;
    const matchesSpec = speciality === "All" || doc.speciality === speciality;
    const matchesSearch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(search.toLowerCase());
    return matchesLoc && matchesSpec && matchesSearch;
  });

  return (
    <div className="page">
      <h2>Doctors near you</h2>
      <p>Select your locality and speciality to see available doctors.</p>

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
          <label>Speciality</label>
          <select value={speciality} onChange={(e) => setSpeciality(e.target.value)}>
            {SPECIALITIES.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Search</label>
          <input
            placeholder="Search by name or speciality"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid" style={{ marginTop: 16 }}>
        {filtered.map((doc) => (
          <div key={doc.id} className="card">
            <h3>{doc.name}</h3>
            <p>{doc.speciality}</p>
            <p className="muted">
              {doc.locality} • Consultation Fee: {doc.fee}
            </p>
            <button className="btn btn-primary btn-small">Book Virtual Consultation</button>
          </div>
        ))}
        {filtered.length === 0 && <p>No doctors found for this filter.</p>}
      </div>
    </div>
  );
}
