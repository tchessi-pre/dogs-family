import { cn } from "@/lib/utils";

/**
 * Repeating pine-tree silhouette used as a low-opacity watermark along
 * the bottom edge of the CTA banner.
 */
export function TreeSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("w-full", className)}
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const x = i * 140 + (i % 2 === 0 ? 0 : 40);
        const h = i % 3 === 0 ? 150 : i % 2 === 0 ? 110 : 130;
        return (
          <g key={i} transform={`translate(${x}, ${160 - h})`}>
            <polygon
              points={`30,0 60,${h * 0.42} 12,${h * 0.42} 48,${h * 0.72} 0,${h * 0.72} 30,${h}`}
              fill="currentColor"
            />
            <rect x="26" y={h - 4} width="8" height="14" fill="currentColor" />
          </g>
        );
      })}
    </svg>
  );
}
