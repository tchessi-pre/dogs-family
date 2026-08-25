"use client";

import { motion } from "framer-motion";

import { SERVICES } from "@/lib/data";
import { ServiceCard } from "@/components/sections/ServiceCard";

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-cream-100 pb-24 pt-4 sm:pb-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Mes services
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-plum-900 sm:text-4xl">
            Un accompagnement adapté à chaque duo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-plum-600">
            Chaque chien est unique, chaque humain aussi. Découvrez les
            prestations proposées pour répondre à vos besoins.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
