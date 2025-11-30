import { useState } from "react";
import "./DoctorList.css";

const DOCTORS = [
  {
    id: 1,
    name: "Dr. Neha Sharma",
    speciality: "General Physician",
    locality: "Hyderabad",
    fee: 500,
  },
  {
    id: 2,
    name: "Dr. Kavya Menon",
    speciality: "Pediatrician",
    locality: "Chennai",
    fee: 550,
  },
  {
    id: 3,
    name: "Dr. Varun Gupta",
    speciality: "ENT Specialist",
    locality: "Delhi",
    fee: 600,
  },
  {
    id: 4,
    name: "Dr. Ananya Iyer",
    speciality: "Dermatologist",
    locality: "Bengaluru",
    fee: 700,
  },
  {
    id: 5,
    name: "Dr. Arjun Rao",
    speciality: "Cardiologist",
    locality: "Hyderabad",
    fee: 800,
  },
  {
    id: 6,
    name: "Dr. Rohit Mehta",
    speciality: "Orthopedic",
    locality: "Mumbai",
    fee: 900,
  },
  {
    id: 7,
    name: "Dr. Riya Sen",
    speciality: "Psychiatrist",
    locality: "Kolkata",
    fee: 950,
  },
  {
    id: 8,
    name: "Dr. Sameer Kulkarni",
    speciality: "Neurologist",
    locality: "Pune",
    fee: 1200,
  },
];

const LOCALITIES = ["All", "Hyderabad", "Chennai", "Delhi", "Bengaluru", "Mumbai", "Kolkata", "Pune"];
const SPECIALITIES = [
  "All",
  "General Physician",
  "Pediatrician",
  "ENT Specialist",
  "Dermatologist",
  "Cardiologist",
  "Orthopedic",
  "Psychiatrist",
  "Neurologist",
];
const FEE_RANGES = [
  { label: "All", value: "all" },
  { label: "₹500 - ₹700", value: "500-700" },
  { label: "₹700 - ₹1000", value: "700-1000" },
  { label: "Above ₹1000", value: "1000+" },
];

export default function DoctorList() {
  const [locality, setLocality] = useState("All");
  const [speciality, setSpeciality] = useState("All");
  const [feeRange, setFeeRange] = useState("all");
  const [search, setSearch] = useState("");

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesLocality = locality === "All" || doc.locality === locality;
    const matchesSpeciality = speciality === "All" || doc.speciality === speciality;

    let matchesFee = true;
    if (feeRange === "500-700") {
      matchesFee = doc.fee >= 500 && doc.fee <= 700;
    } else if (feeRange === "700-1000") {
      matchesFee = doc.fee >= 700 && doc.fee <= 1000;
    } else if (feeRange === "1000+") {
      matchesFee = doc.fee > 1000;
    }

    const lower = search.toLowerCase();
    const matchesSearch =
      !lower ||
      doc.name.toLowerCase().includes(lower) ||
      doc.speciality.toLowerCase().includes(lower) ||
      doc.locality.toLowerCase().includes(lower);

    return matchesLocality && matchesSpeciality && matchesFee && matchesSearch;
  });

  return (
    <div className="page page-doctors">
      <div className="doctors-container">
        <header className="doctors-header">
          <h1>Doctors near you</h1>
          <p>Select your locality, speciality and consultation fee to find the right doctor.</p>
        </header>

        {/* Filters stacked vertically */}
        <section className="doctor-filters card">
          <div className="filter-item">
            <label>Locality</label>
            <select
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            >
              {LOCALITIES.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label>Speciality</label>
            <select
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            >
              {SPECIALITIES.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label>Consultation Fee</label>
            <select
              value={feeRange}
              onChange={(e) => setFeeRange(e.target.value)}
            >
              {FEE_RANGES.map((fee) => (
                <option key={fee.value} value={fee.value}>
                  {fee.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search by name, speciality, or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        {/* Doctor cards with floating shadow */}
        <section className="doctor-list">
          {filteredDoctors.length === 0 ? (
            <p className="muted">No doctors found for the selected filters.</p>
          ) : (
            <div className="doctor-grid">
              {filteredDoctors.map((doc) => (
                <article key={doc.id} className="doctor-card">
                  <div className="doctor-card-header">
                    <h3>{doc.name}</h3>
                    <span className="doctor-speciality">{doc.speciality}</span>
                  </div>
                  <p className="doctor-location">
                    {doc.locality} • Consultation Fee: ₹{doc.fee}
                  </p>
                  <p className="doctor-subtext">
                    Available for secure virtual consultations via video, audio, or chat.
                  </p>
                  <button className="doctor-book-btn">
                    Book Virtual Consultation
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
