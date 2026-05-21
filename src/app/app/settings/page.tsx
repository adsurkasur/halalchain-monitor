"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <DashboardLayout title="Settings" subtitle="Notifications, monitoring thresholds, and security.">
      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl border border-border bg-surface p-6 shadow-card">
          <h3 className="text-sm font-semibold">Notification preferences</h3>
          <p className="mt-1 text-xs text-muted-foreground">Choose how operational alerts reach your team.</p>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ["Critical alerts", "Push, SMS, Email", true],
              ["Warning alerts", "Push, Email", true],
              ["Info events", "Email digest", false],
              ["Daily operations summary", "Email at 08:00 WIB", true],
              ["STELINA sync errors", "Push, Email", true],
            ].map(([t, d, on]) => (
              <div key={t as string} className="flex items-center justify-between rounded-lg border border-border bg-surface-muted px-4 py-3">
                <div><div className="font-medium">{t}</div><div className="text-xs text-muted-foreground">{d}</div></div>
                <Switch defaultChecked={on as boolean} />
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 shadow-card">
          <h3 className="text-sm font-semibold">Monitoring thresholds</h3>
          <p className="mt-1 text-xs text-muted-foreground">Defaults applied to new shipments — override per profile.</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div><Label>Temp lower (°C)</Label><Input className="mt-1.5" type="number" defaultValue="-22" /></div>
            <div><Label>Temp upper (°C)</Label><Input className="mt-1.5" type="number" defaultValue="-16" /></div>
            <div><Label>Humidity lower (%)</Label><Input className="mt-1.5" type="number" defaultValue="75" /></div>
            <div><Label>Humidity upper (%)</Label><Input className="mt-1.5" type="number" defaultValue="85" /></div>
            <div><Label>GPS deviation (km)</Label><Input className="mt-1.5" type="number" defaultValue="1.5" /></div>
            <div><Label>Sample interval (sec)</Label><Input className="mt-1.5" type="number" defaultValue="30" /></div>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 shadow-card">
          <h3 className="text-sm font-semibold">Security</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between rounded-lg border border-border bg-surface-muted px-4 py-3"><div><div className="font-medium">Two-factor authentication</div><div className="text-xs text-muted-foreground">Required for all operators</div></div><Switch defaultChecked /></div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-surface-muted px-4 py-3"><div><div className="font-medium">SSO (Microsoft 365)</div><div className="text-xs text-muted-foreground">Connected to mina-bahari.id</div></div><Switch defaultChecked /></div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-surface-muted px-4 py-3"><div><div className="font-medium">Audit log export</div><div className="text-xs text-muted-foreground">Weekly export to compliance bucket</div></div><Switch /></div>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-surface p-6 shadow-card">
          <h3 className="text-sm font-semibold">Integrations</h3>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ["STELINA", "Two-way sync · OK", true],
              ["MUI LPPOM", "Cert registry · OK", true],
              ["GS1 Indonesia", "Disabled", false],
              ["BPOM Reporting", "Manual export only", false],
            ].map(([t, d, on]) => (
              <div key={t as string} className="flex items-center justify-between rounded-lg border border-border bg-surface-muted px-4 py-3">
                <div><div className="font-medium">{t}</div><div className="text-xs text-muted-foreground">{d}</div></div>
                <Switch defaultChecked={on as boolean} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-4 flex justify-end gap-2"><Button variant="outline">Reset</Button><Button>Save settings</Button></div>
    </DashboardLayout>
  );
}
