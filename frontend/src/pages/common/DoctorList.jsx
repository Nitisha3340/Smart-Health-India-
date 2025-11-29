import { useState } from "react";

// mock data for now
const MOCK_DOCTORS = [
  { id: 1, name: "Dr. Neha Sharma", locality: "Hyderabad", speciality: "General Physician", fee: 500 },
  { id: 2, name: "Dr. Arjun Rao", locality: "Hyderabad", speciality: "Cardiologist", fee: 800 },
  { id: 3, name: "Dr. Ananya Iyer", locality: "Bengaluru", speciality: "Dermatologist", fee: 700 },
  { id: 4, name: "Dr. Rohit Mehta", locality: "Mumbai", speciality: "Orthopedic", fee: 900 },
  { id: 5, name: "Dr. Kavya Menon", locality: "Chennai", speciality: "Pediatrician", fee: 550 },
  { id: 6, name: "Dr. Sameer Kulkarni", locality: "Pune", speciality: "Neurologist", fee: 1200 },
  { id: 7, name: "Dr. Riya Sen", locality: "Kolkata", speciality: "Psychiatrist", fee: 950 },
  { id: 8, name: "Dr. Varun Gupta", locality: "Delhi", speciality: "ENT Specialist", fee: 600 },
];

const LOCALITIES = [
  "All",
  "Hyderabad",
  "Bengaluru",
  "Mumbai",
  "Chennai",
  "Pune",
  "Delhi",
  "Kolkata",
];

const SPECIALITIES = [
  "All",
  "General Physician",
  "Cardiologist",
  "Dermatologist",
  "Orthopedic",
  "Pediatrician",
  "Neurologist",
  "Psychiatrist",
  "ENT Specialist",
];

const FEE_FILTERS = [
  "All",
  "Below ₹500",
  "₹500 - ₹800",
  "Above ₹800",
];

export default function DoctorList() {
  const [locality, setLocality] = useState("All");
  const [speciality, setSpeciality] = useState("All");
  const [search, setSearch] = useState("");
  const [feeFilter, setFeeFilter] = useState("All");

  const filtered = MOCK_DOCTORS
    .filter((doc) => {
      const matchesLoc = locality === "All" || doc.locality === locality;
      const matchesSpec = speciality === "All" || doc.speciality === speciality;
      const matchesSearch =
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.speciality.toLowerCase().includes(search.toLowerCase());

      let matchesFee = true;
      if (feeFilter === "Below ₹500") {
        matchesFee = doc.fee < 500;
      } else if (feeFilter === "₹500 - ₹800") {
        matchesFee = doc.fee >= 500 && doc.fee <= 800;
      } else if (feeFilter === "Above ₹800") {
        matchesFee = doc.fee > 800;
      }

      return matchesLoc && matchesSpec && matchesSearch && matchesFee;
    })
    .sort((a, b) => a.fee - b.fee); // sort by fee low → high

  return (
    <div className="page doctors-page">
      <div className="doctors-header">
        <h2>Doctors near you</h2>
        <p>Select your locality, speciality and fee range to see available doctors.</p>
      </div>

      <div className="filters-row doctors-filters">
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
          <label>Consultation Fee</label>
          <select value={feeFilter} onChange={(e) => setFeeFilter(e.target.value)}>
            {FEE_FILTERS.map((fee) => (
              <option key={fee} value={fee}>
                {fee}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group form-group-search">
          <label>Search</label>
          <input
            placeholder="Search by name or speciality"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid doctor-cards-grid" style={{ marginTop: 16 }}>
        {filtered.map((doc) => (
          <div key={doc.id} className="card doctor-card">
            <h3 className="doctor-name">{doc.name}</h3>
            <p className="doctor-speciality">{doc.speciality}</p>
            <p className="muted doctor-meta">
              {doc.locality} • Consultation Fee: ₹{doc.fee}
            </p>
            <button className="btn btn-primary btn-small doctor-book-btn">
              Book Virtual Consultation
            </button>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="no-results">No doctors found for this filter.</p>
        )}
      </div>
    </div>
  );
}
