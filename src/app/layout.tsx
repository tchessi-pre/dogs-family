import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream font-sans text-plum-900 antialiased">
        {children}
      </body>
    </html>
  );
}
