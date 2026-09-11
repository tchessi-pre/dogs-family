"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import type { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  description?: ReactNode;
  /** Background image. Omit for solid plum-900 background. */
  image?: { src: string; alt: string; position?: string };
  /** Fill color of the wave that transitions to the next section. */
  waveFill?: "cream" | "plum-100";
  /** Show a cream wave at the top (for pages where the hero sits below the nav). */
  topWave?: boolean;
  /** Extra content below the description (badges, cards…). Wide=true lifts the max-width to 5xl. */
  children?: ReactNode;
  wide?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  titleItalic,
  description,
  image,
  waveFill = "cream",
  topWave = false,
  children,
  wide = false,
}: PageHeroProps) {
  const isPlum = waveFill === "plum-100";

  return (
    <section className="relative overflow-hidden bg-plum-900">
      {/* Background */}
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={image.position ? { objectPosition: image.position } : undefined}
          quality={90}
        />
      )}

      {/* Overlay */}
      <div
        aria-hidden="true"
        className={
          image
            ? "absolute inset-0 bg-linear-to-b from-plum-950/75 via-plum-900/55 to-plum-950/80"
            : "absolute inset-0 bg-linear-to-br from-rose-500/10 via-transparent to-peach-400/10"
        }
      />

      {/* Optional top wave (cream) */}
      {topWave && (
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10">
          <svg
            viewBox="0 0 1440 96"
            preserveAspectRatio="none"
            className="h-20 w-full fill-cream sm:h-24"
          >
            <path d="M0 0 L0 80 C320 96 560 16 880 32 C1160 44 1320 8 1440 12 L1440 0 Z" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-28 pt-24 text-center sm:pb-36 sm:pt-40 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          className="w-full"
        >
          {/* Text block — always capped at 2xl */}
          <div className="mx-auto max-w-2xl">
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-peach-300"
            >
              <span className="size-1.5 rounded-full bg-peach-400" />
              {eyebrow}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl"
            >
              {title}
              {titleItalic && (
                <>
                  <br />
                  <span className="italic text-peach-300">{titleItalic}</span>
                </>
              )}
            </motion.h1>

            {description && (
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="mt-6 text-base leading-relaxed text-cream/85 sm:text-lg"
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Extra content (wider if needed) */}
          {children && (
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className={`mx-auto mt-8 w-full ${wide ? "max-w-5xl" : "max-w-2xl"}`}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Bottom wave + paw medallion */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className={`h-20 w-full sm:h-24 ${isPlum ? "fill-plum-100" : "fill-cream"}`}
        >
          <path d="M0 32 C320 88 560 16 880 32 C1160 48 1320 12 1440 32 L1440 96 L0 96 Z" />
        </svg>
        <span
          className={`absolute left-1/2 top-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-cream shadow-md sm:top-12 sm:size-16 ${
            isPlum ? "bg-plum-900/90" : "bg-peach-400"
          }`}
        >
          {isPlum ? (
            <PawPrint
              className="size-6 text-peach-300 sm:size-7"
              fill="currentColor"
              stroke="none"
            />
          ) : (
            <PawPrint
              className="size-6 text-plum-900 sm:size-7"
              strokeWidth={1.75}
            />
          )}
        </span>
      </div>
    </section>
  );
}
