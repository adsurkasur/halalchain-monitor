import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { MapPin, Thermometer, Droplets, Radio, ShieldCheck, Database, Bell, BarChart3, Users, FileCheck, Workflow, Smartphone } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({ meta: [
    { title: "Features — HalalChain" },
    { name: "description", content: "GPS, temperature, humidity, RFID/NFC, STELINA integration — every capability in HalalChain." },
    { property: "og:title", content: "Features — HalalChain" },
    { property: "og:description", content: "GPS, temperature, humidity, RFID/NFC, STELINA integration — every capability in HalalChain." },
  ]}),
  component: Features,
});

const GROUPS = [
  { title: "Real-time monitoring", items: [
    { i: MapPin, t: "GPS Tracking", d: "Sub-30s telemetry with route corridors and ETA refinement." },
    { i: Thermometer, t: "Temperature Sensors", d: "Per-reefer continuous logging with profile thresholds." },
    { i: Droplets, t: "Humidity Sensors", d: "Stable storage assurance with anomaly detection." },
  ]},
  { title: "Validation & integrity", items: [
    { i: Radio, t: "RFID / NFC", d: "Tap-to-verify shipment authenticity at handover." },
    { i: ShieldCheck, t: "Halal Integrity", d: "Seal events bound to MUI LPPOM certificate." },
    { i: FileCheck, t: "Audit Trail", d: "Tamper-evident timeline for every signal." },
  ]},
  { title: "Operations & compliance", items: [
    { i: Database, t: "STELINA Sync", d: "Two-way mirror of shipment metadata." },
    { i: Bell, t: "Smart Alerts", d: "Severity-tiered routing with on-call escalation." },
    { i: BarChart3, t: "Analytics", d: "Fleet, route, product, receiver roll-ups." },
  ]},
  { title: "Built for teams", items: [
    { i: Users, t: "Role-based Access", d: "Company, Receiver, and Admin roles." },
    { i: Workflow, t: "Shipment Wizard", d: "Multi-step shipment creation flow." },
    { i: Smartphone, t: "Mobile-ready", d: "Capacitor-ready responsive UI for field teams." },
  ]},
];

function Features() {
  return (
    <MarketingLayout>
      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Features</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Every signal, in one operational fabric.</h1>
          <p className="mt-4 text-lg text-muted-foreground">A complete capability set for halal fish logistics — designed to feel familiar to fleet operators and reassuring to auditors.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        {GROUPS.map((g) => (
          <div key={g.title}>
            <h2 className="text-xl font-semibold tracking-tight">{g.title}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {g.items.map((it) => (
                <div key={it.t} className="rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-elevated">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary"><it.i className="h-5 w-5" /></div>
                  <div className="mt-4 text-base font-semibold">{it.t}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </MarketingLayout>
  );
}
