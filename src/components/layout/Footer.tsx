import { MapPin, Phone, Mail } from "lucide-react";

import { BRAND, NAV_LINKS, FOOTER_SERVICES } from "@/lib/data";
import { Logo } from "@/components/layout/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const currentYear = new Date().getFullYear();

const socialLinks = [
  { label: "Facebook", href: BRAND.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: BRAND.social.instagram, icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="bg-plum-900 text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-xs">
            <Logo variant="dark" />
            <p className="mt-4 text-sm leading-relaxed">
              Éducatrice canine à Châteauneuf-les-Martigues, j&apos;accompagne
              les chiens et leurs humains vers une relation basée sur la
              confiance, le respect et la bienveillance.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-peach-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="transition-colors hover:text-peach-300"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-cream">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-peach-300"
                  strokeWidth={1.75}
                />
                <span>
                  {BRAND.city} ({BRAND.postalCode})
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="size-4 shrink-0 text-peach-300"
                  strokeWidth={1.75}
                />
                <a
                  href={BRAND.phoneHref}
                  className="transition-colors hover:text-peach-300"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="size-4 shrink-0 text-peach-300"
                  strokeWidth={1.75}
                />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="transition-colors hover:text-peach-300"
                >
                  {BRAND.email}
                </a>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-peach-300 hover:text-peach-300"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/60 sm:flex-row">
          <p>
            &copy; {currentYear} {BRAND.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/mentions-legales"
              className="transition-colors hover:text-peach-300"
            >
              Mentions légales
            </a>
            <a
              href="/politique-de-confidentialite"
              className="transition-colors hover:text-peach-300"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
