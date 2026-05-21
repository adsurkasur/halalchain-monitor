import Link from "next/link";
import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Thermometer,
  Radio,
  MapPin,
  Activity,
  Droplets,
  Database,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Truck,
} from "lucide-react";
import { TrackingMap } from "@/components/dashboard/tracking-map";

export default function Landing() {
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface-muted to-background">
        <div className="absolute inset-0 -z-10 opacity-[0.35]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.85 0.02 220) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }} />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-status-safe animate-pulse" />
              STELINA-integrated · MUI LPPOM Compliant
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Halal cold chain
              <br />
              <span className="text-primary">traceability</span>, in real time.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Operational monitoring for Indonesia's fish logistics. GPS, temperature,
              humidity, and RFID/NFC validation — unified into one auditable platform
              built for halal integrity assurance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/app"><Button size="lg" className="gap-2">Launch operations console <ArrowRight className="h-4 w-4" /></Button></Link>
              <Link href="/features"><Button size="lg" variant="outline">Explore features</Button></Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {[
                { v: "99.97%", l: "Cold chain uptime" },
                { v: "12k+", l: "Shipments traced" },
                { v: "<3 min", l: "Alert response" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-semibold tracking-tight">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Preview card */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5 blur-2xl" />
            <div className="rounded-2xl border border-border bg-surface p-3 shadow-elevated">
              <div className="flex items-center justify-between rounded-lg bg-sidebar px-3 py-2 text-sidebar-foreground">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-status-safe animate-pulse" />
                  Live · SHP-24819
                </div>
                <div className="text-[10px] uppercase tracking-wider opacity-60">Operations Console</div>
              </div>
              <TrackingMap className="mt-3 aspect-[16/10]" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { i: Thermometer, l: "Temp", v: "-18.4°C", t: "text-status-safe" },
                  { i: Droplets, l: "Humidity", v: "82%", t: "text-status-safe" },
                  { i: ShieldCheck, l: "Halal", v: "Sealed", t: "text-primary" },
                ].map((m) => (
                  <div key={m.l} className="rounded-lg border border-border bg-surface-muted p-2.5">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground"><m.i className="h-3 w-3" /> {m.l}</div>
                    <div className={`mt-1 text-sm font-semibold ${m.t}`}>{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <span>MUI LPPOM</span><span>·</span>
          <span>KKP STELINA</span><span>·</span>
          <span>BPOM Aligned</span><span>·</span>
          <span>ISO 22000</span><span>·</span>
          <span>GS1 Indonesia</span>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Capabilities</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Built for operations, audited for trust.</h2>
            <p className="mt-3 text-muted-foreground">Every signal from sensor to receiver is timestamped, signed, and verifiable — so halal integrity isn't a claim, it's a record.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { i: MapPin, t: "GPS Fleet Tracking", d: "Sub-30s telemetry, route corridors, deviation alerts, and replay-ready history." },
              { i: Thermometer, t: "Cold Chain Monitoring", d: "Per-reefer temperature curves with threshold engine and recovery detection." },
              { i: Droplets, t: "Humidity Assurance", d: "Continuous humidity logging tied to product profiles and storage SOPs." },
              { i: Radio, t: "RFID / NFC Validation", d: "Tap-to-verify shipment authenticity at handover, with mismatch states." },
              { i: ShieldCheck, t: "Halal Integrity Engine", d: "Seal events, contamination flags, and MUI LPPOM certificate binding." },
              { i: Database, t: "STELINA Sync", d: "Two-way integration with Indonesia's National Fish Logistics registry." },
            ].map((f) => (
              <div key={f.t} className="group rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-elevated">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
                  <f.i className="h-5 w-5" />
                </div>
                <div className="mt-4 text-base font-semibold">{f.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Workflow</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">From dock to receiver, fully traced.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Create Shipment", d: "Bind product, halal cert, and reefer profile to a unique shipment ID." },
              { n: "02", t: "Seal & Depart", d: "RFID tag attached. Cold chain sealed. STELINA registry updated." },
              { n: "03", t: "Live Monitor", d: "IoT telemetry streams to the operations console with alerting." },
              { n: "04", t: "Validate Delivery", d: "Receiver scans NFC — integrity, temperature & timestamp logged." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-surface p-6">
                <div className="font-mono text-xs font-semibold text-primary">{s.n}</div>
                <div className="mt-3 text-base font-semibold">{s.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realtime monitoring */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Real-time monitoring</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">A control center for every reefer on the road.</h2>
            <p className="mt-3 text-muted-foreground">See every vehicle, sensor, and shipment status in one operational view. Set thresholds per product profile. Recover from incidents before they become losses.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Live map with checkpoints, alerts, and ETA refinement",
                "Per-shipment temperature & humidity timelines",
                "Threshold engine with auto-escalation",
                "Audit-grade event log for every signal",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-status-safe" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-3 shadow-elevated">
            <TrackingMap className="aspect-[16/11]" />
          </div>
        </div>
      </section>

      {/* Cold chain + RFID two-up */}
      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <Truck className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">Cold Chain Integrity</h3>
            <p className="mt-2 text-sm text-muted-foreground">Continuous reefer telemetry with intelligent threshold engines per fish product profile — from frozen tuna at -18°C to fresh snapper at 0–2°C.</p>
            <div className="mt-6 rounded-lg border border-border bg-surface-muted p-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium">Reefer B 9821 RFC</span>
                <span className="text-status-safe font-semibold">Maintained</span>
              </div>
              <div className="mt-3 h-20 w-full">
                <svg viewBox="0 0 200 60" className="h-full w-full">
                  <path d="M0,30 C20,28 30,32 50,30 C70,28 90,15 110,28 C130,40 150,30 200,32" fill="none" stroke="var(--primary)" strokeWidth="1.5" />
                  <line x1="0" y1="15" x2="200" y2="15" stroke="var(--status-warning)" strokeDasharray="2 3" strokeWidth="1" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <Radio className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">RFID / NFC Validation</h3>
            <p className="mt-2 text-sm text-muted-foreground">Tap the receiver's mobile device to a sealed shipment tag — instantly verify authenticity, halal seal, and cold chain integrity at delivery.</p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
              {["Shipment match", "Seal intact", "Temp in range"].map((l) => (
                <div key={l} className="rounded-lg border border-status-safe/30 bg-status-safe-soft px-2 py-3 text-status-safe">
                  <CheckCircle2 className="mx-auto h-4 w-4" />
                  <div className="mt-1.5 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STELINA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-2xl border border-border bg-sidebar p-10 text-sidebar-foreground md:p-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-sidebar-border bg-sidebar-accent/40 px-3 py-1 text-xs font-medium">
                  <Database className="h-3 w-3" /> STELINA Integration
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Synced with Indonesia's national fish traceability registry.</h2>
                <p className="mt-3 text-sm text-sidebar-foreground/70 md:text-base">Every shipment is mirrored to STELINA with origin, vessel, processing unit, and chain-of-custody metadata — no manual paperwork at the dock.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { l: "Vessel registry", v: "Auto-bound" },
                  { l: "Catch certificate", v: "Linked" },
                  { l: "Processing unit", v: "Verified" },
                  { l: "Chain of custody", v: "Continuous" },
                ].map((m) => (
                  <div key={m.l} className="rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-4">
                    <div className="text-[10px] uppercase tracking-wider text-sidebar-foreground/60">{m.l}</div>
                    <div className="mt-1 text-base font-semibold">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-elevated">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">On-time delivery rate</div>
              <span className="rounded-full bg-status-safe-soft px-2 py-0.5 text-xs font-medium text-status-safe">+4.2% MoM</span>
            </div>
            <div className="mt-4 grid grid-cols-7 items-end gap-2 h-40">
              {[60, 72, 65, 80, 76, 88, 92].map((h, i) => (
                <div key={i} className="rounded-t bg-primary/80" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-2 text-center text-[10px] text-muted-foreground">
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => <div key={d}>{d}</div>)}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">Operational analytics</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Insights your auditors will thank you for.</h2>
            <p className="mt-3 text-muted-foreground">Roll-ups across fleets, routes, products, and receivers — with drill-down to the individual sensor sample. Export to CSV or push to BI tools.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { i: Activity, t: "Incident MTTR" },
                { i: BarChart3, t: "Route profitability" },
                { i: ShieldCheck, t: "Integrity scorecard" },
                { i: Truck, t: "Ree tracking" },
              ].map((x) => (
                <li key={x.t} className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-2.5 text-sm">
                  <x.i className="h-4 w-4 text-primary" /> {x.t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Bring every shipment under one operational lens.</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">Designed for fishery exporters, cold storage operators, and receivers who treat halal integrity as a non-negotiable.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/app"><Button size="lg" className="gap-2">Open the console <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline">Talk to operations</Button></Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
