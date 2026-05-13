import { useEffect, useState } from "react";

/**
 * Soft password gate for case studies.
 *
 * Behavior: a successful unlock authorizes only the *current* case-study
 * visit. The moment the user navigates away to a non-case-study route
 * (Home, About, etc.), the gate auto-relocks, so the next "View Case Study"
 * click re-prompts.
 *
 * Note: this is intentionally a *client-side* check. The password lives in
 * the JS bundle and can be recovered by anyone determined to read it in
 * DevTools. It's meant as a polite "do not browse" sign for casual visitors,
 * not as real access control. If real privacy is ever required, move the
 * check server-side (e.g. a Vercel Edge function gating a signed cookie).
 */
const PASSWORD = "Dili0467";
const UNLOCK_EVENT = "portfolio-unlock-changed";

// Single module-level source of truth so multiple hook consumers stay in sync
// without any persistent storage.
let globalUnlocked = false;

function setGlobalUnlocked(value: boolean) {
  if (globalUnlocked === value) return;
  globalUnlocked = value;
  window.dispatchEvent(new Event(UNLOCK_EVENT));
}

function isCaseStudyHash(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.hash.replace(/^#/, "").startsWith("case/");
}

export function usePortfolioUnlock() {
  const [unlocked, setUnlocked] = useState(globalUnlocked);

  useEffect(() => {
    // Keep this hook instance in sync with the module-level state.
    const sync = () => setUnlocked(globalUnlocked);
    window.addEventListener(UNLOCK_EVENT, sync);

    // Auto-relock whenever the user leaves a case-study route. Multiple hook
    // instances all attach this; the work is idempotent.
    const onHashChange = () => {
      if (!isCaseStudyHash()) setGlobalUnlocked(false);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener(UNLOCK_EVENT, sync);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const tryUnlock = (password: string): boolean => {
    if (password !== PASSWORD) return false;
    setGlobalUnlocked(true);
    return true;
  };

  return { unlocked, tryUnlock };
}
