import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/sections/Gallery";

export const metadata = {
  title: "Galeries photos — Dog's Family",
  description:
    "Découvrez les moments de complicité capturés lors des séances d'éducation canine, des balades éducatives et des instants partagés avec les chiens.",
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
