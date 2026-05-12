import { motion } from "framer-motion";
import { fadeUp, revealOnView } from "@/lib/motion";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-20 md:px-10 md:py-28"
    >
      <AuroraBackdrop variant="footer" />
      <motion.div
        {...revealOnView}
        variants={fadeUp}
        className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-paper-mute">
          Get in touch
        </p>
        <h2 className="font-serif-italic text-4xl text-balance leading-[1.05] text-paper md:text-6xl">
          Let&rsquo;s build something <br className="hidden md:block" />
          worth using.
        </h2>

        <div className="flex flex-col gap-3 text-paper-dim md:flex-row md:gap-10">
          <a
            href="mailto:dileepexperience@gmail.com"
            className="group inline-flex items-center gap-2 transition-colors hover:text-paper"
          >
            <span className="text-paper-mute">Email</span>
            <span className="text-paper">dileepexperience@gmail.com</span>
            <span
              aria-hidden
              className="translate-x-0 transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href="tel:+918921836047"
            className="group inline-flex items-center gap-2 transition-colors hover:text-paper"
          >
            <span className="text-paper-mute">Phone</span>
            <span className="text-paper">+91 8921 836 047</span>
          </a>
        </div>
      </motion.div>

      <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between text-xs text-paper-mute">
        <span>© {new Date().getFullYear()} Dileep Kumar P</span>
        <span className="font-serif-italic">Crafted with care</span>
      </div>
    </footer>
  );
}
