import { MarketingLayout } from "@/components/marketing/marketing-layout";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — HalalChain",
  description: "Talk to the HalalChain operations team about deploying halal cold chain traceability.",
  openGraph: {
    title: "Contact — HalalChain",
    description: "Talk to the HalalChain operations team about deploying halal cold chain traceability.",
  }
};

export default function Contact() {
  return (
    <MarketingLayout>
      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">Contact</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Let's get your shipments traced.</h1>
          <p className="mt-4 text-lg text-muted-foreground">Operations, integration, or audit questions — we route you to the right desk within one business day.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="space-y-4 md:col-span-1">
          {[
            { i: Mail, t: "Email", v: "ops@halalchain.id" },
            { i: Phone, t: "Phone", v: "+62 21 5050 8800" },
            { i: MapPin, t: "Office", v: "Menara BRI 22F, Jakarta Pusat" },
            { i: Building2, t: "Operations", v: "Bitung · Surabaya · Makassar" },
          ].map((c) => (
            <div key={c.t} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary"><c.i className="h-4 w-4" /></div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.t}</div>
                <div className="text-sm font-semibold">{c.v}</div>
              </div>
            </div>
          ))}
        </div>

        <form className="md:col-span-2 rounded-xl border border-border bg-surface p-6 shadow-card">
          <div className="grid gap-4 md:grid-cols-2">
            <div><Label>Full name</Label><Input className="mt-1.5" placeholder="Anwar Hidayat" /></div>
            <div><Label>Company</Label><Input className="mt-1.5" placeholder="PT Mina Bahari" /></div>
            <div><Label>Email</Label><Input className="mt-1.5" type="email" placeholder="anwar@minabahari.id" /></div>
            <div><Label>Phone</Label><Input className="mt-1.5" placeholder="+62 ..." /></div>
          </div>
          <div className="mt-4"><Label>What can we help with?</Label><Textarea className="mt-1.5 min-h-32" placeholder="Tell us about your fleet, cold chain SOPs, and integration needs." /></div>
          <div className="mt-5 flex justify-end"><Button size="lg">Send inquiry</Button></div>
        </form>
      </section>
    </MarketingLayout>
  );
}
