import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Tarifs — Éducation canine & Maintrailing",
  description:
    "Tarifs transparents : bilan à 30 €, séance individuelle à 50 €, forfaits de 5 à 15 séances. Maintrailing à partir de 25 €. Éducation canine à Châteauneuf-les-Martigues.",
  alternates: {
    canonical: "/tarifs",
  },
  openGraph: {
    title: "Tarifs — Éducation canine & Maintrailing | Dog's Family",
    description:
      "Bilan à 30 €, séance individuelle à 50 €, forfaits de 5 à 15 séances. Maintrailing à partir de 25 €. Châteauneuf-les-Martigues.",
    url: "/tarifs",
  },
};

export default function TarifsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Tarifs"
          title="Des tarifs"
          titleItalic="clairs et sans surprise"
          description="Retrouvez toutes mes prestations, à l'unité ou en forfait, pour accompagner votre chien à votre rythme."
          image={{ src: "/contact-bg.png", alt: "Paysage apaisant au coucher de soleil, ambiance douce", position: "70% center" }}
          waveFill="plum-100"
        />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
