export const BRAND = {
  name: "Dog's Family",
  tagline: "Éducation canine bienveillante",
  educator: "Camille",
  city: "Châteauneuf-les-Martigues",
  postalCode: "13220",
  phone: "06 00 00 00 00",
  phoneHref: "tel:+330600000000",
  email: "contact@dogs-family.fr",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Services", href: "#services" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Galeries", href: "/galeries" },
  { label: "Contact", href: "#contact" },
] as const;

export type ServiceAccent = "plum" | "peach" | "rose";

export type Service = {
  id: string;
  icon: "dog" | "heart-handshake" | "footprints" | "home";
  accent: ServiceAccent;
  title: string;
  description: string;
  href: string;
};

export const SERVICES: Service[] = [
  {
    id: "education-de-base",
    icon: "dog",
    accent: "plum",
    title: "Éducation de base",
    description:
      "Apprenez les bases essentielles pour une bonne communication au quotidien.",
    href: "#services",
  },
  {
    id: "reeducation-comportementale",
    icon: "heart-handshake",
    accent: "peach",
    title: "Rééducation comportementale",
    description:
      "Solutions personnalisées pour les troubles du comportement (aboiements, agressivité, peurs, etc.).",
    href: "#services",
  },
  {
    id: "balades-educatives",
    icon: "footprints",
    accent: "rose",
    title: "Balades éducatives",
    description:
      "Des balades encadrées pour travailler la sociabilisation et la gestion des émotions.",
    href: "#services",
  },
  {
    id: "conseils-a-domicile",
    icon: "home",
    accent: "plum",
    title: "Conseils à domicile",
    description:
      "Un accompagnement personnalisé chez vous pour des résultats durables.",
    href: "#services",
  },
];

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "marie-rocky",
    quote:
      "Grâce à ses conseils, notre chien a changé du tout au tout. Une éducatrice à l'écoute et très professionnelle !",
    author: "Marie & Rocky",
    rating: 5,
  },
  {
    id: "julien-nala",
    quote:
      "Les balades éducatives sont géniales ! Mon chien est plus serein et sociable. Je recommande à 100%.",
    author: "Julien & Nala",
    rating: 5,
  },
  {
    id: "sophie-loki",
    quote:
      "Une approche douce et efficace. Nous avons enfin une relation apaisée avec notre chien.",
    author: "Sophie & Loki",
    rating: 5,
  },
];


export const FOOTER_SERVICES = SERVICES.map((service) => ({
  label: service.title,
  href: service.href,
}));
