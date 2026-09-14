import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Contact } from "@/components/sections/Contact";
import { BRAND } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez Léa, éducatrice canine à ${BRAND.city} (${BRAND.postalCode}). Réponse rapide par téléphone au ${BRAND.phone} ou via le formulaire de contact. Premier échange offert.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Dog's Family",
    description: `Contactez Léa, éducatrice canine à ${BRAND.city}. Téléphone : ${BRAND.phone}.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Parlons de votre"
          titleItalic="compagnon à quatre pattes"
          description="Une question, une envie de premier échange ? Écrivez-moi ou appelez-moi, je vous réponds avec plaisir."
          image={{ src: "/contact-bg2.jpeg", alt: "Chien attentif regardant son humain, complicité et confiance" }}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
