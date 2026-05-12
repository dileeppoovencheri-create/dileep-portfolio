import { cn } from "@/lib/cn";

/* ============ HAIR IS POLITICAL — strategy artifact ============ */
export function HairIsPoliticalMockup() {
  const moments = [
    {
      title: "Show your Independence",
      sub: "Frida Kahlo's Self-Portrait with Cropped Hair (1940) — symbol of her divorce and financial independence.",
      image: "/images/case-studies/hair-care/Show-your-independence.jpg",
      alt: "Frida Kahlo's 1940 Self-Portrait with Cropped Hair, with the artist seated in a man's suit holding a pair of scissors, surrounded by locks of her cut hair on the floor",
    },
    {
      title: "Show your Lifestyle",
      sub: "Long-haired hippies of the 1960s — hair as a statement of an alternative life.",
      image: "/images/case-studies/hair-care/Show-your-Lifestyle.jpg",
      alt: "Crosby, Stills, Nash & Young performing live, alongside lyrics from 'Almost Cut My Hair' — long hair as a 1960s counter-cultural statement",
    },
    {
      title: "Show your Ethnicity",
      sub: "The Black Panther movement's natural Afro — a celebration of heritage and beauty.",
      image: "/images/case-studies/hair-care/Show-your-ethnicity.jpg",
      alt: "Imagery from the Black Panther era — a woman with a natural Afro centred amongst movement members, hair as a celebration of heritage and identity",
    },
    {
      title: "Show your Dissent",
      sub: "1980s punks and their mohawks — anti-establishment, unmissable.",
      image: "/images/case-studies/hair-care/Show-your-dissent.jpg",
      alt: "1980s punks with vivid mohawks of varied colour and height, hair as anti-establishment dissent",
    },
    {
      title: "Show your Age",
      sub: "The brand&rsquo;s contribution — silver, salt-and-pepper, lived-in. The conversation&rsquo;s next chapter.",
      image: "/images/case-studies/hair-care/Show-your-age.jpg",
      alt: "A smiling woman with full, natural silver-curly hair against a soft blue background — the brand's pro-age moment",
      highlight: true,
    },
  ];

  return (
    <div
      role="img"
      aria-label="Hair is Political — a five-card strategy artifact tracing how each generation has used hair as a symbol of celebration, identity, and reevaluation: Independence (Frida Kahlo, 1940), Lifestyle (1960s hippies), Ethnicity (Black Panther Afro), Dissent (1980s punk mohawks), and the brand's next chapter — Show your Age, silver hair as the conversation's next moment"
      className="overflow-hidden rounded-2xl bg-[#f7f3ee] p-6 ring-1 ring-black/[0.06] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] md:p-8"
    >
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-rose-700">
            Brand strategy artifact
          </div>
          <div className="mt-1 font-serif-italic text-3xl text-ink-900 md:text-4xl">
            Hair is political.
          </div>
        </div>
        <div className="hidden max-w-sm rounded-lg bg-white/70 p-3 text-[11px] leading-relaxed text-ink-900/80 ring-1 ring-black/[0.04] md:block">
          How hair can move the world — and why a pro-age brand can rightfully
          lead and change the conversation.
        </div>
      </div>

      <div className="mb-3 text-[11px] italic text-ink-900/60">
        Each generation used hair as a symbol of celebration, identity, and
        status-quo reevaluation.
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
        {moments.map((m) => (
          <div
            key={m.title}
            className={cn(
              "rounded-xl p-2",
              m.highlight && "ring-2 ring-rose-300 ring-offset-2 ring-offset-[#f7f3ee]",
            )}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-stone-200 ring-1 ring-black/[0.04]">
              <img
                src={m.image}
                alt={m.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div
              className={cn(
                "mt-2 text-[11px] font-semibold leading-tight",
                m.highlight ? "text-rose-900" : "text-ink-900",
              )}
            >
              {m.title}
            </div>
            <div
              className="mt-1 text-[10px] leading-snug text-ink-900/55"
              dangerouslySetInnerHTML={{ __html: m.sub }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
