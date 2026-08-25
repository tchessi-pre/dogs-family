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
      href="#accueil"
      className={cn("flex items-center gap-3", className)}
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
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight">
          Dog&apos;s{" "}
          <span
            className={cn(
              "italic",
              isDark ? "text-peach-300" : "text-plum-600",
            )}
          >
            Family
          </span>
        </span>
      </span>
    </Link>
  );
}
