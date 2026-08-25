"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const HERO_BG = "/header-bg.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden sm:min-h-[90vh]">
      <Image
        src={HERO_BG}
        alt="Femme marchant avec deux chiens sur une plage au coucher de soleil"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] sm:object-center"
        quality={90}
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="absolute left-0 right-0 top-0 z-10 h-16 w-full fill-cream sm:h-24"
      >
        <path d="M0 0 L0 80 C320 96 560 16 880 32 C1160 44 1320 8 1440 12 L1440 0 Z" />
      </svg>

      {/* <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-transparent via-plum-900/40 to-plum-900/70"
      /> */}
      {/* <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-transparent via-plum-900/40 to-plum-900/70"
      /> */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-plum-950/70 via-plum-900/30 to-transparent"
      />

      <div className="relative mx-auto flex max-w-7xl items-center px-6 pb-10 pt-24 sm:pb-40 sm:pt-32 lg:px-8">
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
            Éducation canine bienveillante
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-3 font-display text-3xl font-semibold leading-[1.1] text-cream sm:mt-5 sm:text-5xl lg:text-[3.6rem]"
          >
            Une relation unique,
            <br />
            <span className="relative inline-block italic text-peach-300">
              une complicité durable.
              <svg
                viewBox="0 0 320 18"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-3.5 w-full text-peach-400"
              >
                <path
                  d="M2 12C60 2 120 2 160 9C200 16 260 16 318 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-3 text-base leading-relaxed text-cream/85 sm:mt-6 sm:text-lg"
          >
            Éducatrice canine passionnée à Châteauneuf-les-Martigues et alentour,
            j&apos;accompagne votre chien vers une relation
            harmonieuse basée sur la confiance et le respect.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-6 flex flex-col gap-3.5 sm:mt-9 sm:flex-row"
          >
            <a
              href="#services"
              className={cn(
                buttonVariants({ variant: "default" }),
                "btn-shine h-12 gap-2 rounded-full bg-peach-400 px-6 text-base text-plum-950 hover:bg-peach-300",
              )}
            >
              Découvrir mes services
              <ArrowRight className="size-4" strokeWidth={1.75} />
            </a>
            <a
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-full border-cream/40 bg-transparent px-6 text-base text-cream hover:bg-cream/10 hover:text-cream",
              )}
            >
              Me contacter
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="h-16 w-full fill-cream-100 sm:h-24"
        >
          <path d="M0 32 C320 88 560 16 880 32 C1160 48 1320 12 1440 32 L1440 96 L0 96 Z" />
        </svg>
        <span className="absolute left-1/2 top-8 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-plum-200 bg-plum-100 shadow-md sm:size-16">
          <PawPrint className="size-8 text-plum-600 sm:size-9"
            fill="currentColor"
            stroke="none" />
        </span>
      </div>
    </section>
  );
}
