import { MapPin, Navigation, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

export function TrackingMap({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-border bg-[oklch(0.96_0.01_220)]", className)}>
      {/* Grid backdrop */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(0.86 0.015 220)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Stylized landmass */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
        <path d="M40,260 C120,200 200,220 280,210 C360,200 400,160 500,170 C600,180 680,150 760,180 L760,360 C700,380 620,360 540,380 C460,400 380,380 280,400 C200,415 120,395 40,410 Z"
          fill="oklch(0.93 0.02 150)" stroke="oklch(0.78 0.04 150)" strokeWidth="1.5" />
        <path d="M120,120 C200,90 280,100 360,80 C440,60 520,90 620,70 L660,140 C580,160 500,150 420,160 C340,170 240,160 160,180 Z"
          fill="oklch(0.93 0.02 150)" stroke="oklch(0.78 0.04 150)" strokeWidth="1.5" />

        {/* Route line */}
        <path d="M120,330 Q260,260 380,290 T700,200"
          fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeDasharray="0" />
        <path d="M120,330 Q260,260 380,290"
          fill="none" stroke="var(--primary)" strokeWidth="3.5" />
        <path d="M380,290 T700,200"
          fill="none" stroke="oklch(0.7 0.04 220)" strokeWidth="2" strokeDasharray="6 4" />

        {/* Checkpoints */}
        <circle cx="120" cy="330" r="6" fill="var(--status-safe)" />
        <circle cx="120" cy="330" r="12" fill="var(--status-safe)" opacity="0.2" />
        <circle cx="260" cy="280" r="4" fill="var(--primary)" />
        <circle cx="380" cy="290" r="4" fill="var(--primary)" />
        <circle cx="540" cy="240" r="4" fill="oklch(0.7 0.04 220)" />
        <circle cx="700" cy="200" r="6" fill="var(--status-active)" />
        <circle cx="700" cy="200" r="14" fill="var(--status-active)" opacity="0.18" />

        {/* Alert marker */}
        <circle cx="460" cy="265" r="7" fill="var(--status-critical)" />
        <circle cx="460" cy="265" r="14" fill="var(--status-critical)" opacity="0.2" className="animate-ping" />
      </svg>

      {/* Vehicle marker */}
      <div className="absolute" style={{ left: "47%", top: "55%" }}>
        <div className="flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated ring-4 ring-primary/20">
          <Navigation className="h-4 w-4 rotate-45" />
        </div>
      </div>

      {/* Legend */}
      {!compact && (
        <div className="absolute bottom-3 left-3 flex gap-2 rounded-lg border border-border bg-surface/90 px-3 py-2 text-xs shadow-card backdrop-blur">
          <span className="flex items-center gap-1.5"><Anchor className="h-3 w-3 text-status-safe" /> Origin</span>
          <span className="flex items-center gap-1.5"><Navigation className="h-3 w-3 text-primary" /> Vehicle</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-status-active" /> Destination</span>
        </div>
      )}

      {/* Scale */}
      <div className="absolute right-3 top-3 rounded-md border border-border bg-surface/90 px-2 py-1 text-[10px] font-medium text-muted-foreground backdrop-blur">
        1 : 250 000
      </div>
    </div>
  );
}
