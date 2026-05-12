import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";
import { CapabilityMarquee } from "@/components/ui/CapabilityMarquee";

const HEADLINE_WORDS = ["Dileep", "Kumar", "P"];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44"
    >
      <AuroraBackdrop />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[auto_1fr] md:gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOutExpo }}
          className="relative mx-auto md:mx-0"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-full bg-gradient-to-br from-white/15 via-white/5 to-transparent blur-2xl"
          />
          <motion.div
            initial={{ rotate: -2 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1.4, ease: easeOutExpo, delay: 0.1 }}
            className="relative h-44 w-44 overflow-hidden rounded-full ring-1 ring-white/15 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-72 lg:w-72"
          >
            <img
              src="/images/profile/headshot.jpg"
              alt="Portrait of Dileep Kumar P"
              className="h-full w-full scale-105 object-cover object-center"
              loading="eager"
              decoding="async"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
            />
          </motion.div>
        </motion.div>

        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.25em] text-paper-mute"
          >
            Lead UX · Strategic · 13+ years
          </motion.p>

          <h1 className="mt-4 font-serif-italic text-5xl leading-[1.02] text-balance text-paper sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="sr-only">Dileep Kumar P</span>
            <span aria-hidden className="flex flex-wrap justify-center gap-x-4 md:justify-start">
              {HEADLINE_WORDS.map((word, i) => (
                <span key={word} className="overflow-hidden inline-block leading-[1.1]">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1.05,
                      ease: easeOutExpo,
                      delay: 0.35 + i * 0.12,
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.85 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-paper md:mx-0 md:text-lg"
          >
            Lead UX for the{" "}
            <strong className="text-paper">
              enterprise platforms global businesses depend on
            </strong>{" "}
            — and the{" "}
            <em className="font-serif-italic text-paper">AI moments</em>{" "}
            inside them.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.95 }}
            className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-paper-dim md:mx-0 md:text-lg"
          >
            13+ years leading UX across{" "}
            <strong className="text-paper">enterprise operations</strong>,{" "}
            <strong className="text-paper">B2B ecosystems</strong>, and{" "}
            <strong className="text-paper">brand experiences</strong> —
            turning fragmented, multi-stakeholder workflows into surfaces
            that ship, scale, and earn trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOutExpo, delay: 1.0 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:items-start md:justify-start"
          >
            <Button href="#portfolio" variant="primary">
              View work
            </Button>
            <Button href="#contact" variant="ghost">
              Get in touch
            </Button>
          </motion.div>
        </div>
      </div>

      <CapabilityMarquee />
    </section>
  );
}
