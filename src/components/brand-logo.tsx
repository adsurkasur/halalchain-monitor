import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const color = variant === "light" ? "text-sidebar-foreground" : "text-foreground";
  const mark =
    variant === "light"
      ? "bg-sidebar-primary text-sidebar-primary-foreground"
      : "bg-primary text-primary-foreground";
  return (
    <div className={cn("flex items-center gap-2.5", color, className)}>
      <div className={cn("flex h-8 w-8 items-center justify-center rounded-md shadow-sm", mark)}>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12c3-4 7-4 10 0s7 4 10 0" />
          <circle cx="17" cy="8" r="1" fill="currentColor" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-tight">HalalChain</div>
        <div className="text-[10px] uppercase tracking-[0.14em] opacity-60">Fish Traceability</div>
      </div>
    </div>
  );
}
