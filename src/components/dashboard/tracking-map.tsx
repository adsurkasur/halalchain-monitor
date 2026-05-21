"use client";

import dynamic from 'next/dynamic';

const RealTrackingMap = dynamic(
  () => import('./real-tracking-map').then((mod) => mod.RealTrackingMap),
  { ssr: false, loading: () => <div className="h-full w-full bg-surface-muted animate-pulse rounded-xl border border-border" /> }
);

export function TrackingMap({ className, compact = false }: { className?: string; compact?: boolean }) {
  return <RealTrackingMap className={className} compact={compact} />;
}
