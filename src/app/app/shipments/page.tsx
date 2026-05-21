"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { StatusBadge, statusTone } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { shipments } from "@/lib/mock-data";
import { Plus, Filter, Download, Search } from "lucide-react";

export default function Shipments() {
  return (
    <DashboardLayout
      title="Shipments"
      subtitle="Manage active shipments, profiles, and operational state."
      actions={
        <>
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" />Export</Button>
          <Link href="/app/shipments/new"><Button size="sm" className="gap-2"><Plus className="h-4 w-4" />New shipment</Button></Link>
        </>
      }
    >
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface p-3 shadow-card">
        <div className="relative flex-1 min-w-60">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="h-9 pl-9 border-border bg-surface" placeholder="Search shipment ID, product, driver…" />
        </div>
        {["All status", "In transit", "Delivered", "Cold chain risk", "Validation pending"].map((f, i) => (
          <Button key={f} variant={i === 0 ? "default" : "outline"} size="sm" className="h-9">{f}</Button>
        ))}
        <Button variant="outline" size="sm" className="h-9 gap-2"><Filter className="h-4 w-4" />Filters</Button>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-surface shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3 font-semibold">Shipment</th>
                <th className="px-3 py-3 font-semibold">Product</th>
                <th className="px-3 py-3 font-semibold">Origin → Destination</th>
                <th className="px-3 py-3 font-semibold">Driver / Vehicle</th>
                <th className="px-3 py-3 font-semibold">Temp</th>
                <th className="px-3 py-3 font-semibold">Humidity</th>
                <th className="px-3 py-3 font-semibold">Integrity</th>
                <th className="px-3 py-3 font-semibold">Status</th>
                <th className="px-3 py-3 font-semibold">Progress</th>
                <th className="px-5 py-3 font-semibold">ETA</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((s) => (
                <tr key={s.id} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                  <td className="px-5 py-3"><Link href={`/app/shipments/${s.id}`} className="font-mono text-xs font-semibold text-primary hover:underline">{s.id}</Link><div className="text-[11px] text-muted-foreground">{s.stelinaRef}</div></td>
                  <td className="px-3 py-3"><div className="font-medium">{s.product}</div><div className="text-xs text-muted-foreground">{s.weightKg.toLocaleString()} kg</div></td>
                  <td className="px-3 py-3 text-xs text-muted-foreground"><div className="max-w-[200px] truncate">{s.origin}</div><div className="max-w-[200px] truncate">→ {s.destination}</div></td>
                  <td className="px-3 py-3 text-xs"><div className="font-medium text-foreground">{s.driver}</div><div className="text-muted-foreground">{s.vehicle}</div></td>
                  <td className="px-3 py-3 font-mono text-xs tabular-nums">{s.tempC.toFixed(1)}°C</td>
                  <td className="px-3 py-3 font-mono text-xs tabular-nums">{s.humidity}%</td>
                  <td className="px-3 py-3"><StatusBadge tone={statusTone(s.integrity)}>{s.integrity}</StatusBadge></td>
                  <td className="px-3 py-3"><StatusBadge tone={statusTone(s.status)}>{s.status}</StatusBadge></td>
                  <td className="px-3 py-3"><div className="flex items-center gap-2"><div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted"><div className="h-full bg-primary" style={{ width: `${s.progress}%` }} /></div><span className="text-[11px] tabular-nums text-muted-foreground">{s.progress}%</span></div></td>
                  <td className="px-5 py-3 text-xs text-muted-foreground">{s.eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-border bg-surface-muted px-5 py-3 text-xs text-muted-foreground">
          <div>Showing 7 of 48 shipments</div>
          <div className="flex items-center gap-1"><Button variant="outline" size="sm">Previous</Button><Button variant="outline" size="sm">Next</Button></div>
        </div>
      </div>
    </DashboardLayout>
  );
}
