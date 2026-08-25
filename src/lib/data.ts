export const BRAND = {
  name: "Dog's Family",
  tagline: "Éducation canine bienveillante",
  educator: "Léa",
  city: "Châteauneuf-les-Martigues",
  postalCode: "13220",
  phone: "07 78 54 51 37",
  phoneHref: "tel:+33778545137",
  email: "contact@dogs-family.fr",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/dogs.family.educationcanine/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "Galeries", href: "/galeries" },
  { label: "Contact", href: "/contact" },
] as const;

export type ServiceAccent = "plum" | "peach" | "rose";

export type Service = {
  id: string;
  icon: "dog" | "heart-handshake" | "footprints" | "home" | "compass";
  accent: ServiceAccent;
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
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
    longDescription:
      "Idéale pour les chiots comme pour les chiens adultes, cette prestation pose les fondations d'une relation claire et sereine entre vous et votre compagnon, avec des méthodes positives et adaptées à son rythme.",
    highlights: [
      "Le rappel et la marche en laisse",
      "Les ordres de base (assis, couché, reste)",
      "La gestion des interactions au quotidien",
    ],
    href: "/services#education-de-base",
  },
  {
    id: "reeducation-comportementale",
    icon: "heart-handshake",
    accent: "peach",
    title: "Rééducation comportementale",
    description:
      "Solutions personnalisées pour les troubles du comportement (aboiements, agressivité, peurs, etc.).",
    longDescription:
      "Un accompagnement sur-mesure pour comprendre l'origine des difficultés de votre chien et l'aider, en douceur, à retrouver un comportement équilibré et une meilleure gestion de ses émotions.",
    highlights: [
      "Aboiements excessifs",
      "Peurs et anxiété de séparation",
      "Réactivité et agressivité",
    ],
    href: "/services#reeducation-comportementale",
  },
  {
    id: "balades-educatives",
    icon: "footprints",
    accent: "rose",
    title: "Balades éducatives",
    description:
      "Des balades encadrées pour travailler la sociabilisation et la gestion des émotions.",
    longDescription:
      "Des sorties en petit groupe ou individuelles, encadrées et bienveillantes, pour travailler la sociabilisation, la marche en laisse et la confiance de votre chien dans des environnements variés.",
    highlights: [
      "Sociabilisation avec chiens et humains",
      "Gestion des émotions en extérieur",
      "Renforcement du lien en balade",
    ],
    href: "/services#balades-educatives",
  },
  {
    id: "conseils-a-domicile",
    icon: "home",
    accent: "plum",
    title: "Conseils à domicile",
    description:
      "Un accompagnement personnalisé chez vous pour des résultats durables.",
    longDescription:
      "Une séance dans l'environnement quotidien de votre chien, pour observer les habitudes du foyer et vous transmettre des conseils concrets et durables, adaptés à toute la famille.",
    highlights: [
      "Observation dans l'environnement du chien",
      "Conseils personnalisés pour toute la famille",
      "Suivi et ajustement du programme",
    ],
    href: "/services#conseils-a-domicile",
  },
  {
    id: "maintrailing",
    icon: "compass",
    accent: "peach",
    title: "Maintrailing",
    description:
      "Une activité basée sur le flair, où votre chien apprend à suivre la piste odorante d'une personne.",
    longDescription:
      "Le maintrailing sollicite l'odorat naturel du chien pour retrouver une personne à partir de son odeur spécifique. Une activité ludique et stimulante qui renforce la complicité et la confiance entre vous et votre compagnon.",
    highlights: [
      "Stimulation olfactive et mentale",
      "Renforcement de la complicité",
      "Adapté aux chiens curieux et joueurs",
    ],
    href: "/services#maintrailing",
  },
];

export type PricingItem = {
  label: string;
  price: string;
  note?: string;
};

export type PricingCategory = {
  id: string;
  title: string;
  items: PricingItem[];
};

export const PRICING: PricingCategory[] = [
  {
    id: "education-canine",
    title: "Éducation canine",
    items: [
      { label: "Bilan", price: "30€" },
      { label: "Bilan à domicile", price: "40€" },
      { label: "Séance individuelle", price: "50€" },
      { label: "Forfait 5 séances", price: "200€" },
      { label: "Forfait 10 séances", price: "350€" },
      { label: "Forfait éducation 15 séances", price: "450€" },
    ],
  },
  {
    id: "maintrailing",
    title: "Maintrailing",
    items: [
      {
        label: "Stage initiation maintrailing",
        price: "50€",
        note: "3h · 4 duos max",
      },
      { label: "Cours individuel", price: "35€", note: "45 min" },
      {
        label: "Entraînement en groupe",
        price: "25€",
        note: "4 duos max",
      },
      { label: "Forfait 10 séances de maintrailing", price: "200€" },
    ],
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
