import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/ContactHero";
import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Contact — Dog's Family",
  description:
    "Contactez Dog's Family, éducatrice canine à Châteauneuf-les-Martigues et alentour, par téléphone, email ou via le formulaire de contact.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
