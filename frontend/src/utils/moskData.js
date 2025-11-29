// src/utils/mockData.js

// Doctor directory – IDs are unique per doctor
export const DOCTORS = [
  { id: "DR1001", name: "Dr. Raj Kumar", speciality: "Cardiologist", city: "Hyderabad" },
  { id: "DR1002", name: "Dr. Neha Sharma", speciality: "General Physician", city: "Hyderabad" },
  { id: "DR1003", name: "Dr. Ananya Iyer", speciality: "Dermatologist", city: "Bengaluru" },
];

// Patients that have consulted with doctors above
export const PATIENTS = [
  {
    id: "PT001",
    name: "Ananya Singh",
    doctorId: "DR1001",
    lastConsultation: "2025-11-29 10:30 AM",
    totalConsultations: 3,
    nextSlot: "Tomorrow, 10:00 AM",
    prescriptions: [
      { id: "RX-2025-001", date: "2025-11-15", summary: "Chest pain, ECG done, beta blockers" },
      { id: "RX-2025-004", date: "2025-11-27", summary: "Follow-up, dosage adjustment" },
    ],
  },
  {
    id: "PT002",
    name: "Rohit Verma",
    doctorId: "DR1001",
    lastConsultation: "2025-11-20 06:00 PM",
    totalConsultations: 1,
    nextSlot: "Today, 7:30 PM",
    prescriptions: [
      { id: "RX-2025-007", date: "2025-11-20", summary: "Hypertension, lifestyle change + meds" },
    ],
  },
  {
    id: "PT003",
    name: "Kavya Reddy",
    doctorId: "DR1002",
    lastConsultation: "2025-11-18 11:00 AM",
    totalConsultations: 2,
    nextSlot: "No upcoming slot",
    prescriptions: [
      { id: "RX-2025-008", date: "2025-11-10", summary: "Fever & cold – symptomatic treatment" },
    ],
  },
];
