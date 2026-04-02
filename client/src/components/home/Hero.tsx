import BookingBar from "./BookingBar";

export default function Hero() {
  return (
    <section className="section-space pb-8">
      <div className="container-custom">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="pt-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">
              Explore the world
            </p>

            <h1 className="max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              It’s a Big World Out There, Go{" "}
              <span className="text-[var(--primary)]">Explore</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted)]">
              Discover amazing destinations, unforgettable travel experiences,
              and perfectly planned tours tailored for your next adventure.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="btn-primary">
                Discover Now
              </a>
              <a href="#" className="btn-outline">
                Follow Us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Travel destination"
              className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[430px]"
            />
          </div>
        </div>

        <div className="relative z-10 -mt-2 sm:-mt-6 lg:-mt-10">
          <BookingBar />
        </div>
      </div>
    </section>
  );
}