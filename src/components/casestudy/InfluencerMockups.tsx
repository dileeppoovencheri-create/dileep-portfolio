import { cn } from "@/lib/cn";

function Frame({
  className,
  children,
  label,
  domain = "influencer.app",
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

/* ============ CONTRACTS AUTOMATION ============ */
export function ContractsAutomationMockup() {
  const steps = [
    { num: "✓", label: "Outreach", state: "done" as const },
    { num: "✓", label: "Standard Terms", state: "done" as const },
    { num: "3", label: "Commercial Terms", state: "active" as const },
    { num: "4", label: "Contract", state: "pending" as const },
  ];

  return (
    <Frame
      className="aspect-[16/10] w-full"
      label="Contracts Automation — New Outreach guided flow on Step 3 (Commercial Terms) of 4 (Outreach → Standard Terms → Commercial Terms → Contract). Shows the Commercial Terms Agreement document with Contract Period, Scope of Work, Usage Rights, Editing Rights, and Payment Terms sections, alongside a Partner Details rail with the influencer's contact info, fiscal year, currency, country, category, brand and campaign. Bottom action bar offers Mark as Manual Outreach or Generate Email."
    >
      <div className="flex h-[calc(100%-1.75rem)] flex-col bg-white">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2.5">
          <span className="text-[12px] text-[#0d2756]">‹</span>
          <span className="font-semibold text-[12px] text-[#0d2756]">
            New Outreach
          </span>
        </div>

        {/* Stepper */}
        <div className="border-b border-black/[0.06] px-4 py-2.5">
          <div className="flex items-center gap-2">
            {steps.map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center gap-2">
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold",
                    s.state === "done"
                      ? "bg-blue-700 text-white"
                      : s.state === "active"
                        ? "bg-blue-700 text-white"
                        : "bg-white text-blue-700 ring-1 ring-inset ring-blue-300",
                  )}
                >
                  {s.num}
                </span>
                <span
                  className={cn(
                    "text-[10px]",
                    s.state === "active"
                      ? "font-semibold text-[#0d2756]"
                      : s.state === "done"
                        ? "font-medium text-[#0d2756]"
                        : "text-black/45",
                  )}
                >
                  {s.label}
                </span>
                {i < steps.length - 1 && (
                  <span className="h-px flex-1 bg-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Main content */}
          <div className="flex-1 overflow-hidden p-4">
            <div className="text-[10px] font-semibold text-[#0d2756]">
              Commercial Terms
            </div>
            <div className="mt-0.5 text-[8px] text-black/55">
              Define the commercial details of the partnership
            </div>

            {/* Agreement document */}
            <div className="mt-2 overflow-hidden rounded ring-1 ring-black/[0.08]">
              {/* Document header */}
              <div className="flex items-center justify-between border-b border-black/[0.06] bg-black/[0.03] px-3 py-2">
                <div>
                  <div className="text-[10px] font-semibold text-black/85">
                    Commercial Terms Agreement
                  </div>
                  <div className="text-[8px] text-black/50">
                    Partnership Detail
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[8px] uppercase tracking-wider text-black/50">
                    Brand name
                  </div>
                  <div className="text-[8px] text-black/40">Company name</div>
                </div>
              </div>

              {/* Document body */}
              <div className="space-y-2 p-3">
                <DocSection title="Contract Period">
                  <span className="text-black/65">Start Date: </span>
                  <strong className="text-black/85">01/10/2026</strong>
                  <span className="px-2 text-black/30">·</span>
                  <span className="text-black/65">End Date: </span>
                  <strong className="text-black/85">03/22/2026</strong>
                </DocSection>
                <DocSection title="Scope of Work">
                  Outline the required content, final outputs, and when each
                  item must be posted.
                </DocSection>
                <DocSection title="Usage Rights">
                  <span className="text-black/65">Paid Usage Rights: </span>
                  <strong className="text-black/85">6 months</strong>
                </DocSection>
                <DocSection title="Editing Rights">
                  Company has editing rights to content
                </DocSection>
                <DocSection title="Payment Terms">
                  Total payment: <strong className="text-black/85">$12,000</strong>.
                  Paid in 3 milestones — 40% upfront upon approval, 40% after
                  first content post goes live, 20% after final deliverables
                  are submitted.
                </DocSection>
              </div>

              {/* Document footer */}
              <div className="flex items-end justify-between border-t border-black/[0.06] px-3 py-2">
                <div className="max-w-[70%] text-[8px] leading-relaxed text-black/45">
                  This document outlines the commercial terms of the
                  partnership. All terms are subject to the Standard
                  Partnership Agreement previously agreed upon.
                </div>
                <div className="flex gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-blue-700 ring-1 ring-blue-700">
                    ↓
                  </span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-blue-700 ring-1 ring-blue-700">
                    ✎
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Details rail */}
          <aside className="w-44 border-l border-black/[0.06] p-3">
            <div className="text-[10px] font-semibold text-[#0d2756]">
              Partner Details
            </div>
            <div className="mt-2.5 text-[10px] font-semibold text-black/85">
              Lina Ortega
            </div>
            <div className="mt-2 space-y-1 text-[8px]">
              <PD label="Email" value="lina@brand.com" />
              <PD label="Fiscal Year" value="FY25/26" />
              <PD label="Currency" value="US Dollar (USD)" />
              <PD label="Country" value="Poland" />
              <PD label="Category" value="Personal Care" />
              <PD label="Purchasing Contact" value="m.chan@brand.com" />
              <PD label="Brand Contact" value="l.james@brand.com" />
              <PD label="Brand" value="Sonic Pro" />
              <PD label="Campaign" value="Summer 2026" />
            </div>
          </aside>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-black/[0.06] px-4 py-2">
          <span className="rounded-full bg-white px-3 py-1 text-[9px] font-medium text-blue-700 ring-1 ring-blue-700">
            Back
          </span>
          <div className="flex gap-1.5">
            <span className="rounded-full bg-white px-3 py-1 text-[9px] font-medium text-blue-700 ring-1 ring-blue-700">
              Mark as Manual Outreach
            </span>
            <span className="rounded-full bg-blue-700 px-3 py-1 text-[9px] font-medium text-white">
              Generate Email
            </span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function DocSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[10px] font-semibold text-black/85">{title}</div>
      <div className="mt-0.5 text-[9px] leading-relaxed text-black/65">
        {children}
      </div>
    </div>
  );
}

function PD({ label, value }: { label: string; value: string }) {
  return (
    <div className="leading-snug">
      <span className="text-black/55">{label}: </span>
      <span className="text-black/85">{value}</span>
    </div>
  );
}

/* ============ ORGANIC MARKET VALIDATION (OMV) ============ */
export function OMVMockup() {
  return (
    <Frame
      className="aspect-[16/10] w-full"
      label="Organic Market Validation — content review for 'Sonic Pro Launch · V4' (Pending). Three-column layout: Campaign Information + Content Metadata on the left, video player with critical/warning/passed timeline markers in the centre, and a Detailed Findings panel on the right with five expandable lenses (Brand Safety expanded showing High-severity 'Inappropriate dialogue detected' at 0:12 with Jump-to-moment link, plus Medium-severity 'Music detected'). Bottom action bar offers Reject or Approve."
      domain="omv.app"
    >
      <div className="flex h-[calc(100%-1.75rem)] flex-col bg-[#f7f8fa]">
        {/* Top app bar */}
        <div className="flex items-center justify-between border-b border-black/[0.06] bg-white px-3 py-1.5">
          <span className="font-semibold text-[10px] tracking-wide text-black/85">
            OMV
          </span>
          <div className="flex items-center gap-2 text-[9px]">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full text-black/55 ring-1 ring-inset ring-black/15">
              ?
            </span>
            <span className="rounded bg-black/[0.04] px-1.5 py-0.5 text-black/70">
              Brand Coms ▾
            </span>
          </div>
        </div>

        {/* Page header */}
        <div className="flex items-center gap-2 border-b border-black/[0.04] bg-white px-3 py-1.5">
          <span className="text-[12px] text-[#0d2756]">‹</span>
          <span className="font-semibold text-[11px] text-[#0d2756]">
            Sonic Pro Launch · V4
          </span>
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider text-amber-800 ring-1 ring-amber-200">
            Pending
          </span>
        </div>

        {/* Three columns — narrow video (portrait Reel) leaves more room for findings */}
        <div className="grid flex-1 grid-cols-[150px_240px_1fr] overflow-hidden">
          {/* Left: campaign info + content metadata */}
          <aside className="overflow-hidden border-r border-black/[0.06] bg-white p-2.5">
            <div className="text-[9px] font-semibold text-black/85">
              Campaign Information
            </div>
            <div className="mt-1.5 space-y-1.5">
              <Meta label="Campaign Name" value="Sonic Pro Launch · V4" />
              <div>
                <div className="text-[7px] uppercase tracking-wider text-black/45">
                  Brand
                </div>
                <span className="mt-0.5 inline-block rounded bg-black/[0.05] px-1.5 py-0.5 text-[8px] text-black/70 ring-1 ring-inset ring-black/[0.06]">
                  Brand Name
                </span>
              </div>
              <Meta label="Influencer" value="Lina Ortega" />
              <div>
                <div className="text-[7px] uppercase tracking-wider text-black/45">
                  Influencer Handle
                </div>
                <div className="mt-0.5 flex items-center gap-1 text-[9px] text-black/80">
                  <span className="inline-flex h-3 w-3 items-center justify-center rounded-sm bg-gradient-to-br from-rose-400 via-pink-400 to-violet-500 text-[6px]">
                    📷
                  </span>
                  @linaortega
                </div>
              </div>
            </div>

            <div className="mt-3 text-[9px] font-semibold text-black/85">
              Content Metadata
            </div>
            <div className="mt-1.5 space-y-1.5">
              <div>
                <div className="text-[7px] uppercase tracking-wider text-black/45">
                  Video Caption
                </div>
                <div className="mt-0.5 text-[8px] leading-snug text-black/70">
                  Reviewing the new Sonic Pro Series. How it improved my
                  brushing routine in two weeks.
                </div>
              </div>
              <div>
                <div className="text-[7px] uppercase tracking-wider text-black/45">
                  Hashtag
                </div>
                <div className="mt-0.5 flex flex-wrap gap-0.5">
                  {["#SonicPro", "#FreshSmile", "#partner"].map((h) => (
                    <span
                      key={h}
                      className="rounded bg-black/[0.05] px-1 py-0.5 text-[7px] text-black/70 ring-1 ring-inset ring-black/[0.06]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <Meta label="Claim" value="Visible results in 7 days" />
              <Meta label="Disclaimer" value="Based on clinical study 2025" />
              <div>
                <div className="text-[7px] uppercase tracking-wider text-black/45">
                  Creative Brief
                </div>
                <div className="mt-0.5 flex items-center gap-1 rounded bg-black/[0.04] p-1 ring-1 ring-inset ring-black/[0.06]">
                  <span className="h-3 w-2.5 bg-blue-200" />
                  <span className="text-[8px] text-blue-700 underline">
                    brief.pdf
                  </span>
                  <span className="ml-auto text-[7px] text-black/45">28 MB</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Centre: portrait Reel video + timeline */}
          <div className="flex flex-col overflow-hidden bg-white p-3">
            <div className="relative mx-auto w-full max-w-[210px] flex-1 overflow-hidden rounded-md bg-gradient-to-br from-rose-300 via-amber-200 to-blue-300 ring-1 ring-black/[0.06]">
              {/* Reel-style aspect — 9:16 — fills available height */}
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[14px] text-blue-700 shadow-md">
                  ▶
                </span>
              </span>
              <span className="absolute right-1.5 top-1.5 rounded bg-black/55 px-1 py-0.5 text-[6px] font-semibold uppercase tracking-wider text-white">
                Reel · 9:16
              </span>
            </div>
            <div className="mx-auto mt-2.5 w-full max-w-[210px]">
              <div className="relative h-1 rounded-full bg-blue-100">
                <div className="absolute inset-y-0 left-0 w-[35%] rounded-full bg-blue-700" />
                {[
                  { pos: 18, tone: "passed" as const },
                  { pos: 28, tone: "critical" as const },
                  { pos: 33, tone: "critical" as const },
                  { pos: 39, tone: "passed" as const },
                  { pos: 60, tone: "warning" as const },
                  { pos: 92, tone: "passed" as const },
                ].map((m, i) => (
                  <Marker key={i} pos={m.pos} tone={m.tone} />
                ))}
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[8px] text-black/55">
                <span className="flex items-center gap-1">
                  <span>▶</span>
                  <span className="text-black/40">🔊</span>
                </span>
                <span className="text-[8px] text-black/65">0:08 / 1:24</span>
                <span className="flex items-center gap-1">
                  <span>↻</span>
                  <span>⛶</span>
                </span>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-[8px] text-black/55">
              <span>Legend:</span>
              <LegendDot tone="critical" label="Critical" />
              <LegendDot tone="warning" label="Warning" />
              <LegendDot tone="passed" label="Passed" />
            </div>
          </div>

          {/* Right: detailed findings — 2-column grid (Brand Safety spans both cols) */}
          <aside className="overflow-hidden border-l border-black/[0.06] bg-white p-2.5">
            <div className="text-[9px] font-semibold text-black/85">
              Detailed Findings
            </div>
            <div className="mt-1.5 grid grid-cols-2 gap-1.5">
              {/* Brand Safety - expanded, spans both columns */}
              <div className="col-span-2 rounded bg-white ring-1 ring-black/[0.08]">
                <div className="flex items-center justify-between px-2 py-1.5">
                  <span className="flex items-center gap-1.5 text-[9px] font-semibold text-blue-700">
                    <span className="text-[8px]">▾</span>
                    Brand Safety
                    <CountBadge count={2} />
                  </span>
                  <span className="flex items-center gap-1 text-[8px] text-black/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    1
                    <span className="ml-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    1
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 border-t border-black/[0.04] p-2">
                  <FindingCard
                    severity="High"
                    title="Inappropriate dialogue detected"
                    timestamp="0:12"
                    body="Audio analysis identified language that violates brand Global Safety Standards (Section 4.2)."
                    showJumpLink
                  />
                  <FindingCard
                    severity="Medium"
                    title="Music detected"
                    body="Background music was detected. Please verify proper usage rights and licensing for this audio."
                  />
                </div>
              </div>

              {/* Other lenses - collapsed, 2 per row */}
              {[
                {
                  title: "Caption & Accessibility",
                  count: 3,
                  rose: 1,
                  amber: 1,
                  emerald: 1,
                },
                { title: "Brand Presence", count: 2 },
                { title: "Product Claims", count: 2 },
                {
                  title: "Partnership Disclosure",
                  count: 1,
                  emerald: 1,
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="flex items-center justify-between rounded bg-white px-2 py-1.5 ring-1 ring-black/[0.08]"
                >
                  <span className="flex items-center gap-1.5 text-[9px] font-semibold text-blue-700">
                    <span className="text-[8px]">▸</span>
                    {s.title}
                    <CountBadge count={s.count} />
                  </span>
                  {(s.rose || s.amber || s.emerald) && (
                    <span className="flex items-center gap-1 text-[8px] text-black/65">
                      {s.rose && (
                        <>
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                          {s.rose}
                        </>
                      )}
                      {s.amber && (
                        <>
                          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                          {s.amber}
                        </>
                      )}
                      {s.emerald && (
                        <>
                          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          {s.emerald}
                        </>
                      )}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Bottom action bar */}
        <div className="flex items-center justify-end gap-1.5 border-t border-black/[0.06] bg-white px-3 py-2">
          <span className="rounded-full bg-white px-3 py-1 text-[9px] font-medium text-blue-700 ring-1 ring-blue-700">
            Reject
          </span>
          <span className="rounded-full bg-blue-700 px-3 py-1 text-[9px] font-medium text-white">
            Approve
          </span>
        </div>
      </div>
    </Frame>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[7px] uppercase tracking-wider text-black/45">
        {label}
      </div>
      <div className="text-[9px] text-black/80">{value}</div>
    </div>
  );
}

function Marker({
  pos,
  tone,
}: {
  pos: number;
  tone: "critical" | "warning" | "passed";
}) {
  const colors = {
    critical: "bg-rose-500",
    warning: "bg-amber-500",
    passed: "bg-emerald-500",
  };
  return (
    <span
      aria-hidden
      className={cn(
        "absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white",
        colors[tone],
      )}
      style={{ left: `${pos}%` }}
    />
  );
}

function LegendDot({
  tone,
  label,
}: {
  tone: "critical" | "warning" | "passed";
  label: string;
}) {
  const colors = {
    critical: "bg-rose-500",
    warning: "bg-amber-500",
    passed: "bg-emerald-500",
  };
  return (
    <span className="flex items-center gap-1">
      <span className={cn("h-1.5 w-1.5 rounded-full", colors[tone])} />
      {label}
    </span>
  );
}

function CountBadge({ count }: { count: number }) {
  return (
    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-700 text-[7px] font-bold text-white">
      {count}
    </span>
  );
}

function FindingCard({
  severity,
  title,
  timestamp,
  body,
  showJumpLink,
}: {
  severity: "High" | "Medium" | "Low";
  title: string;
  timestamp?: string;
  body: string;
  showJumpLink?: boolean;
}) {
  const sevStyles = {
    High: "bg-rose-50 text-rose-700 ring-rose-200",
    Medium: "bg-amber-50 text-amber-700 ring-amber-200",
    Low: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  } as const;
  return (
    <div className="rounded bg-white p-2 ring-1 ring-black/[0.06]">
      <span
        className={cn(
          "inline-block rounded px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider ring-1 ring-inset",
          sevStyles[severity],
        )}
      >
        {severity}
      </span>
      <div className="mt-1 flex items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[9px] font-semibold text-black/85">
            {title}
          </span>
          {timestamp && (
            <span className="rounded bg-black/[0.05] px-1 py-px text-[7px] text-black/60 ring-1 ring-inset ring-black/[0.06]">
              {timestamp}
            </span>
          )}
        </div>
        {showJumpLink && (
          <span className="shrink-0 text-[8px] text-blue-700 underline">
            Jump to moment
          </span>
        )}
      </div>
      <div className="mt-1 text-[8px] leading-snug text-black/65">{body}</div>
    </div>
  );
}
