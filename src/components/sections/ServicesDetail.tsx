"use client";

import { motion } from "framer-motion";
import { Dog, HeartHandshake, Footprints, Home, Compass, Check, ArrowRight, PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/data";
import { Card } from "@/components/ui/card";

const ICONS = {
  dog: Dog,
  "heart-handshake": HeartHandshake,
  footprints: Footprints,
  home: Home,
  compass: Compass,
} as const;

const BADGE_ACCENTS = {
  plum: "bg-plum-900 text-cream",
  peach: "bg-peach-400 text-plum-900",
  rose: "bg-rose-400 text-cream",
} as const;

const CHECK_ACCENTS = {
  plum: "text-plum-600",
  peach: "text-peach-600",
  rose: "text-rose-500",
} as const;

const LINK_ACCENTS = {
  plum: "text-plum-700 hover:text-plum-900",
  peach: "text-peach-600 hover:text-peach-700",
  rose: "text-rose-500 hover:text-rose-600",
} as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesDetail() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500"
          >
            Le détail
          </motion.span>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-3 text-base leading-relaxed text-plum-700"
          >
            Chaque prestation peut être suivie individuellement ou combinée
            selon les besoins de votre chien. Découvrez le détail de chaque
            accompagnement ci-dessous.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="scroll-mt-28"
              >
                <Card className="h-full gap-0 rounded-3xl bg-white p-7 ring-plum-900/5 shadow-sm shadow-plum-900/5">
                  <span
                    className={cn(
                      "flex size-14 shrink-0 items-center justify-center rounded-full",
                      BADGE_ACCENTS[service.accent],
                    )}
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>

                  <h3 className="mt-5 font-display text-xl font-semibold text-plum-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-plum-700">
                    {service.longDescription}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-plum-700"
                      >
                        <Check
                          className={cn(
                            "mt-0.5 size-4 shrink-0",
                            CHECK_ACCENTS[service.accent],
                          )}
                          strokeWidth={2}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={cn(
                      "mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
                      LINK_ACCENTS[service.accent],
                    )}
                  >
                    Demander un premier échange
                    <ArrowRight className="size-3.5" strokeWidth={2} />
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-plum-600">
            Envie de connaître les tarifs pour ces prestations ?
          </p>
          <a
            href="/tarifs"
            className="inline-flex items-center gap-2 rounded-full bg-plum-900 px-6 py-3 text-sm font-medium text-cream transition-all duration-200 hover:bg-plum-800 hover:shadow-lg hover:shadow-plum-900/20 active:scale-[0.98]"
          >
            Voir les tarifs
            <PawPrint className="size-4" strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
