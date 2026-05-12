const CAPABILITIES = [
  "Enterprise UX",
  "Design Systems",
  "B2B Platforms",
  "User-Centered Design",
  "Design Thinking",
  "User Research",
  "Service Design",
  "Brand Experience",
  "Information Architecture",
  "Prototyping",
];

export function CapabilityMarquee() {
  // Duplicate the list so the loop is seamless after a -50% translate
  const items = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <div
      aria-label="Areas of practice"
      className="relative mx-auto mt-20 max-w-7xl overflow-hidden border-y border-white/[0.06] py-6"
    >
      {/* Edge fade masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent"
      />

      <div className="flex w-max animate-marquee gap-12 will-change-transform">
        {items.map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-12 text-paper-dim"
          >
            <span className="font-serif-italic text-2xl tracking-tight md:text-3xl">
              {label}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-paper-mute/50" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
