import { useParams, Link } from "react-router-dom";
import { PHARMACIES } from "../../utils/pharmacyData";
import "./PharmacyDetails.css";

export default function PharmacyDetails() {
  const { pharmacyId } = useParams();
  const pharmacy = PHARMACIES.find((p) => p.id === pharmacyId);

  // If pharmacy doesn’t exist
  if (!pharmacy) {
    return (
      <div className="page pharmacy-details-page">
        <div className="pharmacy-card">
          <h2>Pharmacy Not Found</h2>
          <Link to="/pharmacies" className="back-btn">
            ← Back to Pharmacies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page pharmacy-details-page">
      <div className="pharmacy-card">

        {/* LARGE HEADER */}
        <div className="pharmacy-header">
          <h1>{pharmacy.name}</h1>
          <p className="id-tag">ID: {pharmacy.id}</p>
        </div>

        {/* Details Section */}
        <div className="pharmacy-info">
          <p><strong>📍 Address:</strong> {pharmacy.address}</p>
          <p><strong>📏 Distance:</strong> {pharmacy.distance}</p>

          <p>
            <strong>🟢 Status:</strong>{" "}
            <span className={pharmacy.status === "Open" ? "status-open" : "status-closed"}>
              {pharmacy.status}
            </span>
          </p>

          <p><strong>📞 Phone:</strong> {pharmacy.phone}</p>
          <p><strong>⏰ Hours:</strong> {pharmacy.openHours}</p>
        </div>

        {/* Medicines List */}
        <h2 className="sub-heading">Available Medicines</h2>
        <ul className="medicine-list">
          {pharmacy.medsAvailable.map((m, index) => (
            <li key={index} className="medicine-item">
              <span>{m.name}</span>
              <span className="stock">Stock: {m.stock}</span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <button className="send-btn">Send E-Prescription</button>

        <div className="back-link-container">
          <Link to="/pharmacies" className="back-link">
            ← Back to Pharmacy List
          </Link>
        </div>

      </div>
    </div>
  );
}
