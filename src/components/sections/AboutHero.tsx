"use client";

import { MapPin, Phone } from "lucide-react";

import { BRAND } from "@/lib/data";
import { PageHero } from "@/components/sections/PageHero";

export function AboutHero() {
  return (
    <PageHero
      eyebrow="À propos"
      title={BRAND.educator}
      titleItalic="Éducatrice canine & comportementaliste"
      description="Des méthodes bienveillantes et respectueuses, pensées pour chaque chien et chaque humain."
      image={{
        src: "/about-header-bg.jpeg",
        alt: "Éducatrice canine complice avec un chien en pleine nature",
      }}
    >
      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-sm text-cream backdrop-blur-sm">
          <MapPin className="size-4 text-peach-300" strokeWidth={1.75} />
          {BRAND.city} &amp; alentours
        </span>
        <a
          href={BRAND.phoneHref}
          className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-sm text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
        >
          <Phone className="size-4 text-peach-300" strokeWidth={1.75} />
          {BRAND.phone}
        </a>
      </div>
    </PageHero>
  );
}
