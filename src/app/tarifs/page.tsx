import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";

export const metadata = {
  title: "Tarifs — Dog's Family",
  description:
    "Consultez les tarifs transparents des prestations d'éducation canine Dog's Family : bilans, séances individuelles, forfaits, maintrailing et balades éducatives.",
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
