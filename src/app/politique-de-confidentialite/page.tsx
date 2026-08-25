import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalHero } from "@/components/sections/LegalHero";
import { BRAND } from "@/lib/data";

export const metadata = {
  title: "Politique de confidentialité — Dog's Family",
  description:
    "Politique de confidentialité du site Dog's Family : données collectées, utilisation et droits des utilisateurs.",
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalHero
          eyebrow="Vos données"
          title="Politique de confidentialité"
          description="Cette page explique quelles données sont collectées sur ce site, pourquoi, et comment vous pouvez exercer vos droits."
        />

        <section className="bg-cream py-16 sm:py-20">
          <article className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-display text-xl font-semibold text-plum-900">
              Qui collecte vos données&nbsp;?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              {BRAND.educator}, responsable du site {BRAND.name}, basée à{" "}
              {BRAND.city} ({BRAND.postalCode}), est responsable du
              traitement des données décrites ci-dessous. Pour toute
              question, vous pouvez écrire à{" "}
              <a
                href={`mailto:${BRAND.email}`}
                className="text-plum-900 underline decoration-plum-300 underline-offset-2 hover:text-plum-700"
              >
                {BRAND.email}
              </a>
              .
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Quelles données sont collectées&nbsp;?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Le formulaire de la page{" "}
              <a
                href="/contact"
                className="text-plum-900 underline decoration-plum-300 underline-offset-2 hover:text-plum-700"
              >
                Contact
              </a>{" "}
              vous permet de renseigner votre nom, votre email, votre
              téléphone (facultatif) et un message. Ces informations ne sont
              ni enregistrées, ni stockées sur un serveur ou une base de
              données&nbsp;: le formulaire ouvre directement votre
              messagerie habituelle, pré-remplie avec votre demande, que vous
              choisissez ensuite d&apos;envoyer ou non.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Si vous m&apos;écrivez par email, téléphone ou via les réseaux
              sociaux, les informations que vous me communiquez (nom,
              coordonnées, informations sur votre chien) sont utilisées
              uniquement pour répondre à votre demande et assurer le suivi
              de nos échanges.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Cookies et outils de suivi
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Ce site n&apos;utilise aucun cookie publicitaire ni outil de
              mesure d&apos;audience (type Google Analytics) à ce jour.
              Seuls les cookies strictement techniques, nécessaires au bon
              fonctionnement du site et éventuellement déposés par
              l&apos;hébergeur, peuvent être utilisés.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Partage des données
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Vos données ne sont ni vendues, ni cédées, ni partagées avec
              des tiers à des fins commerciales. Elles ne sont utilisées que
              dans le cadre de la relation entre vous et {BRAND.name}.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Durée de conservation
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Les échanges par email ou téléphone sont conservés le temps
              nécessaire au traitement de votre demande et au suivi de la
              relation, puis supprimés ou archivés de façon sécurisée.
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Vos droits
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Conformément au Règlement Général sur la Protection des
              Données (RGPD) et à la loi Informatique et Libertés, vous
              disposez d&apos;un droit d&apos;accès, de rectification, de
              suppression et d&apos;opposition concernant vos données
              personnelles. Pour l&apos;exercer, contactez-moi à{" "}
              <a
                href={`mailto:${BRAND.email}`}
                className="text-plum-900 underline decoration-plum-300 underline-offset-2 hover:text-plum-700"
              >
                {BRAND.email}
              </a>{" "}
              ou par téléphone au{" "}
              <a
                href={BRAND.phoneHref}
                className="text-plum-900 underline decoration-plum-300 underline-offset-2 hover:text-plum-700"
              >
                {BRAND.phone}
              </a>
              .
            </p>

            <h2 className="mt-10 font-display text-xl font-semibold text-plum-900">
              Modifications
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-plum-700">
              Cette politique de confidentialité peut être mise à jour à
              tout moment. La dernière mise à jour est indiquée sur cette
              page.
            </p>
            <p className="mt-6 text-xs uppercase tracking-wide text-plum-400">
              Dernière mise à jour : août 2026
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
