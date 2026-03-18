import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const NavigationOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#events" },
    { label: "Team", href: "#team" },
    { label: "Glimpse", href: "#glimpse" },
  ];

  return (
    <>
      {/* Hamburger button - fixed position */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 left-6 z-50 flex flex-col gap-1.5 group"
        aria-label="Open menu"
      >
        <span className="block w-8 h-0.5 bg-foreground transition-all group-hover:w-10" />
        <span className="block w-8 h-0.5 bg-foreground transition-all group-hover:w-10" />
        <span className="block w-6 h-0.5 bg-foreground transition-all group-hover:w-10" />
      </button>

      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-primary-foreground" />

        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 left-6 z-10 text-background font-mono text-sm tracking-widest hover:opacity-70 transition-opacity"
        >
          close
        </button>

        {/* Navigation links */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                const el = document.querySelector(link.href);
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex items-center gap-3 text-background font-mono text-3xl md:text-4xl tracking-wide hover:opacity-70 transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              {link.label}
              <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          ))}

          {/* Register button */}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/events");
            }}
            className={`mt-4 px-12 py-4 bg-primary text-primary-foreground font-mono text-xl md:text-2xl rounded-lg shadow-lg hover:opacity-90 transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "470ms" }}
          >
            Register
          </button>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 w-48 h-2 bg-surface-dark" />
      </div>
    </>
  );
};

export default NavigationOverlay;
