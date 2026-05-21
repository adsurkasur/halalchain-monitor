import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { Anchor, ShieldCheck, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — HalalChain",
  description: "Why we built HalalChain — a halal cold chain traceability platform for Indonesia's fish logistics.",
  openGraph: {
    title: "About — HalalChain",
    description: "Why we built HalalChain — a halal cold chain traceability platform for Indonesia's fish logistics.",
  }
};

export default function About() {
  return (
    <MarketingLayout>
      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">About</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">A platform built at the dockside, not in a boardroom.</h1>
          <p className="mt-5 text-lg text-muted-foreground">HalalChain was designed alongside fishery exporters, cold storage operators, and MUI LPPOM auditors in Jakarta, Bitung, and Makassar — to make halal cold chain traceability a first-class operational discipline.</p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
          {[
            { i: Target, t: "Our mission", d: "Make halal integrity verifiable end-to-end — from vessel to receiver — with zero paperwork friction." },
            { i: ShieldCheck, t: "Our principles", d: "Operational clarity. Auditable records. No theatre. Every claim must be a record." },
            { i: Anchor, t: "Our roots", d: "Built with Indonesia's fisheries in mind, integrated with STELINA from day one." },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border border-border bg-surface p-6">
              <b.i className="h-6 w-6 text-primary" />
              <div className="mt-4 text-base font-semibold">{b.t}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">By the numbers</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { v: "12 480", l: "Shipments traced" },
              { v: "37", l: "Fleet operators" },
              { v: "9 824 t", l: "Fish moved safely" },
              { v: "99.97%", l: "Cold chain uptime" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-surface p-6">
                <div className="text-3xl font-semibold tracking-tight tabular-nums">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
