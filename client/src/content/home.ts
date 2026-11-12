export const CV_URL = "/umar-farouq-ibrahim-cv.pdf";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  availability: "Open to software engineering opportunities and meaningful collaborations",
  lines: ["I build software", "for real-world"],
  highlight: "problems.",
  intro:
    "I’m Umar Farouq, a software developer and product builder. I turn ideas into useful web products, working across the interface, backend, and the engineering decisions that make them reliable.",
  primaryCta: { label: "View selected work", href: "#work" },
  secondaryCta: { label: "Download CV", href: CV_URL },
  visual: {
    top: "Independently built / 001",
    caption: "Systems thinking",
    title: "Ideas → Interfaces → Impact",
  },
} as const;

export interface Metric {
  value: string;
  label: string;
  accent?: boolean;
}

export const METRICS: readonly Metric[] = [
  { value: "End to end", label: "From product thinking to production", accent: true },
  { value: "Full stack", label: "Frontend, backend, and data" },
  { value: "Independent builder", label: "Taking products from idea to deployment" },
];

export const METRICS_HINT = { label: "Scroll to explore", href: "#work" } as const;

export const WORK = {
  eyebrow: "Selected work / 2024—2026",
  title: "A few things I’ve built.",
  description:
    "A selection of products I’ve designed, built, and taken toward real use.",
  emptyMessage: "New projects are on the way.",
} as const;

export interface Principle {
  title: string;
  body: string;
}

export const ABOUT = {
  eyebrow: "A little about how I work",
  titleLines: ["Engineering is the tool.", "Impact is the point."],
  body: "I’m a Computer Science graduate from Ahmadu Bello University and an independent software developer who enjoys taking products from a rough idea to a working release. I care about understanding the problem before choosing the tools, building systems that are maintainable, and making the experience clear for the people using them.",
  credibility:
    "Computer Science, ABU Zaria · Former NACOS Department President · Independent Product Builder",
  principles: [
    {
      title: "Product thinking",
      body: "Understand the user and the problem before choosing a solution.",
    },
    {
      title: "Engineering discipline",
      body: "Clear boundaries, maintainable code, and dependable systems.",
    },
    {
      title: "Ownership",
      body: "Take responsibility from the first sketch through deployment and iteration.",
    },
  ] satisfies readonly Principle[],
} as const;

export const TOOLKIT = {
  eyebrow: "Tools I reach for",
  title: "A practical toolkit.",
  groups: [
    {
      label: "Frontend",
      items: ["REACT", "TYPESCRIPT", "NEXT.JS", "TAILWIND CSS"],
    },
    {
      label: "Backend",
      items: ["NODE.JS", "EXPRESS", "REST APIs", "GRAPHQL"],
    },
    {
      label: "Data",
      items: ["POSTGRESQL", "REDIS", "DRIZZLE ORM"],
    },
    {
      label: "Delivery",
      items: ["DOCKER", "GIT", "GITHUB"],
    },
  ],
} as const;

export const CONTACT = {
  eyebrow: "Have a good problem?",
  titleLines: ["Let’s make", "something useful."],
  body: "Have a product idea, an engineering opportunity, or a problem worth solving? I’d be glad to talk.",
  cta: "Start a conversation",
} as const;

export const FOOTER_NOTE = "Designed with intention. Built with care.";
