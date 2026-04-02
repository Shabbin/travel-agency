import { Search } from "lucide-react";

const fields = [
  { label: "From", value: "Bali, Indonesia" },
  { label: "To", value: "Bali, Indonesia" },
  { label: "Dates", value: "Select a date range" },
  { label: "Guest", value: "Number of your guest" },
];

export default function BookingBar() {
  return (
    <div className="mx-auto w-full max-w-[1080px] rounded-[18px] bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_88px]">
        {fields.map((field) => (
          <div
            key={field.label}
            className="rounded-xl border border-[#f0e7de] px-5 py-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              {field.label}
            </p>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              {field.value}
            </p>
          </div>
        ))}

        <button className="flex min-h-[64px] items-center justify-center rounded-xl bg-[var(--primary)] text-white transition hover:bg-[var(--primary-dark)]">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
}