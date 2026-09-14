import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";

export const metadata: Metadata = {
  title: "Léa — Éducatrice canine à Châteauneuf-les-Martigues",
  description:
    "Découvrez le parcours de Léa, éducatrice canine certifiée et comportementaliste à Châteauneuf-les-Martigues. Méthodes bienveillantes et positives pour une relation harmonieuse avec votre chien.",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "Léa — Éducatrice canine à Châteauneuf-les-Martigues | Dog's Family",
    description:
      "Parcours et méthodes de Léa, éducatrice canine et comportementaliste à Châteauneuf-les-Martigues. Approche bienveillante et respectueuse.",
    url: "/a-propos",
  },
};

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
      </main>
      <Footer />
    </>
  );
}
