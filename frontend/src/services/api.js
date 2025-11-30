// src/services/api.js
// Thin client for backend APIs. Adjust baseUrl as needed.

const baseUrl = "/api"; // Vite dev can proxy this to your backend

async function handleJson(res) {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

export async function searchPharmacies({ lat, lng, radiusKm = 5, med = "" }) {
  const url = new URL(`${baseUrl}/pharmacies/search`, window.location.origin);
  if (lat != null && lng != null) {
    url.searchParams.set("lat", String(lat));
    url.searchParams.set("lng", String(lng));
    url.searchParams.set("radiusKm", String(radiusKm));
  }
  if (med) url.searchParams.set("med", med);
  const res = await fetch(url.toString());
  return handleJson(res);
}

export async function placeOrder({ userId = null, items, note = "", location, pharmacyId }) {
  const payload = { userId, items, note, location, pharmacyId };
  const res = await fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handleJson(res);
}

export async function getPharmacyById(id) {
  const res = await fetch(`${baseUrl}/pharmacies/${id}`);
  return handleJson(res);
}
