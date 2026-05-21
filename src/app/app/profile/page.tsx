"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck } from "lucide-react";

export default function Profile() {
  return (
    <DashboardLayout title="Profile" subtitle="Company and operator details.">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-6 shadow-card lg:col-span-2">
          <h3 className="text-sm font-semibold">Company profile</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div><Label>Company name</Label><Input className="mt-1.5" defaultValue="PT Mina Bahari" /></div>
            <div><Label>Business type</Label><Input className="mt-1.5" defaultValue="Fishery Exporter" /></div>
            <div><Label>NPWP</Label><Input className="mt-1.5" defaultValue="01.234.567.8-091.000" /></div>
            <div><Label>MUI LPPOM ID</Label><Input className="mt-1.5" defaultValue="LPPOM-EXP-09182" /></div>
            <div><Label>STELINA account</Label><Input className="mt-1.5" defaultValue="STL-OPR-019823" /></div>
            <div><Label>Primary contact</Label><Input className="mt-1.5" defaultValue="Anwar Hidayat" /></div>
            <div className="md:col-span-2"><Label>Address</Label><Textarea className="mt-1.5" defaultValue="Jl. Pelabuhan Muara Baru No. 12, Penjaringan, Jakarta Utara 14440" /></div>
          </div>
          <div className="mt-5 flex justify-end gap-2"><Button variant="outline">Cancel</Button><Button>Save changes</Button></div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-semibold">AN</div>
              <div className="mt-3 text-base font-semibold">Anwar Hidayat</div>
              <div className="text-xs text-muted-foreground">Operations · Company role</div>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-status-safe-soft px-2.5 py-1 text-xs font-medium text-status-safe"><ShieldCheck className="h-3 w-3" />Verified operator</div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 shadow-card">
            <h4 className="text-sm font-semibold">Account stats</h4>
            <div className="mt-3 space-y-2 text-sm">
              {[["Shipments created", "2,184"], ["Active fleet", "31"], ["MTTR avg", "2.8 min"], ["Compliance score", "98.4%"]].map(([k, v]) => (
                <div key={k} className="flex justify-between"><span className="text-muted-foreground">{k}</span><span className="font-semibold tabular-nums">{v}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
