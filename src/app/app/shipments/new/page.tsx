"use client";

import Link from "next/link";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { useAppStore } from "@/lib/store";

const STEPS = [
  { t: "Sender", d: "Origin & contact" },
  { t: "Product", d: "Fish & halal cert" },
  { t: "Destination", d: "Receiver details" },
  { t: "Logistics", d: "Driver & vehicle" },
  { t: "Monitoring", d: "Sensors & thresholds" },
  { t: "Review", d: "Verify everything" },
  { t: "Generate", d: "Issue shipment ID" },
];

export default function NewShipment() {
  const [step, setStep] = useState(0);
  const { addShipment } = useAppStore();

  const next = () => {
    if (step === 5) {
      addShipment({
        id: "SHP-24826",
        product: "Frozen Tuna Loin",
        weightKg: 1240,
        origin: "PPS Nizam Zachman, Jakarta",
        destination: "Cold Storage Surabaya",
        receiver: "Cold Storage Surabaya",
        driver: "Agus Pratama",
        vehicle: "B 9821 RFC (Reefer)",
        status: "In Transit",
        integrity: "Maintained",
        eta: "2026-05-20 18:40",
        departedAt: new Date().toISOString().slice(0, 16).replace("T", " "),
        tempC: -18.4,
        humidity: 82,
        progress: 0,
        halalCertId: "MUI-LPPOM-00482-24",
        stelinaRef: "STL-2024-019823",
      });
    }
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };
  const prev = () => setStep((s) => Math.max(0, s - 1));

  return (
    <DashboardLayout
      title="Create shipment"
      subtitle="Onboard a new halal cold chain shipment into the operational pipeline."
    >
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        {/* Stepper */}
        <ol className="space-y-1">
          {STEPS.map((s, i) => {
            const state = i < step ? "done" : i === step ? "active" : "todo";
            return (
              <li key={s.t}>
                <button
                  onClick={() => setStep(i)}
                  className={`flex w-full items-start gap-3 rounded-lg border p-3 text-left transition-colors ${state === "active" ? "border-primary bg-accent" : state === "done" ? "border-border bg-surface" : "border-border bg-surface hover:bg-surface-muted"}`}
                >
                  <div
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${state === "active" ? "bg-primary text-primary-foreground" : state === "done" ? "bg-status-safe text-white" : "bg-muted text-muted-foreground"}`}
                  >
                    {state === "done" ? <Check className="h-3.5 w-3.5" /> : i + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{s.t}</div>
                    <div className="text-xs text-muted-foreground">{s.d}</div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Form */}
        <div className="rounded-xl border border-border bg-surface shadow-card">
          <div className="border-b border-border px-6 py-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Step {step + 1} of {STEPS.length}
            </div>
            <h2 className="mt-1 text-lg font-semibold">
              {STEPS[step].t} · {STEPS[step].d}
            </h2>
          </div>
          <div className="p-6">
            {step === 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Sender company</Label>
                  <Input className="mt-1.5" defaultValue="PT Mina Bahari" />
                </div>
                <div>
                  <Label>Contact person</Label>
                  <Input className="mt-1.5" defaultValue="Anwar Hidayat" />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input className="mt-1.5" defaultValue="+62 812 5544 9921" />
                </div>
                <div>
                  <Label>Origin facility</Label>
                  <Input className="mt-1.5" defaultValue="PPS Nizam Zachman, Jakarta" />
                </div>
                <div className="md:col-span-2">
                  <Label>Pickup address</Label>
                  <Textarea
                    className="mt-1.5"
                    defaultValue="Jl. Pelabuhan Muara Baru No. 12, Penjaringan, Jakarta Utara 14440"
                  />
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Product</Label>
                  <Input className="mt-1.5" defaultValue="Frozen Tuna Loin" />
                </div>
                <div>
                  <Label>Weight (kg)</Label>
                  <Input className="mt-1.5" type="number" defaultValue="1240" />
                </div>
                <div>
                  <Label>Catch certificate</Label>
                  <Input className="mt-1.5" defaultValue="CC-2024-09182" />
                </div>
                <div>
                  <Label>Halal cert (MUI LPPOM)</Label>
                  <Input className="mt-1.5" defaultValue="MUI-LPPOM-00482-24" />
                </div>
                <div>
                  <Label>STELINA reference</Label>
                  <Input className="mt-1.5" defaultValue="STL-2024-019823" />
                </div>
                <div>
                  <Label>Vessel</Label>
                  <Input className="mt-1.5" defaultValue="KM Bahari Jaya VII" />
                </div>
                <div className="md:col-span-2 rounded-lg bg-accent p-3 text-xs text-foreground">
                  <ShieldCheck className="mr-1.5 inline h-4 w-4 text-primary" />
                  Halal certificate auto-validated against MUI LPPOM registry.
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Receiver company</Label>
                  <Input className="mt-1.5" defaultValue="Cold Storage Surabaya" />
                </div>
                <div>
                  <Label>Contact person</Label>
                  <Input className="mt-1.5" defaultValue="Indra Wibowo" />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input className="mt-1.5" defaultValue="+62 811 3309 7754" />
                </div>
                <div>
                  <Label>Expected ETA</Label>
                  <Input className="mt-1.5" type="datetime-local" defaultValue="2026-05-20T18:40" />
                </div>
                <div className="md:col-span-2">
                  <Label>Delivery address</Label>
                  <Textarea
                    className="mt-1.5"
                    defaultValue="Kawasan Industri Margomulyo Blok C-9, Surabaya 60185"
                  />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Assigned driver</Label>
                  <Input className="mt-1.5" defaultValue="Agus Pratama" />
                </div>
                <div>
                  <Label>Driver license</Label>
                  <Input className="mt-1.5" defaultValue="SIM B2 · 9182736452" />
                </div>
                <div>
                  <Label>Vehicle (Reefer)</Label>
                  <Input className="mt-1.5" defaultValue="B 9821 RFC" />
                </div>
                <div>
                  <Label>Reefer capacity</Label>
                  <Input className="mt-1.5" defaultValue="6 tons · 18 m³" />
                </div>
                <div>
                  <Label>Planned route</Label>
                  <Input
                    className="mt-1.5"
                    defaultValue="Jakarta → Cikampek → Cirebon → Semarang → Surabaya"
                  />
                </div>
                <div>
                  <Label>Estimated distance</Label>
                  <Input className="mt-1.5" defaultValue="812 km" />
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label>Product profile</Label>
                  <Input className="mt-1.5" defaultValue="Frozen Fish (-22°C to -16°C)" />
                </div>
                <div>
                  <Label>Sensor pack</Label>
                  <Input className="mt-1.5" defaultValue="SP-21 (Temp + Humidity + GPS)" />
                </div>
                <div>
                  <Label>Temp lower threshold (°C)</Label>
                  <Input className="mt-1.5" type="number" defaultValue="-22" />
                </div>
                <div>
                  <Label>Temp upper threshold (°C)</Label>
                  <Input className="mt-1.5" type="number" defaultValue="-16" />
                </div>
                <div>
                  <Label>Humidity range (%)</Label>
                  <Input className="mt-1.5" defaultValue="75 – 85" />
                </div>
                <div>
                  <Label>Sampling interval</Label>
                  <Input className="mt-1.5" defaultValue="30 seconds" />
                </div>
                <div>
                  <Label>RFID tag ID</Label>
                  <Input className="mt-1.5" defaultValue="RFID-AC8821-09F" />
                </div>
                <div>
                  <Label>Backup QR code</Label>
                  <Input className="mt-1.5" defaultValue="QR-SHP-24819" />
                </div>
              </div>
            )}
            {step === 5 && (
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-surface-muted p-4">
                  <h3 className="mb-3 text-sm font-semibold">Review summary</h3>
                  <div className="grid gap-3 text-xs md:grid-cols-2">
                    {[
                      ["Sender", "PT Mina Bahari · Jakarta"],
                      ["Product", "Frozen Tuna Loin · 1,240 kg"],
                      ["Halal cert", "MUI-LPPOM-00482-24"],
                      ["STELINA", "STL-2024-019823"],
                      ["Receiver", "Cold Storage Surabaya"],
                      ["ETA", "2026-05-20 18:40"],
                      ["Driver", "Agus Pratama · B 9821 RFC"],
                      ["Profile", "Frozen Fish -22 to -16°C · 75–85% RH"],
                      ["RFID tag", "RFID-AC8821-09F"],
                      ["Sampling", "Every 30s · SP-21"],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="flex justify-between gap-3 rounded bg-surface px-3 py-2"
                      >
                        <span className="text-muted-foreground">{k}</span>
                        <span className="font-medium text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border border-status-safe/30 bg-status-safe-soft p-3 text-xs text-status-safe">
                  <ShieldCheck className="mr-1.5 inline h-4 w-4" />
                  Ready to issue. STELINA will be notified upon generation.
                </div>
              </div>
            )}
            {step === 6 && (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-status-safe text-white">
                  <Check className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Shipment generated</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    SHP-24826 issued · STELINA mirror queued · RFID bound.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link href="/app/shipments">
                    <Button variant="outline">Back to shipments</Button>
                  </Link>
                  <Link href="/app/shipments/SHP-24826">
                    <Button>Open shipment</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {step < 6 && (
            <div className="flex items-center justify-between border-t border-border bg-surface-muted px-6 py-4">
              <Button
                variant="outline"
                type="button"
                onClick={() => prev()}
                disabled={step === 0}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>
              <div className="text-xs text-muted-foreground">All fields autosaved</div>
              <Button type="button" onClick={() => next()} className="gap-2">
                {step === 5 ? "Generate shipment" : "Continue"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
