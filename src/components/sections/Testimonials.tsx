"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  PenSquare,
  ArrowUpDown,
} from "lucide-react";

import {
  GOOGLE_REVIEWS_META,
  REVIEW_TAGS,
  TESTIMONIALS,
} from "@/lib/data";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { GoogleMapsLink } from "@/components/ui/google-maps-link";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 9000;

function rotate<T>(items: T[], by: number): T[] {
  const n = items.length;
  const shift = ((by % n) + n) % n;
  return [...items.slice(shift), ...items.slice(0, shift)];
}

export function Testimonials() {
  const [order, setOrder] = useState(TESTIMONIALS);
  const [paused, setPaused] = useState(false);

  const visibleTriplet = useMemo(() => order.slice(0, 3), [order]);

  useEffect(
    function autoAdvanceTestimonials() {
      if (paused) return;
      const id = window.setInterval(() => {
        setOrder((prev) => rotate(prev, 3));
      }, AUTO_ADVANCE_MS);
      return function cleanupAutoAdvance() {
        window.clearInterval(id);
      };
    },
    [paused],
  );

  function goNext() {
    setOrder((prev) => rotate(prev, 3));
  }

  function goPrev() {
    setOrder((prev) => rotate(prev, -3));
  }

  return (
    <section
      id="temoignages"
      className="bg-cream py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Avis Google
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-plum-900 sm:text-4xl">
            25 familles déjà accompagnées
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-plum-700 sm:text-base">
            Tous ces avis ont été laissés directement sur Google par des clients
            réellement accompagnés par Léa.
          </p>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col gap-6 rounded-3xl border border-plum-900/5 bg-white/80 p-5 shadow-sm shadow-plum-900/5 backdrop-blur sm:flex-row sm:items-stretch sm:justify-between sm:p-7">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex shrink-0 size-14 items-center justify-center rounded-2xl bg-white ring-1 ring-plum-900/10 shadow-sm sm:size-16">
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
            <div className="flex-1 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-plum-900 px-3 py-1 font-display text-sm font-semibold text-cream sm:text-base">
                  {GOOGLE_REVIEWS_META.rating.toFixed(1)}
                  <span className="sr-only">sur 5</span>
                  <span className="ml-1 flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-peach-300 text-peach-300 sm:size-4"
                        strokeWidth={0}
                      />
                    ))}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-plum-900/5 bg-plum-50 px-3 py-1 text-xs text-plum-700">
                  <ShieldCheck className="size-3.5 text-plum-500" strokeWidth={1.75} />
                  {GOOGLE_REVIEWS_META.verified
                    ? "Avis vérifiés"
                    : "Les avis ne sont pas vérifiés"}
                </span>
              </div>
              <p className="mt-3 font-display text-lg font-semibold leading-tight text-plum-900 sm:text-xl">
                Note globale Google — {GOOGLE_REVIEWS_META.total} avis
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {REVIEW_TAGS.map((tag) => (
                  <span
                    key={tag.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-plum-900/10 bg-white px-3 py-1 text-xs font-medium text-plum-800 shadow-sm"
                  >
                    <span className="text-plum-500">{tag.label}</span>
                    <span className="rounded-full bg-peach-300/80 px-1.5 py-px text-[0.65rem] font-semibold text-plum-950">
                      {tag.count}
                    </span>
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-plum-900/15 bg-plum-50 px-3 py-1 text-[0.7rem] text-plum-500">
                  + 5
                </span>
                <span className="ml-auto hidden items-center gap-1.5 rounded-full border border-plum-900/10 bg-white px-3 py-1 text-xs text-plum-600 shadow-sm sm:inline-flex">
                  <ArrowUpDown className="size-3.5" strokeWidth={1.75} />
                  Trier par : les plus pertinents
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-end sm:flex-col sm:justify-between sm:gap-3">
            <GoogleMapsLink
              aria-label="Ajouter un avis Google"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group w-full gap-2 rounded-2xl border-plum-900/10 bg-white text-plum-900 shadow-sm",
                "hover:bg-plum-900 hover:text-cream hover:border-plum-900",
                "active:scale-[0.98]",
              )}
            >
              <PenSquare className="size-4 transition-transform group-hover:rotate-[-4deg]" strokeWidth={1.75} />
              Ajouter un avis
            </GoogleMapsLink>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 -left-4 hidden items-center lg:-left-14 lg:flex">
            <Button
              variant="outline"
              size="icon-lg"
              className="pointer-events-auto rounded-full border-plum-900/15 bg-white shadow-sm active:scale-95"
              aria-label="Témoignage précédent"
              onClick={goPrev}
            >
              <ChevronLeft className="size-5" strokeWidth={1.75} />
            </Button>
          </div>
          <div className="pointer-events-none absolute inset-y-0 -right-4 hidden items-center lg:-right-14 lg:flex">
            <Button
              variant="outline"
              size="icon-lg"
              className="pointer-events-auto rounded-full border-plum-900/15 bg-white shadow-sm active:scale-95"
              aria-label="Témoignage suivant"
              onClick={goNext}
            >
              <ChevronRight className="size-5" strokeWidth={1.75} />
            </Button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={visibleTriplet.map((t) => t.id).join("-")}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visibleTriplet.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-4 lg:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-plum-900/15 bg-white active:scale-95"
              aria-label="Témoignage précédent"
              onClick={goPrev}
            >
              <ChevronLeft className="size-4" strokeWidth={1.75} />
            </Button>

            <div className="flex items-center gap-1.5 text-[0.72rem] text-plum-500">
              {Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }).map((_, i) => {
                const currentIndex =
                  TESTIMONIALS.findIndex((t) => t.id === visibleTriplet[0]?.id) / 3;
                const isActive = Math.round(currentIndex) === i;
                return (
                  <span
                    key={i}
                    aria-hidden="true"
                    className={cn(
                      "h-1.5 rounded-full transition-colors",
                      isActive ? "w-6 bg-plum-900" : "w-1.5 bg-plum-300",
                    )}
                  />
                );
              })}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-plum-900/15 bg-white active:scale-95"
              aria-label="Témoignage suivant"
              onClick={goNext}
            >
              <ChevronRight className="size-4" strokeWidth={1.75} />
            </Button>
          </div>

          <div className="mt-8 hidden items-center justify-center gap-1.5 lg:flex">
            {Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }).map((_, i) => {
              const currentIndex =
                TESTIMONIALS.findIndex((t) => t.id === visibleTriplet[0]?.id) / 3;
              const isActive = Math.round(currentIndex) === i;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`Aller aux avis n°${i + 1}`}
                  onClick={() =>
                    setOrder(rotate(TESTIMONIALS, i * 3))
                  }
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    isActive
                      ? "w-8 bg-plum-900 hover:bg-plum-800"
                      : "w-1.5 bg-plum-300 hover:bg-plum-400",
                  )}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
