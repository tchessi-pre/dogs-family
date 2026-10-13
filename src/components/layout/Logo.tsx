import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/data";

export function Logo({
  className,
  variant = "light",
}: {
  className?: string;
  /** "light" for cream backgrounds, "dark" for the plum footer */
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 animate-logo-enter motion-reduce:animate-none", className)}
      aria-label={`${BRAND.name} — retour à l'accueil`}
    >
      <span
        className={cn(
          "flex size-14 shrink-0 items-center justify-center rounded-full overflow-hidden bg-white sm:size-16",
          isDark
            ? "border-peach-400"
            : "border-plum-900",
        )}
      >
        <Image
          src="/logo2.jpeg"
          alt={`Logo ${BRAND.name}`}
          width={128}
          height={128}
          className="size-full object-cover"
          priority
          quality={100}
          unoptimized
        />
      </span>
      <span className="flex flex-col gap-0.5 leading-none">
        <span
          className={cn(
            "font-corinthia text-2xl font-bold leading-none tracking-wide",
            isDark ? "text-peach-200" : "text-plum-800",
          )}
        >
          Dog&apos;s Family
        </span>
        <span
          className={cn(
            "font-sans text-[0.65rem] font-medium uppercase tracking-widest",
            isDark ? "text-peach-300/80" : "text-plum-600",
          )}
        >
          Éducation Canine
        </span>
      </span>
    </Link>
  );
}
