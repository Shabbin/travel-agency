"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "200+", label: "Customer\n& partners" },
  { value: "500+", label: "Place in\nthe world" },
  { value: "1k+", label: "Success\nJourney" },
];

export default function About() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;

      const rect = aboutRef.current.getBoundingClientRect();
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

  const progress = clamp(scrollY / 500, 0, 1);

  const imageTranslateY = 28 - progress * 28;
  const contentTranslateY = 52 - progress * 52;
  const statsTranslateY = 68 - progress * 68;

  const imageOpacity = 0.72 + progress * 0.28;
  const contentOpacity = 0.78 + progress * 0.22;
  const statsOpacity = 0.55 + progress * 0.45;

  return (
    <section
      ref={aboutRef}
      className="section-space relative overflow-hidden pt-14 md:pt-16"
    >
      <div className="pointer-events-none absolute right-[-140px] top-[40px] hidden h-[520px] w-[520px] rounded-full bg-[#eaf3ff] blur-[90px] lg:block" />
      <div className="pointer-events-none absolute right-[40px] top-[150px] hidden h-[260px] w-[260px] rounded-full bg-[#dbeafe] opacity-70 blur-[70px] lg:block" />

      <div className="mx-auto w-full max-w-[980px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{
              transform: `translateY(${imageTranslateY}px)`,
              opacity: imageOpacity,
            }}
          >
            <img
              src="/valley-way.png"
              alt="Scenic coastal valley"
              className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            />
          </div>

          <div
            className="relative z-10 pb-2 transition-all duration-500 ease-out lg:pt-3"
            style={{
              transform: `translateY(${contentTranslateY}px)`,
              opacity: contentOpacity,
            }}
          >
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              ABOUT US
            </p>

            <h2 className="max-w-[420px] text-[34px] font-bold leading-[1.02] tracking-[-0.03em] text-[var(--text-primary)] sm:text-[42px] lg:text-[48px]">
              The Best And Most
              <br />
              trusted service
            </h2>

            <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-[var(--text-secondary)] sm:text-[15px]">
              We are the largest holiday service provider in the world with
              partners and places spread all over the world by prioritizing
              service and customer satisfaction.
            </p>

            <a href="#" className="btn-primary mt-7">
              Learn More
            </a>

            <div
              className="mt-8 grid max-w-[430px] grid-cols-3 gap-6 transition-all duration-700 ease-out sm:gap-8"
              style={{
                transform: `translateY(${statsTranslateY}px)`,
                opacity: statsOpacity,
              }}
            >
              {stats.map((stat) => (
                <div key={stat.value} className="min-w-0">
                  <p className="text-[26px] font-bold leading-none text-[var(--primary)] sm:text-[30px]">
                    {stat.value}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-[13px] leading-5 text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}