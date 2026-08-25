import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

import { PageLoader } from "@/components/layout/PageLoader";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dog's Family | Éducation canine bienveillante",
  description:
    "Éducatrice canine à Châteauneuf-les-Martigues et alentour. Éducation de base, rééducation comportementale, balades éducatives et conseils à domicile pour une relation harmonieuse avec votre chien.",
  icons: {
    icon: [
      { rel: "icon", url: "/logo.jpg", type: "image/jpeg", sizes: "any" },
    ],
    apple: [{ rel: "apple-touch-icon", url: "/logo.jpg" }],
    shortcut: ["/logo.jpg"],
  },
  openGraph: {
    title: "Dog's Family | Éducation canine bienveillante",
    description:
      "Éducatrice canine à Châteauneuf-les-Martigues et alentour. Éducation de base, rééducation comportementale, balades éducatives et conseils à domicile.",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Logo Dog's Family",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog's Family | Éducation canine bienveillante",
    description:
      "Éducatrice canine à Châteauneuf-les-Martigues et alentour. Éducation de base, rééducation comportementale, balades éducatives et conseils à domicile.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream font-sans text-plum-900 antialiased">
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
