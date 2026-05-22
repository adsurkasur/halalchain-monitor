"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { StatusBadge, statusTone } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { shipments } from "@/lib/mock-data";
import { Search, Download, Filter, FileText } from "lucide-react";

const HISTORY = [...shipments, ...shipments].map((s, i) => ({
  ...s,
  id: `SHP-24${800 - i}`,
  status: "Delivered" as const,
  integrity: "Maintained" as const,
  eta: `2026-05-${10 + (i % 8)} ${10 + (i % 10)}:30`,
}));

export default function History() {
  return (
    <DashboardLayout
      title="Shipment history"
      subtitle="Searchable archive of delivered shipments with full audit trail."
      actions={
        <>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <FileText className="h-4 w-4" />
            Audit report
          </Button>
        </>
      }
    >
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface p-3 shadow-card">
        <div className="relative flex-1 min-w-60">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="h-9 pl-9 border-border bg-surface"
            placeholder="Search by ID, product, receiver…"
          />
        </div>
        <Input className="h-9 w-44 border-border bg-surface" type="date" />
        <Input className="h-9 w-44 border-border bg-surface" type="date" />
        <Button variant="outline" size="sm" className="h-9 gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-surface shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3 font-semibold">Shipment</th>
                <th className="px-3 py-3 font-semibold">Product</th>
                <th className="px-3 py-3 font-semibold">Receiver</th>
                <th className="px-3 py-3 font-semibold">Delivered</th>
                <th className="px-3 py-3 font-semibold">Avg Temp</th>
                <th className="px-3 py-3 font-semibold">Integrity</th>
                <th className="px-3 py-3 font-semibold">NFC validated</th>
                <th className="px-5 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {HISTORY.slice(0, 12).map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-border last:border-0 hover:bg-surface-muted/60"
                >
                  <td className="px-5 py-3">
                    <span className="font-mono text-xs font-semibold text-primary">{s.id}</span>
                    <div className="text-[11px] text-muted-foreground">{s.stelinaRef}</div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="font-medium">{s.product}</div>
                    <div className="text-xs text-muted-foreground">
                      {s.weightKg.toLocaleString()} kg
                    </div>
                  </td>
                  <td className="px-3 py-3 text-xs">
                    <div className="font-medium text-foreground">{s.receiver}</div>
                    <div className="text-muted-foreground truncate max-w-[200px]">
                      {s.destination}
                    </div>
                  </td>
                  <td className="px-3 py-3 text-xs text-muted-foreground">{s.eta}</td>
                  <td className="px-3 py-3 font-mono text-xs tabular-nums">
                    -18.{s.weightKg % 9}°C
                  </td>
                  <td className="px-3 py-3">
                    <StatusBadge tone={statusTone(s.integrity)}>{s.integrity}</StatusBadge>
                  </td>
                  <td className="px-3 py-3 text-xs text-muted-foreground">
                    <span className="text-status-safe font-medium">✓ Verified</span>
                  </td>
                  <td className="px-5 py-3">
                    <StatusBadge tone={statusTone(s.status)}>{s.status}</StatusBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
