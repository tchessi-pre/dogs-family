"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { TESTIMONIALS } from "@/lib/data";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { Button } from "@/components/ui/button";

const AUTO_ADVANCE_MS = 6000;

function rotate<T>(items: T[], by: number): T[] {
  const n = items.length;
  const shift = ((by % n) + n) % n;
  return [...items.slice(shift), ...items.slice(0, shift)];
}

export function Testimonials() {
  const [order, setOrder] = useState(TESTIMONIALS);

  useEffect(function autoAdvanceTestimonials() {
    const id = window.setInterval(() => {
      setOrder((prev) => rotate(prev, 1));
    }, AUTO_ADVANCE_MS);
    return function cleanupAutoAdvance() {
      window.clearInterval(id);
    };
  }, []);

  function goNext() {
    setOrder((prev) => rotate(prev, 1));
  }

  function goPrev() {
    setOrder((prev) => rotate(prev, -1));
  }

  return (
    <section id="temoignages" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Témoignages
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-plum-900 sm:text-4xl">
            Ils me font confiance
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 -left-4 hidden items-center lg:-left-14 lg:flex">
            <Button
              variant="outline"
              size="icon-lg"
              className="pointer-events-auto rounded-full border-plum-900/15 bg-white shadow-sm"
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
              className="pointer-events-auto rounded-full border-plum-900/15 bg-white shadow-sm"
              aria-label="Témoignage suivant"
              onClick={goNext}
            >
              <ChevronRight className="size-5" strokeWidth={1.75} />
            </Button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={order.map((t) => t.id).join("-")}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-3"
            >
              {order.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-plum-900/15 bg-white"
              aria-label="Témoignage précédent"
              onClick={goPrev}
            >
              <ChevronLeft className="size-4" strokeWidth={1.75} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-plum-900/15 bg-white"
              aria-label="Témoignage suivant"
              onClick={goNext}
            >
              <ChevronRight className="size-4" strokeWidth={1.75} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
