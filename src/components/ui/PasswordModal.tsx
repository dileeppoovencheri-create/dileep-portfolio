import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface PasswordModalProps {
  open: boolean;
  onClose: () => void;
  /** Return true if the password was correct (modal will close). */
  onSubmit: (password: string) => boolean;
}

export function PasswordModal({ open, onClose, onSubmit }: PasswordModalProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset state every time the modal opens and focus the input.
  useEffect(() => {
    if (!open) return;
    setValue("");
    setError(false);
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => window.clearTimeout(t);
  }, [open]);

  // ESC to dismiss; lock background scroll while open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = onSubmit(value);
    if (!ok) {
      setError(true);
      setValue("");
      inputRef.current?.focus();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="password-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/75 px-5 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="password-modal-title"
          data-lenis-prevent
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: easeOutExpo }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "w-full max-w-md rounded-3xl bg-paper p-7 text-ink-900 shadow-2xl ring-1 ring-black/10",
              "md:p-9",
            )}
          >
            <h3
              id="password-modal-title"
              className="font-serif-italic text-3xl leading-[1.05] md:text-4xl"
            >
              Protected case study
            </h3>
            <p className="mt-3 text-sm text-ink-900/70 md:text-base">
              These case studies cover work delivered under NDA. Enter the
              access password to continue.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <input
                ref={inputRef}
                type="password"
                inputMode="text"
                autoComplete="current-password"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Password"
                aria-label="Password"
                aria-invalid={error || undefined}
                aria-describedby={error ? "password-error" : undefined}
                className={cn(
                  "w-full rounded-full border bg-white/60 px-5 py-3 text-sm text-ink-900 outline-none transition-colors",
                  "placeholder:text-ink-900/40",
                  error
                    ? "border-red-500/60 focus:border-red-500"
                    : "border-ink-900/15 focus:border-ink-900/45",
                )}
              />
              {error && (
                <p
                  id="password-error"
                  className="px-2 text-xs text-red-600"
                  role="alert"
                >
                  Incorrect password. Please try again.
                </p>
              )}

              <div className="mt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full px-5 py-2.5 text-sm font-medium text-ink-900/70 transition-colors hover:text-ink-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink-800"
                >
                  Unlock
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
