import { useEffect, useState, useRef } from "react";
import heroFigure from "@/assets/hero-figure.png";
import heroFigureCrossed from "@/assets/hero-figure-crossed.png";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-surface-dark">
      {/* Background image - transitions between poses */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${heroFigure})`,
          opacity: scrolled ? 0 : 0.6,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${heroFigureCrossed})`,
          opacity: scrolled ? 0.6 : 0,
        }}
      />

      {/* Spotlight overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      {/* Sticky header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="w-12" /> {/* spacer for hamburger */}

        <div className="flex items-center gap-8">
          <span className="text-sm text-muted-foreground font-mono">Entrepreneurship Development Cell</span>
          <span className="text-sm text-muted-foreground font-mono">Institution's Innovation Council</span>
        </div>

        <div className="flex items-center gap-8">
          <span className="text-sm text-muted-foreground font-mono">25 Years Silicon Silver Jubilee</span>
          <span className="text-xl font-bold text-foreground tracking-wider">SiliconTech</span>
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

        <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tight text-foreground">
          SP<span className="text-primary">A</span>RK
          <span className="text-primary">UP</span>
        </h1>
        <h1 className="text-7xl md:text-[10rem] font-black leading-none tracking-tight text-foreground -mt-2 md:-mt-4">
          SUMM<span className="text-primary">I</span>T
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
