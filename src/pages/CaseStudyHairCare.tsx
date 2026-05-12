import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";
import { fadeUp, revealOnView, easeOutExpo } from "@/lib/motion";
import { HairIsPoliticalMockup } from "@/components/casestudy/HairCareMockups";
import { cn } from "@/lib/cn";

const META = [
  { label: "Role", value: "Lead UX & Visual" },
  { label: "Audience", value: "Women 50+" },
  { label: "Year", value: "2022 — 2023" },
  { label: "Discipline", value: "Brand UX · IA · Inclusive design" },
  { label: "Surfaces", value: "Web · responsive across mobile, tablet, desktop" },
];

export function CaseStudyHairCare() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TheMission />
        <HairIsPolitical />
        <Personas />
        <TheChallenge />
        <Audit />
        <Approach />
        <TheRedesign />
        <Outcomes />
        <Reflection />
        <NextStudy />
      </main>
      <Footer />
    </>
  );
}

/* ====================== HERO ====================== */
function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-44">
      <AuroraBackdrop />

      <div className="relative mx-auto max-w-7xl">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          href="#"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper-mute hover:text-paper"
        >
          <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">
            ←
          </span>
          Back to portfolio
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.1 }}
          className="mt-6 flex max-w-2xl items-start gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[11px] leading-relaxed text-paper-mute"
        >
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/80" aria-hidden />
          <span>
            <span className="text-paper-dim">Note on confidentiality.</span>{" "}
            All proprietary information has been removed in accordance with my
            agreement. The brand is referred to generically; the screens shown
            here are a new interpretation of the original system, not actual
            product UI.
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.15 }}
          className="mt-10 text-xs uppercase tracking-[0.25em] text-paper-mute"
        >
          Case Study · Brand Website · Pro-Age
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.25 }}
          className="mt-4 max-w-4xl font-serif-italic text-5xl leading-[1.02] text-balance text-paper md:text-7xl lg:text-[5.5rem]"
        >
          Show your age.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.45 }}
          className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-paper-dim md:text-xl"
        >
          A digital experience for a pro-age hair care brand serving women
          over 50 — redesigned around the changes their hair was actually
          going through, the questions no one was answering, and the
          confidence of the years they&rsquo;d earned. The brief was simple
          to state and difficult to land: stop talking <em>at</em> this
          audience and start talking <em>with</em> them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.65 }}
          className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-white/[0.06] py-8 md:grid-cols-5"
        >
          {META.map((m) => (
            <div key={m.label}>
              <div className="text-[10px] uppercase tracking-[0.2em] text-paper-mute">
                {m.label}
              </div>
              <div className="mt-2 text-sm text-paper md:text-base">
                {m.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ====================== THE MISSION ====================== */
function TheMission() {
  return (
    <SectionShell eyebrow="01 · The mission">
      <SectionHeading>
        Empowering women in their fifties to find beauty in their{" "}
        <em className="font-serif-italic">authentic self</em>.
      </SectionHeading>
      <Lede>
        The brand exists to help women over 50 embrace their changing hair
        and celebrate their age with confidence. Its products are formulated
        for the realities of greying, thinning, and changing texture — but
        the website hadn&rsquo;t caught up with the brand&rsquo;s pro-age
        philosophy. The redesign had to make the site as authentic, as
        honest, and as relevant as the products it sold.
      </Lede>

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {[
          { stat: "< 5%", label: "of beauty marketing targets women over 50" },
          { stat: "3", label: "tensions the brand needed to speak to" },
          { stat: "1", label: "site to do all of this without losing its warmth" },
        ].map((m) => (
          <StatCard key={m.label} {...m} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== HAIR IS POLITICAL ====================== */
function HairIsPolitical() {
  return (
    <SectionShell eyebrow="02 · Hair is political" tone="cool">
      <SectionHeading>
        The conversation hair has been having{" "}
        <em className="font-serif-italic">for a century</em>.
      </SectionHeading>
      <Lede>
        Each generation has used hair as a symbol of celebration, identity,
        and status-quo reevaluation — from Frida Kahlo&rsquo;s cropped hair
        to the long manes of the 1960s, the Afro of the Black Panther
        movement, and the 1980s mohawk. The strategic insight that anchored
        the redesign was simple: a pro-age hair care brand is perfectly
        placed to lead the next chapter in that conversation. The next
        cultural moment isn&rsquo;t a haircut. It&rsquo;s an age.
      </Lede>

      <Showcase>
        <HairIsPoliticalMockup />
      </Showcase>

      <div className="mt-10 max-w-3xl text-pretty text-paper-dim md:text-lg">
        The brand could authentically lead the recalibration of the
        conversation around age and hair — inspiring confidence, asserting
        relevancy, and standing up for age-inclusive representation in the
        media. <em className="font-serif-italic text-paper">Show your Age</em>{" "}
        wasn&rsquo;t a tagline. It was a position.
      </div>
    </SectionShell>
  );
}

/* ====================== PERSONAS ====================== */
function Personas() {
  return (
    <SectionShell eyebrow="03 · Who we designed for">
      <SectionHeading>
        Two women, three quiet tensions{" "}
        <em className="font-serif-italic">they share</em>.
      </SectionHeading>
      <Lede>
        Interviews and surveys with women in their 50s and 60s pulled two
        primary personas into focus — and three emotional tensions that ran
        underneath both of them. Designing for the personas meant designing
        for those tensions too.
      </Lede>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <PersonaCard
          name="Susan, 55"
          headline="Ready to invest in herself."
          quote="Is there something out there made for me?"
          accent="rose"
          situation="Empty nester, working professional. Now has more &lsquo;me time&rsquo; to focus on her wellbeing. Once-thick brunette hair is greying and thinning."
          goals={[
            "Products that add real volume and shine — without false promises",
            "Modern, flattering ways to style greying hair",
            "Expert advice she can trust",
          ]}
          pains={[
            "Beauty ads ignore her age and make her feel invisible",
            "Store shelves don&rsquo;t indicate what&rsquo;s right for menopausal hair changes",
            "No clear path through a website built around product types, not concerns",
          ]}
        />
        <PersonaCard
          name="Maria, 60"
          headline="Embracing the gray, ready to learn."
          quote="I want reliable information about the hair I have now."
          accent="amber"
          situation="Recent retiree. Has let her natural silver hair grow out. Believes in ageing gracefully, and wants to do it well."
          goals={[
            "Gentle products that brighten her silver and prevent dryness",
            "Reliable, expert-backed information for post-60 hair care",
            "A site that treats her like the customer she is, not the customer she was",
          ]}
          pains={[
            "Almost no models in hair product ads have gray hair like hers",
            "Hard to find trustworthy info tailored to her stage of life",
            "Sites assume she&rsquo;s shopping for someone else, not for herself",
          ]}
        />
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        <TensionCard
          label="Emotional tension"
          headline="Feeling irrelevant."
          body="With children grown and societal focus elsewhere, many described &lsquo;losing their visibility&rsquo; after 50 — feeling less needed, less seen."
        />
        <TensionCard
          label="Beauty tension"
          headline="Questioning desirability."
          body="As their appearance changes, these women worry that society no longer finds them beautiful. Few examples of vibrant older women in media reinforce the doubt."
        />
        <TensionCard
          label="Hair tension"
          headline="Adapting to changing hair."
          body="Tension between embracing the natural ageing of hair and the pressure to cover the gray or fix the thinning. Many are unsure how to address issues that didn&rsquo;t exist in their 30s or 40s."
        />
      </div>

      <div className="mt-10 max-w-3xl text-pretty text-paper-dim md:text-lg">
        These tensions described a journey — from{" "}
        <em className="font-serif-italic text-paper">&ldquo;I&rsquo;m no longer seen&rdquo;</em>{" "}
        to{" "}
        <em className="font-serif-italic text-paper">&ldquo;I&rsquo;m proud of who I am now.&rdquo;</em>{" "}
        That arc became the design&rsquo;s emotional brief.
      </div>
    </SectionShell>
  );
}

/* ====================== THE CHALLENGE (BUSINESS) ====================== */
function TheChallenge() {
  return (
    <SectionShell eyebrow="04 · The challenge" tone="warm">
      <SectionHeading>
        Three jobs the website had to do{" "}
        <em className="font-serif-italic">at the same time</em>.
      </SectionHeading>
      <Lede>
        The brief came from three directions at once — marketing, brand, and
        the audience itself. The redesign had to land all three without
        compromising any one of them.
      </Lede>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            label: "Optimise marketing spend",
            body: "Maximise reach through the website itself — turning paid traffic into deeper engagement and a measurable next step rather than a single bounce.",
          },
          {
            label: "Improve brand engagement & conversion",
            body: "Establish product authenticity and relevance in a niche the mainstream beauty industry had largely ignored: senior haircare.",
          },
          {
            label: "Address emotional needs of the audience",
            body: "Speak to the &lsquo;emotional tension&rsquo; of irrelevancy and the &lsquo;beauty tension&rsquo; of lack of desirability — without ever being patronising.",
          },
        ].map((c) => (
          <ProblemCard key={c.label} {...c} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== UX AUDIT ====================== */
function Audit() {
  return (
    <SectionShell eyebrow="05 · UX audit & gaps">
      <SectionHeading>
        Where the existing site was{" "}
        <em className="font-serif-italic">losing her</em>.
      </SectionHeading>
      <Lede>
        Heuristic evaluation against the personas&rsquo; real journeys
        produced a clear, prioritised list of gaps in the existing site.
        Five themes carried most of the friction.
      </Lede>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          {
            label: "Navigation built around product type, not problem",
            body: "Someone trying to solve &lsquo;dry, brittle gray hair&rsquo; had to translate her concern into the brand&rsquo;s product taxonomy. Finding the right product took too long.",
          },
          {
            label: "Imagery showed only one kind of older woman",
            body: "Elegant, dignified, similar tone throughout. Missed the chance to reflect the audience&rsquo;s real range — fashion-forward, sporty, multi-ethnic, full of life.",
          },
          {
            label: "Thin educational content",
            body: "Beyond product descriptions, very little. Articles addressing common questions of ageing hair were sparse or hard to find. The site felt transactional.",
          },
          {
            label: "Trust evidence was thin",
            body: "Few scientific explanations, no visuals showing products in action. Testimonials were text-only quotes — credible voices but not clearly real people with real faces.",
          },
          {
            label: "Accessibility needed work",
            body: "Small text and low-contrast elements created friction for older eyes — the audience the site was supposed to serve.",
          },
        ].map((g) => (
          <GapCard key={g.label} {...g} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== STRATEGIC APPROACH ====================== */
function Approach() {
  return (
    <SectionShell eyebrow="06 · Strategic approach" tone="cool">
      <SectionHeading>
        Inclusive, honest, evidence-driven, educational.
      </SectionHeading>
      <Lede>
        The redesign was guided by four principles that ran through every
        screen, every component, and every word of copy.
      </Lede>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Inclusive",
            body: "Show the full range of women 50+ — not one archetype. Voice that acknowledges experience without patronising it.",
          },
          {
            title: "Honest",
            body: "Real results, real names, real photos. No vague &lsquo;anti-ageing&rsquo; promises. Explain what changes and what helps.",
          },
          {
            title: "Evidence-driven",
            body: "Show the science. Show the before-and-after. Make the &lsquo;reason to believe&rsquo; visible on every product page.",
          },
          {
            title: "Educational",
            body: "Move from transactional to instructive. Articles, expert voices, and practical advice that earn the visit on their own.",
          },
        ].map((p) => (
          <PrincipleCard key={p.title} {...p} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== THE REDESIGN ====================== */
function TheRedesign() {
  return (
    <SectionShell eyebrow="07 · The redesign · what it achieved">
      <SectionHeading>
        Five things the redesign delivered.
      </SectionHeading>
      <Lede>
        The work isn&rsquo;t a tour of pages — it&rsquo;s the sum of five
        deliberate moves that, together, recalibrated the brand&rsquo;s
        digital presence around its pro-age purpose.
      </Lede>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {[
          {
            num: "01",
            title: "Linked the brand to a contemporary cultural conversation",
            body: "Reframed the brand&rsquo;s pro-age stance as the next chapter in the story of hair as identity. Imagery, voice, and IA all reflect that positioning.",
          },
          {
            num: "02",
            title: "Used digital interactivity to lift product efficacy on the page",
            body: "Before/after visuals, short product-in-use video moments, and ingredient panels that earned trust by showing — not just claiming.",
          },
          {
            num: "03",
            title: "Built a real educational resource for senior women&rsquo;s hair",
            body: "Word of Wisdom hub with expert-backed articles on greying, thinning, texture, scalp wellbeing, styling at 50+ — surfaced from the top-level navigation.",
          },
          {
            num: "04",
            title: "Enhanced the consumer experience with rich visual proof",
            body: "Real customers with names, ages, and photographs. Real eight-week results on the product pages where the decision is actually made.",
          },
          {
            num: "05",
            title: "Spoke directly to the emotional and beauty tensions",
            body: "Replaced anti-ageing language with a confident, age-inclusive voice — the homepage rotates through <em>Show your age · body · edge · strength · yourself</em>, declaring the brand&rsquo;s position in the first scroll. Replaced the single &lsquo;older woman&rsquo; archetype with the bandwidth of women the audience actually contains.",
          },
        ].map((a) => (
          <AchievementCard key={a.num} {...a} />
        ))}
      </div>

      <div className="mt-14 space-y-8">
        <FinalDesignFigure
          badge="01 · Home"
          tagline={
            <>
              Show your <em className="font-serif-italic">age</em> ·{" "}
              <em className="font-serif-italic">body</em> ·{" "}
              <em className="font-serif-italic">edge</em> ·{" "}
              <em className="font-serif-italic">strength</em> ·{" "}
              <em className="font-serif-italic">yourself</em>
            </>
          }
          src="/images/case-studies/hair-care/hair-care-home.jpg"
          alt="Final home page design — mobile hero on the left rotating through 'Show your self' and a CTA, alongside desktop sections for Shop by Solution (Greying / Fading / Thinning hair), a Before & After Hair Biology comparison block, and the start of the 'Our hair changes as we get older' section"
          caption="Mobile + desktop · the rotating tagline, Shop by Solution, Before & After, and the brand's 'just biology' voice in production"
        />
        <FinalDesignFigure
          badge="02 · Product detail"
          tagline="Volumising shampoo · 4.8 ★ · 1,284 reviews"
          src="/images/case-studies/hair-care/hair-care-product-detail.jpg"
          alt="Final product detail page — mobile and desktop views of the Volumising shampoo product with the HB Hair Biology bottle, full and vibrant claim, 152 reviews, $9.99 price, Shop Now CTA, plus Product Details / Usage Tips / Ingredients accordion and a Ratings & Reviews section showing the 4.8 average and a verified review"
          caption="Mobile + desktop · gallery, ingredient deep-dive, ratings, and customer reviews built for the moment of decision"
        />
        <FinalDesignFigure
          badge="03 · Word of Wisdom · article"
          tagline="How women over 50 can combat dry or brittle hair · by Victoria Beeber"
          src="/images/case-studies/hair-care/hair-care-article-detail.jpg"
          alt="Final article detail page — mobile and desktop views of the article 'How women over 50 can combat dry or brittle hair' by Victoria Beeber, with breadcrumb (Home › Blog › Hair Products), hero photo, byline, opening paragraphs, and a 'Why does hair get dry as we age?' subhead with supporting imagery"
          caption="Mobile + desktop · expert-bylined article with clear breadcrumb, photographic anchor, and scannable subheads"
        />
      </div>
    </SectionShell>
  );
}

/* ====================== OUTCOMES ====================== */
function Outcomes() {
  return (
    <SectionShell eyebrow="08 · Outcomes" tone="warm">
      <SectionHeading>What changed.</SectionHeading>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {[
          {
            stat: "−20%",
            label: "homepage bounce rate",
            sub: "early users explore further than they did on the old site",
          },
          {
            stat: "+35%",
            label: "time on educational pages",
            sub: "Word of Wisdom articles are getting read, not just clicked",
          },
          {
            stat: "AA",
            label: "accessibility contrast across the site",
            sub: "type, contrast, and tap targets re-set for the audience this site is for",
          },
          {
            stat: "1",
            label: "voice in a century-long conversation",
            sub: "Show your Age earned its place beside the Show your X moments that came before it",
          },
        ].map((m) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
          >
            <div className="font-serif-italic text-5xl text-paper md:text-6xl">
              {m.stat}
            </div>
            <div className="mt-3 text-sm text-paper">{m.label}</div>
            <div className="mt-1 text-xs text-paper-mute">{m.sub}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl text-pretty text-paper-dim md:text-lg">
        Beyond the numbers, the qualitative shift was the larger story.
        Users in testing said things the old site had never made them say —
        Susan called it &ldquo;finally feels like a brand is talking to me,
        not at me.&rdquo; Maria found the article that answered the exact
        question about silver hair she&rsquo;d been carrying for years. The
        site became a place to come back to, not a place to leave with a
        purchase.
      </div>
    </SectionShell>
  );
}

/* ====================== REFLECTION ====================== */
function Reflection() {
  return (
    <SectionShell eyebrow="09 · Reflection">
      <SectionHeading>
        What I&rsquo;d carry into the next inclusive-brand project.
      </SectionHeading>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ReflectionCard
          heading="Designing for an overlooked audience starts with feeling"
          body="The functional needs were real, but the emotional ones did the harder work. Every screen had to acknowledge that the audience felt unseen — and start there. Functional fixes alone wouldn&rsquo;t have moved anyone."
        />
        <ReflectionCard
          heading="Representation isn&rsquo;t one image, it&rsquo;s the bandwidth of images"
          body="Replacing one archetype with another wasn&rsquo;t the answer. The win was widening the bandwidth — silver, salt-and-pepper, glamorous, sporty, multi-ethnic, full of life — so any visitor could find a face that looked like a future version of herself."
        />
        <ReflectionCard
          heading="Trust accrues from small honest signals, not big claims"
          body="A photo with a name and an age built more trust than any &lsquo;clinically proven&rsquo; banner ever did. The product pages got quieter and earned more belief because of it."
        />
        <ReflectionCard
          heading="A brand position is a strategic asset, not a tagline"
          body="Treating &lsquo;Show your Age&rsquo; as the next chapter in a century-long conversation about hair gave the redesign a centre of gravity that no individual feature could have provided. Position first, pages second."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== NEXT STUDY ====================== */
function NextStudy() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl border-t border-white/[0.06] pt-12">
        <div className="text-[11px] uppercase tracking-[0.22em] text-paper-mute">
          Next case study
        </div>
        <a
          href="#case/b2b-dental-platform"
          className="group mt-3 flex items-baseline justify-between gap-6"
        >
          <h3 className="font-serif-italic text-4xl text-paper transition-colors group-hover:text-paper md:text-5xl">
            B2B Dental Care Platform →
          </h3>
          <span
            aria-hidden
            className="text-2xl text-paper-mute transition-transform group-hover:translate-x-1 group-hover:text-paper"
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
}

/* ====================== SHARED PRIMITIVES ====================== */
function SectionShell({
  eyebrow,
  children,
  tone = "neutral",
}: {
  eyebrow: string;
  children: React.ReactNode;
  tone?: "neutral" | "warm" | "cool";
}) {
  return (
    <section
      className={cn(
        "relative px-6 py-14 md:px-10 md:py-20",
        tone === "warm" &&
          "bg-gradient-to-b from-transparent via-white/[0.012] to-transparent",
        tone === "cool" &&
          "bg-gradient-to-b from-transparent via-white/[0.018] to-transparent",
      )}
    >
      <motion.div
        {...revealOnView}
        variants={fadeUp}
        className="mx-auto max-w-7xl"
      >
        <div className="text-[11px] uppercase tracking-[0.22em] text-paper-mute">
          {eyebrow}
        </div>
        <div className="mt-3">{children}</div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-4xl font-serif-italic text-4xl leading-[1.05] text-balance text-paper md:text-5xl lg:text-6xl">
      {children}
    </h2>
  );
}

function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-paper-dim md:text-lg">
      {children}
    </p>
  );
}

function StatCard({ stat, label }: { stat: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
    >
      <div className="font-serif-italic text-5xl text-paper md:text-6xl">{stat}</div>
      <div className="mt-3 text-sm text-paper-dim">{label}</div>
    </motion.div>
  );
}

function ProblemCard({ label, body }: { label: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
    >
      <div className="text-[10px] uppercase tracking-[0.2em] text-paper-mute">
        {label}
      </div>
      <div
        className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </motion.div>
  );
}

function GapCard({ label, body }: { label: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7"
    >
      <div className="font-serif-italic text-xl text-paper md:text-2xl">
        {label}
      </div>
      <p
        className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </motion.div>
  );
}

function PrincipleCard({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
    >
      <div className="font-serif-italic text-2xl text-paper">{title}</div>
      <p
        className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </motion.div>
  );
}

function AchievementCard({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7"
    >
      <div className="font-serif-italic text-3xl text-rose-300/70 md:text-4xl">
        {num}
      </div>
      <div className="mt-2 font-serif-italic text-xl text-paper md:text-2xl">
        {title}
      </div>
      <p
        className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </motion.div>
  );
}

function PersonaCard({
  name,
  headline,
  quote,
  situation,
  goals,
  pains,
  accent,
}: {
  name: string;
  headline: string;
  quote: string;
  situation: string;
  goals: string[];
  pains: string[];
  accent: "rose" | "amber";
}) {
  const accents = {
    rose: "from-rose-300/10 to-transparent",
    amber: "from-amber-300/10 to-transparent",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: easeOutExpo }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br p-7",
        accents[accent],
      )}
    >
      <div className="text-[10px] uppercase tracking-[0.2em] text-paper-mute">
        Persona
      </div>
      <div className="mt-2 font-serif-italic text-2xl text-paper md:text-3xl">
        {name}
      </div>
      <div className="mt-1 font-serif-italic text-base text-paper-dim md:text-lg">
        {headline}
      </div>

      <blockquote className="mt-4 border-l border-white/15 pl-4 text-pretty font-serif-italic text-lg text-paper md:text-xl">
        &ldquo;
        {quote}
        &rdquo;
      </blockquote>

      <p
        className="mt-4 text-sm leading-relaxed text-paper-dim"
        dangerouslySetInnerHTML={{ __html: situation }}
      />

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-emerald-300/80">
            Goals
          </div>
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-paper-dim">
            {goals.map((g, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-emerald-400">+</span>
                <span dangerouslySetInnerHTML={{ __html: g }} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-rose-300/80">
            Friction
          </div>
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-paper-dim">
            {pains.map((p, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-rose-400">−</span>
                <span dangerouslySetInnerHTML={{ __html: p }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function TensionCard({
  label,
  headline,
  body,
}: {
  label: string;
  headline: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
    >
      <div className="text-[10px] uppercase tracking-[0.2em] text-paper-mute">
        {label}
      </div>
      <div className="mt-2 font-serif-italic text-xl text-paper md:text-2xl">
        {headline}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-paper-dim">{body}</p>
    </motion.div>
  );
}

function Showcase({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: easeOutExpo }}
      className="mt-12"
    >
      {children}
    </motion.div>
  );
}

function FinalDesignFigure({
  badge,
  tagline,
  src,
  alt,
  caption,
}: {
  badge: string;
  tagline: React.ReactNode;
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.9, ease: easeOutExpo }}
      className="overflow-hidden rounded-2xl bg-[#f7f3ee] p-4 ring-1 ring-black/[0.06] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] md:p-6"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-rose-800 ring-1 ring-rose-200">
          {badge}
        </span>
        <span className="text-[11px] text-ink-900/60">{tagline}</span>
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ink-900/55">
        {caption}
      </figcaption>
    </motion.figure>
  );
}

function ReflectionCard({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] p-6 md:p-7"
    >
      <div className="font-serif-italic text-xl text-paper md:text-2xl">
        {heading}
      </div>
      <p
        className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </motion.div>
  );
}
