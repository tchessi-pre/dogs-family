"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function About() {
  return (
    <section id="apropos" className="bg-plum-100 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md"
        >
          <span
            aria-hidden="true"
            className="absolute -left-12 top-12 flex size-11 items-center justify-center rounded-full sm:size-14"
          >
            <PawPrint
              className="size-8 text-plum-300 sm:size-9"
              fill="currentColor"
              stroke="none"
            />
          </span>
          <span
            aria-hidden="true"
            className="absolute -left-20 top-[38%] flex size-9 items-center justify-center"
          >
            <PawPrint className="size-8 text-plum-300 sm:size-9"
              fill="currentColor"
              stroke="none" />
          </span>
          <span
            aria-hidden="true"
            className="absolute -left-10 top-[62%] flex size-8 items-center justify-center"
          >
            <PawPrint className="size-8 text-plum-600 sm:size-9"
              fill="currentColor"
              stroke="none" />
          </span>
          <span
            aria-hidden="true"
            className="absolute -left-20 bottom-14 flex size-10 items-center justify-center"
          >
            <PawPrint className="size-8 text-plum-600 sm:size-9"
              fill="currentColor"
              stroke="none" />
          </span>
          <span
            aria-hidden="true"
            className="absolute -left-6 bottom-0 flex size-7 items-center justify-center"
          >
            <PawPrint className="size-8 text-plum-600 sm:size-9"
              fill="currentColor"
              stroke="none" />
          </span>

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-[38%_62%_55%_45%/50%_40%_60%_50%] bg-plum-200/70 blur-[2px]"
          />
          <div className="relative aspect-square w-full overflow-hidden rounded-[40%_60%_55%_45%/45%_45%_55%_55%]">
            <Image
              src="/about.jpeg"
              alt="Éducatrice canine en pleine séance avec un berger allemand, confiance et complicité"
              fill
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            À propos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-plum-900 sm:text-4xl">
            Passionnée par les chiens
            <br />
            <span className="italic text-plum-600">
              et dédiée à leur bien-être
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-plum-700">
            <p>
              Installée à Châteauneuf-les-Martigues, j&apos;ai à cœur
              d&apos;aider les chiens et leurs humains à mieux se comprendre
              pour vivre ensemble en harmonie.
            </p>
            <p>
              Mon approche est basée sur la bienveillance, le respect et des
              méthodes positives.
            </p>
          </div>

          <a
            href="/a-propos"
            className={cn(
              buttonVariants({ variant: "default" }),
              "btn-shine mt-8 h-12 gap-2 rounded-full bg-plum-900 px-6 text-base hover:bg-plum-800",
            )}
          >
            En savoir plus sur moi
            <PawPrint className="size-4" strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
