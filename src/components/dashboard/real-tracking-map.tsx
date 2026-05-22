"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import L from "leaflet";

const iconHtml = `<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated ring-4 ring-primary/20" style="margin-left: -16px; margin-top: -16px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-navigation rotate-45"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg></div>`;

const customIcon =
  typeof window !== "undefined"
    ? L.divIcon({
        html: iconHtml,
        className: "",
        iconSize: [32, 32],
        iconAnchor: [0, 0],
      })
    : null;

const routeToll: [number, number][] = [
  [-6.1158, 106.8021], // Jakarta (Origin)
  [-6.2382, 106.9755], // Bekasi
  [-6.3129, 107.1444], // Cikarang
  [-6.4526, 107.458], // Purwakarta
  [-6.4673, 107.7265], // Subang
  [-6.697, 108.4116], // Cirebon
  [-6.8407, 108.8502], // Pejagan
  [-6.9142, 109.4316], // Pemalang
  [-6.9208, 109.7745], // Batang
  [-6.945, 110.1506], // Kendal
  [-6.9932, 110.4203], // Semarang
  [-7.3305, 110.5084], // Salatiga
  [-7.5147, 110.7712], // Solo
  [-7.4278, 111.0219], // Sragen
  [-7.4063, 111.4468], // Ngawi
  [-7.5501, 111.6669], // Madiun
  [-7.5815, 111.9166], // Nganjuk
  [-7.5255, 112.2387], // Jombang
  [-7.447, 112.4411], // Mojokerto
  [-7.2504, 112.7688], // Surabaya (Destination)
];

const routePantura: [number, number][] = [
  [-6.9932, 110.4203], // Semarang
  [-6.8948, 110.6385], // Demak
  [-6.8048, 110.8405], // Kudus
  [-6.7559, 111.0361], // Pati
  [-6.7063, 111.3414], // Rembang
  [-6.8943, 112.0645], // Tuban
  [-7.1182, 112.415], // Lamongan
  [-7.2504, 112.7688], // Surabaya
];

const routeBandung: [number, number][] = [
  [-6.1158, 106.8021], // Jakarta
  [-6.3024, 106.8951], // Cibubur
  [-6.5944, 106.7892], // Bogor
  [-6.7303, 106.9896], // Puncak
  [-6.8201, 107.14], // Cianjur
  [-6.8833, 107.5333], // Cimahi
  [-6.9175, 107.6191], // Bandung
];

// Combine multiple routes for visualization
const allRoutes = [routeToll, routePantura, routeBandung];

// Place markers strategically to simulate active fleet
const activeVehicles = [
  { pos: routeToll[4], loc: "Subang" },
  { pos: routeToll[8], loc: "Batang" },
  { pos: routeToll[12], loc: "Solo" },
  { pos: routeToll[16], loc: "Nganjuk" },
  { pos: routeToll[19], loc: "Surabaya (Arrived)" },
  { pos: routePantura[2], loc: "Kudus" },
  { pos: routePantura[5], loc: "Tuban" },
  { pos: routeBandung[4], loc: "Cianjur" },
  { pos: routeBandung[6], loc: "Bandung (Arrived)" },
];

export function RealTrackingMap({
  className,
  compact = false,
  mode = "all",
}: {
  className?: string;
  compact?: boolean;
  mode?: "all" | "single";
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className={`bg-muted animate-pulse ${className}`} />;

  // Center generally on Java Island
  const center: [number, number] = [-7.1, 109.8];

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border z-0 h-full min-h-[300px] w-full ${className}`}
    >
      <MapContainer
        center={center}
        zoom={compact ? 7 : 8}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {mode === "all" ? (
          <>
            <Polyline positions={routeToll} color="var(--primary)" weight={4} opacity={0.8} />
            <Polyline
              positions={routePantura}
              color="var(--primary)"
              weight={4}
              opacity={0.6}
              dashArray="8, 8"
            />
            <Polyline positions={routeBandung} color="var(--primary)" weight={4} opacity={0.7} />

            {customIcon &&
              activeVehicles.map((v, i) => (
                <Marker key={i} position={v.pos} icon={customIcon}>
                  <Popup>
                    <div className="text-xs font-semibold">Active Vehicle</div>
                    <div className="text-[10px] text-muted-foreground">Location: {v.loc}</div>
                  </Popup>
                </Marker>
              ))}
          </>
        ) : (
          <>
            <Polyline positions={routeToll} color="var(--primary)" weight={4} />
            {customIcon && (
              <Marker position={center} icon={customIcon}>
                <Popup>Current Location: Near Semarang</Popup>
              </Marker>
            )}
          </>
        )}
      </MapContainer>
    </div>
  );
}
