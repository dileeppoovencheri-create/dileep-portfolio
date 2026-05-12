import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";
import { fadeUp, revealOnView, easeOutExpo } from "@/lib/motion";
import {
  ContractsAutomationMockup,
  OMVMockup,
} from "@/components/casestudy/InfluencerMockups";
import { cn } from "@/lib/cn";

const META = [
  { label: "Role", value: "Lead UX · Strategic" },
  {
    label: "Team",
    value: "Lead designer + 1 designer · cross-functional eng, product & ML",
  },
  { label: "Year", value: "2023 — 2024" },
  { label: "Discipline", value: "Enterprise UX · AI-driven UX" },
  {
    label: "Foundation",
    value: "Built on the existing corporate enterprise design system",
  },
];

const PLATFORM_MODULES = [
  { name: "Signed Partners", focus: false },
  { name: "Comments Metrics", focus: false },
  { name: "Brand Safety", focus: false },
  { name: "Contracts Automation", focus: true, badge: "New" },
  { name: "Organic Market Validation", focus: true, badge: "New · AI" },
];

export function CaseStudyInfluencer() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Context />
        <Role />
        <Personas />
        <ContractsAutomationSection />
        <OMVSection />
        <StrategicContribution />
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
            agreement. The screens shown here are a new interpretation of the
            original system, not actual product UI.
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.15 }}
          className="mt-10 text-xs uppercase tracking-[0.25em] text-paper-mute"
        >
          Case Study · Enterprise Application · Strategic UX
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.25 }}
          className="mt-4 max-w-4xl font-serif-italic text-5xl leading-[1.02] text-balance text-paper md:text-7xl lg:text-[5.5rem]"
        >
          Influencer Management.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.45 }}
          className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-paper-dim md:text-xl"
        >
          For a global consumer goods company managing influencer partnerships
          across dozens of brands, two new modules needed to land inside an
          existing platform: a contract automation system that took the
          entire negotiation workflow out of inboxes, and an AI-driven
          content validation module that didn&rsquo;t exist before. This case
          study focuses on those two — and on the strategic decisions that
          shaped them.
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

