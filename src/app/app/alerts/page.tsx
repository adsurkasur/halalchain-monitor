"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { StatusBadge, statusTone } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { alerts } from "@/lib/mock-data";
import {
  Search,
  Bell,
  Thermometer,
  Droplets,
  Signal,
  Route as RouteIcon,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

const ICON: Record<string, LucideIcon> = {
  "Temperature Spike": Thermometer,
  "Humidity Warning": Droplets,
  "Sensor Disconnect": Signal,
  "Route Deviation": RouteIcon,
  "Integrity Risk": ShieldAlert,
  "Checkpoint Reached": Bell,
};

export default function Alerts() {
  return (
    <DashboardLayout
      title="Operational alerts"
      subtitle="Threshold breaches, sensor health, and integrity events."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { l: "Critical", v: 2, tone: "critical" as const },
          { l: "Warning", v: 3, tone: "warning" as const },
          { l: "Info", v: 1, tone: "active" as const },
        ].map((c) => (
          <div
            key={c.l}
            className="rounded-xl border border-border bg-surface p-5 shadow-card flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {c.l}
              </div>
              <div className="mt-2 text-3xl font-semibold tabular-nums">{c.v}</div>
            </div>
            <StatusBadge tone={c.tone}>{c.l}</StatusBadge>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-border bg-surface p-3 shadow-card">
        <div className="relative flex-1 min-w-60">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="h-9 pl-9 border-border bg-surface" placeholder="Search alerts…" />
        </div>
        {["All", "Critical", "Warning", "Info"].map((f, i) => (
          <Button key={f} variant={i === 0 ? "default" : "outline"} size="sm" className="h-9">
            {f}
          </Button>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-border bg-surface shadow-card overflow-hidden">
        <ul className="divide-y divide-border">
          {alerts.map((a) => {
            const Icon = ICON[a.type] || Bell;
            return (
              <li key={a.id} className="flex items-start gap-4 px-5 py-4 hover:bg-surface-muted/60">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${a.severity === "Critical" ? "bg-status-critical-soft text-status-critical" : a.severity === "Warning" ? "bg-status-warning-soft text-status-warning" : "bg-status-active-soft text-status-active"}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-sm font-semibold">{a.type}</div>
                    <StatusBadge tone={statusTone(a.severity)} dot={false}>
                      {a.severity}
                    </StatusBadge>
                    <span className="font-mono text-xs text-primary">{a.shipment}</span>
                    <span className="text-xs text-muted-foreground">· {a.time}</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{a.message}</div>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button size="sm">Acknowledge</Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </DashboardLayout>
  );
}
