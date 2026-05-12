export type ProjectCategory =
  | "Enterprise Application"
  | "B2B Platform"
  | "Brand Website";

export type AccentTone = "blue" | "mint" | "lavender" | "cream" | "paper";

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  href: string;
  accent: AccentTone;
  imageAlt: string;
  /**
   * Optional path to a real screenshot for the home-page card.
   * When set, the card renders this image instead of the synthesized
   * `ProjectMockup` for this project's `id`.
   */
  image?: string;
}

export const projects: Project[] = [
  {
    id: "warranty-management",
    category: "Enterprise Application",
    title: "Warranty Management",
    description:
      "Consolidated after-sales platform that streamlines claims, parts, and service workflows — built for accessibility and speed across distributed teams.",
    href: "#case/warranty-management",
    accent: "paper",
    imageAlt: "Warranty management dashboards and request flows",
  },
  {
    id: "influencer-management",
    category: "Enterprise Application",
    title: "Influencer Management",
    description:
      "An enterprise platform for managing influencer partnerships end to end — from contract negotiation and signing through to AI-driven content validation that scores brand alignment, sentiment, and safety risk before every publish.",
    href: "#case/influencer-management",
    accent: "paper",
    imageAlt:
      "Influencer management contract workflow and AI-assisted content validation screens",
  },
  {
    id: "b2b-dental-platform",
    category: "B2B Platform",
    title: "B2B Dental Care Platform",
    description:
      "A learning and commerce platform serving dental professionals, students, and academicians worldwide — modernized for clarity, depth, and discovery.",
    href: "#case/b2b-dental-platform",
    accent: "blue",
    imageAlt: "B2B dental care education platform across desktop and mobile",
  },
  {
    id: "pro-age-hair-care",
    category: "Brand Website",
    title: "Pro-Age Hair Care",
    description:
      "A digital experience for a pro-age hair care brand serving women over 50 — redesigned around their changing hair, the questions no one was answering, and the confidence of the years they&rsquo;ve earned.",
    href: "#case/pro-age-hair-care",
    accent: "lavender",
    imageAlt:
      "Pro-age hair care site composition — desktop with Shop by Solution (greying / fading / thinning hair), Before & After Hair Biology, and 'Our hair changes as we get older' sections, alongside three mobile screens for the rotating tagline, an article, and a product page",
    image: "/images/projects/pro-age-hair-care.jpg",
  },
];
