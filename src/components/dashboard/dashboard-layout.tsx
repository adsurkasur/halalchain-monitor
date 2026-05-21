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
  Moon,
  Sun,
  LogOut,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useAppStore } from "@/lib/store";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const NAV = [
  { href: "/app", label: "Overview", icon: LayoutGrid, exact: true, roles: ["sender", "admin"] },
  { href: "/app/shipments", label: "Shipments", icon: Package, roles: ["sender", "admin"] },
  { href: "/app/tracking", label: "Tracking", icon: Map, roles: ["sender", "admin"] },
  { href: "/app/scan", label: "Scan Validation", icon: ScanLine, roles: ["receiver", "admin"] },
  { href: "/app/alerts", label: "Alerts", icon: Bell, badge: 5, roles: ["sender", "receiver", "admin"] },
  { href: "/app/history", label: "History", icon: History, roles: ["sender", "receiver", "admin"] },
];

const ACCOUNT = [
  { href: "/app/profile", label: "Profile", icon: User },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

function SidebarComponent({ collapsed, pathname }: { collapsed: boolean; pathname: string }) {
  const { role, setRole } = useAppStore();
  const isActive = (href: string, exact?: boolean) => (exact ? pathname === href : pathname === href || pathname.startsWith(href + "/"));

  const filteredNav = NAV.filter(item => item.roles.includes(role));

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
          {filteredNav.map((item) => {
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
          <li>
            <Link href="/login" className="flex items-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium transition-colors text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground">
              <LogOut className="h-4 w-4 shrink-0" />
              {!collapsed && <span>Sign out</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <button
          onClick={() => setRole(role === "sender" ? "receiver" : "sender")}
          className={cn(
            "flex w-full items-center gap-3 rounded-md px-2.5 py-2 text-left transition-colors hover:bg-sidebar-accent/60",
            !collapsed && "bg-sidebar-accent/50"
          )}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sidebar-primary text-sm font-semibold text-sidebar-primary-foreground">
            {role === "sender" ? "PT" : "RC"}
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-semibold">
                {role === "sender" ? "PT Mina Bahari" : "Cold Storage SBY"}
              </div>
              <div className="truncate text-[10px] text-sidebar-foreground/60">
                {role === "sender" ? "Role: Sender (Company)" : "Role: Receiver"}
              </div>
            </div>
          )}
        </button>
      </div>
    </aside>
  );
}

export function DashboardLayout({ children, title, subtitle, actions }: { children: React.ReactNode; title?: string; subtitle?: string; actions?: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "";
  const { theme, setTheme } = useTheme();

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
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <span className="hidden items-center gap-1.5 rounded-full bg-status-safe-soft px-2.5 py-1 text-xs font-medium text-status-safe ring-1 ring-status-safe/20 sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-status-safe animate-pulse" /> Live · STELINA OK
              </span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/app/alerts">
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-4 w-4" />
                      <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-status-critical" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Alerts</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle Theme</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/app/guide">
                    <Button variant="ghost" size="icon"><HelpCircle className="h-4 w-4" /></Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Operations Guide</TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
