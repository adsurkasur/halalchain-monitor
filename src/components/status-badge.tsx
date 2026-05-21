import { cn } from "@/lib/utils";

type Tone = "safe" | "warning" | "critical" | "active" | "neutral";

const TONE_MAP: Record<Tone, string> = {
  safe: "bg-status-safe-soft text-status-safe ring-status-safe/20",
  warning: "bg-status-warning-soft text-status-warning ring-status-warning/20",
  critical: "bg-status-critical-soft text-status-critical ring-status-critical/20",
  active: "bg-status-active-soft text-status-active ring-status-active/20",
  neutral: "bg-muted text-muted-foreground ring-border",
};

export function StatusBadge({
  tone = "neutral",
  children,
  dot = true,
  className,
}: {
  tone?: Tone;
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset whitespace-nowrap",
        TONE_MAP[tone],
        className,
      )}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full", {
            "bg-status-safe": tone === "safe",
            "bg-status-warning": tone === "warning",
            "bg-status-critical": tone === "critical",
            "bg-status-active animate-pulse": tone === "active",
            "bg-muted-foreground": tone === "neutral",
          })}
        />
      )}
      {children}
    </span>
  );
}

export function statusTone(s: string): Tone {
  if (s === "Delivered") return "safe";
  if (s === "In Transit") return "active";
  if (s === "Delayed" || s === "Validation Pending") return "warning";
  if (s === "Integrity Warning" || s === "Cold Chain Risk") return "critical";
  if (s === "Maintained") return "safe";
  if (s === "Warning") return "warning";
  if (s === "Risk Detected") return "critical";
  if (s === "Critical") return "critical";
  if (s === "Info") return "active";
  return "neutral";
}
