import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";
import { fadeUp, revealOnView, easeOutExpo } from "@/lib/motion";
import {
  TicketCreationMockup,
  ApprovalQueueMockup,
  RuleBuilderMockup,
} from "@/components/casestudy/WarrantyMockups";
import { cn } from "@/lib/cn";

const META = [
  { label: "Role", value: "Product Owner & Lead UX" },
  { label: "Team", value: "3 designers · cross-functional eng & ops" },
  { label: "Year", value: "2024 — 2025" },
  { label: "Discipline", value: "Enterprise UX · Design Systems" },
  { label: "Workshop", value: "3 weeks on-site · Germany" },
];

const MODULES = [
  {
    name: "Warranty Management",
    desc: "Claims, approvals, governance",
    focus: true,
  },
  { name: "Product & Parts", desc: "Catalog, parts & inventory" },
  { name: "Knowledge", desc: "Service center training & bulletins" },
  { name: "Network", desc: "Service center operations" },
  {
    name: "Order Management",
    desc: "Reimbursements, pricing, orders",
  },
  { name: "Reporting & Analytics", desc: "Cross-module insights" },
];

export function CaseStudyWarranty() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Scope />
        <Context />
        <DesignObjective />
        <Role />
        <Approach />
        <Personas />
        <ServiceCenterDeepDive />
        <ServiceManagerDeepDive />
        <AutoApproval />
        <DesignSystem />
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
            agreement. The screens shown here are a reimagined interpretation
            of the original system, not actual product UI.
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.15 }}
          className="mt-10 text-xs uppercase tracking-[0.25em] text-paper-mute"
        >
          Case Study · Enterprise Application
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.25 }}
          className="mt-4 max-w-4xl font-serif-italic text-5xl leading-[1.02] text-balance text-paper md:text-7xl lg:text-[5.5rem]"
        >
          Warranty Management
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.45 }}
          className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-paper-dim md:text-xl"
        >
          For a global consumer goods company in the personal care space —
          makers of electric toothbrushes, trimmers, and other grooming and
          oral care products — after-sales is the{" "}
          <em className="font-serif-italic text-paper">Third Moment of Truth</em>:
          the post-purchase experience that decides whether a customer stays
          loyal, becomes an advocate, or quietly disengages. It&rsquo;s where
          service quality directly compounds (or leaks) brand trust, hundreds
          of times a day. This is the story of redesigning the system that
          decides which way that moment lands — from the agent who opens a
          warranty ticket, to the manager who signs off on the proforma
          invoice.
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

