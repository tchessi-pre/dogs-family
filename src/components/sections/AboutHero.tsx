"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, PawPrint } from "lucide-react";

import { BRAND } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/about-header-bg.jpeg"
        alt="Éducatrice canine complice avec un chien en pleine nature"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={90}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-plum-950/75 via-plum-900/55 to-plum-950/80"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-32 text-center sm:pb-32 sm:pt-40 lg:px-8">
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
            À propos
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl"
          >
            {BRAND.educator}
            <br />
            <span className="italic text-peach-300">
              Éducatrice canine &amp; comportementaliste
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-6 text-base leading-relaxed text-cream/85 sm:text-lg"
          >
            Des méthodes bienveillantes et respectueuses, pensées pour
            chaque chien et chaque humain.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-sm text-cream backdrop-blur-sm">
              <MapPin className="size-4 text-peach-300" strokeWidth={1.75} />
              {BRAND.city} &amp; alentours
            </span>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-sm text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
            >
              <Phone className="size-4 text-peach-300" strokeWidth={1.75} />
              {BRAND.phone}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="h-16 w-full fill-cream sm:h-24"
        >
          <path d="M0 32 C320 88 560 16 880 32 C1160 48 1320 12 1440 32 L1440 96 L0 96 Z" />
        </svg>
        <span className="absolute left-1/2 top-8 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-cream bg-peach-400 shadow-md sm:size-16">
          <PawPrint className="size-6 text-plum-900 sm:size-7" strokeWidth={1.75} />
        </span>
      </div>
    </section>
  );
}
