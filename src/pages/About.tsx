import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackdrop } from "@/components/ui/AuroraBackdrop";
import { fadeUp, revealOnView, easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/cn";

const META = [
  { label: "Role", value: "Lead UX/UI Designer" },
  { label: "Years", value: "13+" },
  { label: "Based in", value: "Bengaluru, India" },
  { label: "Currently", value: "LTM · Senior Specialist · Interactive" },
];

export function About() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIDo />
        <HowILead />
        <Experience />
        <Skills />
        <Recognition />
        <Education />
        <Connect />
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

        <div className="mt-12 grid gap-12 md:grid-cols-[auto_1fr] md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: easeOutExpo }}
            className="relative mx-auto md:mx-0"
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-gradient-to-br from-white/15 via-white/5 to-transparent blur-2xl"
            />
            <div className="relative h-44 w-44 overflow-hidden rounded-full ring-1 ring-white/15 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-72 lg:w-72">
              <img
                src="/images/profile/headshot.jpg"
                alt="Portrait of Dileep Kumar P"
                className="h-full w-full scale-105 object-cover object-center"
                loading="eager"
                decoding="async"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
              />
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.15 }}
              className="text-xs uppercase tracking-[0.25em] text-paper-mute"
            >
              About · Dileep Kumar P
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.25 }}
              className="mt-4 max-w-3xl font-serif-italic text-5xl leading-[1.05] text-balance text-paper md:text-6xl lg:text-7xl"
            >
              Designing for outcomes that hold.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.45 }}
              className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-paper-dim md:text-lg"
            >
              Lead UX Designer with{" "}
              <strong className="text-paper">13+ years</strong> of experience
              crafting enterprise-grade and AI-driven digital experiences for
              global organisations. I specialise in turning complex business
              workflows into intuitive, scalable, user-centric products that
              drive measurable outcomes — and in mentoring the teams that ship
              them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.55 }}
              className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-paper-dim md:text-lg"
            >
              My work spans B2B platforms, enterprise tooling, AI-driven
              product surfaces, brand experiences, and the design systems that
              tie them together — across personal care, manufacturing,
              after-sales, and learning. I lead UX strategy, build systems,
              and partner closely with product, engineering, ML, and brand
              stakeholders to align user need with business intent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.7 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <a
                href="mailto:dileepexperience@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink-900 transition-opacity hover:opacity-90"
              >
                Get in touch
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-white/5"
              >
                See selected work
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.85 }}
          className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-white/[0.06] py-8 md:grid-cols-4"
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

