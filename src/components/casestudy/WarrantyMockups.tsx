import { useState } from "react";
import { cn } from "@/lib/cn";

function Frame({
  className,
  children,
  label,
}: {
  className?: string;
  children: React.ReactNode;
  label?: string;
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
          warranty.app
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

/* ============ TICKET CREATION (Service Center Agent) ============ */
export function TicketCreationMockup() {
  return (
    <Frame
      className="aspect-[16/10] w-full"
      label="Service Center Agent filling a warranty ticket — non-sequential accordion sections (Consumer Details expanded, Device / Repair / Materials collapsed) the agent can complete in any order, with a primary tab nav at the top, a registered-user lookup, and Save as Draft / Send for Approval actions in the footer"
    >
      <div className="flex h-[calc(100%-1.75rem)] flex-col bg-[#f5f7fb]">
        {/* Module tab nav */}
        <div className="flex items-center gap-4 border-b border-black/[0.06] bg-white px-4 pt-2">
          <span className="font-semibold text-[12px] text-[#0d2756]">
            Warranty Management
          </span>
          <span className="ml-2 h-4 w-px bg-black/10" />
          {[
            "New Ticket",
            "Ticket List",
            "Ticket Upload",
            "Proforma Invoices",
            "Sample Collection",
            "AAR Overview",
          ].map((tab, i) => (
            <span
              key={tab}
              className={cn(
                "py-2 text-[10px]",
                i === 0
                  ? "border-b-2 border-[#0d2756] font-semibold text-[#0d2756]"
                  : "border-b-2 border-transparent text-black/55",
              )}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Header row — repair refs + meta */}
        <div className="border-b border-black/[0.04] bg-white px-4 pt-3 pb-2">
          <div className="flex items-end justify-between gap-3">
            <div className="flex items-end gap-2">
              <FormInput label="Repair Ticket No." value="99087" />
              <FormInput label="3rd Party Reference No." />
              <FormInput label="Reference" />
            </div>
            <div className="flex items-center gap-2 text-[8px] text-black/55">
              <span>
                Sales Org: <span className="text-black/80">DE40</span>
              </span>
              <span className="text-black/20">|</span>
              <span>
                Company: <span className="text-black/80">Service Centre</span>
              </span>
              <span className="text-black/20">|</span>
              <span>
                Customer No.:{" "}
                <span className="text-black/80">2001521477</span>
              </span>
            </div>
          </div>
          <span className="mt-2 inline-block rounded bg-blue-50 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-blue-100">
            New
          </span>
        </div>

        {/* Sub-tabs + search */}
        <div className="border-b border-black/[0.04] bg-white px-4 py-2">
          <div className="mb-1.5 flex gap-1">
            <span className="rounded bg-blue-50 px-2 py-0.5 text-[9px] font-medium text-blue-800 ring-1 ring-blue-100">
              End Consumer
            </span>
            <span className="rounded px-2 py-0.5 text-[9px] text-blue-700">
              Retailer
            </span>
          </div>
          <div className="text-[9px] text-black/65">
            Check if the user registered?
          </div>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="flex-1 rounded bg-white px-2 py-1 text-[9px] text-black/40 ring-1 ring-inset ring-black/[0.1]">
              Email
            </span>
            <span className="flex-1 rounded bg-white px-2 py-1 text-[9px] text-black/40 ring-1 ring-inset ring-black/[0.1]">
              Consumer ID
            </span>
            <span className="flex-1 rounded bg-white px-2 py-1 text-[9px] text-black/40 ring-1 ring-inset ring-black/[0.1]">
              Type No. ▾
            </span>
            <span className="rounded-full bg-blue-600 px-3 py-1 text-[9px] font-medium text-white">
              Search
            </span>
          </div>
        </div>

        {/* Expand All */}
        <div className="bg-[#f5f7fb] px-4 pt-2">
          <div className="flex justify-end text-[9px] text-blue-700">
            + Expand All
          </div>
        </div>

        {/* Accordions */}
        <div className="flex-1 space-y-1.5 overflow-hidden bg-[#f5f7fb] px-4 pb-2 pt-1.5">
          {/* Consumer Details — expanded */}
          <div className="rounded-md bg-white ring-1 ring-black/[0.06]">
            <div className="flex items-center justify-between border-b border-black/[0.04] px-3 py-1.5">
              <span className="text-[10px] font-semibold text-[#0d2756]">
                Consumer Details
              </span>
              <span className="text-[10px] text-[#0d2756]">⌃</span>
            </div>
            <div className="space-y-2 p-3">
              <div className="text-[8px] font-semibold text-black/70">
                Personal Information
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <SmallField label="*First Name" />
                <SmallField label="*Last Name" />
                <SmallField label="Mobile" />
                <SmallField label="Email" />
              </div>
              <div className="text-[8px] font-semibold text-black/70 pt-1">
                Address Details
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                <SmallField label="*Street" />
                <SmallField label="*City" />
                <SmallField label="*Post Code" />
                <SmallField label="Country" value="Germany" dropdown />
              </div>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <SmallField label="Consumer Complaint" textarea />
                <SmallField label="Additional Comments" textarea />
              </div>
              <div className="flex items-center gap-3 pt-1">
                <Checkbox label="Opt-IN for Registration" />
                <Checkbox label="Allow Survey" />
              </div>
            </div>
          </div>

          {/* Collapsed accordions — fillable in any order */}
          {["Device Details", "Repair Details", "Materials"].map((title) => (
            <div
              key={title}
              className="flex items-center justify-between rounded-md bg-white px-3 py-2 ring-1 ring-black/[0.06]"
            >
              <span className="text-[10px] font-semibold text-[#0d2756]">
                {title}
              </span>
              <span className="text-[10px] text-black/40">⌄</span>
            </div>
          ))}
        </div>

        {/* Bottom action bar */}
        <div className="flex items-center justify-between gap-2 border-t border-black/[0.06] bg-white px-4 py-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[8px] text-black/55">
              To get details, Select the Type Number
            </span>
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[8px] font-medium text-blue-700 ring-1 ring-blue-100">
              Type Information
            </span>
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[8px] font-medium text-blue-700 ring-1 ring-blue-100">
              Complaints w/o Defects
            </span>
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[8px] font-medium text-blue-700 ring-1 ring-blue-100">
              Create Consumer Document
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded-full bg-white px-3 py-1 text-[9px] font-medium text-blue-700 ring-1 ring-blue-700">
              Save as Draft
            </span>
            <span className="rounded-full bg-blue-600 px-3 py-1 text-[9px] font-medium text-white">
              Send for Approval
            </span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function FormInput({ label, value }: { label: string; value?: string }) {
  return (
    <div className="min-w-[110px] rounded border border-black/[0.12] bg-white px-2 py-1">
      <div className="text-[7px] uppercase tracking-wider text-black/45">
        {label}
      </div>
      <div className="text-[10px] text-black/80">{value || " "}</div>
    </div>
  );
}

function SmallField({
  label,
  value,
  dropdown,
  textarea,
}: {
  label: string;
  value?: string;
  dropdown?: boolean;
  textarea?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded border border-black/[0.12] bg-white px-2 py-1",
        textarea && "row-span-1 min-h-[44px]",
      )}
    >
      <div className="flex items-center justify-between text-[7px] uppercase tracking-wider text-black/45">
        <span>{label}</span>
        {dropdown && <span className="text-black/35">▾</span>}
      </div>
      <div
        className={cn(
          "text-[10px]",
          value ? "text-black/80" : "text-black/30",
        )}
      >
        {value || " "}
      </div>
    </div>
  );
}

function Checkbox({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[9px] text-black/65">
      <span className="h-2.5 w-2.5 rounded-sm border border-black/30" />
      {label}
    </div>
  );
}

/* ============ APPROVAL QUEUE — Proforma Invoicing list (Service Manager) ============ */
export function ApprovalQueueMockup() {
  const [popupOpen, setPopupOpen] = useState(false);
  const rows = [
    { proforma: "119093", tickets: 26, customer: "2001354144", center: "Service Centre · Berlin-N", from: "01/8/2024", to: "31/8/2024", period: "8/2024", status: "UNSETTLED" as const, selected: true },
    { proforma: "119094", tickets: 3, customer: "2001354957", center: "Service Centre · Hamburg-C", from: "01/8/2024", to: "31/8/2024", period: "8/2024", status: "UNSETTLED" as const, selected: true },
    { proforma: "119095", tickets: 1, customer: "2003225542", center: "Service Centre · Munich-E", from: "01/8/2024", to: "31/8/2024", period: "8/2024", status: "PENDING" as const, rejectable: true },
    { proforma: "119081", tickets: 1, customer: "2003225534", center: "Service Centre · Munich-W", from: "01/8/2024", to: "31/8/2024", period: "8/2024", status: "PENDING" as const, rejectable: true },
    { proforma: "119082", tickets: 16, customer: "2003225534", center: "Service Centre · Stuttgart-E", from: "01/7/2024", to: "31/7/2024", period: "7/2024", status: "INVOICED" as const },
    { proforma: "119083", tickets: 1, customer: "2003225534", center: "Service Centre · Köln-S", from: "01/7/2024", to: "31/7/2024", period: "7/2024", status: "INVOICED" as const },
  ];

  return (
    <Frame
      className="aspect-[16/10] w-full"
      label="Service Manager's Proforma Invoicing queue with two sub-tabs (1st Level Approval Items active, 2nd Level Approval Items) showing a table of proforma invoices with status pills, document links, multi-select, and an Approve & Assign popup overlay sending unsettled tickets to a chosen 2nd-level approver"
    >
      <div className="flex h-[calc(100%-1.75rem)] flex-col bg-[#f5f7fb]">
        {/* Module tab nav */}
        <div className="flex items-center gap-4 border-b border-black/[0.06] bg-white px-4 pt-2">
          <span className="font-semibold text-[12px] text-[#0d2756]">
            Warranty Management
          </span>
          <span className="ml-2 h-4 w-px bg-black/10" />
          {[
            "Unfaulty",
            "Review",
            "Proforma Invoicing",
            "Faulty",
            "Rejected",
            "Blocked",
            "Archive",
            "Search All",
          ].map((tab) => (
            <span
              key={tab}
              className={cn(
                "py-2 text-[10px]",
                tab === "Proforma Invoicing"
                  ? "border-b-2 border-[#0d2756] font-semibold text-[#0d2756]"
                  : "border-b-2 border-transparent text-black/55",
              )}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* Sales Org filter */}
        <div className="border-b border-black/[0.04] bg-white px-4 py-2">
          <div className="inline-flex min-w-[110px] items-center justify-between rounded border border-black/[0.12] bg-white px-2 py-1">
            <div>
              <div className="text-[7px] uppercase tracking-wider text-black/45">
                Sales Org
              </div>
              <div className="text-[10px] text-black/80">All</div>
            </div>
            <span className="text-[8px] text-black/40">▾</span>
          </div>
        </div>

        {/* Title row */}
        <div className="bg-white px-4 pt-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold text-[12px] text-[#0d2756]">
                Proforma Invoices
              </div>
              <div className="text-[9px] text-black/50">
                Tickets in the process for Proforma Invoice
              </div>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-[9px] font-medium text-blue-700 ring-1 ring-blue-700">
              Invoice History
            </span>
          </div>

          {/* Sub-tabs */}
          <div className="mt-2 flex items-center gap-4 border-b border-black/[0.06]">
            <span className="border-b-2 border-[#0d2756] py-1.5 text-[10px] font-semibold text-[#0d2756]">
              1st Level Approval Items
            </span>
            <span className="border-b-2 border-transparent py-1.5 text-[10px] text-black/55">
              2nd Level Approval Items
            </span>
          </div>
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between gap-2 bg-white px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex w-44 items-center gap-1 rounded-full bg-white px-2 py-1 ring-1 ring-inset ring-black/[0.12]">
              <span className="text-[9px] text-black/40">⌕</span>
              <span className="flex-1 text-[9px] text-black/40">
                Search by…
              </span>
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-blue-700 text-[9px] text-blue-700">
              ▽
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-blue-700 text-[9px] text-blue-700">
              ↓
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="cursor-pointer rounded-full bg-white px-3 py-1 text-[9px] font-medium text-blue-700 ring-1 ring-blue-700 transition-colors hover:bg-blue-50"
            >
              Reject Invoice
            </button>
            <button
              type="button"
              onClick={() => setPopupOpen(true)}
              className="cursor-pointer rounded-full bg-blue-600 px-3 py-1 text-[9px] font-medium text-white transition-colors hover:bg-blue-700"
            >
              Approve &amp; Assign
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="relative flex-1 overflow-hidden bg-white px-4 pb-2">
          <div className="overflow-hidden rounded-md ring-1 ring-black/[0.06]">
            <div className="grid grid-cols-[18px_60px_70px_60px_90px_1fr_70px_70px_60px_120px_80px_18px] items-center gap-1.5 border-b border-black/[0.06] bg-blue-50/60 px-2 py-1.5 text-[7px] uppercase tracking-wider text-black/55">
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-sm border border-black/30" />
              <span>Sales Org</span>
              <span>Proforma No.</span>
              <span>Tickets</span>
              <span>Customer No.</span>
              <span>Name</span>
              <span>From</span>
              <span>To</span>
              <span>Period</span>
              <span>Documents</span>
              <span>Status</span>
              <span></span>
            </div>
            {rows.map((row) => (
              <div
                key={row.proforma}
                className={cn(
                  "grid grid-cols-[18px_60px_70px_60px_90px_1fr_70px_70px_60px_120px_80px_18px] items-center gap-1.5 border-b border-black/[0.04] px-2 py-1.5 text-[9px] last:border-0",
                  row.selected && "bg-blue-50/30",
                )}
              >
                <span
                  className={cn(
                    "flex h-2.5 w-2.5 items-center justify-center rounded-sm border",
                    row.selected
                      ? "border-blue-600 bg-blue-600 text-[7px] text-white"
                      : "border-black/30",
                  )}
                >
                  {row.selected && "✓"}
                </span>
                <span className="text-black/65">DE40</span>
                <span className="text-blue-700 underline">{row.proforma}</span>
                <span className="text-blue-700 underline">{row.tickets}</span>
                <span className="text-black/65">{row.customer}</span>
                <span className="truncate text-black/75">{row.center}</span>
                <span className="text-black/65">{row.from}</span>
                <span className="text-black/65">{row.to}</span>
                <span className="text-black/65">{row.period}</span>
                <span className="space-x-1 text-[8px] text-blue-700">
                  <span className="underline">App.</span>
                  <span className="underline">Proforma</span>
                  <span className="underline">PRF</span>
                  <span className="underline">CSV</span>
                </span>
                <StatusPill status={row.status} />
                <span>
                  {row.rejectable && (
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full text-[9px] text-rose-600 ring-1 ring-rose-300">
                      ×
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Approve & Assign popup — only visible when triggered */}
          {popupOpen && <ApproveAssignPopup onClose={() => setPopupOpen(false)} />}
        </div>
      </div>
    </Frame>
  );
}

function StatusPill({
  status,
}: {
  status: "UNSETTLED" | "PENDING" | "INVOICED";
}) {
  const cfg = {
    UNSETTLED: "bg-black/[0.05] text-black/65 ring-black/10",
    PENDING: "bg-amber-50 text-amber-800 ring-amber-200",
    INVOICED: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider ring-1 ring-inset",
        cfg[status],
      )}
    >
      {status}
    </span>
  );
}

function ApproveAssignPopup({ onClose }: { onClose: () => void }) {
  return (
    <>
      {/* Subtle backdrop dim within the mockup frame, also acts as click-to-close */}
      <button
        type="button"
        aria-label="Close popup"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer bg-ink-900/15"
      />
      <div
        role="dialog"
        aria-label="Approve and assign to 2nd level approval"
        className="absolute right-6 top-6 w-[320px] rounded-lg bg-white p-4 shadow-[0_30px_60px_-15px_rgba(13,39,86,0.35)] ring-1 ring-black/[0.08]"
      >
        <div className="font-semibold text-[12px] leading-tight text-[#0d2756]">
          Approve &amp; assign to 2nd level Approval
        </div>
        <div className="mt-1 text-[9px] leading-relaxed text-black/65">
          Select a second-level approver to continue with the approval
          process.
        </div>
        <div className="mt-3 rounded border border-black/[0.15] bg-white px-2 py-1.5">
          <div className="flex items-center justify-between text-[7px] uppercase tracking-wider">
            <span className="text-rose-600">*Approver Name</span>
            <span className="text-black/40">▾</span>
          </div>
          <div className="text-[10px] text-black/30">Choose approver</div>
        </div>
        <div className="mt-2 text-[9px] leading-relaxed text-black/55">
          Only &ldquo;Unsettled&rdquo; tickets is selected for second-level
          approval if other statuses are selected.
        </div>
        <div className="mt-3 flex items-center justify-end gap-1.5">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full bg-white px-3 py-1 text-[9px] font-medium text-blue-700 ring-1 ring-blue-700 transition-colors hover:bg-blue-50"
          >
            Close
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full bg-blue-600 px-3 py-1 text-[9px] font-medium text-white transition-colors hover:bg-blue-700"
          >
            Send for Approval
          </button>
        </div>
      </div>
    </>
  );
}

/* ============ AUTO-APPROVAL RULE BUILDER (Service Manager · front-end authoring) ============ */
export function RuleBuilderMockup() {
  return (
    <Frame
      className="aspect-[16/10] w-full"
      label="Create Auto Approval Rule form — Service Manager authoring a Post Code validation rule on the front end (was previously backend-only). Includes Active toggle, applicability scope (Global / Local), Review flag, scoped Sales Org / Country / Service Centre filters, Rule Type set to Value Comparison, and a REGEX rule condition operating on the Warranty entity's Post Code attribute."
    >
      <div className="flex h-[calc(100%-1.75rem)] flex-col bg-[#f5f7fb] overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 border-b border-black/[0.06] bg-white px-4 py-2.5">
          <span className="text-[12px] text-[#0d2756]">‹</span>
          <span className="font-semibold text-[12px] text-[#0d2756]">
            Create Auto Approval Rule
          </span>
        </div>

        <div className="flex-1 overflow-hidden p-3">
          {/* Rule Details panel */}
          <div className="rounded-md bg-white p-3 ring-1 ring-black/[0.06]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-black/85">
                Rule Details
              </span>
              <ActiveToggle />
            </div>
            <div className="mt-2 grid grid-cols-[80px_1fr_1.6fr] gap-2">
              <RBField label="Check ID" value="12" required />
              <RBField label="Rule Name" value="Post Code" required />
              <RBField
                label="Short Description (Error Message)"
                value="Post code wrong"
                required
              />
            </div>
            <div className="mt-1.5">
              <RBField
                label="Long Description"
                value="Postal codes must be entered in the country-specific format. Foreign postal codes are checked centrally before release."
                required
                multiline
              />
            </div>
            <div className="mt-1.5">
              <RBField label="Internal Note" required multiline />
            </div>
          </div>

          {/* Applicable + Review */}
          <div className="mt-2 rounded-md bg-blue-50/50 p-3 ring-1 ring-blue-100/70">
            <div className="flex items-center gap-8">
              <RadioRow
                label="Applicable"
                options={["Global", "Local"]}
                activeIndex={1}
              />
              <RadioRow
                label="Review"
                options={["No", "Yes"]}
                activeIndex={0}
              />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <RBField
                label="Sales Org"
                value="DE40"
                required
                dropdown
              />
              <RBField label="Country" dropdown />
              <RBField label="Service center" dropdown />
            </div>
          </div>

          {/* Rule Type */}
          <div className="mt-2 grid grid-cols-3 gap-2 rounded-md bg-white p-3 ring-1 ring-black/[0.06]">
            <RBField
              label="Rule Type"
              value="Value Comparison"
              required
              dropdown
            />
          </div>

          {/* Rule Condition */}
          <div className="mt-2 rounded-md bg-[#f5f7fb] p-3 ring-1 ring-black/[0.06]">
            <div className="text-[10px] font-semibold text-black/85">
              Rule Condition
            </div>
            <div className="mt-1.5 rounded bg-blue-50/40 p-2 ring-1 ring-blue-100/60">
              <div className="grid grid-cols-[1fr_1fr_1fr_18px] items-end gap-2">
                <RBField
                  label="Entity"
                  value="Warranty"
                  required
                  dropdown
                />
                <RBField
                  label="Attribute"
                  value="Post Code"
                  required
                  dropdown
                />
                <RBField
                  label="Operators"
                  value="REGEX"
                  required
                  dropdown
                />
                <span
                  aria-hidden
                  className="mb-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-black/55 ring-1 ring-inset ring-black/15"
                >
                  ⌫
                </span>
              </div>
              <div className="mt-1.5">
                <RBField
                  label="Enter Value"
                  value="^(([A]{0,1}[01-9]{423})|(([A-]{2}[0-129]{4}))|([0-9]{5}))$"
                  required
                  mono
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 border-t border-black/[0.06] bg-white px-4 py-2">
          <button
            type="button"
            className="cursor-pointer rounded-full bg-white px-3 py-1 text-[9px] font-medium text-blue-700 ring-1 ring-blue-700 transition-colors hover:bg-blue-50"
          >
            Cancel
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full bg-blue-600 px-3 py-1 text-[9px] font-medium text-white transition-colors hover:bg-blue-700"
          >
            Save Rule
          </button>
        </div>
      </div>
    </Frame>
  );
}

function ActiveToggle() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="flex h-3.5 w-7 items-center rounded-full bg-blue-600 p-0.5">
        <span className="ml-auto h-2.5 w-2.5 rounded-full bg-white shadow" />
      </span>
      <span className="text-[9px] text-black/65">Active</span>
    </div>
  );
}

function RBField({
  label,
  value,
  required,
  dropdown,
  multiline,
  mono,
}: {
  label: string;
  value?: string;
  required?: boolean;
  dropdown?: boolean;
  multiline?: boolean;
  mono?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded border border-black/[0.15] bg-white px-2 py-1",
        multiline && "min-h-[40px]",
      )}
    >
      <div className="flex items-center justify-between text-[7px] uppercase tracking-wider">
        <span className={cn(required ? "text-rose-600" : "text-black/45")}>
          {required && "*"}
          {!required ? label : <span className="text-black/45">{label}</span>}
        </span>
        {dropdown && <span className="text-black/35">▾</span>}
      </div>
      <div
        className={cn(
          mono ? "font-mono text-[9px]" : "text-[10px]",
          value ? "text-black/85" : "text-black/30",
          multiline ? "leading-snug" : "truncate",
        )}
      >
        {value || " "}
      </div>
    </div>
  );
}

function RadioRow({
  label,
  options,
  activeIndex,
}: {
  label: string;
  options: string[];
  activeIndex: number;
}) {
  return (
    <div>
      <div className="text-[10px] font-semibold text-black/85">{label}</div>
      <div className="mt-0.5 flex items-center gap-3">
        {options.map((opt, i) => (
          <span
            key={opt}
            className="flex items-center gap-1.5 text-[10px] text-black/70"
          >
            <span
              className={cn(
                "flex h-3 w-3 items-center justify-center rounded-full border",
                i === activeIndex
                  ? "border-blue-600"
                  : "border-black/30",
              )}
            >
              {i === activeIndex && (
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              )}
            </span>
            {opt}
          </span>
        ))}
      </div>
    </div>
  );
}
