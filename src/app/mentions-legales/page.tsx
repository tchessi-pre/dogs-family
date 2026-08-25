import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalHero } from "@/components/sections/LegalHero";
import { BRAND } from "@/lib/data";

export const metadata = {
  title: "Mentions légales — Dog's Family",
  description:
    "Mentions légales du site Dog's Family, éducation canine à Châteauneuf-les-Martigues.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalHero
          eyebrow="Informations légales"
          title="Mentions légales"
          description="Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, voici les informations relatives à l'éditeur et à l'hébergeur de ce site."
        />

        <section className="bg-cream py-16 sm:py-20">
          <article className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-xl font-semibold text-plum-900">
              Éditeur du site
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Le site {BRAND.name} est édité par {BRAND.educator}, exerçant
              une activité d&apos;éducation canine et de comportementalisme à
              titre indépendant, basée à {BRAND.city} ({BRAND.postalCode}).
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-plum-700">
              <li>Numéro SIRET : à compléter</li>
              <li>
                Adresse : {BRAND.city} ({BRAND.postalCode}), France
              </li>
              <li>
                Téléphone :{" "}
                <a
                  href={BRAND.phoneHref}
                  className="text-plum-900 underline decoration-plum-300 underline-offset-2 hover:text-plum-700"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>
                Email :{" "}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-plum-900 underline decoration-plum-300 underline-offset-2 hover:text-plum-700"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                Directeur de la publication : {BRAND.educator}
              </li>
            </ul>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Hébergement
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Ce site est hébergé par : Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Propriété intellectuelle
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              L&apos;ensemble des contenus présents sur ce site (textes,
              photographies, logo, mise en page) est la propriété de{" "}
              {BRAND.educator} ou de {BRAND.name}, sauf mention contraire.
              Toute reproduction, représentation ou diffusion, totale ou
              partielle, sans autorisation préalable, est interdite.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Limitation de responsabilité
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              {BRAND.educator} s&apos;efforce d&apos;assurer l&apos;exactitude
              et la mise à jour des informations diffusées sur ce site, mais
              ne saurait être tenue responsable des erreurs, omissions ou de
              l&apos;indisponibilité temporaire du site.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Liens vers d&apos;autres sites
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Ce site peut contenir des liens vers les réseaux sociaux (
              {BRAND.social.instagram && "Instagram"}
              {BRAND.social.facebook && ", Facebook"}). {BRAND.name} n&apos;est
              pas responsable du contenu de ces sites tiers.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Contact
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Pour toute question relative aux présentes mentions légales,
              vous pouvez me contacter à l&apos;adresse{" "}
              <a
                href={`mailto:${BRAND.email}`}
                className="text-plum-900 underline decoration-plum-300 underline-offset-2 hover:text-plum-700"
              >
                {BRAND.email}
              </a>{" "}
              ou via la{" "}
              <a
                href="/contact"
                className="text-plum-900 underline decoration-plum-300 underline-offset-2 hover:text-plum-700"
              >
                page de contact
              </a>
              .
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
