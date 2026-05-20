import { createFileRoute, Link } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TrackingMap } from "@/components/dashboard/tracking-map";
import { StatusBadge, statusTone } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { kpis, shipments, alerts, timeline } from "@/lib/mock-data";
import { Download, Plus, Thermometer, Droplets, ShieldCheck, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/app/")({ component: Overview });

function Overview() {
  return (
    <DashboardLayout
      title="Operations Overview"
      subtitle="Live status across fleets, cold chain, and halal integrity."
      actions={
        <>
          <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Export</Button>
          <Link to="/app/shipments/new"><Button size="sm" className="gap-2"><Plus className="h-4 w-4" /> New shipment</Button></Link>
        </>
      }
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {kpis.map((k) => <KpiCard key={k.label} {...k} />)}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {/* Shipments table */}
        <div className="rounded-xl border border-border bg-surface shadow-card lg:col-span-2">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold">Active shipments</h2>
              <p className="text-xs text-muted-foreground">Real-time operational state across the fleet.</p>
            </div>
            <Link to="/app/shipments" className="text-xs font-medium text-primary hover:underline">View all →</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-muted text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-2.5 font-semibold">Shipment</th>
                  <th className="px-3 py-2.5 font-semibold">Product</th>
                  <th className="px-3 py-2.5 font-semibold">Route</th>
                  <th className="px-3 py-2.5 font-semibold">Temp</th>
                  <th className="px-3 py-2.5 font-semibold">Integrity</th>
                  <th className="px-3 py-2.5 font-semibold">Status</th>
                  <th className="px-5 py-2.5 font-semibold">ETA</th>
                </tr>
              </thead>
              <tbody>
                {shipments.slice(0, 6).map((s) => (
                  <tr key={s.id} className="border-b border-border last:border-0 hover:bg-surface-muted/60">
                    <td className="px-5 py-3"><Link to="/app/shipments/$id" params={{ id: s.id }} className="font-mono text-xs font-semibold text-primary hover:underline">{s.id}</Link></td>
                    <td className="px-3 py-3"><div className="font-medium">{s.product}</div><div className="text-xs text-muted-foreground">{s.weightKg.toLocaleString()} kg</div></td>
                    <td className="px-3 py-3 text-xs text-muted-foreground"><div className="truncate max-w-[180px]">{s.origin}</div><div className="truncate max-w-[180px]">→ {s.destination}</div></td>
                    <td className="px-3 py-3 font-mono tabular-nums">{s.tempC.toFixed(1)}°C</td>
                    <td className="px-3 py-3"><StatusBadge tone={statusTone(s.integrity)}>{s.integrity}</StatusBadge></td>
                    <td className="px-3 py-3"><StatusBadge tone={statusTone(s.status)}>{s.status}</StatusBadge></td>
                    <td className="px-5 py-3 text-xs text-muted-foreground">{s.eta.slice(11)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Map + integrity panel */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-surface p-3 shadow-card">
            <div className="flex items-center justify-between px-2 pt-1 pb-2">
              <div className="text-sm font-semibold">Live fleet map</div>
              <Link to="/app/tracking" className="text-xs font-medium text-primary hover:underline">Expand →</Link>
            </div>
            <TrackingMap className="aspect-[4/3]" compact />
          </div>
          <div className="rounded-xl border border-border bg-surface p-5 shadow-card">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Integrity overview</div>
              <ShieldCheck className="h-4 w-4 text-status-safe" />
            </div>
            <div className="mt-4 space-y-3">
              {[
                { l: "Maintained", v: 42, tone: "safe" as const, w: "84%" },
                { l: "Warning", v: 5, tone: "warning" as const, w: "10%" },
                { l: "Risk detected", v: 3, tone: "critical" as const, w: "6%" },
              ].map((r) => (
                <div key={r.l}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <StatusBadge tone={r.tone}>{r.l}</StatusBadge>
                    <span className="font-mono font-semibold tabular-nums">{r.v}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className={`h-full ${r.tone === "safe" ? "bg-status-safe" : r.tone === "warning" ? "bg-status-warning" : "bg-status-critical"}`} style={{ width: r.w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: alerts + activity */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface shadow-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-status-warning" /><h2 className="text-sm font-semibold">Operational alerts</h2></div>
            <Link to="/app/alerts" className="text-xs font-medium text-primary hover:underline">All alerts →</Link>
          </div>
          <ul className="divide-y divide-border">
            {alerts.slice(0, 5).map((a) => (
              <li key={a.id} className="flex items-start gap-3 px-5 py-3">
                <StatusBadge tone={statusTone(a.severity)} dot={false} className="mt-0.5">{a.severity}</StatusBadge>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="truncate text-sm font-medium">{a.type}</div>
                    <div className="text-[11px] text-muted-foreground whitespace-nowrap">{a.time}</div>
                  </div>
                  <div className="truncate text-xs text-muted-foreground">{a.message} · <span className="font-mono text-primary">{a.shipment}</span></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-surface shadow-card">
          <div className="border-b border-border px-5 py-4"><h2 className="text-sm font-semibold">Operational timeline · SHP-24819</h2></div>
          <ol className="relative px-5 py-4">
            <span className="absolute left-[26px] top-4 bottom-4 w-px bg-border" />
            {timeline.slice(0, 6).map((t, i) => (
              <li key={i} className="relative flex gap-4 pb-4 last:pb-0">
                <div className="z-10 mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-primary ring-4 ring-surface" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between"><div className="text-sm font-medium">{t.title}</div><div className="text-[11px] text-muted-foreground">{t.time}</div></div>
                  <div className="text-xs text-muted-foreground">{t.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Sensor strip */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { i: Thermometer, l: "Avg fleet temperature", v: "-17.8°C", d: "Within profile · -22 to -16°C", tone: "safe" },
          { i: Droplets, l: "Avg humidity", v: "82%", d: "Stable across reefers", tone: "safe" },
          { i: ShieldCheck, l: "Halal seal integrity", v: "98.4%", d: "3 seals require review", tone: "warning" },
        ].map((m: any) => (
          <div key={m.l} className="rounded-xl border border-border bg-surface p-5 shadow-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"><m.i className="h-4 w-4" /> {m.l}</div>
              <StatusBadge tone={m.tone}>OK</StatusBadge>
            </div>
            <div className="mt-3 text-2xl font-semibold tabular-nums">{m.v}</div>
            <div className="text-xs text-muted-foreground">{m.d}</div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
