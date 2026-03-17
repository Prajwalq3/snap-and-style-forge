import { useEffect, useState, useRef } from "react";
import heroFigureDown from "@/assets/hero-figure-down.png";
import heroFigureUp from "@/assets/hero-figure-up.png";
import logoEdc from "@/assets/logo-edc.png";
import logoIic from "@/assets/logo-iic.png";
import logo25 from "@/assets/logo-25years.png";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      // Hide header when scrolling down past 100px
      setHeaderVisible(currentY < 100);
      lastScrollY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = scrollY > 200;

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-surface-dark">
      {/* Background figure - looking down reading paper */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${heroFigureDown})`,
          opacity: scrolled ? 0 : 0.7,
        }}
      />
      {/* Background figure - looking up with big eyes */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${heroFigureUp})`,
          opacity: scrolled ? 0.7 : 0,
        }}
      />

      {/* Spotlight overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      {/* Sticky header with logos - disappears on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 md:px-8 py-3 bg-background/90 backdrop-blur-md border-b border-border/20 transition-all duration-500 ${
          headerVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Left: Hamburger spacer + EDC logo */}
        <div className="flex items-center gap-4">
          <div className="w-10" /> {/* spacer for hamburger */}
          <img src={logoEdc} alt="Entrepreneurship Development Cell" className="h-10 md:h-12 object-contain" />
        </div>

        {/* Center: IIC logo */}
        <div className="flex items-center">
          <img src={logoIic} alt="Institution's Innovation Council" className="h-10 md:h-14 object-contain" />
        </div>

        {/* Right: 25 Years + SiliconTech */}
        <div className="flex items-center gap-4">
          <img src={logo25} alt="25 Years Silicon Silver Jubilee" className="h-10 md:h-12 object-contain" />
          <span className="text-lg md:text-2xl font-bold text-foreground tracking-wider">SiliconTech</span>
        </div>
      </header>

      {/* Main title */}
      <div className="relative z-10 text-center">
        <p className="font-display text-primary text-lg md:text-xl tracking-widest mb-2">
          The
        </p>
        <p className="font-display text-primary text-lg md:text-xl tracking-widest mb-6">
          Entrepreneurship Development Cell
          <br />
          Presents
        </p>

        <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tight text-foreground flex items-center justify-center">
          SP
          {/* Magnifying glass A */}
          <span className="relative inline-block" style={{ width: '0.65em', height: '1em' }}>
            <svg viewBox="0 0 100 140" className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* A shape */}
              <polygon points="50,10 15,130 30,130 42,95 58,95 70,130 85,130" fill="currentColor" />
              {/* A crossbar */}
              <rect x="38" y="80" width="24" height="10" fill="hsl(var(--surface-dark))" />
              {/* Magnifying glass circle */}
              <circle cx="50" cy="52" r="28" stroke="hsl(var(--foreground))" strokeWidth="6" fill="none" />
              {/* Magnifying glass handle */}
              <line x1="70" y1="72" x2="90" y2="100" stroke="hsl(var(--primary))" strokeWidth="7" strokeLinecap="round" />
              {/* Detective hat brim */}
              <path d="M25 30 Q50 18 75 30" stroke="hsl(var(--foreground))" strokeWidth="4" fill="hsl(var(--foreground))" />
              {/* Detective hat top */}
              <path d="M35 30 Q50 5 65 30" fill="hsl(var(--foreground))" />
              {/* Red accent swirl inside glass */}
              <path d="M40 55 Q45 40 55 50 Q60 58 50 60" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          RK<span className="text-primary">U</span>P
        </h1>
        <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tight text-foreground -mt-2 md:-mt-4">
          SUMMIT
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <span className="text-foreground text-2xl">↓</span>
      </div>
    </section>
  );
};

export default HeroSection;
