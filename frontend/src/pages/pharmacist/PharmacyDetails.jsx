import { useParams, Link } from "react-router-dom";
import { PHARMACIES } from "../../utils/pharmacyData";

export default function PharmacyDetails() {
  const { pharmacyId } = useParams();

  const pharmacy = PHARMACIES.find((p) => p.id === pharmacyId);

  if (!pharmacy) {
    return (
      <div className="page">
        <div className="card">
          <h3>Pharmacy Not Found</h3>
          <Link to="/pharmacies" className="btn btn-small">
            Back to Pharmacies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="card" style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2>{pharmacy.name}</h2>
        <p className="muted">ID: {pharmacy.id}</p>

        <p><strong>Address:</strong> {pharmacy.address}</p>
        <p><strong>Distance:</strong> {pharmacy.distance}</p>

        <p>
          <strong>Status:</strong>{" "}
          <span style={{ color: pharmacy.status === "Open" ? "green" : "red" }}>
            {pharmacy.status}
          </span>
        </p>

        <p><strong>Phone:</strong> {pharmacy.phone}</p>
        <p><strong>Working Hours:</strong> {pharmacy.openHours}</p>

        <h3 style={{ marginTop: 20 }}>Available Medicines</h3>
        <ul className="list">
          {pharmacy.medsAvailable.map((m, index) => (
            <li key={index}>
              {m.name} — Stock: {m.stock}
            </li>
          ))}
        </ul>

        <button className="btn btn-primary" style={{ marginTop: 15 }}>
          Send E-Prescription
        </button>

        <p style={{ marginTop: 15 }}>
          <Link to="/pharmacies" className="btn btn-small btn-outline">
            ← Back to Pharmacy List
          </Link>
        </p>
      </div>
    </div>
  );
}
