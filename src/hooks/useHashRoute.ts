import { useEffect, useState } from "react";

function readHash(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash.replace(/^#/, "");
}

export function useHashRoute(): string {
  const [hash, setHash] = useState<string>(() => readHash());

  useEffect(() => {
    const onChange = () => {
      const newHash = readHash();
      setHash(newHash);

      // Distinguish a route change from an in-page anchor:
      // - If an element with this id exists on the current page, it's an anchor;
      //   smooth-scroll is handled in useSmoothScroll, leave the scroll alone.
      // - Otherwise it's a route change (e.g. #about, #case/...), so reset
      //   to the top so the new page lands at its hero.
      const elById = newHash ? document.getElementById(newHash) : null;
      if (!elById) {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return hash;
}
