"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const filters = [
  "Special Deals",
  "Populer",
  "Recommendation",
  "Best Price",
] as const;

const destinations = [
  {
    id: 1,
    name: "Hurawalhi Island",
    country: "Maldives",
    price: "620$",
    duration: "7 Days Tour on 2 person",
    rating: 4.7,
    image: "/card-images/image1.png",
    category: "Special Deals",
  },
  {
    id: 2,
    name: "Bali Province",
    country: "Indonesia",
    price: "780$",
    duration: "4 days 2 person",
    rating: 4.7,
    image: "/card-images/image2.png",
    category: "Populer",
  },
  {
    id: 3,
    name: "Barcelona city beach",
    country: "Spain",
    price: "850$",
    duration: "4 days 4 person",
    rating: 4.7,
    image: "/card-images/image3.png",
    category: "Recommendation",
  },
  {
    id: 4,
    name: "Hurawalhi Island",
    country: "Maldives",
    price: "620$",
    duration: "7 Days Tour on 2 person",
    rating: 4.7,
    image: "/card-images/image4.png",
    category: "Best Price",
  },
  {
    id: 5,
    name: "St. John's",
    country: "Canada",
    price: "620$",
    duration: "7 Days Tour on 2 person",
    rating: 4.7,
    image: "/card-images/image5.png",
    category: "Special Deals",
  },
  {
    id: 6,
    name: "Machu Picchu",
    country: "Maldives",
    price: "820$",
    duration: "7 Days Tour on 2 person",
    rating: 4.7,
    image: "/card-images/image6.png",
    category: "Populer",
  },
  {
    id: 7,
    name: "Bora Bora Island",
    country: "French",
    price: "550$",
    duration: "7 Days Tour on 2 person",
    rating: 4.7,
    image: "/card-images/image7.png",
    category: "Recommendation",
  },
  {
    id: 8,
    name: "Sydney Opera House",
    country: "Australia",
    price: "310$",
    duration: "7 Days Tour on 2 person",
    rating: 4.7,
    image: "/card-images/image8.png",
    category: "Best Price",
  },
];

export default function Destinations() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("Special Deals");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const visibleOffset = Math.max(0, window.innerHeight - rect.top);
      setScrollY(visibleOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const progress = clamp(scrollY / 520, 0, 1);

  const headingTranslateY = 36 - progress * 36;
  const cardsTranslateY = 56 - progress * 56;
  const headingOpacity = 0.55 + progress * 0.45;
  const cardsOpacity = 0.35 + progress * 0.65;

  const visibleDestinations = useMemo(() => {
    if (showAll) return destinations;
    return destinations.filter((item) => item.category === activeFilter);
  }, [activeFilter, showAll]);

  return (
    <section
      ref={sectionRef}
      className="section-space relative overflow-hidden pt-8 md:pt-10"
    >
      <div className="mx-auto w-full max-w-[980px] px-4">
        <div
          className="mb-8 text-center transition-all duration-700 ease-out md:mb-10"
          style={{
            transform: `translateY(${headingTranslateY}px)`,
            opacity: headingOpacity,
          }}
        >
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.03em] text-[var(--text-primary)] sm:text-[34px] lg:text-[40px]">
            The <span className="text-[var(--primary)]">best place</span> for
            vacation
          </h2>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {filters.map((filter) => {
              const isActive = !showAll && activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter);
                    setShowAll(false);
                  }}
                  className={`group relative pb-1.5 text-[11px] font-medium transition ${
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {filter}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#FFB60A] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="transition-all duration-700 ease-out"
          style={{
            transform: `translateY(${cardsTranslateY}px)`,
            opacity: cardsOpacity,
          }}
        >
          <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {visibleDestinations.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-[6px] border border-[#f0f0f0] bg-white shadow-[0_8px_22px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[118px] w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                </div>

                <div className="px-3 pb-3 pt-2.5">
                  <div className="mb-1.5 flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1 text-[var(--text-muted)]">
                      <span className="text-[var(--primary)]">📍</span>
                      <span>{item.country}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[var(--text-muted)]">
                      <span className="text-[#FFB60A]">★</span>
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-[12px] font-semibold text-[var(--text-primary)]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[10px] text-[var(--text-muted)]">
                    {item.duration}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[20px] font-bold leading-none text-[var(--primary)]">
                      {item.price}
                    </span>

                    <button
                      type="button"
                      className="text-[10px] font-medium text-[var(--text-muted)] transition hover:text-[var(--primary)]"
                    >
                      View More &gt;
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex min-w-[88px] items-center justify-center rounded-[4px] border border-[var(--primary)] px-5 py-2 text-[11px] font-medium text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white"
            >
              {showAll ? "Show Filtered" : "View All"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}