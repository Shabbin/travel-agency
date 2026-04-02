const navLinks = [
  "Home",
  "About Us",
  "Tour Packages",
  "Our Services",
  "Gallery",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur">
      <div className="container-custom flex h-20 items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-wide">
          <span className="text-[var(--primary)]">Travel</span>Go
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="transition hover:text-[var(--primary)]"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden text-sm font-semibold text-[var(--primary)] md:block">
          +111 - 0258211
        </div>
      </div>
    </header>
  );
}