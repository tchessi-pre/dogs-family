"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function PricingHero() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden sm:min-h-[70vh]">
      <Image
        src="/contact-bg.png"
        alt="Paysage apaisant au coucher de soleil, ambiance douce"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] sm:object-center"
        quality={90}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-plum-950/70 via-plum-900/55 to-plum-950/80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-plum-950/65 via-plum-950/20 to-transparent sm:from-transparent"
      />

      <div aria-hidden="true" className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="h-20 w-full fill-cream sm:h-24"
        >
          <path d="M0 0 L0 80 C320 96 560 16 880 32 C1160 44 1320 8 1440 12 L1440 0 Z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-28 pt-24 text-center sm:pb-36 sm:pt-40 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-peach-300"
          >
            <span className="size-1.5 rounded-full bg-peach-400" />
            Tarifs
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-3 font-display text-3xl font-semibold leading-[1.1] text-cream sm:mt-5 sm:text-5xl"
          >
            Des tarifs
            <br />
            <span className="italic text-peach-300">clairs et sans surprise</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-3 text-base leading-relaxed text-cream/85 sm:mt-6 sm:text-lg"
          >
            Retrouvez toutes mes prestations, à l&apos;unité ou en forfait,
            pour accompagner votre chien à votre rythme.
          </motion.p>
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="h-20 w-full fill-plum-100 sm:h-24"
        >
          <path d="M0 32 C320 88 560 16 880 32 C1160 48 1320 12 1440 32 L1440 96 L0 96 Z" />
        </svg>
        <span className="absolute left-1/2 top-10 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-cream bg-plum-900/90 shadow-md sm:top-12 sm:size-16">
          <PawPrint
            className="size-6 text-peach-300 sm:size-7"
            fill="currentColor"
            stroke="none"
          />
        </span>
      </div>
    </section>
  );
}
