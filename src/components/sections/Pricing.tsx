"use client";

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";
import { PRICING } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Pricing() {
  return (
    <section id="tarifs" className="scroll-mt-20 bg-plum-100 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
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
            Tarifs
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-3 font-display text-3xl font-semibold leading-tight text-plum-900 sm:text-4xl"
          >
            Des tarifs
            <br />
            <span className="italic text-plum-600">clairs et transparents</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-4 text-base leading-relaxed text-plum-700"
          >
            Un aperçu de mes prestations, à l&apos;unité ou sous forme de
            forfaits pour un accompagnement dans la durée.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PRICING.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full gap-0 rounded-3xl bg-white p-7 ring-plum-900/5 shadow-sm shadow-plum-900/5 sm:p-9">
                <h3 className="font-display text-xl font-semibold text-plum-900">
                  {category.title}
                </h3>

                <ul className="mt-5 divide-y divide-plum-900/10">
                  {category.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-baseline justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                    >
                      <span>
                        <span className="block text-base text-plum-800">
                          {item.label}
                        </span>
                        {item.note && (
                          <span className="mt-0.5 block text-xs text-plum-500">
                            {item.note}
                          </span>
                        )}
                      </span>
                      <span className="shrink-0 font-display text-lg font-semibold text-plum-900">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-md text-sm leading-relaxed text-plum-600">
            Une question sur ces tarifs ou sur la formule la plus adaptée à
            votre chien&nbsp;? N&apos;hésitez pas à me contacter.
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