/* ====================== WHAT I DO ====================== */
function WhatIDo() {
  return (
    <SectionShell eyebrow="01 · What I do">
      <SectionHeading>
        Four threads run through{" "}
        <em className="font-serif-italic">most of my work</em>.
      </SectionHeading>
      <Lede>
        The projects vary — manufacturing dashboards, learning platforms, AI
        validation surfaces, pro-age brand sites — but the shape of the work
        I&rsquo;m best at stays consistent.
      </Lede>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Enterprise UX leadership",
            body: "Setting the strategy and craft bar for complex B2B and internal tooling — translating tangled business workflows into surfaces people actually want to use.",
          },
          {
            title: "AI-driven UX",
            body: "Designing how model output reaches the user — score + context + recommended action — so AI features earn trust instead of automating the keystroke.",
          },
          {
            title: "Design systems",
            body: "Building token-based foundations and component libraries that survive contact with production. Less drift, faster review, more shippable craft.",
          },
          {
            title: "Mentoring & team leadership",
            body: "Coaching designers, running stakeholder workshops, and creating the conditions where good work compounds across multiple modules and years.",
          },
        ].map((t) => (
          <ThreadCard key={t.title} {...t} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== HOW I LEAD ====================== */
function HowILead() {
  return (
    <SectionShell eyebrow="02 · How I lead" tone="cool">
      <SectionHeading>
        How I lead a team and{" "}
        <em className="font-serif-italic">a brief</em>.
      </SectionHeading>
      <Lede>
        For lead roles, the design output is downstream of how the team
        works. Four habits run through how I run an engagement, regardless
        of industry or scope.
      </Lede>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <LeadCard
          title="I set the bar by working alongside, not above"
          body="Two designers, an engineering lead, an ML team, and a product owner — that was the team for the influencer platform&rsquo;s two new modules. I held the craft bar by sitting in design reviews as a peer, not by approving from a distance. The system held because every component earned its place under real pressure."
        />
        <LeadCard
          title="I build systems in the work, not in advance of it"
          body="On the warranty redesign we deliberately resisted a months-long systems project before the work began. Every component proved itself in production first; the system came together as a byproduct of shipping. By launch, it was the reference other modules pulled from."
        />
        <LeadCard
          title="I bring brand, engineering, and ML into the same room early"
          body="Three weeks on-site in Germany with the warranty team produced more clarity than the next six months of remote work would have. The same instinct ran through the influencer project — collaborating with the ML team as needed, particularly where AI insights would directly drive a human decision, so model output and the UI it informed were designed against the same signal."
        />
        <LeadCard
          title="I mentor for autonomy, not for taste"
          body="The designers I&rsquo;ve led have made decisions I wouldn&rsquo;t have made — and most were better than the ones I would have made. I steward the bar; I don&rsquo;t author it. That&rsquo;s the version of leadership that scales beyond me."
        />
      </div>
    </SectionShell>
  );
}

/* ====================== EXPERIENCE ====================== */
function Experience() {
  return (
    <SectionShell eyebrow="03 · Experience" tone="warm">
      <SectionHeading>Where I&rsquo;ve worked.</SectionHeading>
      <Lede>
        13+ years across enterprise consulting, product design for marketing
        teams, e-learning platforms, and corporate brand work — with the
        majority of the depth at LTM where I lead UX for global
        enterprise programmes.
      </Lede>

      <div className="mt-12 space-y-3">
        {[
          {
            role: "Senior Specialist · Interactive",
            company: "LTM",
            location: "Bengaluru",
            dates: "Aug 2018 — Present",
            current: true,
            highlights: [
              "Led UX strategy for enterprise solutions across warranty management, influencer management, and manufacturing command centres — improving usability, efficiency, and user satisfaction at scale",
              "Designed and scaled enterprise design systems across multiple products, raising UI consistency and significantly reducing design-to-development turnaround",
              "Delivered a responsive B2B platform for a digital learning ecosystem, improving content discoverability across 170+ learning modules",
              "Facilitated design workshops and partnered with cross-functional teams to align business goals with user needs and define scalable UX solutions",
              "Mentored and coached a team of designers, fostering professional growth and craft excellence",
            ],
          },
          {
            role: "UI/UX Designer",
            company: "Regalix",
            location: "Bengaluru",
            dates: "Oct 2015 — Jul 2018",
            highlights: [
              "Collaborated on a Google internal project to design a mobile-first experience, setting benchmarks for accessibility and inclusive design",
              "Designed a custom task management system that improved team productivity and visibility into workflows",
            ],
          },
          {
            role: "UI/UX Designer",
            company: "Knowledgehut",
            location: "Bengaluru",
            dates: "Jul 2014 — May 2015",
            highlights: [
              "Revamped the UX of an e-learning platform, improving navigation clarity and increasing engagement and retention",
              "Designed SEO-optimised microsites that drove targeted traffic and lifted course enrolment performance",
            ],
          },
          {
            role: "UI/UX Designer",
            company: "Datamate Infosolutions",
            location: "Kochi",
            dates: "Nov 2013 — Jul 2014",
            highlights: [
              "Redesigned corporate websites with a focus on SEO and usability, improving organic traffic and lead generation",
              "Established a consistent visual language to strengthen brand perception and user engagement",
            ],
          },
          {
            role: "Visual Designer",
            company: "Seeknext IT Solution",
            location: "Bengaluru",
            dates: "Nov 2013 — Jul 2014",
            highlights: [
              "Designed and launched multiple corporate websites, enhancing brand visibility and online engagement",
              "Managed digital design assets to maintain consistency across marketing and communication channels",
            ],
          },
        ].map((job) => (
          <ExperienceItem key={job.company + job.dates} {...job} />
        ))}
      </div>
    </SectionShell>
  );
}

/* ====================== SKILLS ====================== */
function Skills() {
  return (
    <SectionShell eyebrow="04 · Skills">
      <SectionHeading>What I work with.</SectionHeading>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <SkillGroup
          title="Strategic & leadership"
          items={[
            "UX Strategy & Innovation",
            "Enterprise UX",
            "Mentoring & Team Leadership",
            "Workshop Facilitation",
            "Storytelling & Presentation",
            "Agile UX Methods",
          ]}
        />
        <SkillGroup
          title="UX & UI"
          items={[
            "User-Centered Design",
            "Design Thinking",
            "User Research",
            "Personas & User Journeys",
            "Information Architecture",
            "Wireframing",
            "Prototyping",
            "Usability Testing",
            "Design Systems",
          ]}
        />
        <SkillGroup
          title="Tools"
          items={[
            "Figma",
            "Adobe Creative Suite",
            "Sketch",
            "Miro",
            "Generative AI & AI-driven UX",
          ]}
        />
      </div>
    </SectionShell>
  );
}

/* ====================== RECOGNITION ====================== */
function Recognition() {
  return (
    <SectionShell eyebrow="05 · Recognition">
      <SectionHeading>Awards and certifications.</SectionHeading>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <RecognitionGroup
          label="Awards"
          items={[
            {
              heading: "Outstanding Performer",
              detail: "Six consecutive years at LTM",
            },
            {
              heading: "Master Mind & Strategic Thinking Awards",
              detail: "LTM",
            },
          ]}
        />
        <RecognitionGroup
          label="Certifications"
          items={[
            {
              heading: "Google UX Design",
              detail: "Google · Credential AXMQ56ZFCWQ4",
            },
            {
              heading: "Generative AI Fundamentals",
              detail: "IBM · Credential C72COAE7JCB9",
            },
            {
              heading: "Generative AI for Everyone",
              detail: "DeepLearning.AI · Credential 4M8H3UQCDAGM",
            },
          ]}
        />
      </div>
    </SectionShell>
  );
}

/* ====================== EDUCATION ====================== */
function Education() {
  return (
    <SectionShell eyebrow="06 · Education" tone="warm">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
        <SectionHeading>Education.</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7"
        >
          <div className="text-[10px] uppercase tracking-[0.2em] text-paper-mute">
            Undergraduate
          </div>
          <div className="mt-2 font-serif-italic text-2xl text-paper md:text-3xl">
            Bachelor of Arts
          </div>
          <div className="mt-1 text-sm text-paper-dim md:text-base">
            University of Calicut
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}

/* ====================== CONNECT ====================== */
function Connect() {
  return (
    <SectionShell eyebrow="07 · Get in touch" tone="cool">
      <SectionHeading>
        Looking to talk about{" "}
        <em className="font-serif-italic">enterprise UX, AI in product, or
        building systems that scale?</em>
      </SectionHeading>
      <Lede>
        Always open to a conversation about design leadership, strategic UX
        work, mentoring, or interesting briefs that need real craft. The
        fastest way to reach me is below.
      </Lede>

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        <ContactCard
          label="Email"
          value="dileepexperience@gmail.com"
          href="mailto:dileepexperience@gmail.com"
        />
        <ContactCard
          label="Phone"
          value="+91 8921 836 047"
          href="tel:+918921836047"
        />
      </div>
    </SectionShell>
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

function ThreadCard({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
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

function LeadCard({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7"
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

function ExperienceItem({
  role,
  company,
  location,
  dates,
  current,
  highlights,
}: {
  role: string;
  company: string;
  location: string;
  dates: string;
  current?: boolean;
  highlights: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="grid gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:grid-cols-[280px_1fr] md:p-7"
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="font-serif-italic text-xl text-paper md:text-2xl">
            {company}
          </span>
          {current && (
            <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/20">
              Current
            </span>
          )}
        </div>
        <div className="mt-1 text-sm text-paper">{role}</div>
        <div className="mt-1 text-[11px] uppercase tracking-wider text-paper-mute">
          {location} · {dates}
        </div>
      </div>
      <ul className="space-y-2 text-sm leading-relaxed text-paper-dim md:text-base">
        {highlights.map((h, i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-paper-mute" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
    >
      <div className="font-serif-italic text-xl text-paper">{title}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-paper-dim ring-1 ring-inset ring-white/[0.06]"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function RecognitionGroup({
  label,
  items,
}: {
  label: string;
  items: { heading: string; detail: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7"
    >
      <div className="text-[10px] uppercase tracking-[0.22em] text-paper-mute">
        {label}
      </div>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.heading}>
            <div className="font-serif-italic text-lg text-paper md:text-xl">
              {item.heading}
            </div>
            <div className="mt-0.5 text-xs text-paper-mute md:text-sm">
              {item.detail}
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.7, ease: easeOutExpo }}
      href={href}
      className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.05]"
    >
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-paper-mute">
          {label}
        </div>
        <div className="mt-2 font-serif-italic text-xl text-paper md:text-2xl">
          {value}
        </div>
      </div>
      <span
        aria-hidden
        className="text-2xl text-paper-mute transition-transform group-hover:translate-x-1 group-hover:text-paper"
      >
        →
      </span>
    </motion.a>
  );
}
