import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper-mute",
        className,
      )}
    >
      <span className="h-px w-6 bg-paper-mute" aria-hidden />
      {children}
    </span>
  );
}
