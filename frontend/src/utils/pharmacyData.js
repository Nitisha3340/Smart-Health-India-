export const PHARMACIES = [
  {
    id: "PH001",
    name: "Apollo Pharmacy",
    distance: "0.8 km",
    status: "Open",
    address: "Road No. 12, Banjara Hills, Hyderabad",
    phone: "+91 98765 43210",
    openHours: "8:00 AM - 10:00 PM",
    medsAvailable: [
      { name: "Amoxicillin 500mg", stock: 12 },
      { name: "Azithromycin 250mg", stock: 20 },
      { name: "Metformin 500mg", stock: 18 },
      { name: "Paracetamol 650mg", stock: 35 },
    ],
  },
  {
    id: "PH002",
    name: "MedPlus Pharmacy",
    distance: "1.5 km",
    status: "Open",
    address: "Kukatpally Main Road, Hyderabad",
    phone: "+91 99887 66554",
    openHours: "24/7",
    medsAvailable: [
      { name: "Cetrizine 10mg", stock: 40 },
      { name: "Vitamin D3 60k", stock: 15 },
      { name: "Ibuprofen 400mg", stock: 10 },
    ],
  },
  {
    id: "PH003",
    name: "HealthyLife Pharmacy",
    distance: "2.1 km",
    status: "Closed",
    address: "Whitefield, Bengaluru",
    phone: "+91 90909 30303",
    openHours: "9:00 AM - 9:00 PM",
    medsAvailable: [
      { name: "Cough Syrup (Dextromethorphan)", stock: 8 },
      { name: "Omez 20mg", stock: 22 },
    ],
  },
];
