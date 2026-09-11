"use client";

import { PenSquare, Star } from "lucide-react";

import { GOOGLE_REVIEWS_META } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GoogleMapsLink } from "@/components/ui/google-maps-link";
import { PageHero } from "@/components/sections/PageHero";

export function AvisHero() {
  return (
    <PageHero
      eyebrow="Avis clients · Google"
      title="La parole aux"
      titleItalic="familles accompagnées"
      description={`Retrouvez les ${GOOGLE_REVIEWS_META.total} avis laissés sur Google par les propriétaires que j'ai accompagnés. Réactivité, éducation, maintrailing ou balades collectives — tout y passe.`}
      image={{
        src: "/contact-bg.png",
        alt: "Paysage apaisant au coucher de soleil",
        position: "70% center",
      }}
      waveFill="plum-100"
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-cream/20 bg-cream/10 px-5 py-2.5 backdrop-blur-sm">
          <svg aria-hidden="true" viewBox="0 0 48 48" className="size-5 shrink-0">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.2c-2 1.4-4.6 2.4-7.3 2.4-5.2 0-9.6-3.4-11.2-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z" />
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C41 35.4 44 30.2 44 24c0-1.3-.1-2.3-.4-3.5z" />
          </svg>
          <div className="flex gap-0.5" aria-label="Note 5 sur 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-3.5 fill-peach-300 text-peach-300" strokeWidth={0} />
            ))}
          </div>
          <span className="font-display font-semibold text-cream">
            {GOOGLE_REVIEWS_META.rating.toFixed(1)}
          </span>
          <span className="text-sm text-cream/70">· {GOOGLE_REVIEWS_META.total} avis</span>
        </div>

        <GoogleMapsLink
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "gap-2 rounded-full border border-cream/20 text-cream/80 hover:border-cream/40 hover:bg-cream/10 hover:text-cream",
          )}
        >
          <PenSquare className="size-3.5" strokeWidth={1.75} />
          Laisser un avis
        </GoogleMapsLink>
      </div>
    </PageHero>
  );
}
