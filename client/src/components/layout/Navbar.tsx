"use client";

import { useEffect, useState } from "react";

const navLinks = [
  "HOME",
  "ABOUT US",
  "TOUR PACKAGES",
  "OUR SERVICES",
  "GALLERY",
  "CONTACT",
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "h-[72px]" : "h-[96px]"
        }`}
      />

      <header className="fixed left-0 top-0 z-50 w-full bg-white transition-all duration-300">
        <div className="w-full">
          <div
            className={`mx-auto flex w-full max-w-[980px] items-center justify-between px-4 transition-all duration-300 ${
              isScrolled ? "h-[72px]" : "h-[96px]"
            }`}
          >
            <a
              href="#"
              className={`flex items-center gap-1 font-extrabold leading-none transition-all duration-300 ${
                isScrolled ? "text-base" : "text-lg"
              }`}
            >
              <span className="text-[var(--primary)]">TRAVEL</span>
              <span className="text-[var(--text-primary)]">GO</span>
            </a>

            <nav
              className={`hidden items-center transition-all duration-300 lg:flex ${
                isScrolled ? "gap-6" : "gap-8"
              }`}
            >
              {navLinks.map((link, index) => (
                <a
                  key={link}
                  href="#"
                  className={`font-medium tracking-wide transition-all duration-300 hover:text-[var(--primary)] ${
                    index === 0
                      ? "text-[var(--primary)]"
                      : "text-[var(--text-primary)]"
                  } ${isScrolled ? "text-[12px]" : "text-[13px]"}`}
                >
                  {link}
                </a>
              ))}
            </nav>

            <div
              className={`hidden font-semibold text-[var(--primary)] transition-all duration-300 md:block ${
                isScrolled ? "text-[13px]" : "text-sm"
              }`}
            >
              +111 - 0258211
            </div>
          </div>
        </div>
      </header>
    </>
  );
}