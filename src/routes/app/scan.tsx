import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { StatusBadge } from "@/components/status-badge";
import { Button } from "@/components/ui/button";
import { ScanLine, CheckCircle2, AlertTriangle, XCircle, Smartphone, QrCode, ShieldCheck, Thermometer } from "lucide-react";

type Result = "idle" | "success" | "warning" | "mismatch";

export const Route = createFileRoute("/app/scan")({ component: Scan });

function Scan() {
  const [result, setResult] = useState<Result>("idle");

  return (
    <DashboardLayout title="Scan Validation" subtitle="Tap or scan to verify shipment authenticity and halal integrity at handover.">
      <div className="grid gap-4 lg:grid-cols-[1fr_400px]">
        {/* Scan zone */}
        <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold"><ScanLine className="h-4 w-4 text-primary" />Validation Terminal</div>
            <div className="flex gap-2"><Button variant="outline" size="sm">Reset</Button></div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-surface-muted py-16">
            <div className={`relative flex h-44 w-44 items-center justify-center rounded-full bg-surface shadow-elevated ${result === "idle" ? "animate-pulse" : ""}`}>
              <div className="absolute inset-3 rounded-full border-2 border-primary/30" />
              <div className="absolute inset-6 rounded-full border-2 border-primary/50" />
              {result === "idle" && <Smartphone className="h-12 w-12 text-primary" />}
              {result === "success" && <CheckCircle2 className="h-16 w-16 text-status-safe" />}
              {result === "warning" && <AlertTriangle className="h-16 w-16 text-status-warning" />}
              {result === "mismatch" && <XCircle className="h-16 w-16 text-status-critical" />}
            </div>
            <div className="mt-6 text-center">
              <div className="text-base font-semibold">{result === "idle" ? "Tap NFC tag or scan QR code" : result === "success" ? "Shipment verified" : result === "warning" ? "Verified · with warnings" : "Shipment mismatch"}</div>
              <div className="mt-1 text-xs text-muted-foreground">Hold the receiver device against the RFID tag on the shipment seal</div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <Button size="sm" onClick={() => setResult("success")} className="gap-2"><CheckCircle2 className="h-4 w-4" />Simulate success</Button>
              <Button size="sm" variant="outline" onClick={() => setResult("warning")} className="gap-2"><AlertTriangle className="h-4 w-4" />Simulate warning</Button>
              <Button size="sm" variant="outline" onClick={() => setResult("mismatch")} className="gap-2"><XCircle className="h-4 w-4" />Simulate mismatch</Button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-muted-foreground">
            <QrCode className="h-4 w-4" /> Backup: scan QR-SHP-24819
          </div>
        </div>

        {/* Result panel */}
        <div className="rounded-xl border border-border bg-surface p-5 shadow-card">
          <h3 className="text-sm font-semibold">Validation result</h3>
          {result === "idle" ? (
            <p className="mt-3 text-sm text-muted-foreground">Waiting for tag input…</p>
          ) : (
            <div className="mt-3 space-y-3">
              <div className="rounded-lg border border-border bg-surface-muted p-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-primary">SHP-24819</span>
                  {result === "success" && <StatusBadge tone="safe">Verified</StatusBadge>}
                  {result === "warning" && <StatusBadge tone="warning">Warning</StatusBadge>}
                  {result === "mismatch" && <StatusBadge tone="critical">Mismatch</StatusBadge>}
                </div>
                <div className="mt-2 text-sm font-semibold">Frozen Tuna Loin · 1,240 kg</div>
                <div className="text-xs text-muted-foreground">PT Mina Bahari → Cold Storage Surabaya</div>
              </div>
              <div className="space-y-2 text-xs">
                {[
                  { l: "RFID match", ok: result !== "mismatch" },
                  { l: "Halal seal intact", ok: result === "success" },
                  { l: "Temperature in range", ok: result !== "mismatch" },
                  { l: "STELINA reference verified", ok: result !== "mismatch" },
                ].map((c) => (
                  <div key={c.l} className="flex items-center justify-between rounded-md bg-surface-muted px-3 py-2">
                    <span>{c.l}</span>
                    {c.ok ? <CheckCircle2 className="h-4 w-4 text-status-safe" /> : <XCircle className="h-4 w-4 text-status-critical" />}
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-border bg-surface-muted p-3 text-xs">
                <div className="flex items-center justify-between"><span className="text-muted-foreground flex items-center gap-1.5"><Thermometer className="h-3.5 w-3.5" />Temp summary</span><span className="font-mono">-18.4°C avg</span></div>
                <div className="flex items-center justify-between mt-1"><span className="text-muted-foreground flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" />Cert</span><span className="font-mono">MUI-LPPOM-00482-24</span></div>
                <div className="flex items-center justify-between mt-1"><span className="text-muted-foreground">Timestamp</span><span className="font-mono">2026-05-20 18:38:12 WIB</span></div>
              </div>
              {result === "success" && <Button className="w-full">Confirm delivery</Button>}
              {result === "warning" && <Button variant="outline" className="w-full">Accept with note</Button>}
              {result === "mismatch" && <Button variant="destructive" className="w-full">Report mismatch</Button>}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
