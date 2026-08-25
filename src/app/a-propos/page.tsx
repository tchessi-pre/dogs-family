import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";

export const metadata = {
  title: "À propos — Dog's Family",
  description:
    "Léa, éducatrice canine et comportementaliste à Châteauneuf-les-Martigues et alentours. Découvrez son parcours et ses méthodes bienveillantes et respectueuses.",
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
