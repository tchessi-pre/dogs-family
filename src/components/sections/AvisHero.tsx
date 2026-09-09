"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PawPrint, Star, ShieldCheck, PenSquare } from "lucide-react";

import { GOOGLE_REVIEWS_META, REVIEW_TAGS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GoogleMapsLink } from "@/components/ui/google-maps-link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AvisHero() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden sm:min-h-[70vh]">
      <Image
        src="/contact-bg.png"
        alt="Paysage apaisant au coucher de soleil"
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-24 sm:pb-36 sm:pt-40 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.14 } } }}
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-peach-300"
          >
            <span className="size-1.5 rounded-full bg-peach-400" />
            Avis clients · Google
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-3 font-display text-3xl font-semibold leading-[1.1] text-cream sm:mt-5 sm:text-5xl"
          >
            La parole aux
            <br />
            <span className="italic text-peach-300">
              familles accompagnées
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mt-3 max-w-2xl text-base leading-relaxed text-cream/85 sm:mt-6 sm:text-lg"
          >
            Retrouvez les {GOOGLE_REVIEWS_META.total} avis laissés sur Google
            par les propriétaires que j&apos;ai accompagnés. Réactivité,
            éducation, maintrailing ou balades collectives — tout y passe.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 grid w-full grid-cols-1 gap-5 rounded-3xl border border-cream/10 bg-white/10 p-5 backdrop-blur-md sm:mt-10 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-7"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-cream/95 shadow-lg sm:size-16">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 48 48"
                  className="size-7 sm:size-8"
                >
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.2c-2 1.4-4.6 2.4-7.3 2.4-5.2 0-9.6-3.4-11.2-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C41 35.4 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-cream px-3 py-1 font-display text-base font-semibold text-plum-900 sm:text-lg">
                    {GOOGLE_REVIEWS_META.rating.toFixed(1)}
                    <span className="ml-1 flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-peach-400 text-peach-400 sm:size-4.5"
                          strokeWidth={0}
                        />
                      ))}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/5 px-3 py-1 text-xs text-cream/90">
                    <ShieldCheck className="size-3.5 text-peach-300" strokeWidth={1.75} />
                    {GOOGLE_REVIEWS_META.verified
                      ? "Avis vérifiés"
                      : "Les avis ne sont pas vérifiés"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-cream/85 sm:text-base">
                  {GOOGLE_REVIEWS_META.total} avis Google · 100% 5 étoiles
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:justify-center">
              {REVIEW_TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/10 px-3 py-1 text-xs font-medium text-cream shadow-sm backdrop-blur"
                >
                  <span className="text-peach-300">{tag.label}</span>
                  <span className="rounded-full bg-peach-300/90 px-1.5 py-px text-[0.65rem] font-semibold text-plum-950">
                    {tag.count}
                  </span>
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-cream/25 bg-cream/5 px-3 py-1 text-[0.7rem] text-cream/80">
                + 5
              </span>
            </div>

            <GoogleMapsLink
              aria-label="Ajouter un avis Google"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "group w-full gap-2 rounded-2xl bg-cream text-plum-900 shadow-lg shadow-plum-950/10",
                "hover:bg-peach-300 hover:text-plum-950",
                "active:scale-[0.98] sm:w-auto",
              )}
            >
              <PenSquare className="size-4 transition-transform group-hover:rotate-[-4deg]" strokeWidth={1.75} />
              Ajouter un avis
            </GoogleMapsLink>
          </motion.div>
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
