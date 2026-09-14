export const BRAND = {
  name: "Dog's Family",
  tagline: "Éducatrice canine",
  educator: "Léa",
  city: "Châteauneuf-les-Martigues",
  postalCode: "13220",
  // Mettre à jour avec le vrai domaine avant le déploiement
  siteUrl: "https://dogs-family.fr",
  phone: "07 78 54 51 37",
  phoneHref: "tel:+33778545137",
  email: "dogsfamily13@gmail.com",
  social: {
    facebook: "https://facebook.com/educationcaninedogsfamily/",
    instagram: "https://www.instagram.com/dogs.family.educationcanine/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Avis", href: "/avis" },
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

export const GOOGLE_REVIEWS_META = {
  rating: 5,
  total: 25,
  verified: false,
} as const;

export const REVIEW_TAGS: { label: string; count: number }[] = [
  { label: "éducatrice", count: 7 },
  { label: "elle", count: 6 },
  { label: "humain", count: 5 },
  { label: "malinois", count: 2 },
];

export type ReviewReaction = "heart" | "mind-blown";

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  rating: 5;
  avatarColor: "plum" | "peach" | "rose" | "cream" | "indigo" | "moss";
  authorMeta?: {
    localGuide?: boolean;
    reviews: number;
    photos?: number;
  };
  date: string;
  visitedMonth?: string;
  photoCount?: number;
  ownerReply?: {
    date: string;
    text: string;
  };
  dogHint?: string;
  reactions?: { type: ReviewReaction; count: number }[];
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "celine-soto",
    quote:
      "Éducatrice au top, passionnée et vraiment à l'écoute, de très bon conseil. Elle a su régler point par point les soucis de notre chienne malinois de 2 ans. Nous ne pouvons que recommander chaleureusement Léa 😊.",
    author: "Céline Soto",
    rating: 5,
    avatarColor: "plum",
    authorMeta: { reviews: 4, photos: 2 },
    date: "il y a 3 mois",
    visitedMonth: "Visité en juin",
    photoCount: 1,
    dogHint: "Saika — Malinois",
    ownerReply: {
      date: "il y a 2 mois",
      text: "Ma jolie Saika !! Ça a été un plaisir de vous accompagner dans la bonne humeur !!! Encore merci pour votre confiance 🥰",
    },
  },
  {
    id: "mika-crz",
    quote:
      "J'ai choisi un forfait de 10 séances pour ma chienne Gaya, et je ne peux que recommander cette éducatrice. Les résultats sont au rendez-vous ! Dès les premières séances, j'ai constaté une vraie évolution, et aujourd'hui Gaya est beaucoup plus sereine au quotidien.",
    author: "Mika CrZ",
    rating: 5,
    avatarColor: "peach",
    authorMeta: { reviews: 4, photos: 1 },
    date: "il y a un mois",
    visitedMonth: "Visité en juillet",
    dogHint: "Gaya",
    ownerReply: {
      date: "il y a 3 semaines",
      text: "Ça a été un plaisir d'accompagner ma petite Gaya ! Merci à vous pour votre confiance 🙏🏼",
    },
  },
  {
    id: "nathalie-besnard",
    quote:
      "Nous avons rencontré Léa pour l'éducation de base pour Serge il y a 3 ans et là nous avons découvert le mantrailing, c'était top ! Une éducatrice qui est à l'écoute et qui aime son métier ! Serge a adoré la séance ! Vivement la prochaine 😉.",
    author: "nathalie besnard-tucci",
    rating: 5,
    avatarColor: "rose",
    authorMeta: { localGuide: true, reviews: 31, photos: 26 },
    date: "il y a 7 mois",
    visitedMonth: "Visité en février",
    photoCount: 2,
    dogHint: "Serge",
    reactions: [{ type: "mind-blown", count: 1 }],
    ownerReply: {
      date: "il y a 7 mois",
      text: "Ça a été un plaisir de revoir Serge !! Il a été top au mantrailing, hâte de voir ce qui donne sur les prochaines 🤩",
    },
  },
  {
    id: "gwendoline-boisset",
    quote:
      "Super professionnelle qui sait aussi bien s'adapter aux chiens qu'aux maîtres et à leurs besoins. Ma chienne a pu vraiment progresser et retrouver une belle complicité avec moi. Léa est une très belle personne et une professionnelle en or.",
    author: "Gwendoline Boisset",
    rating: 5,
    avatarColor: "indigo",
    authorMeta: { localGuide: true, reviews: 13, photos: 1 },
    date: "il y a 3 mois",
    visitedMonth: "Visité en mai",
    dogHint: "Syrah",
    ownerReply: {
      date: "il y a 2 mois",
      text: "Merci pour ce commentaire qui fait chaud au cœur !! C'est avec plaisir que je t'accompagne toujours pour ma belle Syrah ✨",
    },
  },
  {
    id: "marie-hermione",
    quote:
      "Super accompagnement avec Léa ! Elle m'a beaucoup aidé dans l'éducation d'Hermione, ma petite Terre-Neuve, avec qui j'appréhendais la marche en laisse vu le gabarit, et dans la gestion des interactions avec les humains en balade. Merci à elle ! ☺️",
    author: "Marie",
    rating: 5,
    avatarColor: "cream",
    authorMeta: { localGuide: true, reviews: 42, photos: 4 },
    date: "il y a 4 mois",
    visitedMonth: "Visité en avril",
    dogHint: "Hermione — Terre-Neuve",
    ownerReply: {
      date: "il y a 4 mois",
      text: "Merci pour votre retour 🥰 Ça a été un plaisir de travailler avec vous 💕",
    },
  },
  {
    id: "claire-uska",
    quote:
      "Une rencontre qui a tout changé pour nous et pour notre chien. Léa est une éducatrice canine extraordinaire, profondément humaine, bienveillante et incroyablement compétente. Elle a su comprendre notre chien en quelques instants, là où nous ne parvenions plus à avancer depuis des mois.",
    author: "Claire",
    rating: 5,
    avatarColor: "moss",
    authorMeta: { localGuide: true, reviews: 34, photos: 10 },
    date: "il y a 8 mois",
    visitedMonth: "Visité en décembre 2025",
    dogHint: "Uska — Rééducation",
    reactions: [{ type: "heart", count: 1 }],
    ownerReply: {
      date: "il y a 8 mois",
      text: "Ce commentaire me touche énormément 🥹. Cela a été un réel plaisir de t'accompagner avec Uska et que tu reprennes confiance en elle ! Vous pouvez être fière toutes les 2 de votre progrès et de l'investissement 🥰",
    },
  },
  {
    id: "couls-ines-peanuts",
    quote:
      "Je recommande vivement Léa ! Elle a été d'une grande douceur et d'une patience incroyable avec mon petit Peanuts, un bébé malinois plein d'énergie. Grâce à ses conseils et à sa méthode bienveillante, il a fait des progrès remarquables en très peu de temps.",
    author: "Le couls Inès",
    rating: 5,
    avatarColor: "plum",
    authorMeta: { reviews: 4 },
    date: "il y a 10 mois",
    visitedMonth: "Visité en octobre 2025",
    dogHint: "Peanuts — Chiot Malinois",
    ownerReply: {
      date: "il y a 10 mois",
      text: "Merci pour ce superbe commentaire qui fait chaud au cœur. Ça a été un grand plaisir d'accompagner cette boule d'énergie 🥰",
    },
  },
  {
    id: "cecilia-bouyer-rio",
    quote:
      "Avec Rio nous remercions grandement Léa. Nous avons fait des progrès énorme. Réactif chien et humain, Rio a adopté Léa dès la première séance. Elle a su nous apporter un cadre et nous donner des conseils à Rio comme à moi. Aujourd'hui Rio gère de mieux en mieux et nos balades sont plus agréables. Je recommande à 100%.",
    author: "Cécilia Bouyer",
    rating: 5,
    avatarColor: "peach",
    authorMeta: { reviews: 1 },
    date: "il y a 7 mois",
    visitedMonth: "Visité en février",
    dogHint: "Rio — Réactivité",
    ownerReply: {
      date: "il y a 7 mois",
      text: "Mon petit chouchou !! Merci pour ce superbe message 🤩. Ça a été un réel plaisir de t'accompagner avec Rio qui a fait tellement de progrès !!",
    },
  },
  {
    id: "virginie-brunel",
    quote:
      "Une éducatrice passionnée, à l'écoute du chien et du propriétaire. Elle s'adapte vraiment à chaque chien. Je recommande Léa à 100%. Mes loulous adorent leur Tata. Merci à toi 🙏❤️",
    author: "Virginie BRUNEL",
    rating: 5,
    avatarColor: "rose",
    authorMeta: { localGuide: true, reviews: 20, photos: 11 },
    date: "il y a un an",
    visitedMonth: "Visité en avril 2025",
    dogHint: "Ses loulous — Multi-balades",
    ownerReply: {
      date: "il y a un an",
      text: "Un grand merci pour ce compliment qui me fait chaud au cœur 🩷. J'adore aussi tes petits cœurs d'amour grosse gargouilles à mes chouchous ✨",
    },
  },
];


export const FOOTER_SERVICES = SERVICES.map((service) => ({
  label: service.title,
  href: service.href,
}));
