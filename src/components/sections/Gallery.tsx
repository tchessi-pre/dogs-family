"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ChevronLeft, ChevronRight, X, PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type CategoryId = "toutes" | "education" | "balades" | "complicite";

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "toutes", label: "Toutes" },
  { id: "education", label: "Éducation" },
  { id: "balades", label: "Balades" },
  { id: "complicite", label: "Complicité" },
];

const GALLERY_IMAGES = [
  {
    src: "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Chien heureux en pleine balade éducative en forêt",
    category: "balades" as CategoryId,
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/7788657/pexels-photo-7788657.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Éducatrice canine travaillant avec un berger allemand",
    category: "education" as CategoryId,
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/11064704/pexels-photo-11064704.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Chiot golden retriever lors d'une séance d'éducation",
    category: "education" as CategoryId,
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/247522/pexels-photo-247522.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Chien et enfant partageant un moment de complicité",
    category: "complicite" as CategoryId,
    className: "lg:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/14469807/pexels-photo-14469807.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Balade éducative en groupe avec plusieurs chiens",
    category: "balades" as CategoryId,
    className: "",
  },
  {
    src: "https://images.pexels.com/photos/6858405/pexels-photo-6858405.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Entraînement d'obéissance avec un chien en extérieur",
    category: "education" as CategoryId,
    className: "lg:col-span-2",
  },
] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("toutes");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visibleImages =
    activeCategory === "toutes"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((image) => image.category === activeCategory);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + visibleImages.length) % visibleImages.length,
    );
  }, [visibleImages.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % visibleImages.length,
    );
  }, [visibleImages.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [activeIndex, showPrev, showNext]);

  const activeImage = activeIndex !== null ? visibleImages[activeIndex] : null;

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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-plum-900 text-cream shadow-sm shadow-plum-900/20"
                    : "bg-white text-plum-700 ring-1 ring-plum-900/10 hover:bg-plum-900/5",
                )}
              >
                {category.label}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          layout
          className="mx-auto mt-10 grid max-w-5xl auto-rows-[1fr] grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleImages.map((image, i) => (
              <motion.button
                key={image.src}
                type="button"
                layout
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
                className={cn(
                  "group relative aspect-square cursor-zoom-in overflow-hidden rounded-2xl shadow-md shadow-plum-900/5 ring-1 ring-plum-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 sm:aspect-square",
                  image.className,
                )}
                aria-label={`Agrandir la photo : ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 48vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-plum-950/55 via-plum-950/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-cream/90 text-plum-900 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="size-4" strokeWidth={1.75} />
                </span>
                <p className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full px-4 pb-3.5 text-left text-sm font-medium leading-snug text-cream transition-transform duration-500 group-hover:translate-y-0">
                  {image.alt}
                </p>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-md text-sm leading-relaxed text-plum-600">
            Envie de vivre ces moments avec votre chien&nbsp;?
          </p>
          <a
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "btn-shine h-12 gap-2 rounded-full bg-plum-900 px-6 text-base hover:bg-plum-800",
            )}
          >
            Prendre rendez-vous
            <PawPrint className="size-4" strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>

      <Dialog
        open={activeImage !== null}
        onOpenChange={(open) => {
          if (!open) closeLightbox();
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="max-w-[min(92vw,64rem)] border-none bg-transparent p-0 shadow-none ring-0"
        >
          {activeImage && (
            <div className="relative">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-plum-950 sm:aspect-16/10">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="92vw"
                  className="object-contain"
                  priority
                />
              </div>

              <p className="mt-3 text-center text-sm text-cream/90">
                {activeImage.alt}
              </p>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Fermer"
                className="absolute -top-3 -right-3 flex size-10 items-center justify-center rounded-full bg-cream text-plum-900 shadow-md transition-colors hover:bg-cream/90"
              >
                <X className="size-4.5" strokeWidth={1.75} />
              </button>

              {visibleImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Photo précédente"
                    className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-plum-900 shadow-md transition-colors hover:bg-cream sm:-left-5"
                  >
                    <ChevronLeft className="size-5" strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Photo suivante"
                    className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-plum-900 shadow-md transition-colors hover:bg-cream sm:-right-5"
                  >
                    <ChevronRight className="size-5" strokeWidth={1.75} />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
