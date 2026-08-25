"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/contact-bg2.jpeg"
        alt="Chien attentif regardant son humain, complicité et confiance"
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
            Contact
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl"
          >
            Parlons de votre
            <br />
            <span className="italic text-peach-300">compagnon à quatre pattes</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-6 text-base leading-relaxed text-cream/85 sm:text-lg"
          >
            Une question, une envie de premier échange&nbsp;? Écrivez-moi ou
            appelez-moi, je vous réponds avec plaisir.
          </motion.p>
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
