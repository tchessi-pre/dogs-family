import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesDetail } from "@/components/sections/ServicesDetail";
import { Pricing } from "@/components/sections/Pricing";

export const metadata = {
  title: "Services — Dog's Family",
  description:
    "Découvrez les prestations et les tarifs d'éducation canine proposées par Dog's Family : éducation de base, rééducation comportementale, balades éducatives, maintrailing et conseils à domicile.",
};

export default function ServicesPage() {
  return (
    <>
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
