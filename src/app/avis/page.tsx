import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AvisHero } from "@/components/sections/AvisHero";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { TESTIMONIALS, GOOGLE_REVIEWS_META, BRAND } from "@/lib/data";
import { GoogleMapsLink } from "@/components/ui/google-maps-link";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Avis clients · 25 avis 5 étoiles",
  description:
    "25 avis Google tous 5 étoiles pour Dog's Family. Lisez les témoignages de propriétaires accompagnés en éducation canine, rééducation comportementale et maintrailing à Châteauneuf-les-Martigues.",
  alternates: {
    canonical: "/avis",
  },
  openGraph: {
    title: "Avis clients · 25 avis 5 étoiles | Dog's Family",
    description:
      "25 avis Google tous 5 étoiles. Témoignages de propriétaires accompagnés en éducation canine et maintrailing à Châteauneuf-les-Martigues.",
    url: "/avis",
  },
};

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BRAND.siteUrl,
  name: BRAND.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(GOOGLE_REVIEWS_META.rating),
    reviewCount: String(GOOGLE_REVIEWS_META.total),
    bestRating: "5",
    worstRating: "1",
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    reviewBody: t.quote,
    datePublished: t.visitedMonth ?? t.date,
  })),
};

export default function AvisPage() {
  return (
    <>
      <JsonLd data={reviewsSchema} />
      <Navbar />
      <main>
        <AvisHero />

        <section className="bg-plum-100 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                Tous les avis
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-plum-900 sm:text-4xl">
                Ils parlent de leur accompagnement
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-plum-700 sm:text-base">
                Voici une sélection des témoignages les plus détaillés.
                Retrouvez l&apos;intégralité des avis sur la fiche Google
                Business de Dog&apos;s Family.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <GoogleMapsLink
                aria-label="Voir tous les avis sur Google Maps"
                className="inline-flex items-center gap-2 rounded-full bg-plum-900 px-6 py-3 font-display text-sm font-semibold text-cream shadow-md shadow-plum-900/10 transition-colors hover:bg-plum-800 sm:text-base"
              >
                Voir tous les avis sur Google
                <span aria-hidden="true">→</span>
              </GoogleMapsLink>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
