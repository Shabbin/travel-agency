const stats = [
  { value: "200+", label: "Customer & partners" },
  { value: "500+", label: "Place in the world" },
  { value: "1k+", label: "Success journey" },
];

export default function About() {
  return (
    <section className="section-space">
      <div className="container-custom grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[28px] shadow-md">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Scenic travel view"
            className="h-[260px] w-full object-cover sm:h-[360px]"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
            About us
          </p>

          <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
            The Best And Most trusted service
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
            We are one of the most trusted holiday service providers, offering
            curated destinations, reliable planning, and memorable vacation
            experiences with customer satisfaction at the center.
          </p>

          <a href="#" className="btn-primary mt-6">
            Learn More
          </a>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--border)] bg-white p-4 text-center"
              >
                <p className="text-2xl font-extrabold text-[var(--primary)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}