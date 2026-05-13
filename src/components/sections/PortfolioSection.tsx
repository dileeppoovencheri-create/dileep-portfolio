import { useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project, type AccentTone } from "@/data/projects";
import { ProjectMockup } from "@/components/ui/ProjectMockup";
import { PasswordModal } from "@/components/ui/PasswordModal";
import { fadeUp, revealOnView, easeOutExpo } from "@/lib/motion";
import { useCardTilt } from "@/hooks/useCardTilt";
import { usePortfolioUnlock } from "@/hooks/usePortfolioUnlock";
import { cn } from "@/lib/cn";

const accentBg: Record<AccentTone, string> = {
  paper: "bg-paper text-ink-900",
  blue: "bg-accent-blue text-ink-900",
  mint: "bg-accent-mint text-ink-900",
  lavender: "bg-accent-lavender text-ink-900",
  cream: "bg-accent-cream text-ink-900",
};

export function PortfolioSection() {
  const { tryUnlock } = usePortfolioUnlock();
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const handleCardClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Always intercept — every "View case study" click should prompt for the
    // password. The hook auto-relocks whenever the user leaves a case-study
    // route, so we never need to "skip if already unlocked" here.
    e.preventDefault();
    setPendingHref(href);
  };

  const handleUnlock = (password: string): boolean => {
    const ok = tryUnlock(password);
    if (ok && pendingHref) {
      const target = pendingHref;
      setPendingHref(null);
      // Navigate to the case study the user originally clicked.
      window.location.hash = target.replace(/^#/, "");
    }
    return ok;
  };

  return (
    <section id="portfolio" className="relative px-6 py-24 md:px-10 md:py-32">
      <motion.div
        {...revealOnView}
        variants={fadeUp}
        className="mx-auto mb-16 flex max-w-7xl flex-col items-start gap-4 md:mb-20"
      >
        <h2 className="font-serif-italic text-5xl leading-[1.02] text-balance text-paper md:text-7xl">
          Portfolio
        </h2>
        <p className="max-w-2xl text-pretty text-paper-dim md:text-lg">
          A handful of projects across enterprise tooling, B2B platforms, and
          brand experiences — each one shipped, each one shaped by the people
          who use it every day.
        </p>
      </motion.div>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            reverse={index % 2 === 1}
            onCtaClick={handleCardClick}
          />
        ))}
      </div>

      <PasswordModal
        open={pendingHref !== null}
        onClose={() => setPendingHref(null)}
        onSubmit={handleUnlock}
      />
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  reverse: boolean;
  onCtaClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

function ProjectCard({ project, index, reverse, onCtaClick }: ProjectCardProps) {
  const tilt = useCardTilt({ max: 4, perspective: 1600 });

  return (
    <motion.article
      ref={tilt.ref as React.RefObject<HTMLElement>}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.05 }}
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformPerspective: tilt.perspective,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "ring-1 ring-black/[0.04]",
        accentBg[project.accent],
      )}
    >
      <div
        className={cn(
          "grid items-center gap-6 p-6 md:gap-12 md:p-10 lg:gap-16 lg:p-14",
          "md:grid-cols-2",
          reverse && "md:[&>:first-child]:order-2",
        )}
      >
        <ProjectVisual project={project} />

        <div className="flex flex-col items-start gap-5 md:gap-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-ink-900/50">
            <span className="mr-2 inline-block w-6 align-middle border-t border-ink-900/30" />
            {project.category}
          </span>

          <h3
            className="font-serif-italic text-3xl leading-[1.05] text-balance md:text-4xl lg:text-5xl"
            style={{ transform: "translateZ(20px)" }}
          >
            {project.title}
          </h3>

          <p className="max-w-prose text-pretty text-sm leading-relaxed text-ink-900/70 md:text-base">
            {project.description}
          </p>

          <a
            href={project.href}
            onClick={(e) => onCtaClick(e, project.href)}
            className={cn(
              "group/btn mt-2 inline-flex items-center gap-2 rounded-full",
              "border border-ink-900/15 bg-white/40 px-5 py-2.5 text-sm font-medium text-ink-900",
              "transition-all duration-300 hover:bg-ink-900 hover:text-paper hover:border-ink-900",
            )}
          >
            View case study
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
            >
              →
            </span>
          </a>

          <span
            aria-hidden
            className="absolute right-6 top-6 font-serif-italic text-sm text-ink-900/30 md:right-10 md:top-10"
          >
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <motion.div
      style={{ transform: "translateZ(30px)" }}
      className="relative will-change-transform"
    >
      <ProjectMockup project={project} />
    </motion.div>
  );
}
