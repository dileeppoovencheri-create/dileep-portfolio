import { cn } from "@/lib/cn";

function Frame({
  className,
  children,
  label,
  domain = "dentalcare.app",
}: {
  className?: string;
  children: React.ReactNode;
  label?: string;
  domain?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white text-ink-900 ring-1 ring-black/[0.06] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-black/[0.06] bg-black/[0.02] px-3">
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="ml-3 text-[10px] uppercase tracking-wide text-black/40">
          {domain}
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function Pill({
  tone = "neutral",
  children,
}: {
  tone?: "ok" | "warn" | "info" | "neutral" | "brand";
  children: React.ReactNode;
}) {
  const tones = {
    ok: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    warn: "bg-amber-50 text-amber-700 ring-amber-100",
    info: "bg-sky-50 text-sky-700 ring-sky-100",
    neutral: "bg-black/[0.04] text-black/60 ring-black/5",
    brand: "bg-blue-600 text-white ring-blue-700",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-wider ring-1 ring-inset",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

/* ============ LEARNING HOME (Student / Professional) ============ */
export function LearningHomeMockup() {
  return (
    <Frame
      className="aspect-[16/10] w-full"
      label="Personalized learning home for a dental professional with progress tracking, recommended courses, recent research, and quick actions"
    >
      <div className="flex h-[calc(100%-1.75rem)]">
        {/* Top nav strip is folded into header within the body for compactness */}
        <aside className="hidden w-44 flex-col gap-1 border-r border-black/[0.06] bg-[#0d3b8c] p-3 text-white/80 sm:flex">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-5 w-5 rounded bg-white/95" />
            <span className="h-2 w-20 rounded bg-white/30" />
          </div>
          {[
            "My learning",
            "Courses",
            "Research & news",
            "Patient resources",
            "Products & samples",
            "Help",
          ].map((item, i) => (
            <div
              key={item}
              className={cn(
                "flex items-center gap-2 rounded px-2 py-1.5 text-[10px]",
                i === 0 ? "bg-white/15 text-white" : "text-white/60",
              )}
            >
              <span className="h-2 w-2 rounded-sm bg-current opacity-60" />
              {item}
            </div>
          ))}
        </aside>

        <div className="flex-1 overflow-hidden p-5">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-black/40">
                Welcome back
              </div>
              <div className="mt-1 font-serif-italic text-2xl">
                Dr. James, here&rsquo;s where you left off
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Pill tone="info">Orthodontist</Pill>
              <Pill tone="neutral">CE 9.5 of 12</Pill>
            </div>
          </div>

          {/* Continue learning cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              {
                cat: "In progress",
                title: "Adhesive systems · clinical update",
                pct: 62,
                meta: "1.5 CE · 18 min left",
                tone: "from-blue-100 to-blue-200",
              },
              {
                cat: "Up next",
                title: "Pediatric prevention 101",
                pct: 0,
                meta: "2.0 CE · 1h 12m",
                tone: "from-sky-100 to-sky-200",
              },
              {
                cat: "Recommended",
                title: "Patient hand-out: enamel care",
                pct: 0,
                meta: "Resource · shareable",
                tone: "from-emerald-100 to-emerald-200",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="overflow-hidden rounded-md bg-white ring-1 ring-black/[0.06]"
              >
                <div
                  className={cn("h-12 bg-gradient-to-br", c.tone)}
                  aria-hidden
                />
                <div className="p-2">
                  <div className="text-[8px] uppercase tracking-wider text-black/40">
                    {c.cat}
                  </div>
                  <div className="mt-0.5 text-[10px] font-medium leading-tight text-black/80">
                    {c.title}
                  </div>
                  <div className="mt-1 text-[8px] text-black/50">{c.meta}</div>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-black/[0.06]">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom split: research + quick actions */}
          <div className="mt-4 grid grid-cols-[1fr_180px] gap-3">
            <div className="rounded-md border border-black/[0.06] p-3">
              <div className="flex items-center justify-between">
                <div className="text-[9px] uppercase tracking-wider text-black/40">
                  New research, picked for you
                </div>
                <span className="text-[9px] text-blue-700">View all →</span>
              </div>
              <div className="mt-2 space-y-1">
                {[
                  "Whitening efficacy across enamel types — 2024 cohort",
                  "Bristle stiffness & gingival recession: 5-year follow-up",
                  "Patient adherence patterns in interdental cleaning",
                ].map((title) => (
                  <div
                    key={title}
                    className="flex items-center gap-2 text-[10px] text-black/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="truncate">{title}</span>
                    <span className="ml-auto text-[8px] text-black/40">
                      4 min read
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 rounded-md bg-blue-50 p-3 ring-1 ring-blue-100">
              <div className="text-[9px] uppercase tracking-wider text-blue-800/60">
                Quick actions
              </div>
              {[
                "Order patient samples",
                "Browse CE catalog",
                "Find a hand-out",
              ].map((a) => (
                <div
                  key={a}
                  className="flex items-center justify-between rounded bg-white px-2 py-1 text-[10px] text-black/80 ring-1 ring-blue-100"
                >
                  {a}
                  <span className="text-black/40">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ============ COURSE DISCOVERY ============ */
export function CourseDiscoveryMockup() {
  return (
    <Frame
      className="aspect-[16/10] w-full"
      label="Course catalog with persistent search, filter chips, and a grid of course cards each showing topic, duration, CE credits and level"
    >
      <div className="flex h-[calc(100%-1.75rem)]">
        <aside className="hidden w-48 border-r border-black/[0.06] p-3 sm:block">
          <div className="text-[9px] uppercase tracking-wider text-black/40">
            Filter
          </div>
          <FilterGroup label="Topic" items={["Restorative", "Periodontics", "Pediatric", "Orthodontics", "Hygiene"]} active={[1, 4]} />
          <FilterGroup label="Format" items={["Video", "Article", "Interactive", "Case study"]} active={[0, 3]} />
          <FilterGroup label="CE credits" items={["≤ 1", "1 — 3", "≥ 3"]} active={[1]} />
          <FilterGroup label="Level" items={["Student", "Practitioner", "Faculty"]} active={[1]} />
        </aside>

        <div className="flex-1 p-4">
          <div className="mb-3 flex items-center gap-2 rounded-full bg-black/[0.03] px-3 py-1.5 ring-1 ring-inset ring-black/[0.06]">
            <span className="text-[10px] text-black/40">⌕</span>
            <span className="flex-1 text-[10px] text-black/70">
              adhesive systems
            </span>
            <span className="text-[9px] text-black/40">142 results</span>
          </div>

          <div className="mb-3 flex flex-wrap items-center gap-1.5">
            {["Periodontics", "Hygiene", "Video", "Case study", "1—3 CE", "Practitioner"].map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-medium text-blue-800 ring-1 ring-inset ring-blue-100"
              >
                {c}
                <span className="text-blue-400">×</span>
              </span>
            ))}
            <span className="text-[9px] text-black/40 underline">Clear all</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              {
                title: "Adhesive systems update",
                topic: "Restorative",
                ce: "1.5 CE",
                len: "42 min",
                tone: "from-blue-100 to-blue-200",
                badge: "video",
              },
              {
                title: "Bonding protocol pitfalls",
                topic: "Restorative",
                ce: "1.0 CE",
                len: "26 min",
                tone: "from-sky-100 to-sky-200",
                badge: "case",
              },
              {
                title: "Cementation in 2024",
                topic: "Restorative",
                ce: "2.0 CE",
                len: "1h 08m",
                tone: "from-emerald-100 to-emerald-200",
                badge: "video",
              },
              {
                title: "Composite repair workflow",
                topic: "Restorative",
                ce: "1.5 CE",
                len: "38 min",
                tone: "from-violet-100 to-violet-200",
                badge: "case",
              },
              {
                title: "Adhesive failure modes",
                topic: "Restorative",
                ce: "1.0 CE",
                len: "22 min",
                tone: "from-rose-100 to-rose-200",
                badge: "article",
              },
              {
                title: "Patient hand-out: at-home",
                topic: "Hygiene",
                ce: "—",
                len: "Resource",
                tone: "from-amber-100 to-amber-200",
                badge: "share",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="overflow-hidden rounded-md bg-white ring-1 ring-black/[0.06]"
              >
                <div
                  className={cn(
                    "relative h-14 bg-gradient-to-br",
                    c.tone,
                  )}
                >
                  <span className="absolute right-1.5 top-1.5 rounded bg-white/90 px-1 py-px text-[7px] font-bold uppercase text-black/60">
                    {c.badge}
                  </span>
                </div>
                <div className="p-2">
                  <div className="text-[8px] uppercase tracking-wider text-blue-700">
                    {c.topic}
                  </div>
                  <div className="mt-0.5 line-clamp-2 text-[10px] font-medium leading-tight text-black/80">
                    {c.title}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[8px] text-black/50">
                    <span>{c.ce}</span>
                    <span>{c.len}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function FilterGroup({
  label,
  items,
  active,
}: {
  label: string;
  items: string[];
  active: number[];
}) {
  return (
    <div className="mt-3">
      <div className="mb-1 text-[8px] font-semibold uppercase tracking-wider text-black/50">
        {label}
      </div>
      <div className="space-y-1">
        {items.map((it, i) => (
          <div
            key={it}
            className={cn(
              "flex items-center gap-1.5 text-[9px]",
              active.includes(i) ? "text-blue-800" : "text-black/60",
            )}
          >
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-sm border",
                active.includes(i)
                  ? "border-blue-500 bg-blue-500"
                  : "border-black/20",
              )}
            />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ COURSE DETAIL ============ */
export function CourseDetailMockup() {
  return (
    <Frame
      className="aspect-[16/10] w-full"
      label="Course detail page with hero, structured modules, prominent enroll CTA, instructor card, and related content"
    >
      <div className="grid h-[calc(100%-1.75rem)] grid-cols-[1fr_280px]">
        <div className="overflow-hidden p-4">
          {/* Breadcrumb */}
          <div className="text-[9px] text-black/40">
            Courses ›{" "}
            <span className="text-blue-700">Restorative</span> › Adhesive
            systems update
          </div>

          {/* Hero */}
          <div className="mt-3 overflow-hidden rounded-md bg-gradient-to-br from-blue-100 to-blue-200 p-3">
            <div className="flex items-center gap-1.5">
              <Pill tone="brand">CE Approved</Pill>
              <Pill tone="info">1.5 CE</Pill>
              <Pill tone="neutral">42 min</Pill>
            </div>
            <div className="mt-3 font-serif-italic text-2xl text-blue-950">
              Adhesive systems update
            </div>
            <div className="mt-1 text-[10px] text-blue-950/70">
              A clinical refresh on universal adhesives — selection,
              application, and failure modes.
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-3 flex gap-3 border-b border-black/[0.06]">
            {["Overview", "Modules", "Resources", "Discussion"].map((t, i) => (
              <div
                key={t}
                className={cn(
                  "border-b-2 px-1 pb-1.5 text-[10px]",
                  i === 1
                    ? "border-blue-600 font-medium text-blue-800"
                    : "border-transparent text-black/50",
                )}
              >
                {t}
              </div>
            ))}
          </div>

          {/* Modules list */}
          <div className="mt-2 space-y-1">
            {[
              { num: 1, title: "Adhesive chemistry today", len: "8 min", done: true },
              { num: 2, title: "Universal vs total-etch", len: "11 min", done: true },
              { num: 3, title: "Surface preparation", len: "9 min", current: true },
              { num: 4, title: "Common failure modes", len: "7 min" },
              { num: 5, title: "Case workshop · 3 scenarios", len: "12 min" },
              { num: 6, title: "Knowledge check", len: "5 min" },
            ].map((m) => (
              <div
                key={m.num}
                className={cn(
                  "flex items-center gap-2 rounded px-2 py-1.5 text-[10px]",
                  m.current
                    ? "bg-blue-50 ring-1 ring-blue-100"
                    : "bg-black/[0.02]",
                )}
              >
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold",
                    m.done
                      ? "bg-emerald-500 text-white"
                      : m.current
                        ? "bg-blue-600 text-white"
                        : "bg-black/[0.06] text-black/40",
                  )}
                >
                  {m.done ? "✓" : m.num}
                </span>
                <span className={cn(m.current && "font-medium text-blue-900")}>
                  {m.title}
                </span>
                <span className="ml-auto text-[8px] text-black/40">{m.len}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky right rail */}
        <aside className="border-l border-black/[0.06] bg-black/[0.015] p-4">
          <div className="rounded-md bg-white p-3 ring-1 ring-black/[0.06]">
            <div className="text-[9px] uppercase tracking-wider text-black/40">
              Continue
            </div>
            <div className="mt-1 font-serif-italic text-base">
              Module 3 of 6
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-black/[0.06]">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: "44%" }}
              />
            </div>
            <div className="mt-3 flex flex-col gap-1.5">
              <span className="rounded-full bg-blue-600 px-3 py-1.5 text-center text-[10px] font-medium text-white">
                Resume course
              </span>
              <span className="rounded-full bg-white px-3 py-1.5 text-center text-[10px] text-black/70 ring-1 ring-black/10">
                Save for later
              </span>
            </div>
          </div>

          <div className="mt-3 rounded-md bg-white p-3 ring-1 ring-black/[0.06]">
            <div className="text-[9px] uppercase tracking-wider text-black/40">
              Instructor
            </div>
            <div className="mt-1.5 flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-200 to-rose-200" />
              <div>
                <div className="text-[10px] font-medium text-black/80">
                  Dr. Anika Patel
                </div>
                <div className="text-[8px] text-black/50">
                  Restorative Dentistry · 18 yrs
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 text-[9px] uppercase tracking-wider text-black/40">
            Related
          </div>
          {[
            "Bonding protocol pitfalls",
            "Composite repair workflow",
          ].map((title) => (
            <div
              key={title}
              className="mt-1 flex items-center gap-2 rounded p-1.5 text-[10px] text-black/70 hover:bg-black/[0.03]"
            >
              <span className="h-6 w-6 rounded bg-gradient-to-br from-sky-100 to-sky-200" />
              <span className="truncate">{title}</span>
            </div>
          ))}
        </aside>
      </div>
    </Frame>
  );
}

/* ============ FACULTY ASSIGNMENT MANAGER ============ */
export function FacultyAssignmentMockup() {
  return (
    <Frame
      className="aspect-[16/10] w-full"
      label="Faculty assignment view with student progress matrix, cohort filters, and a side panel for creating a new assignment"
    >
      <div className="grid h-[calc(100%-1.75rem)] grid-cols-[1fr_280px]">
        <div className="border-r border-black/[0.06] p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-black/40">
                Cohort · DEN 304 · Spring
              </div>
              <div className="font-serif-italic text-lg">
                Assignment progress
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Pill tone="info">28 students</Pill>
              <Pill tone="warn">3 overdue</Pill>
            </div>
          </div>

          {/* Header row */}
          <div className="overflow-hidden rounded-md ring-1 ring-black/[0.06]">
            <div className="grid grid-cols-[100px_1fr_1fr_1fr_70px] items-center gap-2 border-b border-black/[0.06] bg-black/[0.02] px-2 py-1.5 text-[8px] uppercase tracking-wider text-black/40">
              <span>Student</span>
              <span>Adhesives</span>
              <span>Periodontics</span>
              <span>Case study</span>
              <span>Score</span>
            </div>

            {[
              { name: "Adams, R.", a: "done", b: "done", c: "open", score: 92 },
              { name: "Brown, M.", a: "done", b: "open", c: "open", score: 78 },
              { name: "Chen, L.", a: "done", b: "done", c: "done", score: 96 },
              { name: "Diaz, S.", a: "open", b: "open", c: "open", score: null },
              { name: "Evans, K.", a: "done", b: "done", c: "open", score: 88 },
              { name: "Fischer, J.", a: "done", b: "overdue", c: "open", score: null },
              { name: "Garcia, P.", a: "done", b: "done", c: "done", score: 91 },
              { name: "Hall, T.", a: "open", b: "open", c: "open", score: null },
            ].map((s) => (
              <div
                key={s.name}
                className="grid grid-cols-[100px_1fr_1fr_1fr_70px] items-center gap-2 border-b border-black/[0.04] px-2 py-1.5 text-[10px] last:border-0"
              >
                <span className="truncate text-black/70">{s.name}</span>
                <Status state={s.a} />
                <Status state={s.b} />
                <Status state={s.c} />
                <span className="text-right text-[10px] text-black/70">
                  {s.score !== null ? `${s.score}%` : "—"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right rail: create assignment */}
        <aside className="space-y-3 p-4">
          <div className="text-[10px] uppercase tracking-wider text-black/40">
            New assignment
          </div>
          <div className="space-y-2">
            <FieldRow label="Course" value="Adhesive systems update" />
            <FieldRow label="Cohort" value="DEN 304 · Spring" />
            <FieldRow label="Due" value="Apr 28 · 23:59" />
            <FieldRow label="Weight" value="15% of CE block" />
          </div>

          <div className="rounded-md bg-blue-50 p-2 text-[10px] text-blue-900 ring-1 ring-blue-100">
            <span className="font-medium">Tip:</span> Pair with the
            &ldquo;Bonding protocol pitfalls&rdquo; case study for a
            two-week arc.
          </div>

          <div className="flex gap-1.5">
            <span className="flex-1 rounded-full bg-blue-600 px-3 py-1.5 text-center text-[10px] font-medium text-white">
              Assign to cohort
            </span>
            <span className="rounded-full bg-white px-3 py-1.5 text-[10px] text-black/60 ring-1 ring-black/10">
              Preview
            </span>
          </div>
        </aside>
      </div>
    </Frame>
  );
}

function Status({ state }: { state: string }) {
  const cfg = {
    done: { dot: "bg-emerald-500", text: "Done", color: "text-emerald-700" },
    open: { dot: "bg-black/15", text: "Open", color: "text-black/50" },
    overdue: { dot: "bg-rose-500", text: "Overdue", color: "text-rose-700" },
  } as const;
  const c = cfg[state as keyof typeof cfg] ?? cfg.open;
  return (
    <div className={cn("flex items-center gap-1.5 text-[10px]", c.color)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", c.dot)} />
      {c.text}
    </div>
  );
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-black/[0.025] px-2 py-1.5 ring-1 ring-inset ring-black/[0.04]">
      <div className="text-[8px] uppercase tracking-wider text-black/40">
        {label}
      </div>
      <div className="mt-0.5 truncate text-[11px] text-black/80">{value}</div>
    </div>
  );
}

/* ============ INFORMATION ARCHITECTURE TRANSFORMATION ============ */
export function IATransformationMockup() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl bg-white p-5 text-ink-900 ring-1 ring-black/[0.06] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
        <div className="text-[10px] uppercase tracking-wider text-rose-600">
          Before
        </div>
        <div className="font-serif-italic text-xl">Deeply nested</div>
        <p className="mt-1 text-[11px] leading-relaxed text-black/60">
          Many layers and sublayers. Users had to remember the path to find
          what they came for.
        </p>
        <div className="mt-3 space-y-0.5">
          <Branch label="Education" depth={0} faded />
          <Branch label="Courses" depth={1} faded />
          <Branch label="By Topic" depth={2} faded />
          <Branch label="Restorative" depth={3} faded />
          <Branch label="Adhesives" depth={4} active />
          <Branch label="By Format" depth={2} faded />
          <Branch label="Articles" depth={3} faded />
          <Branch label="Videos" depth={3} faded />
          <Branch label="Case Studies" depth={3} faded />
          <Branch label="By Audience" depth={2} faded />
          <Branch label="Resources" depth={1} faded />
          <Branch label="Patient Hand-outs" depth={2} faded />
          <Branch label="Practice Mgmt" depth={2} faded />
        </div>
      </div>

      <div className="rounded-2xl bg-white p-5 text-ink-900 ring-1 ring-black/[0.06] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
        <div className="text-[10px] uppercase tracking-wider text-emerald-600">
          After
        </div>
        <div className="font-serif-italic text-xl">Task-oriented & flat</div>
        <p className="mt-1 text-[11px] leading-relaxed text-black/60">
          Five top-level destinations, each one mapped to a real user task.
          One-click to anything that matters.
        </p>
        <div className="mt-3 space-y-1">
          {[
            { label: "Learn", body: "Courses · CE · case studies", icon: "🎓" },
            { label: "Research & news", body: "Latest studies, picked for you", icon: "📰" },
            { label: "Patient resources", body: "Shareable hand-outs & video", icon: "🪥" },
            { label: "Products & samples", body: "Catalog, samples, ordering", icon: "🧴" },
            { label: "My profile", body: "Progress, saved, preferences", icon: "👤" },
          ].map((it) => (
            <div
              key={it.label}
              className="flex items-center gap-3 rounded-lg bg-emerald-50/50 px-3 py-2 ring-1 ring-emerald-100"
            >
              <span className="text-base" aria-hidden>{it.icon}</span>
              <div>
                <div className="text-[11px] font-semibold text-emerald-900">
                  {it.label}
                </div>
                <div className="text-[10px] text-emerald-900/70">
                  {it.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Branch({
  label,
  depth,
  faded,
  active,
}: {
  label: string;
  depth: number;
  faded?: boolean;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-[10px]",
        faded && "text-black/45",
        active && "text-rose-700 font-semibold",
      )}
      style={{ paddingLeft: `${depth * 12}px` }}
    >
      {depth > 0 && (
        <span aria-hidden className="text-black/20">
          └
        </span>
      )}
      <span className={cn("rounded px-1.5 py-0.5", active && "bg-rose-50 ring-1 ring-rose-100")}>
        {label}
      </span>
    </div>
  );
}

/* ============ MOBILE RESPONSIVE FRAMES ============ */
export function MobileResponsiveMockup() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          title: "Learning home",
          children: (
            <>
              <div className="space-y-1">
                <span className="block h-2 w-20 rounded bg-black/15" />
                <span className="block h-1.5 w-32 rounded bg-black/10" />
              </div>
              <div className="mt-3 rounded-md bg-gradient-to-br from-blue-100 to-blue-200 p-2">
                <span className="block h-1 w-12 rounded bg-blue-700/30" />
                <span className="mt-1 block h-2 w-24 rounded bg-blue-900/40" />
                <div className="mt-1.5 h-1 w-full rounded-full bg-white/60">
                  <div className="h-full w-[62%] rounded-full bg-blue-600" />
                </div>
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="mt-2 flex items-center gap-2 rounded bg-black/[0.02] p-1.5">
                  <span className="h-6 w-6 rounded bg-gradient-to-br from-emerald-100 to-emerald-200" />
                  <span className="h-1.5 flex-1 rounded bg-black/10" />
                </div>
              ))}
            </>
          ),
        },
        {
          title: "Course discovery",
          children: (
            <>
              <div className="rounded-full bg-black/[0.03] px-2 py-1 text-[8px] text-black/50 ring-1 ring-inset ring-black/[0.06]">
                ⌕ adhesive
              </div>
              <div className="mt-2 flex gap-1">
                {["Restorative", "Hygiene"].map((c) => (
                  <span key={c} className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[7px] text-blue-800 ring-1 ring-inset ring-blue-100">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="overflow-hidden rounded ring-1 ring-black/[0.06]">
                    <div className="h-8 bg-gradient-to-br from-sky-100 to-sky-200" />
                    <div className="space-y-0.5 p-1">
                      <span className="block h-1 w-10 rounded bg-black/15" />
                      <span className="block h-1 w-8 rounded bg-black/10" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          title: "Course detail",
          children: (
            <>
              <div className="rounded bg-gradient-to-br from-blue-100 to-blue-200 p-2">
                <div className="flex gap-1">
                  <span className="rounded-full bg-blue-700 px-1.5 py-0.5 text-[7px] font-bold text-white">CE</span>
                  <span className="rounded-full bg-white/80 px-1.5 py-0.5 text-[7px] text-blue-900">1.5 CE</span>
                </div>
                <div className="mt-2 font-serif-italic text-xs text-blue-950">Adhesive systems update</div>
              </div>
              <div className="mt-2 flex gap-2 border-b border-black/[0.06]">
                <span className="border-b border-blue-600 pb-0.5 text-[8px] text-blue-800">Modules</span>
                <span className="text-[8px] text-black/40">Resources</span>
              </div>
              <div className="mt-1.5 space-y-1">
                {[
                  { n: "✓", t: "Adhesive chemistry", c: "bg-emerald-500 text-white" },
                  { n: "2", t: "Universal vs total-etch", c: "bg-blue-600 text-white" },
                  { n: "3", t: "Surface preparation", c: "bg-black/[0.06] text-black/40" },
                ].map((m) => (
                  <div key={m.t} className="flex items-center gap-1.5 text-[9px]">
                    <span className={cn("flex h-3 w-3 items-center justify-center rounded-full text-[7px] font-bold", m.c)}>
                      {m.n}
                    </span>
                    <span className="text-black/70">{m.t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 rounded-full bg-blue-600 py-1 text-center text-[8px] font-medium text-white">
                Resume
              </div>
            </>
          ),
        },
      ].map((frame) => (
        <div
          key={frame.title}
          className="mx-auto"
        >
          <div className="text-[10px] uppercase tracking-wider text-paper-mute text-center">
            {frame.title}
          </div>
          <div className="mt-2 mx-auto h-[360px] w-[180px] rounded-[24px] bg-ink-900 p-1.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
            <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-white p-2 text-ink-900">
              <div className="mx-auto mb-1.5 h-0.5 w-8 rounded-full bg-black/20" aria-hidden />
              {frame.children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
