"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const iconHtml = `<div class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated ring-4 ring-primary/20" style="margin-left: -16px; margin-top: -16px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-navigation rotate-45"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg></div>`;

const customIcon = typeof window !== 'undefined' ? L.divIcon({
  html: iconHtml,
  className: '',
  iconSize: [32, 32],
  iconAnchor: [0, 0],
}) : null;

const defaultRoute: [number, number][] = [
  [-6.1158, 106.8021], // PPS Nizam Zachman, Jakarta
  [-6.2088, 106.8456], // Jakarta
  [-6.4025, 107.5066], // Cikampek
  [-6.7320, 108.5523], // Cirebon
  [-6.9699, 110.4280], // Semarang
  [-7.2504, 112.7688], // Surabaya
];

export function RealTrackingMap({ className, compact = false, route = defaultRoute }: { className?: string; compact?: boolean, route?: [number, number][] }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className={`bg-muted animate-pulse ${className}`} />;

  const center = route[route.length - 2];

  return (
    <div className={`relative overflow-hidden rounded-xl border border-border z-0 ${className}`}>
      <MapContainer center={center} zoom={compact ? 6 : 7} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Polyline positions={route} color="var(--primary)" weight={4} />
        {customIcon && (
          <Marker position={center} icon={customIcon}>
            <Popup>Current Location: Near Semarang</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
