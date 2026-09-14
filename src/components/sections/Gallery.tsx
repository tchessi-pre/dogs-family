"use client";

import { useCallback, useEffect, useRef, useState, type ElementType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  X,
  PawPrint,
  GraduationCap,
  TreePine,
  Heart,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type CategoryId = "toutes" | "education" | "balades" | "complicite";

const CATEGORY_META: Record<CategoryId, { label: string; Icon: ElementType }> = {
  toutes: { label: "Toutes", Icon: PawPrint },
  education: { label: "Éducation", Icon: GraduationCap },
  balades: { label: "Balades", Icon: TreePine },
  complicite: { label: "Complicité", Icon: Heart },
};

const CATEGORY_ORDER: CategoryId[] = ["toutes", "education", "balades", "complicite"];

const CATEGORY_CHIP_BG: Record<Exclude<CategoryId, "toutes">, string> = {
  education: "bg-plum-700/80",
  balades: "bg-emerald-700/80",
  complicite: "bg-rose-600/80",
};

const GALLERY_IMAGES: {
  src: string;
  alt: string;
  category: Exclude<CategoryId, "toutes">;
  width: number;
  height: number;
}[] = [
  {
    src: "/gallery/deux-chiens-balade-parc.jpg",
    alt: "Deux chiens complices lors d'une balade au parc",
    category: "balades",
    width: 1440,
    height: 1450,
  },
  {
    src: "/gallery/portrait-rottweiler-chiot.jpg",
    alt: "Portrait d'un chiot rottweiler avec sa maîtresse",
    category: "complicite",
    width: 1440,
    height: 960,
  },
  {
    src: "/gallery/femme-rottweiler-chiot-prairie.jpg",
    alt: "Éducatrice et son chiot rottweiler dans la prairie",
    category: "complicite",
    width: 1440,
    height: 960,
  },
  {
    src: "/gallery/femme-staffie-blanc-calin.jpg",
    alt: "Câlin complice avec un staffie blanc lors d'une balade",
    category: "complicite",
    width: 1170,
    height: 1560,
  },
  {
    src: "/gallery/malinois-balade-foret-automne.jpg",
    alt: "Malinois et sa maîtresse en balade dans la forêt d'automne",
    category: "balades",
    width: 1440,
    height: 1920,
  },
  {
    src: "/gallery/femme-berger-complicite-foret.jpg",
    alt: "Moment de complicité entre une éducatrice et son berger en forêt",
    category: "complicite",
    width: 1440,
    height: 1920,
  },
  {
    src: "/gallery/education-malinois-exterieur.jpg",
    alt: "Séance d'éducation avec un malinois en extérieur",
    category: "education",
    width: 1440,
    height: 1920,
  },
  {
    src: "/gallery/chien-tigre-saut-education.jpg",
    alt: "Chien bringé qui saute lors d'une séance d'éducation",
    category: "education",
    width: 1290,
    height: 1720,
  },
  {
    src: "/gallery/education-rottweiler-terrain.jpg",
    alt: "Éducation d'un rottweiler sur terrain en plein air",
    category: "education",
    width: 1440,
    height: 1920,
  },
  {
    src: "/gallery/staffie-bleu-evenement.jpg",
    alt: "Staffie bleu avec son manteau lors d'un événement canin",
    category: "balades",
    width: 1290,
    height: 1720,
  },
];

const COUNTS: Record<CategoryId, number> = {
  toutes: GALLERY_IMAGES.length,
  education: GALLERY_IMAGES.filter((i) => i.category === "education").length,
  balades: GALLERY_IMAGES.filter((i) => i.category === "balades").length,
  complicite: GALLERY_IMAGES.filter((i) => i.category === "complicite").length,
};

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("toutes");
  const [displayedCategory, setDisplayedCategory] = useState<CategoryId>("toutes");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const visibleImages =
    displayedCategory === "toutes"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === displayedCategory);

  const handleCategoryChange = (cat: CategoryId) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setIsTransitioning(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDisplayedCategory(cat);
      setAnimKey((k) => k + 1);
      setIsTransitioning(false);
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((cur) =>
      cur === null ? null : (cur - 1 + visibleImages.length) % visibleImages.length,
    );
  }, [visibleImages.length]);

  const showNext = useCallback(() => {
    setActiveIndex((cur) =>
      cur === null ? null : (cur + 1) % visibleImages.length,
    );
  }, [visibleImages.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [activeIndex, showPrev, showNext, closeLightbox]);

  const activeImage = activeIndex !== null ? visibleImages[activeIndex] : null;

  return (
    <section id="galeries" className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-112 rounded-full bg-rose-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full bg-plum-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
            <PawPrint className="size-3" strokeWidth={2.5} />
            Galeries photos
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-plum-900 sm:text-4xl lg:text-5xl">
            Des moments de complicité
            <br />
            <span className="italic text-plum-500">capturés au quotidien</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-plum-600">
            Retrouvez ici un aperçu des séances d&apos;éducation, des balades encadrées et des
            instants partagés avec les chiens et leurs humains.
          </p>
        </motion.div>

        {/* ── Category filters ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          role="group"
          aria-label="Filtrer par catégorie"
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {CATEGORY_ORDER.map((id) => {
            const { label, Icon } = CATEGORY_META[id];
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleCategoryChange(id)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-plum-900 text-cream shadow-md shadow-plum-900/20"
                    : "bg-white text-plum-700 ring-1 ring-plum-900/10 hover:bg-plum-50 hover:ring-plum-900/20",
                )}
              >
                <Icon
                  className="size-3.5"
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {label}
                <span
                  className={cn(
                    "min-w-5 rounded-full px-1.5 text-center text-[10px] font-bold leading-5 tabular-nums",
                    isActive
                      ? "bg-plum-700 text-cream"
                      : "bg-plum-100 text-plum-600",
                  )}
                >
                  {COUNTS[id]}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Masonry grid ────────────────────────────────────────── */}
        <div
          className={cn(
            "mt-10 columns-2 gap-x-3.5 transition-opacity duration-200 sm:columns-3 sm:gap-x-4",
            isTransitioning && "opacity-0",
          )}
        >
          {visibleImages.map((image, i) => {
            const { Icon } = CATEGORY_META[image.category];
            const chipBg = CATEGORY_CHIP_BG[image.category];
            return (
              <motion.button
                key={`${animKey}-${image.src}`}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                onClick={() => setActiveIndex(i)}
                aria-label={`Agrandir : ${image.alt}`}
                className="group relative mb-3.5 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl shadow-sm ring-1 ring-plum-900/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600 sm:mb-4"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  loading={i < 6 ? "eager" : "lazy"}
                  className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Permanent soft bottom vignette */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-plum-950/35 to-transparent" />

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-plum-950/70 via-plum-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Category chip — slides down on hover */}
                <span
                  className={cn(
                    "pointer-events-none absolute left-3 top-3 inline-flex -translate-y-1.5 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                    chipBg,
                  )}
                >
                  <Icon className="size-2.5" strokeWidth={2.5} />
                  {CATEGORY_META[image.category].label}
                </span>

                {/* Zoom icon — slides down on hover */}
                <span className="pointer-events-none absolute right-3 top-3 flex size-8 -translate-y-1.5 items-center justify-center rounded-full bg-cream/90 text-plum-900 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIn className="size-4" strokeWidth={1.75} />
                </span>

                {/* Caption — slides up on hover */}
                <p className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 px-4 pb-3.5 text-left text-sm font-medium leading-snug text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.alt}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
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

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <Dialog
        open={activeImage !== null}
        onOpenChange={(open) => {
          if (!open) closeLightbox();
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="max-w-[min(92vw,52rem)] border-none bg-transparent p-0 shadow-none ring-0"
        >
          {activeImage && (
            <div className="relative">
              {/* Image + top bar */}
              <div className="relative overflow-hidden rounded-2xl bg-plum-950">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  width={activeImage.width}
                  height={activeImage.height}
                  sizes="min(92vw, 52rem)"
                  className="block max-h-[78vh] w-full object-contain"
                  priority
                />

                {/* Counter + close — float over the image */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3">
                  <span className="rounded-full bg-plum-950/55 px-3 py-1 text-xs font-medium text-cream/80 backdrop-blur-sm">
                    {(activeIndex ?? 0) + 1}&thinsp;/&thinsp;{visibleImages.length}
                  </span>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    aria-label="Fermer"
                    className="flex size-8 items-center justify-center rounded-full bg-plum-950/55 text-cream/90 backdrop-blur-sm transition-colors hover:bg-plum-950/80 hover:text-cream"
                  >
                    <X className="size-4" strokeWidth={2} />
                  </button>
                </div>
              </div>

              {/* Caption */}
              <p className="mt-3 text-center text-sm text-cream/75">
                {activeImage.alt}
              </p>

              {/* Prev / Next */}
              {visibleImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    aria-label="Photo précédente"
                    className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-plum-900 shadow-md transition-colors hover:bg-cream sm:-left-6"
                  >
                    <ChevronLeft className="size-5" strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Photo suivante"
                    className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-plum-900 shadow-md transition-colors hover:bg-cream sm:-right-6"
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
