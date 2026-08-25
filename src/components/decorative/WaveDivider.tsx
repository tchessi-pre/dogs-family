import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Curved section-break used between Hero and Services, with a small
 * paw badge straddling the seam. `fillClassName` should match the
 * background color of the section that follows.
 */
export function WaveDivider({
  fillClassName = "fill-cream",
  className,
}: {
  fillClassName?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className={cn("h-16 w-full sm:h-24", fillClassName)}
      >
        <path d="M0 32C240 88 480 96 720 80C960 64 1200 16 1440 32V96H0V32Z" />
      </svg>
      <span className="absolute left-1/2 top-0 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-cream bg-peach-400 shadow-md sm:size-16">
        <PawPrint className="size-6 text-plum-900 sm:size-7" strokeWidth={1.75} />
      </span>
    </div>
  );
}
