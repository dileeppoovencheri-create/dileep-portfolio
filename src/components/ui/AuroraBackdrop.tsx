import { cn } from "@/lib/cn";

interface AuroraBackdropProps {
  className?: string;
  variant?: "hero" | "footer";
}

export function AuroraBackdrop({
  className,
  variant = "hero",
}: AuroraBackdropProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0">
        <span
          className={cn(
            "absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-[0.18] blur-[110px]",
            "bg-[radial-gradient(closest-side,#cfe1ff_0%,transparent_70%)]",
            "animate-aurora-slow",
          )}
        />
        <span
          className={cn(
            "absolute -top-10 right-[-12%] h-[540px] w-[540px] rounded-full opacity-[0.16] blur-[120px]",
            "bg-[radial-gradient(closest-side,#d9d6f5_0%,transparent_70%)]",
            "animate-aurora-slower",
          )}
        />
        <span
          className={cn(
            "absolute bottom-[-10%] left-[-8%] h-[520px] w-[520px] rounded-full opacity-[0.14] blur-[120px]",
            "bg-[radial-gradient(closest-side,#d4ecd5_0%,transparent_70%)]",
            "animate-aurora-medium",
          )}
        />
        {variant === "footer" && (
          <span
            className={cn(
              "absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.10] blur-[130px]",
              "bg-[radial-gradient(closest-side,#f4ecdc_0%,transparent_70%)]",
              "animate-aurora-slow",
            )}
          />
        )}
      </div>

      {/* Soft vignette to keep edges from glowing too hot */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, rgba(10,10,12,0.65) 100%)",
        }}
      />
    </div>
  );
}
