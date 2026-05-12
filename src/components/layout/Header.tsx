import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Resume",
    href: "/Dileep-Kumar-P-Resume.pdf",
    download: "Dileep-Kumar-P-Resume.pdf",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const rawProgress = useMotionValue(0);
  const progress = useSpring(rawProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    let rafId = 0;
    const tick = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      rawProgress.set(ratio);
      setScrolled(window.scrollY > 24);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [rawProgress]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-md bg-ink-900/70 border-b border-white/[0.06]"
          : "bg-transparent",
      )}
    >
      {/* Scroll progress bar */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-paper/70 to-transparent"
        style={{ scaleX: progress }}
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#home"
          className="font-serif-italic text-xl tracking-tight text-paper transition-opacity hover:opacity-80"
        >
          Dileep Kumar P
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...("download" in item ? { download: item.download } : {})}
              className="rounded-full px-3 py-1.5 text-sm text-paper-dim transition-colors hover:text-paper sm:px-4 sm:py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
