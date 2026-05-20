import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { TrackingMap } from "@/components/dashboard/tracking-map";
import { StatusBadge, statusTone } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { shipments } from "@/lib/mock-data";
import { Search, Filter, Layers, Thermometer, Droplets, Navigation } from "lucide-react";

export const Route = createFileRoute("/app/tracking")({ component: Tracking });

function Tracking() {
  return (
    <DashboardLayout title="Live tracking" subtitle="Real-time fleet, route, and shipment telemetry.">
      <div className="grid gap-4 lg:grid-cols-[320px_1fr_320px] h-[calc(100vh-260px)]">
        {/* Filter panel */}
        <div className="rounded-xl border border-border bg-surface shadow-card flex flex-col overflow-hidden">
          <div className="border-b border-border p-3">
            <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input className="h-9 pl-9 border-border bg-surface" placeholder="Search shipments" /></div>
            <div className="mt-2 flex gap-2">
              <Button variant="default" size="sm" className="h-7 text-xs flex-1">All</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs flex-1">In transit</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs flex-1">Alerts</Button>
            </div>
          </div>
          <ul className="flex-1 divide-y divide-border overflow-y-auto">
            {shipments.map((s, i) => (
              <li key={s.id}>
                <Link to="/app/shipments/$id" params={{ id: s.id }} className={`block px-3 py-3 transition-colors hover:bg-surface-muted ${i === 0 ? "bg-accent" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-primary">{s.id}</span>
                    <StatusBadge tone={statusTone(s.status)}>{s.status}</StatusBadge>
                  </div>
                  <div className="mt-1.5 text-sm font-medium truncate">{s.product}</div>
                  <div className="text-xs text-muted-foreground truncate">{s.driver} · {s.vehicle}</div>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Thermometer className="h-3 w-3" />{s.tempC.toFixed(1)}°C</span>
                    <span className="flex items-center gap-1"><Droplets className="h-3 w-3" />{s.humidity}%</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="rounded-xl border border-border bg-surface p-2 shadow-card flex flex-col">
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center gap-2 text-sm font-semibold"><Navigation className="h-4 w-4 text-primary" />Fleet map · 31 vehicles active</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1.5"><Layers className="h-3.5 w-3.5" />Layers</Button>
              <Button variant="outline" size="sm" className="h-8 gap-1.5"><Filter className="h-3.5 w-3.5" />Filters</Button>
            </div>
          </div>
          <TrackingMap className="flex-1" />
        </div>

        {/* Telemetry panel */}
        <div className="rounded-xl border border-border bg-surface p-4 shadow-card overflow-y-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Selected · SHP-24819</div>
          <h3 className="mt-1 text-lg font-semibold">Frozen Tuna Loin</h3>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              { l: "Speed", v: "78 km/h" },
              { l: "ETA", v: "18:40" },
              { l: "Distance left", v: "148 km" },
              { l: "Battery", v: "84%" },
            ].map((x) => (
              <div key={x.l} className="rounded-lg bg-surface-muted p-2.5">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{x.l}</div>
                <div className="text-sm font-semibold tabular-nums">{x.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sensor health</div>
          <ul className="mt-2 space-y-2 text-sm">
            {[
              { l: "GPS", t: "safe", v: "Strong · ±4m" },
              { l: "Temperature", t: "safe", v: "-18.4°C" },
              { l: "Humidity", t: "safe", v: "82%" },
              { l: "RFID tag", t: "safe", v: "RFID-AC8821-09F" },
            ].map((x: any) => (
              <li key={x.l} className="flex items-center justify-between rounded-lg border border-border bg-surface-muted px-3 py-2">
                <span>{x.l}</span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">{x.v}<StatusBadge tone={x.t}>OK</StatusBadge></span>
              </li>
            ))}
          </ul>
          <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Legend</div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-status-safe" /> On schedule</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-status-warning" /> Warning</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-status-critical" /> Critical</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-status-active" /> Active tracking</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
