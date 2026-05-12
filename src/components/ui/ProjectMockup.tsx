import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

interface ProjectMockupProps {
  project: Project;
  className?: string;
}

export function ProjectMockup({ project, className }: ProjectMockupProps) {
  return (
    <div
      role="img"
      aria-label={project.imageAlt}
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-2xl",
        "ring-1 ring-black/[0.04]",
        className,
      )}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        renderMockup(project)
      )}
    </div>
  );
}

function renderMockup(project: Project) {
  switch (project.id) {
    case "influencer-management":
      return <InfluencerMockup />;
    case "warranty-management":
      return <WarrantyMockup />;
    case "b2b-dental-platform":
      return <DentalMockup />;
    case "pro-age-hair-care":
      return <HairBiologyMockup />;
    default:
      return null;
  }
}

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="flex h-7 items-center gap-1.5 border-b border-black/[0.06] bg-black/[0.02] px-3">
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
      </div>
      <div className="absolute inset-x-0 bottom-0 top-7 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function InfluencerMockup() {
  return (
    <BrowserChrome>
      <div className="flex h-full p-4">
        <div className="flex-1 space-y-1.5 pr-3">
          <div className="mb-2 flex gap-2">
            <span className="h-2 w-16 rounded bg-black/15" />
            <span className="h-2 w-12 rounded bg-black/10" />
          </div>
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded bg-black/[0.03] px-2 py-1.5"
            >
              <span className="h-4 w-4 rounded-full bg-gradient-to-br from-violet-300 to-pink-300" />
              <span className="h-1.5 w-20 rounded bg-black/15" />
              <span className="ml-auto h-1.5 w-10 rounded bg-emerald-400/70" />
            </div>
          ))}
        </div>
        <div className="hidden w-32 flex-col gap-2 sm:flex">
          <div className="h-16 rounded-md bg-gradient-to-br from-violet-200 to-pink-200" />
          <div className="space-y-1 rounded-md border border-black/5 p-2">
            <span className="block h-1.5 w-16 rounded bg-black/15" />
            <span className="block h-1.5 w-12 rounded bg-black/10" />
            <span className="block h-1.5 w-20 rounded bg-black/10" />
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function WarrantyMockup() {
  return (
    <BrowserChrome>
      <div className="flex h-full flex-col bg-[#f5f7fb]">
        {/* Welcome hero with 5 module tiles */}
        <div className="bg-[#0d2756] px-2 pt-2 pb-3">
          <div className="text-center text-[7px] font-medium tracking-wide text-white/95">
            Welcome to After Sales
          </div>
          <div className="mt-1.5 grid grid-cols-5 gap-1">
            {[
              { label: "Product Catalogue", icon: "cylinder" },
              { label: "Warranty", icon: "shield" },
              { label: "Reporting", icon: "chart" },
              { label: "Service Network", icon: "pin" },
              { label: "Training", icon: "people" },
            ].map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center gap-0.5 rounded bg-white px-1 py-1.5 shadow-sm"
              >
                <ModuleIcon icon={m.icon as ModuleIconName} />
                <span className="text-center text-[5px] font-medium leading-tight text-black/75">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Updates */}
        <div className="px-2 pt-1.5">
          <div className="text-[6px] font-bold text-black/85">Latest Updates</div>
          <div className="mt-1 grid grid-cols-3 gap-1">
            {[
              {
                cat: "ORAL CARE",
                title: "Toothbrushes with low ticking sound",
              },
              {
                cat: "GROOMING",
                title: "New premium electric shaver launched",
              },
              {
                cat: "GLOBAL NEWS",
                title: "Service platform upgrade scheduled for Q3",
              },
            ].map((u) => (
              <div
                key={u.cat}
                className="rounded bg-white p-1 ring-1 ring-black/[0.05]"
              >
                <div className="text-[4px] uppercase tracking-wider text-black/40">
                  {u.cat}
                </div>
                <div className="mt-0.5 line-clamp-2 text-[5px] font-semibold leading-tight text-black/85">
                  {u.title}
                </div>
                <div className="mt-1 space-y-px">
                  <span className="block h-px w-full bg-black/[0.08]" />
                  <span className="block h-px w-3/4 bg-black/[0.06]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trends */}
        <div className="flex-1 px-2 pt-1.5 pb-2">
          <div className="flex items-center justify-between">
            <div className="text-[6px] font-bold text-black/85">Trends</div>
            <span className="text-[4px] text-blue-700 underline">View All</span>
          </div>
          <div className="mt-1 grid grid-cols-2 gap-1">
            <MiniLineChart
              title="Reimbursed Tickets"
              series={[
                { color: "#10b981", points: "0,30 14,12 28,12 42,28 56,18 70,20 85,16" },
                { color: "#0ea5e9", points: "0,28 14,32 28,22 42,30 56,32 70,32 85,30" },
                { color: "#1d4ed8", points: "0,8 14,18 28,12 42,16 56,14 70,10 85,14" },
              ]}
            />
            <MiniLineChart
              title="Average TAT"
              series={[
                { color: "#10b981", points: "0,30 14,32 28,28 42,30 56,32 70,32 85,30" },
                { color: "#0ea5e9", points: "0,28 14,30 28,22 42,28 56,24 70,28 85,28" },
                { color: "#1d4ed8", points: "0,10 14,18 28,8 42,18 56,14 70,8 85,12" },
              ]}
            />
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

type ModuleIconName = "cylinder" | "shield" | "chart" | "pin" | "people";

function ModuleIcon({ icon }: { icon: ModuleIconName }) {
  const className = "h-3 w-3 text-blue-700";
  switch (icon) {
    case "cylinder":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <ellipse cx="12" cy="5" rx="6" ry="2" />
          <path d="M6 5v14a6 2 0 0 0 12 0V5" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M12 3 L20 6 V12 C20 17 16 20 12 21 C8 20 4 17 4 12 V6 Z" />
          <path d="M9 12 L11 14 L15 10" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M4 20 L4 14" />
          <path d="M10 20 L10 10" />
          <path d="M16 20 L16 6" />
          <path d="M14 8 L18 4 L18 8" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <path d="M12 22 C12 22 5 14 5 9 a7 7 0 0 1 14 0 c0 5 -7 13 -7 13z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="8" r="3" />
          <circle cx="5" cy="10" r="2" />
          <circle cx="19" cy="10" r="2" />
          <path d="M6 18 C6 15 9 13 12 13 C15 13 18 15 18 18" />
        </svg>
      );
  }
}

function MiniLineChart({
  title,
  series,
}: {
  title: string;
  series: { color: string; points: string }[];
}) {
  return (
    <div className="rounded bg-white p-1 ring-1 ring-black/[0.05]">
      <div className="flex items-center justify-between">
        <div className="text-[5px] font-semibold text-black/85">{title}</div>
        <div className="flex gap-0.5">
          {[
            { c: "#10b981", l: "DE40" },
            { c: "#0ea5e9", l: "AT40" },
            { c: "#1d4ed8", l: "CH01" },
          ].map((s) => (
            <span key={s.l} className="flex items-center gap-px text-[4px] text-black/55">
              <span
                className="inline-block h-1 w-1 rounded-sm"
                style={{ background: s.c }}
              />
              {s.l}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 90 36" className="mt-0.5 block w-full" preserveAspectRatio="none">
        {/* Light gridlines */}
        {[8, 16, 24, 32].map((y) => (
          <line key={y} x1="0" y1={y} x2="90" y2={y} stroke="#000" strokeOpacity="0.05" strokeWidth="0.3" />
        ))}
        {/* Data lines */}
        {series.map((s, i) => (
          <g key={i}>
            <polyline
              points={s.points}
              fill="none"
              stroke={s.color}
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {s.points.split(" ").map((p, idx) => {
              const [x, y] = p.split(",").map(Number);
              return (
                <circle key={idx} cx={x} cy={y} r="0.7" fill={s.color} />
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
}

function DentalMockup() {
  return (
    <div className="relative h-full w-full bg-[#eaf1ff] p-4">
      <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-[55%] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5">
        <div className="h-6 border-b border-black/5 bg-[#1d4ed8]" />
        <div className="space-y-1.5 p-3">
          <div className="h-12 rounded bg-gradient-to-br from-blue-100 to-blue-200" />
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-8 rounded bg-black/[0.04]" />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-4 top-10 h-[calc(100%-3.5rem)] w-[40%] overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
        <div className="aspect-video bg-gradient-to-br from-sky-200 to-blue-300" />
        <div className="space-y-1 p-2">
          <span className="block h-1.5 w-20 rounded bg-black/15" />
          <span className="block h-1.5 w-16 rounded bg-black/10" />
          <span className="block h-1.5 w-24 rounded bg-black/10" />
        </div>
      </div>
    </div>
  );
}
function HairBiologyMockup() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-violet-50 to-violet-100 p-4">
      <div className="flex h-full items-end justify-center gap-3">
        {[
          "from-amber-100 to-amber-200",
          "from-emerald-100 to-emerald-200",
          "from-rose-100 to-rose-200",
        ].map((tone, i) => (
          <div
            key={i}
            className={cn(
              "relative h-[85%] w-16 overflow-hidden rounded-[14px] bg-ink-900 p-1 shadow-lg",
              i === 1 && "h-[92%]",
            )}
          >
            <div className="h-full w-full overflow-hidden rounded-[10px] bg-white">
              <div
                className={cn(
                  "h-3/5 bg-gradient-to-br",
                  tone,
                )}
              />
              <div className="space-y-1 p-1.5">
                <span className="block h-1 w-10 rounded bg-black/15" />
                <span className="block h-1 w-8 rounded bg-black/10" />
                <span className="mt-1 block h-2 w-12 rounded bg-ink-900" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
