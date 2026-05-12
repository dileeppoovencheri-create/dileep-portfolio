import type { Variants } from "framer-motion";

type Bezier = [number, number, number, number];

export const easeSoft: Bezier = [0.22, 1, 0.36, 1];
export const easeOutExpo: Bezier = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeSoft },
  },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: { delayChildren, staggerChildren },
  },
});

export const revealOnView = {
  initial: "hidden",
  whileInView: "visible",
  // amount: "some" triggers as soon as ANY part of the element enters the viewport.
  // Required for tall sections (e.g. case-study sections that contain multiple
  // mockups + achievements) — a numeric amount like 0.25 can never be satisfied
  // when the section is taller than the viewport, leaving content at opacity 0.
  viewport: { once: true, amount: "some" },
} as const;
