"use client";

import { useEffect, useRef, useState } from "react";
import BookingBar from "./BookingBar";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = async () => {
      setIsReady(true);

      try {
        video.currentTime = 0.01;
        video.pause();
      } catch (error) {
        console.error("Video preview setup failed:", error);
      }
    };

    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const offset = Math.max(0, -rect.top);
      setScrollY(offset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePlayVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Video play failed:", error);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const clamp = (value: number, max: number) => Math.min(value, max);

  const leftTextY = clamp(scrollY * 0.34, 120);
  const rightTextY = clamp(scrollY * 0.28, 90);
  const mediaY = clamp(scrollY * 0.14, 50);
  const bookingY = clamp(scrollY * 0.1, 26);
  const planeY = clamp(scrollY * 0.22, 70);
  const vectorY = clamp(scrollY * 0.18, 52);

  const textOpacity = Math.max(1 - scrollY / 700, 0.55);
  const rightOpacity = Math.max(1 - scrollY / 620, 0.45);

  // Slight zoom-in so no edge appears while scrolling
  const mediaScale = Math.max(1.05 - scrollY / 5000, 1);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden pb-16 pt-4 md:pb-20 md:pt-6"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-[980px]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div
              className="relative transition-transform duration-75 ease-out"
              style={{
                transform: `translateY(-${leftTextY}px)`,
                opacity: textOpacity,
              }}
            >
              <h1 className="relative z-10 max-w-[560px] text-[46px] font-bold leading-[1.12] tracking-[-0.03em] text-[var(--text-primary)] sm:text-[58px] lg:text-[66px]">
                It’s a Big World
                <br />
                Out There, <span className="text-[var(--primary)]">Go</span>
                <br />
                <span className="text-[var(--primary)]">Explore</span>
              </h1>

              {/* Plane near heading */}
              <div
                className="pointer-events-none absolute left-[295px] top-[105px] z-0 hidden h-[120px] w-[180px] overflow-visible lg:block transition-transform duration-75 ease-out"
                style={{
                  transform: `translateY(-${planeY}px)`,
                }}
              >
                <img
                  src="/Plane.png"
                  alt="Plane decoration"
                  className="h-full w-full max-w-none object-contain opacity-95 scale-[2] -translate-y-2 translate-x-0"
                />
              </div>
            </div>

            <div
              className="relative lg:justify-self-end lg:pt-6 transition-transform duration-75 ease-out"
              style={{
                transform: `translateY(-${rightTextY}px)`,
                opacity: rightOpacity,
              }}
            >
              <div className="max-w-[320px]">
                <p className="text-[15px] leading-8 text-[var(--text-secondary)]">
                  Time Tracking Software Used By Millions. A Simple Time
                  Tracker And Timesheet App That Lets You Track Work Hours
                  Across Projects......
                </p>

                <a href="#" className="btn-primary mt-8">
                  DISCOVER NOW
                </a>
              </div>

              {/* Vector under Discover Now area */}
              <div
                className="pointer-events-none absolute left-[50px] top-[140px] hidden h-[150px] w-[620px] overflow-visible lg:block transition-transform duration-75 ease-out"
                style={{
                  transform: `translateY(-${vectorY}px)`,
                }}
              >
                <img
                  src="/vector.png"
                  alt="Travel route decoration"
                  className="h-full w-full object-contain opacity-75"
                />
              </div>
            </div>
          </div>

          <div
            className="relative mt-10 transition-transform duration-75 ease-out lg:mt-12"
            style={{
              transform: `translateY(-${mediaY}px) scale(${mediaScale})`,
              transformOrigin: "center top",
            }}
          >
            <div className="overflow-hidden">
              <div className="relative h-[340px] w-full overflow-hidden sm:h-[460px] lg:h-[560px]">
                <video
                  ref={videoRef}
                  src="/travel.mp4"
                  preload="auto"
                  playsInline
                  controls={isPlaying}
                  onPause={handlePause}
                  className="absolute left-1/2 top-1/2 min-h-full min-w-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
                />

                {!isPlaying && isReady && (
                  <button
                    type="button"
                    onClick={handlePlayVideo}
                    className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(250,116,54,0.28)] transition hover:scale-105"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-lg text-white">
                      ▶
                    </span>
                  </button>
                )}
              </div>
            </div>

            <div
              className="relative z-10 -mt-8 transition-transform duration-75 ease-out"
              style={{
                transform: `translateY(-${bookingY}px)`,
              }}
            >
              <div className="mx-auto w-full max-w-[1120px] px-4">
                <BookingBar />
              </div>
            </div>

            <div className="absolute -right-[72px] top-[92px] hidden xl:flex xl:flex-col xl:items-center xl:gap-4">
              <span className="rotate-180 text-[13px] font-medium tracking-[0.35em] text-[var(--primary)] [writing-mode:vertical-rl]">
                FOLLOW US
              </span>
              <div className="h-14 w-px bg-[var(--primary)]" />
              <div className="flex flex-col gap-3 text-[var(--primary)]">
                <span className="text-xs">◎</span>
                <span className="text-xs">◉</span>
                <span className="text-xs">◌</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}