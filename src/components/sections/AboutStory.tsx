"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PawPrint, Quote } from "lucide-react";

export function AboutStory() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-md lg:order-2"
        >
          <span
            aria-hidden="true"
            className="absolute -right-10 top-10 flex size-11 items-center justify-center rounded-full sm:size-14"
          >
            <PawPrint
              className="size-8 text-plum-300 sm:size-9"
              fill="currentColor"
              stroke="none"
            />
          </span>
          <span
            aria-hidden="true"
            className="absolute -right-16 top-[40%] flex size-9 items-center justify-center"
          >
            <PawPrint
              className="size-8 text-plum-300 sm:size-9"
              fill="currentColor"
              stroke="none"
            />
          </span>
          <span
            aria-hidden="true"
            className="absolute -right-8 bottom-4 flex size-8 items-center justify-center"
          >
            <PawPrint
              className="size-8 text-plum-600 sm:size-9"
              fill="currentColor"
              stroke="none"
            />
          </span>

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-[38%_62%_55%_45%/50%_40%_60%_50%] bg-plum-200/70 blur-[2px]"
          />
          <div className="relative aspect-square w-full overflow-hidden rounded-[40%_60%_55%_45%/45%_45%_55%_55%]">
            <Image
              src="/about.jpeg"
              alt="Léa, éducatrice canine, en pleine séance avec un berger allemand, confiance et complicité"
              fill
              sizes="(min-width: 1024px) 32vw, 80vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:order-1"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Mon histoire
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-plum-900 sm:text-4xl">
            Tout ce que je sais,
            <br />
            <span className="italic text-plum-600">
              je l&apos;ai appris des chiens
            </span>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-plum-700">
            <p>
              Il y a un an, après beaucoup de travail et quelques doutes,
              j&apos;ai créé Dog&apos;s Family, pleine d&apos;envie et de joie
              à l&apos;idée de partager tout mon savoir-faire avec vous.
            </p>
            <p>
              Être chaque jour aux côtés des chiens est une réelle chance pour
              moi : ce sont eux qui me font vibrer et vivre de ma passion, que
              ce soit dans l&apos;éducation ou dans le sport canin.
            </p>
            <p>
              Entre les rencontres professionnelles, les clients devenus des
              amis, les rires, les moments de doute et les victoires, c&apos;est
              là qu&apos;est la plus belle réussite. Merci à vous de faire
              vivre ma passion à travers vos compagnons, je ne vous remercierai
              jamais assez.
            </p>
            <p>
              Ma jolie Alya, une Rottweiler, m&apos;accompagne au quotidien —
              une race que j&apos;affectionne tout particulièrement.
            </p>
          </div>

          <div className="mt-8 flex items-start gap-4 rounded-2xl bg-plum-100 p-6">
            <Quote
              className="mt-0.5 size-6 shrink-0 text-plum-400"
              strokeWidth={1.75}
              fill="currentColor"
            />
            <p className="font-display text-lg italic leading-snug text-plum-900">
              Et que l&apos;aventure continue encore très, très longtemps.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
