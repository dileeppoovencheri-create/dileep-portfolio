import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";
import { fadeUp, revealOnView, easeOutExpo } from "@/lib/motion";
import { FacultyAssignmentMockup } from "@/components/casestudy/DentalMockups";
import { cn } from "@/lib/cn";

const META = [
  { label: "Role", value: "Senior Designer & Design Lead" },
  { label: "Team", value: "3 designers · cross-functional content & dev" },
  { label: "Year", value: "2021 — 2022" },
  { label: "Discipline", value: "B2B UX · IA · Design Systems" },
  { label: "Scope", value: "170+ courses · 5,000+ pages" },
];

export function CaseStudyDental() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Opportunity />
        <Challenge />
        <Role />
        <Discovery />
        <CurrentStateDiagnosis />
        <CompetitorLandscape />
        <Personas />
        <DesignDirection />
        <IASection />
        <FlowsShowcase />
        <DesignSystemSection />
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
          Case Study · B2B Platform
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.25 }}
          className="mt-4 max-w-4xl font-serif-italic text-5xl leading-[1.02] text-balance text-paper md:text-7xl lg:text-[5.5rem]"
        >
          Elevating a global dental care B2B platform.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.45 }}
          className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-paper-dim md:text-xl"
        >
          A digital pivot for a global consumer-goods corporation&rsquo;s
          professional dental care platform — the website used by dental
          students, practising clinicians, and faculty around the world for
          continuing education, research, patient resources, and product
          discovery. The redesign rebuilt the experience around the user, not
          the org chart, and turned a sprawling library of content into
          something people could actually move through.
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