/* ====================== CONTEXT ====================== */
function Context() {
  return (
    <SectionShell eyebrow="01 · Context">
      <SectionHeading>
        Two new modules in a{" "}
        <em className="font-serif-italic">platform that already worked</em>.
      </SectionHeading>
      <Lede>
        The platform served in-house brand teams, partner agencies, purchasing,
        and analytics &amp; governance roles across a global brand portfolio.
        Three of its modules — Signed Partners, Comments Metrics, and Brand
        Safety — were already in production. Two more needed to be built:
        Contracts Automation and Organic Market Validation. The work
        wasn&rsquo;t a redesign in disguise; it was the strategic challenge of
        landing two net-new modules so they felt native to a system they
        weren&rsquo;t born inside.
      </Lede>

      <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
        {PLATFORM_MODULES.map((m) => (
          <div
            key={m.name}
            className={cn(
              "rounded-xl border p-4",
              m.focus
                ? "border-paper/30 bg-paper/[0.04]"
                : "border-white/[0.06]",
            )}
          >
            <div
              className={cn(
                "text-[9px] uppercase tracking-wider",
                m.focus ? "text-emerald-300" : "text-paper-mute",
              )}
            >
              {m.focus ? m.badge : "In production"}
            </div>
            <div
              className={cn(
                "mt-1 text-sm",
                m.focus ? "text-paper" : "text-paper-mute",
              )}
            >
              {m.name}
              {m.focus && (
                <span className="ml-2 text-[10px] uppercase tracking-wider text-paper-mute">
                  · this case study
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <ProblemCard
          label="The Contracts gap"
          body="Outreach, terms creation, negotiation, contract building, signing, and storage all happened across email, Word, and PDF. No structured tracking. No version history. No central repository. Re-typing data three times per partner. The brand team — and only the brand team — held negotiation authority, but nothing in the tooling reflected that."
        />
        <ProblemCard
          label="The OMV gap"
          body="Validating influencer content before and after publish was completely offline: version tracking failed, real-time visibility was impossible, communication lived in email, post-publication checks were inconsistent, and the AI safety analysis the company had invested in wasn&rsquo;t reaching the people who needed it most."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== ROLE ====================== */
function Role() {
  return (
    <SectionShell eyebrow="02 · My role" tone="cool">
      <SectionHeading>
        Lead designer.{" "}
        <em className="font-serif-italic">Strategic contribution</em>, not
        execution-only.
      </SectionHeading>
      <Lede>
        I led UX as the lead designer with one other designer on the team.
        I worked closely with the client and ran usability testing with end
        users that surfaced the real shape of the problem:{" "}
        <strong className="text-paper">critical information buried</strong>{" "}
        inside features,{" "}
        <strong className="text-paper">multi-click paths</strong> for tasks
        that should have been one or two, and{" "}
        <strong className="text-paper">task flows that hadn&rsquo;t kept
        pace</strong> with the volume going through them. Those findings
        shaped the UX strategy: simplify the workflows, surface the buried
        information, and reduce the friction in every interaction that
        mattered.
      </Lede>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ResponsibilityCard
          title="What I owned"
          items={[
            "End-to-end UX for the two new modules — Contract Automation and Organic Market Validation",
            "Workflow simplification — turning offline, multi-step processes into structured, low-friction flows",
            "Information architecture — surfacing the critical context that was buried in the previous experience",
            "AI-in-product UX strategy — how model outputs were surfaced, framed, and made actionable for human decisions",
          ]}
        />
        <ResponsibilityCard
          title="How I worked"
          items={[
            "Built strictly inside the <strong class='text-paper'>existing corporate enterprise design system</strong> — no parallel system, no drift",
            "Conducted usability testing with end users to validate redesigned flows against the friction they were meant to remove",
            "Collaborated with the ML team <em>as needed</em> — particularly where AI insights directly influenced user decisions, to align model output with what the UI needed to show",
            "Tight loop with engineering on workflow state — every step in Contract Automation and OMV maps to a real platform state, not a UI label",
          ]}
        />
      </div>
    </SectionShell>
  );
}

/* ====================== PERSONAS ====================== */
function Personas() {
  return (
    <SectionShell eyebrow="03 · Who used these modules">
      <SectionHeading>
        Four roles, two different sets of needs.
      </SectionHeading>
      <Lede>
        Both new modules served the same four user types — but each module
        loaded their day differently. Brand &amp; Comms Managers reviewed
        and approved content. Agency partners ran the day-to-day
        operations and submitted content for approval.{" "}
        <strong className="text-paper">Purchasing owned Contract
        Automation</strong> end-to-end. Analytics &amp; governance watched
        the whole system.
      </Lede>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <PersonaCard
          name="Brand &amp; Comms Manager"
          role="In-house · approver"
          accent="blue"
          jobs={[
            "Manages campaigns and influencer onboarding — adds influencers, ensures they authorise, uploads content URLs",
            "Reviews OMV submissions and approves (or rejects) content before publish",
            "Can submit content on behalf of agencies when the situation calls for it",
          ]}
        />
        <PersonaCard
          name="Agency"
          role="Partner · operator"
          accent="rose"
          jobs={[
            "Runs day-to-day campaign and influencer operations alongside the brand team",
            "Submits influencer content into OMV for brand-side approval",
            "Tracks campaign progress without needing to chase status across email",
          ]}
        />
        <PersonaCard
          name="Purchasing"
          role="In-house · contract owner"
          accent="emerald"
          jobs={[
            "Owns Contract Automation — outreach, terms, signing, and central storage",
            "Drives the structured workflow from first contact to signed agreement",
            "Maintains an audit-ready repository of every active and past partnership",
          ]}
        />
        <PersonaCard
          name="Analytics, IT &amp; Governance"
          role="In-house · A&I / IT / Stewardship / GIA"
          accent="violet"
          jobs={[
            "Reviews performance metrics tied to sales uplift",
            "Stewards platform governance, access policies, and AI model oversight",
          ]}
        />
      </div>
    </SectionShell>
  );
}

/* ====================== CONTRACTS AUTOMATION ====================== */
function ContractsAutomationSection() {
  return (
    <SectionShell eyebrow="04 · New module · Contracts Automation" tone="cool">
      <SectionHeading>
        Moving the entire contracting flow{" "}
        <em className="font-serif-italic">out of inboxes</em>, into{" "}
        <em className="font-serif-italic">Purchasing&rsquo;s hands</em>.
      </SectionHeading>
      <Lede>
        The original contracting workflow was entirely offline — outreach,
        terms creation, negotiation, contract building, signing, and storage
        all happened across email, Word, and PDF. Purchasing — the role
        that lives this work day in, day out — re-entered the same data
        across multiple documents, manually drafted outreach, and uploaded
        final contracts by hand. The UX strategy was straightforward:{" "}
        <strong className="text-paper">simplify the workflow into four
        clear steps</strong>,{" "}
        <strong className="text-paper">surface the partner context that
        used to be buried</strong> in tabs and inboxes, and{" "}
        <strong className="text-paper">remove the round-trips</strong>{" "}
        — like manually drafting an outreach email — that took up a
        Purchasing user&rsquo;s day without adding value.
      </Lede>

      <Showcase>
        <ContractsAutomationMockup />
      </Showcase>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <FeatureNote
          title="Four steps, one system"
          body="Outreach → Standard Terms → Commercial Terms → Contract. Each step is a real surface in the platform with structured data, not an email thread to reconstruct later."
        />
        <FeatureNote
          title="Auto-generated outreach, manual when needed"
          body="The system can compose the outreach email from the partnership details, or the user can mark it as manually handled. Either way, the activity is captured in-system rather than living in someone&rsquo;s inbox."
        />
        <FeatureNote
          title="Partner context anchored beside every step"
          body="A Partner Details rail keeps the influencer&rsquo;s contact, fiscal year, currency, country, category, brand, and campaign in view at every step. No tab-hopping to confirm which partnership you&rsquo;re editing."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== OMV ====================== */
function OMVSection() {
  return (
    <SectionShell eyebrow="05 · New module · Organic Market Validation" tone="warm">
      <SectionHeading>
        Putting <em className="font-serif-italic">AI</em> in front of the
        publish button.
      </SectionHeading>
      <Lede>
        OMV is a new module that gives agencies a way to{" "}
        <strong className="text-paper">submit campaign content for
        brand-side approval</strong> (and brands a way to submit on behalf
        of agencies when needed). Every submission runs through a
        multi-lens AI review before it goes live. Findings are organised
        into five lenses —{" "}
        <strong className="text-paper">Brand Safety</strong>,{" "}
        <strong className="text-paper">Caption &amp; Accessibility</strong>,{" "}
        <strong className="text-paper">Brand Presence</strong>,{" "}
        <strong className="text-paper">Product Claims</strong>, and{" "}
        <strong className="text-paper">Partnership Disclosure</strong> —
        and each is anchored to the precise second on the timeline so
        reviewers can jump directly to the moment in question. The AI
        doesn&rsquo;t decide; <em>it informs</em>. The brand-side
        reviewer&rsquo;s call sits in one bottom bar:{" "}
        <em>Approve</em> or <em>Reject</em>.
      </Lede>

      <Showcase>
        <OMVMockup />
      </Showcase>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <FeatureNote
          title="Five lenses on one screen"
          body="Brand Safety, Caption &amp; Accessibility, Brand Presence, Product Claims, and Partnership Disclosure — each lens an expandable accordion with its own count of issues and severity dots, so reviewers see what&rsquo;s wrong at a glance and dig in only where they need to."
        />
        <FeatureNote
          title="Findings anchored to the second"
          body="Every issue carries a timestamp and a Jump-to-moment link. The reviewer doesn&rsquo;t hunt the timeline for the questionable frame — the timeline shows them where it is, with red, amber, or green markers for critical, warning, and passed checks."
        />
        <FeatureNote
          title="Severity in plain language, decision in one click"
          body="High · Medium · Low instead of a raw model score, and a body line that explains the policy or guideline it touches. The reviewer&rsquo;s call sits in one bottom bar — Approve or Reject — never automated, always human."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== STRATEGIC CONTRIBUTION ====================== */
function StrategicContribution() {
  return (
    <SectionShell eyebrow="06 · Strategic contribution">
      <SectionHeading>
        Three pillars: simpler workflows,{" "}
        <em className="font-serif-italic">surfaced information</em>, less
        friction.
      </SectionHeading>
      <Lede>
        The strategic work was less about pixels and more about a small set
        of structural decisions that compounded across both modules. They
        sit on three pillars — simplifying complex workflows, improving
        information discoverability, and reducing interaction friction — on
        a foundation of the platform&rsquo;s existing enterprise design
        system.
      </Lede>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ContributionCard
          title="Built on the existing enterprise design system"
          body="The organisation already had a corporate enterprise design system in place. Rather than fork or extend it, both new modules were built strictly inside its vocabulary — same tokens, same components, same interaction grammar. Result: zero design drift between the new modules and the rest of the platform."
        />
        <ContributionCard
          title="Simplified complex workflows"
          body="Contract Automation collapsed an offline tangle into four real platform states — Outreach → Standard Terms → Commercial Terms → Contract — with structured data instead of an email chain. OMV reduced &lsquo;is this content safe to publish?&rsquo; to one screen, five lenses, one decision."
        />
        <ContributionCard
          title="Surfaced the information that was buried"
          body="Usability testing showed critical context hidden inside features. The Partner Details rail keeps every relevant fact next to every contracting step. The findings panel surfaces issue counts and severity dots at the lens level — reviewers see what&rsquo;s wrong before drilling in. Less digging, more deciding."
        />
        <ContributionCard
          title="Reduced interaction friction"
          body="Auto-generated outreach emails replace a manual draft. Jump-to-moment links remove the need to scrub a video looking for a flagged frame. Approve / Reject lives in one bottom bar, always reachable. Each detail removed a full round-trip from the user&rsquo;s day."
        />
        <ContributionCard
          title="One AI surface pattern for the platform"
          body="OMV surfaces AI output in a defined pattern — lens findings + severity + context line + jump-to-moment link. The pattern is reusable: any future module that introduces AI inherits the same vocabulary, so the platform&rsquo;s AI moments speak in one voice."
        />
        <ContributionCard
          title="Trust before automation"
          body="On AI-driven recommendations, I held the line that the system would never edit content automatically. Findings are surfaced as information that informs a human decision — never as actions the system takes on the user&rsquo;s behalf. That single principle made adoption faster than any accuracy number could have."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== OUTCOMES ====================== */
function Outcomes() {
  return (
    <SectionShell eyebrow="07 · Outcomes" tone="warm">
      <SectionHeading>What the two modules moved.</SectionHeading>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            stat: "100%",
            label: "of the contracting flow now in-system",
            sub: "outreach → terms → negotiate → sign → store, with versioned audit trail",
          },
          {
            stat: "1",
            label: "AI surface pattern shared across modules",
            sub: "score + context + recommended action — used by Brand Safety and OMV today, available to future modules tomorrow",
          },
          {
            stat: "0",
            label: "design system forks created",
            sub: "both new modules composed entirely on the existing corporate enterprise design system",
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
        Beyond the structural wins, the qualitative shift was the larger
        story. Brand managers stopped chasing email threads for contract
        status. Agency partners knew exactly where every campaign sat without
        asking. AI-assisted content validation stopped being a side
        experiment and started being part of what the platform reliably did
        every day. And both modules slotted in cleanly — neither felt like a
        bolt-on, because neither was treated as one.
      </div>
    </SectionShell>
  );
}

/* ====================== REFLECTION ====================== */
function Reflection() {
  return (
    <SectionShell eyebrow="08 · Reflection">
      <SectionHeading>
        What I&rsquo;d carry into the next AI-in-product project.
      </SectionHeading>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ReflectionCard
          heading="AI is a UX problem, not a model problem"
          body="OMV succeeded because the UI did the trust-building work. Score, context, recommended action — that pattern earned more belief than any accuracy number on a slide."
        />
        <ReflectionCard
          heading="Reducing the round-trips is half the work"
          body="Three details that compounded into the largest perceived improvement: the Partner Details rail (always-visible context), AI findings anchored to the second (no scrubbing), and auto-drafted outreach emails. Each one removed a full back-and-forth from the user&rsquo;s day. Friction reduction beats feature addition almost every time."
        />
        <ReflectionCard
          heading="Build on what exists, even when you could build new"
          body="The temptation with new modules is to introduce a few &lsquo;just for these&rsquo; components. Holding the line on the existing enterprise design system meant slower starts and faster finishes — every screen was instantly familiar to anyone who already used the platform."
        />
        <ReflectionCard
          heading="One surface beats two whenever it can"
          body="Merging pre-publish and post-publish into one OMV view was the most contested decision and the most valuable one. Two views would have been faster to ship; one view changed how people thought about content validation."
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
          href="#case/warranty-management"
          className="group mt-3 flex items-baseline justify-between gap-6"
        >
          <h3 className="font-serif-italic text-4xl text-paper transition-colors group-hover:text-paper md:text-5xl">
            Warranty Management →
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

function ResponsibilityCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7"
    >
      <div className="font-serif-italic text-2xl text-paper">{title}</div>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-paper-dim md:text-base">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-paper-mute" />
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PersonaCard({
  name,
  role,
  jobs,
  accent,
}: {
  name: string;
  role: string;
  jobs: string[];
  accent: "blue" | "rose" | "emerald" | "violet";
}) {
  const accents = {
    blue: "from-accent-blue/12 to-transparent",
    rose: "from-rose-300/10 to-transparent",
    emerald: "from-accent-mint/12 to-transparent",
    violet: "from-accent-lavender/12 to-transparent",
  } as const;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, ease: easeOutExpo }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br p-5",
        accents[accent],
      )}
    >
      <div className="text-[10px] uppercase tracking-[0.2em] text-paper-mute">
        {role}
      </div>
      <div
        className="mt-2 font-serif-italic text-xl text-paper md:text-2xl"
        dangerouslySetInnerHTML={{ __html: name }}
      />

      <div className="mt-4 text-[10px] uppercase tracking-[0.18em] text-paper-mute">
        What they do
      </div>
      <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-paper-dim">
        {jobs.map((j, i) => (
          <li key={i} className="flex gap-2">
            <span className="shrink-0 text-paper-mute">·</span>
            <span dangerouslySetInnerHTML={{ __html: j }} />
          </li>
        ))}
      </ul>
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

function FeatureNote({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="font-serif-italic text-xl text-paper md:text-2xl">
        {title}
      </div>
      <p
        className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}

function ContributionCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7"
    >
      <div className="font-serif-italic text-xl text-paper md:text-2xl">
        {title}
      </div>
      <p
        className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </motion.div>
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
