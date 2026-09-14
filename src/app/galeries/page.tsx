import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Galerie photos",
  description:
    "Photos des séances d'éducation canine, balades éducatives et moments de complicité capturés avec les chiens accompagnés par Dog's Family à Châteauneuf-les-Martigues.",
  alternates: {
    canonical: "/galeries",
  },
  openGraph: {
    title: "Galerie photos | Dog's Family",
    description:
      "Séances d'éducation canine, balades et moments de complicité avec les chiens accompagnés par Dog's Family.",
    url: "/galeries",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
