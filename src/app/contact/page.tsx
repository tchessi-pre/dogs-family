import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
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
