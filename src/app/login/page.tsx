import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck, ArrowRight, Anchor } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in — HalalChain",
  description: "Sign in to the HalalChain operations console.",
};

export default function Login() {
  return (
    <div className="grid min-h-screen md:grid-cols-2">
      {/* Branding panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-sidebar p-10 text-sidebar-foreground md:flex">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <Link href="/">
          <BrandLogo variant="light" />
        </Link>
        <div className="relative z-10">
          <ShieldCheck className="h-10 w-10 text-sidebar-primary" />
          <h2 className="mt-6 max-w-md text-3xl font-semibold tracking-tight">
            Operational trust for halal cold chain logistics.
          </h2>
          <p className="mt-3 max-w-md text-sm text-sidebar-foreground/70">
            Every shipment. Every sensor. Every signature. One auditable platform — from dock to
            receiver.
          </p>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-sidebar-border pt-6">
            {[
              { v: "99.97%", l: "Uptime" },
              { v: "12k+", l: "Shipments" },
              { v: "<3 min", l: "Response" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-xl font-semibold">{s.v}</div>
                <div className="text-[10px] uppercase tracking-wider text-sidebar-foreground/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 flex items-center gap-2 text-xs text-sidebar-foreground/60">
          <Anchor className="h-3 w-3" /> STELINA-integrated · MUI LPPOM compliant
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-background p-6 md:p-10">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-8">
            <Link href="/">
              <BrandLogo />
            </Link>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Sign in to the console</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Welcome back. Resume operational monitoring.
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <Label>Work email</Label>
              <Input className="mt-1.5" type="email" placeholder="anwar@minabahari.id" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label>Password</Label>
                <Link href="#" className="text-xs font-medium text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input className="mt-1.5" type="password" placeholder="••••••••" />
            </div>
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <Checkbox /> Keep me signed in for 30 days
            </label>
            <Link href="/app" className="block">
              <Button type="button" className="w-full gap-2" size="lg">
                Sign in <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> Single sign-on{" "}
            <div className="h-px flex-1 bg-border" />
          </div>
          <Button variant="outline" className="w-full">
            Continue with SSO
          </Button>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            New to HalalChain?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Talk to operations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
