import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND, GOOGLE_REVIEWS_META } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dog's Family | Éducatrice canine à Châteauneuf-les-Martigues",
  description:
    "Léa, éducatrice canine certifiée à Châteauneuf-les-Martigues et alentour. Éducation de base, rééducation comportementale, balades éducatives et maintrailing. 25 avis 5 étoiles.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dog's Family | Éducatrice canine à Châteauneuf-les-Martigues",
    description:
      "Léa, éducatrice canine certifiée à Châteauneuf-les-Martigues. Éducation de base, rééducation comportementale, balades éducatives et maintrailing.",
    url: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": BRAND.siteUrl,
  name: BRAND.name,
  description:
    "Éducatrice canine certifiée à Châteauneuf-les-Martigues. Méthodes positives et bienveillantes pour l'éducation de base, la rééducation comportementale, les balades éducatives et le maintrailing.",
  url: BRAND.siteUrl,
  telephone: "+33778545137",
  email: BRAND.email,
  image: `${BRAND.siteUrl}/logo.jpg`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: BRAND.city,
    postalCode: BRAND.postalCode,
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.3878,
    longitude: 5.1358,
  },
  areaServed: [
    { "@type": "City", "name": "Châteauneuf-les-Martigues" },
    { "@type": "City", "name": "Martigues" },
    { "@type": "City", "name": "Istres" },
    { "@type": "City", "name": "Miramas" },
    { "@type": "City", "name": "Salon-de-Provence" },
    { "@type": "City", "name": "Vitrolles" },
    { "@type": "City", "name": "Berre-l'Étang" },
  ],
  sameAs: [BRAND.social.facebook, BRAND.social.instagram],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(GOOGLE_REVIEWS_META.rating),
    reviewCount: String(GOOGLE_REVIEWS_META.total),
    bestRating: "5",
    worstRating: "1",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
