"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/">
            <BrandLogo />
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <Link
              href="/"
              className={pathname === "/" ? "text-foreground" : "hover:text-foreground"}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={pathname === "/features" ? "text-foreground" : "hover:text-foreground"}
            >
              Features
            </Link>
            <Link
              href="/about"
              className={pathname === "/about" ? "text-foreground" : "hover:text-foreground"}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-foreground" : "hover:text-foreground"}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </Link>
            <Link href="/app">
              <Button size="sm">Open platform</Button>
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-surface-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <BrandLogo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Industrial-grade halal cold chain traceability for Indonesia's fish logistics — built
              on IoT, RFID/NFC, and STELINA integration.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Platform
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/features" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Compliance
            </div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>MUI LPPOM Halal</li>
              <li>STELINA Integrated</li>
              <li>ISO 22000 Aligned</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row">
            <span>© 2026 HalalChain Logistics. All rights reserved.</span>
            <span>v1.0 · Operational Build</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
