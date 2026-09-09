import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PricingHero } from "@/components/sections/PricingHero";

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
        <PricingHero />
        <Pricing />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
