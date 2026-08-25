"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 overflow-hidden px-6 pt-28 pb-24 text-center sm:px-12 sm:pt-36 sm:pb-32 lg:flex-row lg:items-center lg:justify-between lg:text-left"
      >
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/contact-bg.png"
            alt="Paysage coucher de soleil sur la montagne, ambiance douce"
            fill
            sizes="(min-width: 1024px) 80vw, 90vw"
            className="object-cover"
            quality={90}
          />
        </div>

        <div aria-hidden="true" className="absolute top-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="h-20 w-full fill-cream sm:h-28 lg:h-30"
          >
            <path d="M0 0 L0 84 C320 108 640 24 960 56 C1200 78 1360 32 1440 48 L1440 0 Z" />
          </svg>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-plum-900/55 via-plum-900/50 to-plum-950/70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-br from-rose-500/15 via-transparent to-peach-400/10"
        />

        <div className="relative z-10 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:text-left">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-cream bg-cream text-peach-300 shadow-md">
            <PawPrint className="size-6 text-plum-900" strokeWidth={1.75} fill="8" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold leading-snug text-cream sm:text-3xl">
              Prêt à transformer votre quotidien avec votre chien&nbsp;?
            </h2>
            <p className="mt-2 text-sm text-cream/80 sm:text-base">
              Contactez-moi dès aujourd&apos;hui pour un premier échange !
            </p>
          </div>
        </div>

        <a
          href="/contact"
          className={cn(
            buttonVariants({ variant: "default" }),
            "btn-shine relative z-10 h-12 shrink-0 gap-2 rounded-full bg-cream px-7 text-base text-plum-900 hover:bg-cream/90",
          )}
        >
          Prendre rendez-vous
          <PawPrint className="size-4" strokeWidth={1.75} />
        </a>
      </motion.div>

      {/* <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-20 w-full fill-plum-900 sm:h-28 lg:h-32"
        >
          <path d="M0 72 C320 16 640 100 960 64 C1200 40 1360 88 1440 72 L1440 120 L0 120 Z" />
        </svg>
      </div> */}
    </section>
  );
}
