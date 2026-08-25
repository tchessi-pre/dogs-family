"use client";

import { motion } from "framer-motion";
import { Dog, HeartHandshake, Footprints, Home, Compass, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Service } from "@/lib/data";
import { Card } from "@/components/ui/card";

const ICONS = {
  dog: Dog,
  "heart-handshake": HeartHandshake,
  footprints: Footprints,
  home: Home,
  compass: Compass,
} as const;

const ACCENTS = {
  plum: "bg-plum-900 text-cream",
  peach: "bg-peach-400 text-plum-900",
  rose: "bg-rose-400 text-cream",
} as const;

const LINK_ACCENTS = {
  plum: "text-plum-700 hover:text-plum-900",
  peach: "text-peach-600 hover:text-peach-700",
  rose: "text-rose-500 hover:text-rose-600",
} as const;

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = ICONS[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full gap-4 rounded-3xl bg-white  p-7  transition-shadow hover:shadow-lg hover:shadow-plum-900/10">
        <span
          className={cn(
            "flex size-14 items-center justify-center rounded-full",
            ACCENTS[service.accent],
          )}
        >
          <Icon className="size-6" strokeWidth={1.75} />
        </span>

        <h3 className="font-display text-xl font-semibold text-plum-900">
          {service.title}
        </h3>

        <p className="text-sm leading-relaxed text-plum-600">
          {service.description}
        </p>

        <a
          href={service.href}
          className={cn(
            "mt-auto inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
            LINK_ACCENTS[service.accent],
          )}
        >
          En savoir plus
          <ArrowRight className="size-3.5" strokeWidth={2} />
        </a>
      </Card>
    </motion.div>
  );
}
