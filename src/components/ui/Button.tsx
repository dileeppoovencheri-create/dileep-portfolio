import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "dark";

interface ButtonProps extends ComponentProps<"a"> {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-paper text-ink-900 hover:bg-paper/90 ring-paper/20",
  ghost:
    "bg-transparent text-paper border border-white/15 hover:bg-white/5 hover:border-white/25 ring-white/10",
  dark:
    "bg-ink-900 text-paper hover:bg-ink-800 ring-white/10",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium",
        "transition-all duration-300 ring-1 ring-inset",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}
