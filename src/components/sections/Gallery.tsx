"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  {
    src: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Chien heureux en pleine balade éducative en forêt",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Éducatrice canine travaillant avec un berger allemand",
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/11064704/pexels-photo-11064704.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Chiot golden retriever lors d'une séance d'éducation",
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/247522/pexels-photo-247522.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Chien et enfant partageant un moment de complicité",
    className: "lg:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/14469807/pexels-photo-14469807.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Balade éducative en groupe avec plusieurs chiens",
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/6858405/pexels-photo-6858405.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Entraînement d'obéissance avec un chien en extérieur",
    className: "lg:col-span-2",
  },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Gallery() {
  return (
    <section id="galeries" className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500"
          >
            Galeries photos
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-3 font-display text-3xl font-semibold leading-tight text-plum-900 sm:text-4xl"
          >
            Des moments de complicité
            <br />
            <span className="italic text-plum-600">
              capturés au quotidien
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mt-4 text-base leading-relaxed text-plum-700"
          >
            Retrouvez ici un aperçu des séances d&apos;éducation, des
            balades encadrées et des instants partagés avec les chiens
            et leurs humains.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, staggerChildren: 0.08 }}
          className="mx-auto mt-14 grid max-w-5xl auto-rows-[1fr] grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-3"
        >
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.06 }}
              className={`group relative aspect-square overflow-hidden rounded-2xl shadow-md shadow-plum-900/5 ring-1 ring-plum-900/5 sm:aspect-square ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 48vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum-950/45 via-plum-950/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full px-4 pb-3.5 text-center text-sm font-medium leading-snug text-cream transition-transform duration-500 group-hover:translate-y-0">
                {image.alt}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
