import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

import { PageLoader } from "@/components/layout/PageLoader";
import { BRAND } from "@/lib/data";

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
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: "Dog's Family | Éducatrice canine à Châteauneuf-les-Martigues",
    template: "%s | Dog's Family",
  },
  description:
    "Léa, éducatrice canine certifiée à Châteauneuf-les-Martigues et alentour. Éducation de base, rééducation comportementale, balades éducatives et maintrailing. 25 avis 5 étoiles.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { rel: "icon", url: "/logo.jpg", type: "image/jpeg", sizes: "any" },
    ],
    apple: [{ rel: "apple-touch-icon", url: "/logo.jpg" }],
    shortcut: ["/logo.jpg"],
  },
  openGraph: {
    siteName: "Dog's Family",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Dog's Family - Éducatrice canine à Châteauneuf-les-Martigues",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
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