/* ====================== OPPORTUNITY ====================== */
function Opportunity() {
  return (
    <SectionShell eyebrow="01 · The opportunity">
      <SectionHeading>
        A library of <em className="font-serif-italic">5,000+ pages</em> nobody
        could navigate.
      </SectionHeading>
      <Lede>
        The platform was the global brand&rsquo;s primary point of contact
        with the dental community — 170+ continuing education courses, peer
        research, patient hand-outs, product information, and sample
        ordering, all on one site. Audience scope was wide: students chasing
        clinical hours, working clinicians keeping their licenses current,
        and faculty designing curricula. The content was excellent. The
        experience around it had stopped serving any of them.
      </Lede>

      <div className="mt-10 grid gap-3 md:grid-cols-3">
        {[
          { stat: "170+", label: "courses & case studies" },
          { stat: "5,000+", label: "pages re-shaped" },
          { stat: "3", label: "user types served" },
        ].map((m) => (
          <StatCard key={m.label} {...m} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== CHALLENGE ====================== */
function Challenge() {
  return (
    <SectionShell eyebrow="02 · Challenge">
      <SectionHeading>
        Unlocking smiles, <em className="font-serif-italic">simplifying access</em>.
      </SectionHeading>
      <Lede>
        The existing site had real strengths — depth of content, brand
        recognition — but it was failing on the basics. The information
        architecture was deeply nested, navigation was fragmented, content
        hierarchy was unclear, and key research and product modules sat
        without context. On mobile, the experience broke down entirely. The
        redesign had to lift engagement, streamline access to learning, and
        leave room for brand-aligned content without disrupting the
        platform&rsquo;s core educational mission.
      </Lede>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Underwhelming UX",
            body:
              "Visually flat, inconsistent treatment, no sense of hierarchy or progression — content didn&rsquo;t feel like it added up to a journey.",
          },
          {
            label: "Complicated IA",
            body:
              "Many layers and sublayers. Users had to remember the path to find the same content twice.",
          },
          {
            label: "Fragmented navigation",
            body:
              "Multiple menus competing for attention. Primary and secondary actions were difficult to spot on every page.",
          },
          {
            label: "Mobile broke down",
            body:
              "Layouts didn&rsquo;t adapt. Half the site was effectively unreachable from a phone — exactly where clinicians needed it.",
          },
        ].map((item) => (
          <ProblemCard key={item.label} {...item} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== ROLE ====================== */
function Role() {
  return (
    <SectionShell eyebrow="03 · My role" tone="cool">
      <SectionHeading>
        Senior Designer and design lead.
      </SectionHeading>
      <Lede>
        I led UX strategy and execution end-to-end — directing a team of two
        other designers, partnering with content strategy, engineering, and
        brand stakeholders, and personally owning the persona work,
        information architecture, and the design system that the rest of the
        team built on.
      </Lede>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ResponsibilityCard
          title="Direction"
          items={[
            "Set UX strategy and execution standards for the entire redesign",
            "Led a team of two designers and held the bar for craft across every screen",
            "Drove persona-based design, information architecture, and a mobile-first stance from the first sketch",
            "Established the design system and accessibility practices the team and downstream engineers worked from",
          ]}
        />
        <ResponsibilityCard
          title="Collaboration"
          items={[
            "Partnered with content strategy on the IA so structure and language landed together",
            "Worked weekly with the engineering lead on component contracts and responsive behaviour",
            "Held alignment with brand stakeholders so sponsor presence felt embedded, not imposed",
            "Synthesised research from interviews, competitor analysis, and heuristic evaluation into shared artefacts the team made decisions from",
          ]}
        />
      </div>
    </SectionShell>
  );
}

/* ====================== DISCOVERY ====================== */
function Discovery() {
  return (
    <SectionShell eyebrow="04 · Discovery">
      <SectionHeading>
        Uncovering insights for success.
      </SectionHeading>
      <Lede>
        Discovery was deliberately broad. We didn&rsquo;t want to redesign
        from instinct — we wanted to know how the current system actually
        served (and failed) its users, what competitors were doing well
        enough to learn from, and where the brand had room to deepen its
        professional credibility. Four parallel streams fed the synthesis.
      </Lede>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Stakeholder interviews",
            body:
              "Mapped business goals, content priorities, and constraints across product, content, brand, and clinical leads.",
          },
          {
            title: "Competitor analysis",
            body:
              "Audited two large dental care brand sites and a leading professional association — what worked, what didn&rsquo;t, where the white space was.",
          },
          {
            title: "Heuristic evaluation",
            body:
              "Walked the live site as each persona — flagged friction at every step from search to course completion to sample request.",
          },
          {
            title: "User needs & task flows",
            body:
              "Synthesised needs, pains, and motivations into task flows that became the team&rsquo;s shared reference for design decisions.",
          },
        ].map((item) => (
          <DiscoveryCard key={item.title} {...item} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== CURRENT STATE DIAGNOSIS ====================== */
function CurrentStateDiagnosis() {
  return (
    <SectionShell eyebrow="05 · Current state diagnosis" tone="warm">
      <SectionHeading>
        Where the site was actually breaking, page by page.
      </SectionHeading>
      <Lede>
        Heuristic evaluation produced a clear, page-level read on what the
        existing site did well and where it was failing real users. Three
        screens summarised the larger pattern.
      </Lede>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          {
            page: "Home",
            image: "/images/case-studies/dental/state-home.jpg",
            imageAlt: "Existing dentalcare.com home page — desktop and mobile views with the Our Mission block, feature list, banner promo, and product callouts",
            works: [
              "Depth of content reachable for a wide audience",
              "Big-menu pattern matched established conventions",
            ],
            broken: [
              "Visually didn&rsquo;t guide the user through a learning journey",
              "Variety of content not articulated; no clear hierarchy",
              "Primary CTAs lost in the page",
              "Not effective on mobile",
            ],
          },
          {
            page: "Course listing",
            image: "/images/case-studies/dental/state-course-listing.jpg",
            imageAlt: "Existing Professional Education course listing page — desktop and mobile views with syllabus cards and featured education courses",
            works: ["Course volume was a real strength"],
            broken: [
              "Cluttered density, hard to scan",
              "Unrelated left-side menu added noise",
              "Search returned too much, too imprecisely",
            ],
          },
          {
            page: "Course detail",
            image: "/images/case-studies/dental/state-course-detail.jpg",
            imageAlt: "Existing course detail page — desktop and mobile views with a write-review overlay and embedded text-heavy content",
            works: ["Content quality and CE credibility"],
            broken: [
              "Unclear navigation between modules",
              "Too much text in quick view; no chunking",
              "Primary and secondary CTAs hard to spot",
            ],
          },
        ].map((p) => (
          <DiagnosisCard key={p.page} {...p} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== COMPETITOR LANDSCAPE ====================== */
function CompetitorLandscape() {
  return (
    <SectionShell eyebrow="06 · Competitor landscape">
      <SectionHeading>
        What the rest of the field was getting right.
      </SectionHeading>
      <Lede>
        We benchmarked against three reference points in professional dental
        education: <strong className="text-paper">Colgate</strong>,{" "}
        <strong className="text-paper">Philips</strong>, and the{" "}
        <strong className="text-paper">ADA</strong>. The pattern was
        consistent — good filtering and search, downloadable PDFs, free CE —
        and the same recurring weaknesses around mobile, registration
        friction, and CE verification.
      </Lede>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <CompetitorCard
          title="Colgate"
          subtitle="Oral Health Network · COHN"
          image="/images/case-studies/dental/competitor-colgate.jpg"
          imageAlt="Screens from the Colgate Oral Health Network platform — webinar listings, dental CE article cards, and a course detail layout"
          strengths={[
            "Strong product brand and visual identity",
            "Searchable with a clear filter system on CE articles",
            "Free CE access with downloadable PDF formats",
          ]}
          weaknesses={[
            "Missing fixed header / return-to-top",
            "No vetting of CE course completion",
            "Significant access restrictions on mobile",
          ]}
        />
        <CompetitorCard
          title="Philips"
          subtitle="Dental Professionals · Oral Healthcare Online Learning"
          image="/images/case-studies/dental/competitor-philips.jpg"
          imageAlt="Screens from Philips Dental Professionals — landing page with hero, interactive online learning hub, and a webinar classroom"
          strengths={[
            "Strong dental product brand presence",
            "Ability to create and save notes per course",
            "Clinical studies surfaced on product pages",
          ]}
          weaknesses={[
            "Inconsistent UI and branding across the experience",
            "Limited course offerings, mostly video-only",
            "Lengthy registration form",
          ]}
        />
        <CompetitorCard
          title="ADA"
          subtitle="American Dental Association · Education & Careers"
          image="/images/case-studies/dental/competitor-ada.jpg"
          imageAlt="Screens from the ADA Education & Careers section — Continuing Education hub, featured CE products, and the course catalog"
          strengths={[
            "160-year brand legacy and authority",
            "Diverse category offerings on a left rail",
            "Filter by author and CE credits",
          ]}
          weaknesses={[
            "Weak information architecture and UI",
            "Distracting advertising clutter",
            "Heavy registration; gated by membership",
          ]}
        />
      </div>

      <div className="mt-10 max-w-3xl text-pretty text-paper-dim md:text-lg">
        The opportunities for the redesign were everywhere these competitors
        were thin: a more thoughtful design layout, brand presence that felt
        earned not bolted on, the ability to highlight and save content,
        thorough filter modules, and additional reference resources surfaced
        in context.
      </div>
    </SectionShell>
  );
}

/* ====================== PERSONAS ====================== */
function Personas() {
  return (
    <SectionShell eyebrow="07 · Three personas, three paths" tone="cool">
      <SectionHeading>
        Three people, three different days{" "}
        <em className="font-serif-italic">on the same site</em>.
      </SectionHeading>
      <Lede>
        Persona work surfaced three distinct people the platform had to
        serve: a student building toward a license, a working clinician
        keeping a practice current, and a faculty member running a cohort.
        Their goals overlapped in places, but their journeys through the
        site barely did.
      </Lede>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <PersonaCard
          name="Dental Student"
          age="23"
          headline="“I want to keep up to date with my education plan and keep track of courses & assignments.”"
          accent="blue"
          functional={[
            "Access core course material to study for board exams",
            "Complete assigned coursework and case studies",
            "Find free samples and student discounts",
            "Discover supplementary educational resources",
          ]}
          challenges={[
            "Too much content, hard to find anything quickly",
            "Confusion on where to ask for help with CE / ordering",
            "Search doesn&rsquo;t work well for what students actually look for",
          ]}
          opportunities={[
            "Easy search",
            "Quick access to learning",
            "Progress tracking",
            "Sample / discount requests",
          ]}
        />
        <PersonaCard
          name="Dental Professional"
          age="34"
          headline="“I want to stay up to date so I can run a well-informed practice and help my patients understand dental care better.”"
          accent="mint"
          functional={[
            "Easy ways to fulfil CE and license requirements",
            "Patient resources I can share without re-creating the wheel",
            "Order products and request samples",
            "Find clinical research relevant to specific cases",
          ]}
          challenges={[
            "Content overload, no clear priority",
            "Confusion on support channels for CE / ordering",
            "Hard to find content I can share with patients",
          ]}
          opportunities={[
            "Easy search",
            "Quick learning access",
            "Sample / discount requests",
            "Patient-facing resources",
            "Shareable content for patients",
          ]}
        />
        <PersonaCard
          name="Dental Faculty"
          age="45"
          headline="“I&rsquo;d like to design a course structure that enables growth for my students and track their learning progress.”"
          accent="lavender"
          functional={[
            "Set up effective assignments backed by site content",
            "Quick access to clinical summaries to share with students",
            "Curriculum supplements that align with my course",
            "Track assignment completion across cohorts",
          ]}
          challenges={[
            "Clunky assignment setup, hard to manage at cohort scale",
            "Students struggle to reach the assignment surface",
            "Hard to find content relevant to my course to recommend",
          ]}
          opportunities={[
            "Easy search",
            "Faster assignment creation & review",
            "&ldquo;What&rsquo;s new&rdquo; for courses & case studies",
            "Cross-linked pages between courses, case studies, products",
          ]}
        />
      </div>
    </SectionShell>
  );
}

/* ====================== DESIGN DIRECTION ====================== */
function DesignDirection() {
  return (
    <SectionShell eyebrow="08 · Design direction">
      <SectionHeading>
        Experience excellence,{" "}
        <em className="font-serif-italic">navigate with ease</em>.
      </SectionHeading>
      <Lede>
        Learning platforms live or die on engagement and clarity. Our design
        direction balanced educational depth with brand alignment — making
        sure sponsor presence was thoughtfully embedded without disrupting
        learning intent — and shaped action-based journeys per user type
        from real behaviour patterns.
      </Lede>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Winning with experience",
            body:
              "Engagement and direction first. Brand presence earned its place by serving the user&rsquo;s learning intent, not interrupting it.",
          },
          {
            title: "Guide the user",
            body:
              "Action-based journeys per user type. Layouts and flows shaped by how each persona actually moves through clinical learning.",
          },
          {
            title: "From process to task flows",
            body:
              "Translated raw user research into journey maps and task flows that engineering and content could plan against in lock-step.",
          },
        ].map((d) => (
          <DirectionCard key={d.title} {...d} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== INFORMATION ARCHITECTURE ====================== */
function IASection() {
  return (
    <SectionShell eyebrow="09 · Information architecture" tone="cool">
      <SectionHeading>
        Revisiting the{" "}
        <em className="font-serif-italic">information architecture</em>.
      </SectionHeading>
      <Lede>
        We collapsed the IA into a flat, task-oriented structure built around
        what users actually came to do. Each top-level destination earned its
        place by mapping to a real user task, with cross-links between
        courses, resources, products, and research handling the connections
        that previously required navigating back to home.
      </Lede>

      <motion.figure
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: easeOutExpo }}
        className="mt-12 overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-black/[0.06] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] md:p-8"
      >
        <img
          src="/images/case-studies/dental/information-architecture.jpg"
          alt="Final information architecture diagram showing Home branching to Cont. Education, Pro. Resources, For your Patient, Products & Research, Sign in/profile, Search, Shop Now, and Country Selector — each with their second-level destinations"
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
        <figcaption className="mt-4 text-[11px] uppercase tracking-[0.18em] text-black/50">
          Final IA · top-level navigation and second-level destinations
        </figcaption>
      </motion.figure>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <FeatureNote
          title="Top-level destinations earned their place"
          body="Cont. Education · Pro. Resources · For your Patient · Products & Research · Profile. Every other page in the system had to earn a path back to one of these."
        />
        <FeatureNote
          title="Cross-linked, not duplicated"
          body="Courses, case studies, products, and research now reference each other in context — a clinical case can lead to the relevant CE module, the matching product, and the patient hand-out without a hop home."
        />
        <FeatureNote
          title="Search that works for clinicians"
          body="The catalogue was re-tagged against clinical taxonomy, not internal categories. Filters were collapsed to the few that actually sort the way professionals think."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== KEY FLOWS SHOWCASE ====================== */
function FlowsShowcase() {
  return (
    <SectionShell eyebrow="10 · Key flows">
      <SectionHeading>
        The journeys we put the most weight on.
      </SectionHeading>
      <Lede>
        Three flows carried the redesign: the personalised learning home
        each user lands on, the course discovery surface that decides
        whether they ever start anything, and the course detail page where
        completion actually happens. A fourth flow — faculty assignment
        management — closed the loop for the cohort use case.
      </Lede>

      <div className="mt-12 space-y-16">
        <FlowBlock
          title="Home page — the gateway"
          body="The home page sets intent and direction in the first scroll. <strong>Clear communication of intent, clear CTA</strong>. It functions as a gateway to courses, shopping, and information — surfacing what&rsquo;s trending, what&rsquo;s new, and the products that support clinical practice. Persona-aware quick links route Students and Faculty to assignments without a hop, while the primary <em>FREE Dental Continuing Education</em> moment makes the platform&rsquo;s core value unmistakable."
          highlights={[
            "Clear intent + single primary CTA above the fold",
            "Gateway to learning, products, and patient resources from one screen",
            "Trending and What&rsquo;s Featured shelves keep the page fresh per visit",
            "Student & Faculty quick links cut multi-click journeys to one tap",
          ]}
          image="/images/case-studies/dental/flow-home.jpg"
          imageAlt="Mobile-first home page composition — FREE Dental Continuing Education hero, Trending shelf, Order Oral-B Products carousel, What's Featured patient education, and the Student & Faculty Quick Links panel"
        />
        <FlowBlock
          title="Course discovery"
          body="Search is persistent, filters reflect the way clinicians actually segment topics, and every card communicates what you&rsquo;re committing to before you click — topic, CE credits, duration, and date. The Find Your Course module gives equal weight to free-form search and structured filters, so professionals and students each reach the catalogue the way they prefer."
          highlights={[
            "Persistent search with structured filters — Type, Topic, Profession, Credit Hours, Author",
            "Each card surfaces CE credits, duration, and dates upfront",
            "Search by Course Name or Assignment Number serves both browsing and faculty-set tasks",
          ]}
          image="/images/case-studies/dental/flow-course-listing.jpg"
          imageAlt="Continuing Education listing page with hero block, Find Your Course filter module, and a list of 160 courses with CE credit, duration, and date metadata — shown desktop and mobile"
        />
        <FlowBlock
          title="Course detail"
          body="The page leads with what matters: CE status, duration, and the primary <em>Start Course</em> action. Tabbed content (Overview, Learning Objectives, Disclaimers, Author, Submission Information, Recognition) keeps the long-form clinical content scannable. A secondary <em>Create Assignment</em> action quietly serves Faculty without distracting from the primary student/professional flow."
          highlights={[
            "Primary CTA is unambiguous and always visible",
            "Long-form content broken into scannable tabs, not a wall of text",
            "Faculty action embedded but secondary — supports cohort use without crowding",
            "Author, recognition, and disclaimers easy to find when CE compliance matters",
          ]}
          image="/images/case-studies/dental/flow-course-detail.jpg"
          imageAlt="Course detail page for Oral Hard Tissue Disease and Home Care Management — hero with course image, credits and primary CTAs, then Overview tab with learning content, intended audience, and submission information, shown desktop and mobile"
        />
        <FlowBlock
          title="Faculty assignment management"
          body="Faculty get a cohort-level progress matrix in one view. New assignments are composed inline with smart defaults from the course catalogue and previous cohorts."
          mockup={<FacultyAssignmentMockup />}
        />
      </div>
    </SectionShell>
  );
}

/* ====================== DESIGN SYSTEM ====================== */
function DesignSystemSection() {
  return (
    <SectionShell eyebrow="11 · Design system & accessibility">
      <SectionHeading>
        A system that <em className="font-serif-italic">held the line</em>{" "}
        across 5,000 pages.
      </SectionHeading>
      <Lede>
        At this scale, consistency isn&rsquo;t a polish concern — it&rsquo;s
        the only way the work survives. I established a design system and
        accessibility practices that the team built every screen against:
        token-based foundations, a component library mapped to real
        clinical use cases, and accessibility checks built into the
        component contract rather than bolted on at audit time.
      </Lede>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <FeatureNote
          title="Token-based foundations"
          body="Color, type, spacing, motion, elevation, and radius — defined as design tokens in Figma and exported one-to-one into the codebase. One source of truth, zero drift across modules."
        />
        <FeatureNote
          title="Components mapped to real use"
          body="Course cards, learning rails, progress trackers, filter chips, persona-aware home blocks, faculty cohort matrices — every component documented with the clinical use case it serves."
        />
        <FeatureNote
          title="Accessibility as a contract"
          body="WCAG 2.1 AA targets baked into component states. Color contrast, focus order, keyboard reachability, and semantic structure became part of code review, not a separate audit."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== OUTCOMES ====================== */
function Outcomes() {
  return (
    <SectionShell eyebrow="12 · Outcomes" tone="warm">
      <SectionHeading>What we set out to move.</SectionHeading>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            stat: "2×",
            label: "expected decrease in key journey time",
            sub: "students, professionals, and faculty across the most-used flows",
          },
          {
            stat: "2×",
            label: "expected increase in user goal completion",
            sub: "course starts, completions, sample requests, assignment submissions",
          },
          {
            stat: "2×",
            label: "expected increase in traffic to product sites",
            sub: "from contextual integration of products into the learning journey",
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
        Beyond the projected metrics, the redesign solved the real
        underlying problem: the site stopped feeling like a content dump
        and started feeling like a tool the dental community could rely on.
        170+ courses and 5,000+ pages were brought into a single shape
        that scales — and a design system the rest of the brand&rsquo;s
        professional surfaces could draw from.
      </div>
    </SectionShell>
  );
}

/* ====================== REFLECTION ====================== */
function Reflection() {
  return (
    <SectionShell eyebrow="13 · Reflection">
      <SectionHeading>
        What I&rsquo;d carry into the next one.
      </SectionHeading>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ReflectionCard
          heading="At this scale, IA is the design"
          body="With 5,000 pages, no amount of visual polish can rescue a structure people can&rsquo;t move through. The biggest single contributor to the impact was the IA collapse — five clean destinations earning 95% of traffic."
        />
        <ReflectionCard
          heading="Personas have to be specific or they vanish"
          body="The Student / Professional / Faculty distinction shaped almost every screen. Generic persona work would have produced a generic site; specific quotes and challenges kept the team honest."
        />
        <ReflectionCard
          heading="Brand presence works when it&rsquo;s embedded, not bolted on"
          body="Sponsor and product placements that helped the user&rsquo;s journey landed cleanly. The same placements as banners would have eroded trust. The design direction held that line."
        />
        <ReflectionCard
          heading="Mobile-first changed the desktop too"
          body="Designing for the phone first stripped each screen down to its essentials. The desktop versions were better for it — denser without being cluttered, because we knew exactly what couldn&rsquo;t come along."
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

function StatCard({ stat, label }: { stat: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
    >
      <div className="font-serif-italic text-5xl text-paper md:text-6xl">
        {stat}
      </div>
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

function DiscoveryCard({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
    >
      <div className="font-serif-italic text-xl text-paper">{title}</div>
      <p
        className="mt-3 text-sm leading-relaxed text-paper-dim"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </motion.div>
  );
}

function DiagnosisCard({
  page,
  image,
  imageAlt,
  works,
  broken,
}: {
  page: string;
  image?: string;
  imageAlt?: string;
  works: string[];
  broken: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
    >
      {image && (
        <div className="relative overflow-hidden bg-white/[0.03]">
          <img
            src={image}
            alt={imageAlt ?? `${page} page screenshot`}
            loading="lazy"
            decoding="async"
            className="h-56 w-full object-cover object-top"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-ink-900/60 to-transparent"
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-[10px] uppercase tracking-[0.2em] text-paper-mute">
          {page}
        </div>
        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-wider text-emerald-400/80">
            What works
          </div>
          <ul className="mt-2 space-y-1 text-sm text-paper-dim">
            {works.map((w, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-emerald-400">+</span>
                <span dangerouslySetInnerHTML={{ __html: w }} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-wider text-rose-400/80">
            What doesn&rsquo;t
          </div>
          <ul className="mt-2 space-y-1 text-sm text-paper-dim">
            {broken.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-rose-400">−</span>
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function CompetitorCard({
  title,
  subtitle,
  image,
  imageAlt,
  strengths,
  weaknesses,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  strengths: string[];
  weaknesses: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
    >
      {image && (
        <div className="relative overflow-hidden bg-white/[0.03]">
          <img
            src={image}
            alt={imageAlt ?? `${title} competitor screenshots`}
            loading="lazy"
            decoding="async"
            className="h-72 w-full object-cover object-top"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-ink-900/60 to-transparent"
          />
        </div>
      )}
      <div className="p-6">
        <div className="font-serif-italic text-xl text-paper">{title}</div>
        {subtitle && (
          <div className="mt-1 text-[11px] uppercase tracking-wider text-paper-mute">
            {subtitle}
          </div>
        )}
        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-wider text-emerald-400/80">
            Strengths
          </div>
          <ul className="mt-2 space-y-1 text-sm text-paper-dim">
            {strengths.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-emerald-400">+</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <div className="text-[10px] uppercase tracking-wider text-rose-400/80">
            Weaknesses
          </div>
          <ul className="mt-2 space-y-1 text-sm text-paper-dim">
            {weaknesses.map((w, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-rose-400">−</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function PersonaCard({
  name,
  age,
  headline,
  accent,
  functional,
  challenges,
  opportunities,
}: {
  name: string;
  age: string;
  headline: string;
  accent: "blue" | "mint" | "lavender";
  functional: string[];
  challenges: string[];
  opportunities: string[];
}) {
  const accents = {
    blue: "from-accent-blue/10 to-transparent",
    mint: "from-accent-mint/10 to-transparent",
    lavender: "from-accent-lavender/10 to-transparent",
  } as const;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: easeOutExpo }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br p-6",
        accents[accent],
      )}
    >
      <div className="text-[10px] uppercase tracking-[0.2em] text-paper-mute">
        Persona · {age} yrs
      </div>
      <div className="mt-2 font-serif-italic text-2xl text-paper">{name}</div>

      <blockquote
        className="mt-4 border-l border-white/15 pl-4 text-pretty font-serif-italic text-base text-paper md:text-lg"
        dangerouslySetInnerHTML={{ __html: headline }}
      />

      <div className="mt-5 space-y-4">
        <PersonaList
          label="Functional needs"
          items={functional}
          dotClass="text-paper-mute"
        />
        <PersonaList
          label="Challenges"
          items={challenges}
          dotClass="text-rose-400/80"
        />
        <PersonaList
          label="Opportunities"
          items={opportunities}
          dotClass="text-emerald-400/80"
        />
      </div>
    </motion.div>
  );
}

function PersonaList({
  label,
  items,
  dotClass,
}: {
  label: string;
  items: string[];
  dotClass?: string;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-paper-mute">
        {label}
      </div>
      <ul className="mt-1.5 space-y-1 text-sm leading-relaxed text-paper-dim">
        {items.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className={cn("shrink-0", dotClass)}>·</span>
            <span dangerouslySetInnerHTML={{ __html: p }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function DirectionCard({
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

function FlowBlock({
  title,
  body,
  highlights,
  image,
  imageAlt,
  mockup,
}: {
  title: string;
  body: string;
  highlights?: string[];
  image?: string;
  imageAlt?: string;
  mockup?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: easeOutExpo }}
      className="grid gap-6 md:grid-cols-[340px_1fr] md:gap-10"
    >
      <div>
        <h3 className="font-serif-italic text-2xl text-paper md:text-3xl">
          {title}
        </h3>
        <p
          className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {highlights && highlights.length > 0 && (
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-paper-dim">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-emerald-400/70" />
                <span dangerouslySetInnerHTML={{ __html: h }} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {image ? (
          <div className="overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-black/[0.06] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] md:p-6">
            <img
              src={image}
              alt={imageAlt ?? title}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
        ) : (
          mockup
        )}
      </div>
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
