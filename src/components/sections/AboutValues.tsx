"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Footprints, PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const VALUES = [
  {
    icon: HeartHandshake,
    accent: "bg-plum-900 text-cream",
    title: "Bienveillance & respect",
    description:
      "Des méthodes positives, sans contrainte ni rapport de force, pour construire une relation de confiance durable.",
  },
  {
    icon: Footprints,
    accent: "bg-peach-400 text-plum-900",
    title: "Le rythme de chaque chien",
    description:
      "Chaque chien avance à son propre rythme : l'accompagnement s'adapte à sa personnalité, son vécu et ses besoins.",
  },
  {
    icon: Sparkles,
    accent: "bg-rose-400 text-cream",
    title: "Passion & sport canin",
    description:
      "Une passion vécue au quotidien, entre éducation et sport canin, pour renforcer la complicité avec votre compagnon.",
  },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AboutValues() {
  return (
    <section className="bg-plum-100 py-24 sm:py-32">
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
            Mes valeurs
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-3 font-display text-3xl font-semibold leading-tight text-plum-900 sm:text-4xl"
          >
            Ce qui guide
            <br />
            <span className="italic text-plum-600">chaque accompagnement</span>
          </motion.h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full gap-0 rounded-3xl bg-white p-7 text-center ring-plum-900/5 shadow-sm shadow-plum-900/5">
                  <span
                    className={cn(
                      "mx-auto flex size-14 shrink-0 items-center justify-center rounded-full",
                      value.accent,
                    )}
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-plum-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-plum-700">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-md text-sm leading-relaxed text-plum-600">
            Envie de faire connaissance et de parler de votre chien&nbsp;?
            Je vous réponds avec plaisir.
          </p>
          <a
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "btn-shine h-12 gap-2 rounded-full bg-plum-900 px-6 text-base hover:bg-plum-800",
            )}
          >
            Me contacter
            <PawPrint className="size-4" strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
