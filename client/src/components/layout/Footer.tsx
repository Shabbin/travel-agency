export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="container-custom flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-extrabold">
            <span className="text-[var(--primary)]">Travel</span>Go
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Explore the world with confidence.
          </p>
        </div>

        <p className="text-sm text-[var(--muted)]">
          © 2026 TravelGo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}