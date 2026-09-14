import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesDetail } from "@/components/sections/ServicesDetail";
import { Pricing } from "@/components/sections/Pricing";
import { JsonLd } from "@/components/seo/JsonLd";
import { BRAND, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services d'éducation canine",
  description:
    "Éducation de base, rééducation comportementale, balades éducatives et maintrailing à Châteauneuf-les-Martigues. Méthodes positives adaptées à chaque chien et à chaque duo.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services d'éducation canine | Dog's Family",
    description:
      "Éducation de base, rééducation comportementale, balades éducatives et maintrailing. Méthodes positives à Châteauneuf-les-Martigues et alentours.",
    url: "/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services d'éducation canine — Dog's Family",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.longDescription,
      provider: {
        "@type": "LocalBusiness",
        name: BRAND.name,
        url: BRAND.siteUrl,
      },
      areaServed: {
        "@type": "City",
        name: BRAND.city,
      },
      url: `${BRAND.siteUrl}${service.href}`,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Services"
          title="Un accompagnement"
          titleItalic="pensé pour chaque duo"
          description="Chaque chien est unique, chaque humain aussi. Découvrez les prestations proposées pour répondre à vos besoins."
          image={{ src: "/contact-bg.png", alt: "Paysage apaisant au coucher de soleil, ambiance douce", position: "70% center" }}
        />
        <ServicesDetail />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
