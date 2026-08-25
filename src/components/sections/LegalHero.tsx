"use client";

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function LegalHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-plum-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-br from-rose-500/10 via-transparent to-peach-400/10"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-28 text-center sm:pb-24 sm:pt-32 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
        >
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
            className="mt-5 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-4 text-base leading-relaxed text-cream/80"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 72"
          preserveAspectRatio="none"
          className="h-12 w-full fill-cream sm:h-16"
        >
          <path d="M0 24 C320 66 560 12 880 24 C1160 36 1320 9 1440 24 L1440 72 L0 72 Z" />
        </svg>
        <span className="absolute left-1/2 top-6 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-cream bg-peach-400 shadow-md sm:size-12">
          <PawPrint className="size-5 text-plum-900" strokeWidth={1.75} />
        </span>
      </div>
    </section>
  );
}
