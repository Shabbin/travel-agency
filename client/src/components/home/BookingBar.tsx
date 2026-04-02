import { Search } from "lucide-react";

const fields = [
  { label: "From", value: "Bali, Indonesia" },
  { label: "To", value: "Bali, Indonesia" },
  { label: "Dates", value: "Select a date range" },
  { label: "Guest", value: "Number of your guest" },
];

export default function BookingBar() {
  return (
    <div className="rounded-[24px] bg-white p-4 shadow-xl ring-1 ring-black/5">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {fields.map((field) => (
          <div
            key={field.label}
            className="rounded-2xl border border-[var(--border)] px-4 py-3"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
              {field.label}
            </p>
            <p className="mt-1 text-sm text-gray-700">{field.value}</p>
          </div>
        ))}

        <button className="flex items-center justify-center rounded-2xl bg-[var(--primary)] text-white transition hover:bg-[var(--primary-dark)]">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
}