/* ====================== SCOPE ====================== */
function Scope() {
  return (
    <SectionShell eyebrow="01 · Scope">
      <SectionHeading>
        One platform, six modules —{" "}
        <em className="font-serif-italic">this story</em> is one of them.
      </SectionHeading>
      <Lede>
        The platform consolidated six interconnected workstreams into a single
        environment. Across those modules, six distinct user roles touch the
        system every day — from frontline service agents to operations
        analysts. This case study zooms in on the most complex and
        business-critical surface of the platform:{" "}
        <strong className="text-paper">Warranty Management</strong>, and the
        two roles whose decisions move it.
      </Lede>

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {MODULES.map((m) => (
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
                "flex items-center gap-2 text-sm",
                m.focus ? "text-paper" : "text-paper-dim",
              )}
            >
              {m.focus && (
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
              )}
              <span>{m.name}</span>
              {m.focus && (
                <span className="ml-auto text-[10px] uppercase tracking-wider text-paper-mute">
                  This case study
                </span>
              )}
            </div>
            <div className="mt-1 text-xs text-paper-mute">{m.desc}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== CONTEXT ====================== */
function Context() {
  return (
    <SectionShell eyebrow="02 · Context">
      <SectionHeading>
        Three or more disconnected applications.{" "}
        <em className="font-serif-italic">One frustrated network.</em>
      </SectionHeading>
      <Lede>
        Service operations were spread across three or more separate
        applications, each with its own login, conventions, and access logic.
        There was no shared role-based access control, no consistent UI
        language, and no end-to-end visibility into how a warranty claim moved
        through the chain. Workflows that should have flowed simply — submit,
        review, approve — instead hopped through silos, with people emailing
        PDFs and updating spreadsheets to keep things moving.
      </Lede>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Fragmentation",
            body:
              "3+ separate applications, each with its own conventions. Re-learning was a daily tax on every user.",
          },
          {
            label: "No unified RBAC",
            body:
              "Role-based access was managed differently in each tool. Permissions drifted, audits were painful.",
          },
          {
            label: "Outdated UI",
            body:
              "Inconsistent visual language and weak usability across modules — every tool felt like a different decade.",
          },
          {
            label: "Process opacity",
            body:
              "Silos hid the state of work. Where a claim sat — and why — was rarely answerable from the system itself.",
          },
        ].map((item) => (
          <ProblemCard key={item.label} {...item} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== DESIGN OBJECTIVE ====================== */
function DesignObjective() {
  return (
    <SectionShell eyebrow="03 · Design objective" tone="cool">
      <SectionHeading>
        One scalable platform —{" "}
        <em className="font-serif-italic">role-aware</em>, consistent, and
        operationally honest.
      </SectionHeading>
      <Lede>
        The mandate was deliberately simple to state, and deliberately hard to
        deliver: unify six fragmented workstreams into a single platform that
        supports role-based workflows seamlessly, raises the bar for usability
        across modules, brings complex backend logic into intuitive UI
        interactions, and gives the people who use it daily real operational
        leverage.
      </Lede>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Seamless role-based workflows",
            body:
              "Every screen knows who you are. Permissions, defaults, and recommended actions all bend around your role — not the other way around.",
          },
          {
            title: "Consistency across modules",
            body:
              "One design system, one component vocabulary, one way to say the same thing. Less learned, more done.",
          },
          {
            title: "Backend logic, surfaced",
            body:
              "Approval levels, audit trails, and routing rules became visible objects in the UI — discoverable, traceable, defendable.",
          },
          {
            title: "Operational leverage",
            body:
              "The system optimized for the decisions that actually move work: which claim to look at, which rule to publish, which exception to escalate.",
          },
        ].map((item) => (
          <ObjectiveCard key={item.title} {...item} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== ROLE ====================== */
function Role() {
  return (
    <SectionShell eyebrow="04 · My role">
      <SectionHeading>
        I held the pen <em className="font-serif-italic">and</em> the brief.
      </SectionHeading>
      <Lede>
        I led the warranty workstream as{" "}
        <strong className="text-paper">
          Product Owner and Lead UX Designer
        </strong>{" "}
        — partnering with two senior designers, an engineering lead, and two
        regional service operations directors. Owning both the product brief
        and the design execution let me close the gap that usually kills
        enterprise UX projects: the place where business intent gets handed to
        engineering and quietly loses its shape.
      </Lede>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <ResponsibilityCard
          title="As Product Owner"
          items={[
            "Wrote and re-wrote the warranty brief with regional ops until it survived a stakeholder review without translation",
            "Sequenced what we&rsquo;d ship vs. what we&rsquo;d defer, keeping cuts honest about what users would lose",
            "Held weekly review with engineering leads — every decision had a written rationale and a measurable signal",
            "Ran the trade-off conversations with finance and audit so the team could keep building without ambiguity",
          ]}
        />
        <ResponsibilityCard
          title="As Lead UX"
          items={[
            "Set the design direction and the bar for craft — the reference cases other workstreams pulled from",
            "Paired with two designers on flow, IA, and component work; reviewed every deliverable before handover",
            "Built and stewarded the design system that the warranty work, and later other modules, were composed from",
            "Ran research synthesis personally for the two highest-friction roles: the Service Center Agent and the Service Manager",
          ]}
        />
      </div>
    </SectionShell>
  );
}

/* ====================== APPROACH ====================== */
function Approach() {
  return (
    <SectionShell eyebrow="05 · Approach" tone="warm">
      <SectionHeading>
        Three weeks in Germany, five functional areas, one shared map.
      </SectionHeading>
      <Lede>
        We co-located in Germany for three weeks with regional service ops,
        engineering, and frontline agents. I ran stakeholder interviews
        across the five functional areas the platform serves — Warranty
        Management, Product &amp; Parts, Knowledge, Network, and Finance —
        and turned what we heard into a service blueprint and a set of task
        flows that became the team&rsquo;s shared reference for the rest of
        the project.
      </Lede>

      <div className="mt-14 grid gap-2 md:grid-cols-3">
        {[
          {
            week: "Week 01",
            title: "See it as it is",
            body:
              "Sat with Service Center Agents at two regional centers. Walked through eleven real claims end-to-end. Built a wall-sized map of every tool, hand-off, and waiting period.",
          },
          {
            week: "Week 02",
            title: "Hear it from every side",
            body:
              "Held stakeholder interviews across all five functional areas — Warranty, Product&nbsp;&amp;&nbsp;Parts, Knowledge, Network, Finance. Synthesized into a service blueprint and detailed task flows that exposed every break in the experience.",
          },
          {
            week: "Week 03",
            title: "Agree what we&rsquo;d build",
            body:
              "Sketched and pressure-tested the four flows that mattered most — ticket creation, approval queue, two-level proforma sign-off, and auto-approval rules. Walked away with stakeholder sign-off on the spine of the system.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.week}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: easeOutExpo,
              delay: i * 0.08,
            }}
            className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-paper-mute">
              {item.week}
            </div>
            <div className="mt-3 font-serif-italic text-2xl text-paper">
              <span dangerouslySetInnerHTML={{ __html: item.title }} />
            </div>
            <p
              className="mt-3 text-sm leading-relaxed text-paper-dim"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== PERSONAS ====================== */
function Personas() {
  return (
    <SectionShell eyebrow="06 · Who we designed for">
      <SectionHeading>
        The platform serves <em className="font-serif-italic">six</em> roles.
        This story serves <em className="font-serif-italic">two</em>.
      </SectionHeading>
      <Lede>
        Across the six modules, six distinct user roles touch the system
        daily. Within Warranty Management, two of them carry the weight of the
        workflow: the <strong className="text-paper">Service Center Agent</strong>{" "}
        who creates and shapes the claim, and the{" "}
        <strong className="text-paper">Company-side Service Manager</strong>{" "}
        who approves, validates, and governs it.
      </Lede>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <PersonaCard
          name="Service Center Agent"
          quote="A customer walks in stressed about a product that stopped working. By the time the ticket leaves my screen, it has to be everything the rest of the chain needs."
          location="Service center · regional · ticket creation & service request handling"
          goals={[
            "Capture the request cleanly the first time, while the customer is still in front of me",
            "Avoid being chased later for missing evidence or details",
            "Be confident the claim won&rsquo;t come back rejected for clerical reasons",
          ]}
          painPoints={[
            "No proper grouping of fields and sections in the ticket form — related inputs are scattered across the screen",
            "Fragmented navigation across tools and modules — the same task crosses three different surfaces",
            "Re-typing the same customer + product data into multiple separate systems",
            "No visibility into whether the ticket was approved, held, or rejected after submission",
          ]}
          accent="blue"
        />
        <PersonaCard
          name="Company-side Service Manager"
          quote="By 10 a.m. I have ninety claims open and a board meeting at noon. I need to know which three to look at first."
          location="Regional HQ · approves, validates, governs"
          goals={[
            "Approve low-risk routine claims in seconds",
            "Catch the few claims that genuinely need scrutiny",
            "Defend every approval and rejection with a clean audit trail",
          ]}
          painPoints={[
            "Fragmented navigation across modules — context lost on every hop between tools",
            "Two-level approval workflow for proforma invoices is manual and opaque, with the same Service Manager often holding both authorities",
            "Auto-approval rules can only be changed in the backend — every policy tweak is a developer ticket instead of a UI action",
            "Audit reports require manually piecing together emails and exports",
          ]}
          accent="lavender"
        />
      </div>
    </SectionShell>
  );
}

/* ====================== TICKET CREATION ====================== */
function ServiceCenterDeepDive() {
  return (
    <SectionShell eyebrow="07 · Module · Ticket creation (Agent)" tone="cool">
      <SectionHeading>
        From a forty-field wall to{" "}
        <em className="font-serif-italic">grouped sections</em> the agent
        owns.
      </SectionHeading>
      <Lede>
        The old ticket creation surface was a single dense form of forty
        fields with no sense of priority. Agents filled it out at the end of
        their day, from memory, and rejected claims came back two days later
        for missing evidence. <strong className="text-paper">No
        step-by-step wizard</strong> — agents told us they often fill
        different parts of a ticket at different times. So we grouped the
        work into expandable sections — Consumer Details, Device Details,
        Repair Details, Materials — that can be completed in any order, saved
        as a draft, and returned to whenever the next piece of information
        arrives.
      </Lede>

      <Showcase>
        <TicketCreationMockup />
      </Showcase>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <FeatureNote
          title="Sections, not steps — fill in any order"
          body="Consumer Details, Device Details, Repair Details, Materials — each one is its own accordion. Agents jump between them as new information comes in, save as a draft, and finish when the customer is back with the receipt."
        />
        <FeatureNote
          title="Auto-fill from the world the agent already lives in"
          body="Look up by Email, Consumer ID, or Type Number, and the form pre-populates customer, product, purchase date, coverage status, and prior claim history. The agent spends time on the symptom, not on data entry."
        />
        <FeatureNote
          title="Suggested classifications, not enforced ones"
          body="A lightweight model proposes the component group from the symptom text. The agent confirms or overrides — we never auto-classify silently."
        />
        <FeatureNote
          title="Coverage and quick actions surfaced where the work happens"
          body="Type Information, Complaints without Technical Defects, and Create Consumer Document live in the action bar — discoverable without leaving the form. Save as Draft and Send for Approval are unmissable."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== APPROVAL & AUDIT ====================== */
function ServiceManagerDeepDive() {
  return (
    <SectionShell eyebrow="08 · Module · Approval & audit (Service Manager)">
      <SectionHeading>
        Two levels of approval,{" "}
        <em className="font-serif-italic">one queue you work from</em>.
      </SectionHeading>
      <Lede>
        Service Managers live inside Proforma Invoicing. The redesigned
        surface gives them two sub-tabs on the same screen —{" "}
        <strong className="text-paper">1st Level Approval Items</strong>{" "}
        (their own queue) and{" "}
        <strong className="text-paper">2nd Level Approval Items</strong>{" "}
        (items other Service Managers have sent forward). Multi-select a
        set of unsettled tickets, click <em>Approve &amp; Assign</em>, and a
        single popup lets the manager approve at Level&nbsp;1 and route the
        package to a chosen Level-2 approver — every status, document, and
        decision visible without leaving the row.
      </Lede>

      <Showcase>
        <ApprovalQueueMockup />
      </Showcase>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <FeatureNote
          title="1st &amp; 2nd Level on the same screen"
          body="Two sub-tabs replace the inboxes and email threads that used to track approval levels. A manager always knows what&rsquo;s theirs to act on, and what they&rsquo;ve sent forward."
        />
        <FeatureNote
          title="Approve &amp; Assign — one action, full chain"
          body="Multi-select tickets and the Approve &amp; Assign popup sets the second-level approver in one move. Mixed statuses are handled gracefully — only Unsettled tickets get routed forward; the rest stay where they are."
        />
        <FeatureNote
          title="Status, documents, and rejections in every row"
          body="UNSETTLED · PENDING · INVOICED status pills, inline links to the application, proforma, PRF, and CSV documents, and a per-row reject control. Decisions stay close to the evidence that supports them."
        />
      </div>
    </SectionShell>
  );
}
/* ====================== AUTO-APPROVAL ====================== */
function AutoApproval() {
  return (
    <SectionShell eyebrow="09 · Auto-approval rules" tone="warm">
      <SectionHeading>
        Rule authoring out of the backend,{" "}
        <em className="font-serif-italic">into the Service Manager&rsquo;s
        hands</em>.
      </SectionHeading>
      <Lede>
        Auto-approval used to live entirely in the backend. Every policy
        tweak — a new postcode pattern, a different threshold, a
        market-specific exception — was an engineering ticket measured in
        weeks. We brought rule authoring forward to a dedicated{" "}
        <em>Create Auto Approval Rule</em> surface where Service Managers
        compose, scope, and activate rules themselves. That matters more
        than ever as the platform supports{" "}
        <strong className="text-paper">
          bulk uploads of 100+ tickets at once
        </strong>{" "}
        — manual review of each one isn&rsquo;t realistic, so the rules
        have to be both trustworthy and quick to evolve.
      </Lede>

      <Showcase>
        <RuleBuilderMockup />
      </Showcase>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <FeatureNote
          title="From backend to front end"
          body="Service Managers create, edit, and toggle rules themselves. What used to be a SQL change behind a release is now a form, an Active switch, and a Save button."
        />
        <FeatureNote
          title="Scoped exactly to who needs it"
          body="Every rule is Local or Global, and Local rules are pinned to a Sales Org, Country, and Service Centre. A regional fix doesn&rsquo;t bleed into a market it wasn&rsquo;t meant for."
        />
        <FeatureNote
          title="Built for the bulk-upload reality"
          body="Agents now upload batches of 100+ tickets through the same module. Auto-approval is what keeps the queue workable — handling the routine volume so humans can spend their attention on the exceptions."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== DESIGN SYSTEM ====================== */
function DesignSystem() {
  return (
    <SectionShell eyebrow="10 · Design system">
      <SectionHeading>
        Built for warranty <em className="font-serif-italic">first</em>,
        adopted by the platform after.
      </SectionHeading>
      <Lede>
        We didn&rsquo;t want a system in advance of the work. We built one in
        the open, alongside the warranty redesign — every component had to
        prove itself in production before it earned a slot in the library. By
        the time warranty shipped, it was the reference implementation other
        modules pulled from.
      </Lede>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <FeatureNote
          title="Foundations"
          body="Color, typography, spacing, motion, elevation, and radius — defined as design tokens in Figma and exported one-to-one into the codebase. One source of truth, zero drift."
        />
        <FeatureNote
          title="Components & patterns"
          body="Buttons, inputs, tables, drawers, status pills, queue rows, side-rail review, approval chain, rule canvas — each documented with usage rules and the failure modes we&rsquo;d already seen."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== OUTCOMES ====================== */
function Outcomes() {
  return (
    <SectionShell eyebrow="11 · Outcomes" tone="warm">
      <SectionHeading>What changed.</SectionHeading>

      <Lede>
        A unified system improved operational efficiency, reduced
        maintenance costs, and delivered a more intuitive experience.
        Navigation is now simpler, making sections easier to access and
        improving overall discoverability.
      </Lede>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Workflows that fit how the work actually happens",
            body: "Ticket creation moved from a forty-field wall to grouped, expandable sections agents can fill in any order — at the desk, between customers, or while another claim is being reviewed.",
          },
          {
            title: "Approval visibility, end to end",
            body: "Two levels of approval, two clear sub-tabs, one Approve & Assign workflow. Status, documents, and decisions live in every row — no more reconstructing who-decided-what from email threads.",
          },
          {
            title: "Rule authoring in the hands of the people who use it",
            body: "Auto-approval rules moved out of backend code and onto a Create Auto Approval Rule surface. Service Managers compose, scope, and activate rules themselves — what used to be a multi-week engineering ticket is now a form.",
          },
          {
            title: "A culture shift, not just a software shift",
            body: "Service Center Agents stopped routing around the system. Regional Service Managers stopped maintaining shadow spreadsheets. Audit conversations moved from forensic reconstruction to forward-looking governance — and the after-sales experience, the brand&rsquo;s Third Moment of Truth, started earning its keep again.",
          },
        ].map((m) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7"
          >
            <div className="font-serif-italic text-xl text-paper md:text-2xl">
              {m.title}
            </div>
            <p
              className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base"
              dangerouslySetInnerHTML={{ __html: m.body }}
            />
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== REFLECTION ====================== */
function Reflection() {
  return (
    <SectionShell eyebrow="12 · Reflection">
      <SectionHeading>
        What I&rsquo;d carry into the next one.
      </SectionHeading>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ReflectionCard
          heading="Co-locate early, and for longer than feels reasonable"
          body="The three-week workshop in Germany did more for the project than the next six months of remote work combined. Trust, shared vocabulary, and the ability to disagree productively all compounded from being in the same room."
        />
        <ReflectionCard
          heading="The PO + Lead UX combination has real cost — and real leverage"
          body="Holding both roles meant fewer translation losses and faster decisions, but it also meant I had to be explicit about which hat I was wearing in any given meeting. When I forgot, the team got mixed signals."
        />
        <ReflectionCard
          heading="Build the design system in the work, not before it"
          body="We resisted the temptation to do a months-long systems project up front. Every component earned its place by serving a real flow first. That kept the system small, opinionated, and trusted."
        />
        <ReflectionCard
          heading="Surfacing backend logic is a UX problem, not just an engineering one"
          body="The hardest part of the two-level approval work wasn&rsquo;t pulling the rules out of the backend — it was making service managers feel ownership and control over what the system did on their behalf. The same-approver guardrail and the impact preview were the features that earned that trust."
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
          href="#"
          className="group mt-3 flex items-baseline justify-between gap-6"
        >
          <h3 className="font-serif-italic text-4xl text-paper transition-colors group-hover:text-paper md:text-5xl">
            Back to all work
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
        "relative px-6 py-20 md:px-10 md:py-28",
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
      <div className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base">
        {body}
      </div>
    </motion.div>
  );
}

function ObjectiveCard({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-7"
    >
      <div className="font-serif-italic text-xl text-paper md:text-2xl">
        {title}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base">
        {body}
      </p>
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
            <span
              aria-hidden
              className="mt-2 h-1 w-3 shrink-0 bg-paper-mute"
            />
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PersonaCard({
  name,
  quote,
  location,
  goals,
  painPoints,
  accent,
}: {
  name: string;
  quote: string;
  location: string;
  goals: string[];
  painPoints: string[];
  accent: "blue" | "lavender";
}) {
  const accents = {
    blue: "from-accent-blue/10 to-transparent",
    lavender: "from-accent-lavender/10 to-transparent",
  } as const;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
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
      <div className="mt-1 text-xs text-paper-mute">{location}</div>

      <blockquote className="mt-5 border-l border-white/15 pl-4 text-pretty font-serif-italic text-lg text-paper md:text-xl">
        &ldquo;
        {quote}
        &rdquo;
      </blockquote>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-paper-mute">
            Goals
          </div>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-paper-dim">
            {goals.map((g, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: `· ${g}` }} />
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-paper-mute">
            Friction
          </div>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-paper-dim">
            {painPoints.map((p, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: `· ${p}` }} />
            ))}
          </ul>
        </div>
      </div>
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
      <p className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base">
        <span dangerouslySetInnerHTML={{ __html: body }} />
      </p>
    </div>
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
      <p className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base">
        {body}
      </p>
    </motion.div>
  );
}
