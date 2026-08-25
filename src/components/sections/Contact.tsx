"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, PawPrint, Send, CheckCircle2 } from "lucide-react";

import { BRAND } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Zone d'intervention",
    value: `${BRAND.city} (${BRAND.postalCode}) et alentours`,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: BRAND.phone,
    href: BRAND.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
] as const;

const socialLinks = [
  { label: "Facebook", href: BRAND.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: BRAND.social.instagram, icon: InstagramIcon },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL_STATE: FormState = { name: "", email: "", phone: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [sent, setSent] = useState(false);

  function handleChange(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Prise de contact — ${form.name || "site Dog's Family"}`;
    const bodyLines = [
      `Nom : ${form.name}`,
      `Email : ${form.email}`,
      form.phone ? `Téléphone : ${form.phone}` : null,
      "",
      form.message,
    ].filter((line): line is string => line !== null);

    const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section id="formulaire" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Mes coordonnées
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-plum-900 sm:text-4xl">
            Restons en
            <br />
            <span className="italic text-plum-600">contact</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-plum-700">
            Vous pouvez me joindre directement ou passer par le formulaire
            ci-contre&nbsp;: je reviens vers vous rapidement pour convenir
            d&apos;un premier échange.
          </p>

          <ul className="mt-8 space-y-5">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-plum-900 text-cream">
                    <Icon className="size-4.5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-plum-500">
                      {item.label}
                    </span>
                    <span className="block text-base text-plum-900">
                      {item.value}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-center gap-3.5 transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3.5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-plum-900/15 text-plum-800 transition-colors hover:border-plum-900 hover:bg-plum-900 hover:text-cream"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="gap-0 rounded-3xl bg-white p-7 ring-plum-900/5 shadow-sm shadow-plum-900/5 sm:p-9">
            <span className="flex size-12 items-center justify-center rounded-full bg-peach-100 text-peach-700">
              <PawPrint className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-plum-900">
              Envoyez-moi un message
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-plum-600">
              Ce formulaire ouvre votre messagerie avec votre demande
              pré-remplie, prête à être envoyée.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-plum-800"
                  >
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Votre nom"
                    className="h-11 rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-plum-800"
                  >
                    Téléphone{" "}
                    <span className="font-normal text-plum-400">
                      (facultatif)
                    </span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder="06 00 00 00 00"
                    className="h-11 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-plum-800"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="vous@exemple.fr"
                  className="h-11 rounded-lg"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-plum-800"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Parlez-moi de votre chien et de votre demande..."
                  className="min-h-32 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "btn-shine h-12 w-full gap-2 rounded-full bg-plum-900 text-base text-cream hover:bg-plum-800",
                )}
              >
                Envoyer le message
                <Send className="size-4" strokeWidth={1.75} />
              </button>

              {sent && (
                <p className="flex items-center gap-2 text-sm font-medium text-plum-700">
                  <CheckCircle2 className="size-4 text-rose-500" strokeWidth={1.75} />
                  Votre messagerie s&apos;est ouverte avec votre message
                  pré-rempli.
                </p>
              )}
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
