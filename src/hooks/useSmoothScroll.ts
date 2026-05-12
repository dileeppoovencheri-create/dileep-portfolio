import { useEffect } from "react";
import Lenis from "lenis";

export function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Smooth-scroll for in-page anchor links (e.g. #portfolio, #contact, #home).
    // We let route-change hashes (#about, #case/...) fall through to the
    // browser → useHashRoute will handle the page swap.
    const onAnchorClick = (e: MouseEvent) => {
      // Respect modifier keys (open in new tab, etc.) and non-primary clicks
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (e.button !== 0) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const id = decodeURIComponent(href.slice(1));
      const el = document.getElementById(id);
      // No matching element on the current page — let the browser handle it
      // (it'll trigger hashchange and useHashRoute will route accordingly).
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, {
        offset: -72, // sticky header clearance
        duration: 1.4,
      });

      // Update URL silently so the hash reflects the section without
      // triggering hashchange (which would conflict with useHashRoute).
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", href);
      }
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
