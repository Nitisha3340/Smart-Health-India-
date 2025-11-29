// src/pages/doctor/DoctorPatientList.jsx
import { useParams } from "react-router-dom";
import { DOCTORS, PATIENTS } from "../../utils/mockData";
import { useState } from "react";

export default function DoctorPatientList() {
  const { doctorId } = useParams();
  const doctor = DOCTORS.find((d) => d.id === doctorId);
  const patients = PATIENTS.filter((p) => p.doctorId === doctorId);
  const [expandedPatientId, setExpandedPatientId] = useState(null);

  if (!doctor) {
    return (
      <div className="page">
        <p>Doctor not found. Please go back and verify again.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>{doctor.name}&apos;s Patients</h2>
      <p className="muted">
        Speciality: {doctor.speciality} • ID: {doctor.id} • City: {doctor.city}
      </p>

      {patients.length === 0 && (
        <p style={{ marginTop: 16 }}>No patients registered for this doctor yet.</p>
      )}

      <div className="grid" style={{ marginTop: 16 }}>
        {patients.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p className="muted">Patient ID: {p.id}</p>
            <p className="muted">Last consultation: {p.lastConsultation}</p>
            <p className="muted">
              Total consultations with {doctor.name}: <strong>{p.totalConsultations}</strong>
            </p>
            <p className="muted">
              Next slot: <strong>{p.nextSlot}</strong>
            </p>

            <button
              className="btn btn-small btn-outline"
              style={{ marginTop: 8 }}
              onClick={() =>
                setExpandedPatientId((prev) => (prev === p.id ? null : p.id))
              }
            >
              {expandedPatientId === p.id
                ? "Hide e-prescriptions"
                : "View e-prescriptions"}
            </button>

            {expandedPatientId === p.id && (
              <div className="card" style={{ marginTop: 10, padding: 10 }}>
                <h4 style={{ marginTop: 0, marginBottom: 6 }}>Past e-prescriptions</h4>
                <ul className="list">
                  {p.prescriptions.map((rx) => (
                    <li key={rx.id}>
                      {rx.date} • {rx.id} — {rx.summary}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
