"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { TrackingMap } from "@/components/dashboard/tracking-map";
import { StatusBadge, statusTone } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { shipments, timeline, tempSeries } from "@/lib/mock-data";
import {
  Thermometer,
  Droplets,
  MapPin,
  Signal,
  ScanLine,
  ShieldCheck,
  ArrowLeft,
  Truck,
  User,
  Clock,
  Snowflake,
  FileText,
  Share2,
} from "lucide-react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

export default function Detail() {
  const params = useParams();
  const id = params.id as string;
  const s = shipments.find((x) => x.id === id) ?? shipments[0];

  return (
    <DashboardLayout
      title={`Shipment ${s.id}`}
      subtitle={`${s.product} · ${s.weightKg.toLocaleString()} kg · ${s.stelinaRef}`}
      actions={
        <>
          <Link href="/app/shipments">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="gap-2">
            <FileText className="h-4 w-4" />
            Audit report
          </Button>
          <Button size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share live link
          </Button>
        </>
      }
    >
      {/* Mission header */}
      <div className="rounded-xl border border-border bg-surface p-5 shadow-card">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge tone={statusTone(s.status)}>{s.status}</StatusBadge>
          <StatusBadge tone={statusTone(s.integrity)}>Halal · {s.integrity}</StatusBadge>
          <StatusBadge tone="active">ETA {s.eta.slice(11)}</StatusBadge>
          <span className="text-xs text-muted-foreground">
            Cert: <span className="font-mono">{s.halalCertId}</span>
          </span>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            { i: User, l: "Driver", v: s.driver, s: s.vehicle },
            { i: Truck, l: "Receiver", v: s.receiver, s: s.destination },
            { i: MapPin, l: "Origin", v: s.origin, s: `Departed ${s.departedAt.slice(11)}` },
            {
              i: Snowflake,
              l: "Cold chain",
              v: `${s.tempC.toFixed(1)}°C · ${s.humidity}%`,
              s: "Within profile",
            },
          ].map((m) => (
            <div
              key={m.l}
              className="flex items-start gap-3 rounded-lg border border-border bg-surface-muted p-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                <m.i className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {m.l}
                </div>
                <div className="truncate text-sm font-semibold">{m.v}</div>
                <div className="truncate text-xs text-muted-foreground">{m.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map + sidebar */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-3 shadow-card lg:col-span-2">
          <div className="flex items-center justify-between px-2 pt-1 pb-2">
            <div className="text-sm font-semibold">Live route</div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-status-safe" /> Traveled
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-muted-foreground" /> Planned
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-status-critical" /> Alert
              </span>
            </div>
          </div>
          <TrackingMap className="aspect-[16/10]" mode="single" />
          <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
            {[
              { l: "Distance", v: "412 km" },
              { l: "Traveled", v: `${s.progress}%` },
              { l: "Speed", v: "78 km/h" },
              { l: "Stops", v: "2" },
            ].map((x) => (
              <div key={x.l} className="rounded-lg border border-border bg-surface-muted p-2.5">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {x.l}
                </div>
                <div className="text-sm font-semibold tabular-nums">{x.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {[
            {
              i: Thermometer,
              l: "Temperature",
              v: `${s.tempC.toFixed(1)}°C`,
              s: "Profile -22 to -16°C",
              tone: statusTone(s.integrity),
            },
            {
              i: Droplets,
              l: "Humidity",
              v: `${s.humidity}%`,
              s: "Profile 75–85%",
              tone: "safe" as const,
            },
            {
              i: Signal,
              l: "GPS Signal",
              v: "Strong",
              s: "Last fix 12s ago",
              tone: "safe" as const,
            },
            {
              i: ScanLine,
              l: "NFC Validation",
              v: "Pending",
              s: "Awaiting receiver tap",
              tone: "warning" as const,
            },
            {
              i: ShieldCheck,
              l: "Halal seal",
              v: "Intact",
              s: "Sealed by Op. Anwar",
              tone: "safe" as const,
            },
          ].map((c) => (
            <div key={c.l} className="rounded-xl border border-border bg-surface p-4 shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <c.i className="h-4 w-4" />
                  {c.l}
                </div>
                <StatusBadge tone={c.tone}>OK</StatusBadge>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <div className="text-lg font-semibold tabular-nums">{c.v}</div>
                <div className="text-[11px] text-muted-foreground">{c.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline + event feed */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-5 shadow-card lg:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold">Shipment timeline</h2>
          </div>
          <ol className="relative">
            <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            {timeline.map((t, i) => (
              <li key={i} className="relative flex gap-4 pb-4 last:pb-0">
                <div
                  className={`z-10 mt-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-surface ${t.title.includes("Spike") || t.title.includes("Warning") ? "bg-status-warning" : t.title === "Cold Chain Restored" ? "bg-status-safe" : "bg-primary"}`}
                />
                <div className="flex-1 pb-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{t.title}</div>
                    <div className="text-[11px] text-muted-foreground font-mono">{t.time}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{t.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5 shadow-card">
          <h2 className="mb-3 text-sm font-semibold">Operational event feed</h2>
          <ul className="space-y-2 font-mono text-[11px] text-muted-foreground">
            {[
              "[14:08:21] GPS fix · ±4m · 78 km/h",
              "[14:07:55] Temperature sample · -18.4°C",
              "[14:07:55] Humidity sample · 82%",
              "[14:06:12] Heartbeat OK · sensor pack #SP-21",
              "[14:02:08] Checkpoint passed · Cirebon",
              "[11:24:00] Cold chain restored",
              "[11:18:33] ALERT · temperature spike -16.1°C",
              "[07:10:11] Departed origin",
              "[06:58:42] Halal seal verified",
            ].map((l) => (
              <li key={l} className="rounded bg-surface-muted px-2 py-1">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Charts */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-5 shadow-card">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold">Temperature · 24h</h2>
              <p className="text-xs text-muted-foreground">Profile threshold -16°C</p>
            </div>
            <StatusBadge tone="safe">Maintained</StatusBadge>
          </div>
          <div className="h-56">
            <ResponsiveContainer>
              <AreaChart data={tempSeries} margin={{ top: 10, right: 12, bottom: 0, left: -8 }}>
                <defs>
                  <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="t" tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                <YAxis tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="temp"
                  stroke="var(--primary)"
                  strokeWidth={2}
                  fill="url(#tg)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-5 shadow-card">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold">Humidity · 24h</h2>
              <p className="text-xs text-muted-foreground">Profile 75–85%</p>
            </div>
            <StatusBadge tone="safe">Stable</StatusBadge>
          </div>
          <div className="h-56">
            <ResponsiveContainer>
              <LineChart data={tempSeries} margin={{ top: 10, right: 12, bottom: 0, left: -8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="t" tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                <YAxis tick={{ fontSize: 10 }} stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="humidity"
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
