export type ShipmentStatus =
  | "In Transit"
  | "Delivered"
  | "Delayed"
  | "Validation Pending"
  | "Integrity Warning"
  | "Cold Chain Risk";

export type IntegrityStatus = "Maintained" | "Warning" | "Risk Detected";

export interface Shipment {
  id: string;
  product: string;
  weightKg: number;
  origin: string;
  destination: string;
  receiver: string;
  driver: string;
  vehicle: string;
  status: ShipmentStatus;
  integrity: IntegrityStatus;
  eta: string;
  departedAt: string;
  tempC: number;
  humidity: number;
  progress: number; // 0-100
  halalCertId: string;
  stelinaRef: string;
}

export const shipments: Shipment[] = [
  { id: "SHP-24819", product: "Frozen Tuna Loin", weightKg: 1240, origin: "PPS Nizam Zachman, Jakarta", destination: "Cold Storage Surabaya", receiver: "PT Mina Bahari", driver: "Agus Pratama", vehicle: "B 9821 RFC (Reefer)", status: "In Transit", integrity: "Maintained", eta: "2026-05-20 18:40", departedAt: "2026-05-20 06:15", tempC: -18.4, humidity: 82, progress: 64, halalCertId: "MUI-LPPOM-00482-24", stelinaRef: "STL-2024-019823" },
  { id: "SHP-24820", product: "Fresh Skipjack", weightKg: 860, origin: "Bitung Fishery Port", destination: "Makassar Distribution Hub", receiver: "CV Laut Timur", driver: "Rendra Saputra", vehicle: "DB 7732 FA", status: "Cold Chain Risk", integrity: "Warning", eta: "2026-05-20 22:10", departedAt: "2026-05-20 03:50", tempC: 4.8, humidity: 88, progress: 71, halalCertId: "MUI-LPPOM-00491-24", stelinaRef: "STL-2024-019841" },
  { id: "SHP-24821", product: "Frozen Milkfish", weightKg: 2050, origin: "Pati Cold Plant", destination: "Bandung Central Market", receiver: "Toko Ikan Sejahtera", driver: "Bambang H.", vehicle: "H 4419 KL (Reefer)", status: "Delivered", integrity: "Maintained", eta: "2026-05-20 11:00", departedAt: "2026-05-19 21:30", tempC: -19.1, humidity: 80, progress: 100, halalCertId: "MUI-LPPOM-00388-24", stelinaRef: "STL-2024-019760" },
  { id: "SHP-24822", product: "Frozen Shrimp", weightKg: 540, origin: "Lampung Aqua Farm", destination: "Jakarta Port Terminal", receiver: "PT Samudra Ekspor", driver: "Yusuf I.", vehicle: "BE 1207 XR", status: "Validation Pending", integrity: "Maintained", eta: "2026-05-20 16:20", departedAt: "2026-05-20 09:00", tempC: -20.2, humidity: 79, progress: 96, halalCertId: "MUI-LPPOM-00501-24", stelinaRef: "STL-2024-019877" },
  { id: "SHP-24823", product: "Fresh Grouper", weightKg: 410, origin: "Kendari Port", destination: "Manado Resto Group", receiver: "Hotel Sintesa", driver: "Pratama A.", vehicle: "DT 8893 CA", status: "Integrity Warning", integrity: "Risk Detected", eta: "2026-05-20 20:00", departedAt: "2026-05-20 05:10", tempC: 6.4, humidity: 91, progress: 48, halalCertId: "MUI-LPPOM-00477-24", stelinaRef: "STL-2024-019812" },
  { id: "SHP-24824", product: "Frozen Mackerel", weightKg: 1780, origin: "Sibolga Fishery", destination: "Medan Cold Hub", receiver: "PT Mitra Pesisir", driver: "Hendra S.", vehicle: "BK 5512 RE (Reefer)", status: "In Transit", integrity: "Maintained", eta: "2026-05-20 19:30", departedAt: "2026-05-20 08:00", tempC: -18.8, humidity: 81, progress: 52, halalCertId: "MUI-LPPOM-00509-24", stelinaRef: "STL-2024-019903" },
  { id: "SHP-24825", product: "Fresh Snapper", weightKg: 320, origin: "Probolinggo Port", destination: "Denpasar Market", receiver: "CV Bali Segar", driver: "Komang W.", vehicle: "L 3382 PM", status: "Delayed", integrity: "Warning", eta: "2026-05-21 02:15", departedAt: "2026-05-20 07:40", tempC: 3.1, humidity: 86, progress: 38, halalCertId: "MUI-LPPOM-00513-24", stelinaRef: "STL-2024-019914" },
];

export const kpis = [
  { label: "Active Shipments", value: 48, delta: "+6 today", tone: "active" as const },
  { label: "Delivered Today", value: 27, delta: "+12% vs avg", tone: "safe" as const },
  { label: "Temperature Alerts", value: 5, delta: "2 critical", tone: "warning" as const },
  { label: "Pending Validation", value: 9, delta: "Awaiting NFC", tone: "active" as const },
  { label: "Integrity Warnings", value: 3, delta: "Action required", tone: "critical" as const },
  { label: "Active Vehicles", value: 31, delta: "of 42 fleet", tone: "safe" as const },
];

export const alerts = [
  { id: "ALR-9821", shipment: "SHP-24820", type: "Temperature Spike", severity: "Critical" as const, message: "Reefer interior reached 4.8°C — threshold -2°C", time: "12 min ago" },
  { id: "ALR-9820", shipment: "SHP-24823", type: "Integrity Risk", severity: "Critical" as const, message: "Cold chain interrupted for 14 minutes", time: "28 min ago" },
  { id: "ALR-9819", shipment: "SHP-24825", type: "Route Deviation", severity: "Warning" as const, message: "Vehicle 1.4km off planned corridor", time: "41 min ago" },
  { id: "ALR-9818", shipment: "SHP-24822", type: "Sensor Disconnect", severity: "Warning" as const, message: "Humidity sensor offline for 6 minutes", time: "1 hr ago" },
  { id: "ALR-9817", shipment: "SHP-24819", type: "Checkpoint Reached", severity: "Info" as const, message: "Passed Cikampek waypoint on schedule", time: "1 hr ago" },
  { id: "ALR-9816", shipment: "SHP-24824", type: "Humidity Warning", severity: "Warning" as const, message: "Humidity climbed to 88% briefly", time: "2 hr ago" },
];

export const timeline = [
  { time: "06:15", title: "Shipment Created", desc: "SHP-24819 generated by Operator Anwar" },
  { time: "06:32", title: "Driver Assigned", desc: "Agus Pratama — Reefer B 9821 RFC" },
  { time: "06:58", title: "Cold Chain Sealed", desc: "Initial temperature -18.6°C verified" },
  { time: "07:10", title: "Truck Departed", desc: "Departed PPS Nizam Zachman" },
  { time: "09:42", title: "Checkpoint Passed", desc: "Cikampek toll waypoint" },
  { time: "11:18", title: "Temperature Spike Detected", desc: "Reached -16.1°C for 3 minutes" },
  { time: "11:24", title: "Cold Chain Restored", desc: "Stabilized at -18.4°C" },
  { time: "14:02", title: "Checkpoint Passed", desc: "Cirebon waypoint" },
];

export const tempSeries = Array.from({ length: 24 }, (_, i) => ({
  t: `${String(i).padStart(2, "0")}:00`,
  temp: -18 + Math.sin(i / 3) * 1.4 + (i === 11 ? 2 : 0),
  humidity: 80 + Math.cos(i / 4) * 4 + (i === 11 ? 3 : 0),
}));
