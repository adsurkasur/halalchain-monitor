import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Tone = "safe" | "warning" | "critical" | "active";

export function KpiCard({ label, value, delta, tone = "active" }: { label: string; value: string | number; delta?: string; tone?: Tone }) {
  const accent = {
    safe: "bg-status-safe",
    warning: "bg-status-warning",
    critical: "bg-status-critical",
    active: "bg-status-active",
  }[tone];
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-5 shadow-card">
      <div className={cn("absolute left-0 top-0 h-full w-1", accent)} />
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      <div className="mt-3 text-3xl font-semibold tracking-tight tabular-nums">{value}</div>
      {delta && <div className="mt-1 text-xs text-muted-foreground">{delta}</div>}
    </div>
  );
}
