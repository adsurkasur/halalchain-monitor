"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Package,
  Map,
  ScanLine,
  Bell,
  History,
  User,
  Settings,
  Menu,
  Search,
  HelpCircle,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NAV = [
  { href: "/app", label: "Overview", icon: LayoutGrid, exact: true },
  { href: "/app/shipments", label: "Shipments", icon: Package },
  { href: "/app/tracking", label: "Tracking", icon: Map },
  { href: "/app/scan", label: "Scan Validation", icon: ScanLine },
  { href: "/app/alerts", label: "Alerts", icon: Bell, badge: 5 },
  { href: "/app/history", label: "History", icon: History },
];

const ACCOUNT = [
  { href: "/app/profile", label: "Profile", icon: User },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

function SidebarComponent({ collapsed, pathname }: { collapsed: boolean; pathname: string }) {
  const isActive = (href: string, exact?: boolean) => (exact ? pathname === href : pathname === href || pathname.startsWith(href + "/"));

  return (
    <aside className={cn("flex h-full flex-col bg-sidebar text-sidebar-foreground transition-[width] duration-200", collapsed ? "w-[68px]" : "w-64")}>
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
        {collapsed ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12c3-4 7-4 10 0s7 4 10 0" /></svg>
          </div>
        ) : (
          <BrandLogo variant="light" />
        )}
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {!collapsed && <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">Operations</div>}
        <ul className="space-y-0.5">
          {NAV.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                    active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground",
                  )}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span className="flex-1">{item.label}</span>}
                  {!collapsed && item.badge && (
                    <span className="rounded-full bg-status-critical px-1.5 py-px text-[10px] font-semibold text-white">{item.badge}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        {!collapsed && <div className="mt-6 mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-sidebar-foreground/50">Account</div>}
        <ul className="space-y-0.5">
          {ACCOUNT.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} className={cn("flex items-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium transition-colors", active ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground")}>
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-sidebar-border p-3">
        {!collapsed ? (
          <div className="flex items-center gap-3 rounded-md bg-sidebar-accent/50 px-2.5 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sm font-semibold text-sidebar-primary-foreground">AN</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-semibold">Anwar Hidayat</div>
              <div className="truncate text-[10px] text-sidebar-foreground/60">Operations · Company</div>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sm font-semibold text-sidebar-primary-foreground">AN</div>
        )}
      </div>
    </aside>
  );
}

export function DashboardLayout({ children, title, subtitle, actions }: { children: React.ReactNode; title?: string; subtitle?: string; actions?: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "";

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      <div className="hidden md:block">
        <SidebarComponent collapsed={collapsed} pathname={pathname} />
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full">
            <SidebarComponent collapsed={collapsed} pathname={pathname} />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border bg-surface px-4 md:px-6">
          <button onClick={() => setMobileOpen(true)} className="md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
          <button onClick={() => setCollapsed((c) => !c)} className="hidden text-muted-foreground hover:text-foreground md:inline-flex" aria-label="Toggle sidebar">
            {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>
          <div className="hidden flex-1 max-w-md md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search shipments, IDs, drivers…" className="h-9 pl-9 bg-surface-muted border-border" />
            </div>
          </div>
          <div className="flex-1 md:hidden" />
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full bg-status-safe-soft px-2.5 py-1 text-xs font-medium text-status-safe ring-1 ring-status-safe/20 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-status-safe animate-pulse" /> Live · STELINA OK
            </span>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-status-critical" />
            </Button>
            <Button variant="ghost" size="icon"><HelpCircle className="h-4 w-4" /></Button>
          </div>
        </header>

        {(title || actions) && (
          <div className="flex flex-col gap-3 border-b border-border bg-surface px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              {title && <h1 className="text-xl font-semibold tracking-tight">{title}</h1>}
              {subtitle && <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>}
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        )}

        <main className="flex-1 overflow-y-auto bg-background">
          <div className="mx-auto w-full max-w-[1600px] px-4 py-6 md:px-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
