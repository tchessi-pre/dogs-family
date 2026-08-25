import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/sections/ServicesHero";
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
        <ServicesHero />
        <ServicesDetail />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
