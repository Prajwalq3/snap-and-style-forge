import heroFigure from "@/assets/hero-figure.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-surface-dark">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroFigure})` }}
      />

      {/* Spotlight overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      {/* Top bar with logos */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4">
        <button className="flex flex-col gap-1.5">
          <span className="block w-8 h-0.5 bg-foreground" />
          <span className="block w-8 h-0.5 bg-foreground" />
          <span className="block w-6 h-0.5 bg-foreground" />
        </button>

        <div className="flex items-center gap-8">
          <span className="text-xs text-muted-foreground font-mono">Entrepreneurship Development Cell</span>
          <span className="text-xs text-muted-foreground font-mono">Institution's Innovation Council</span>
        </div>

        <div className="flex items-center gap-8">
          <span className="text-xs text-muted-foreground font-mono">25 Years Silicon Silver Jubilee</span>
          <span className="text-lg font-bold text-foreground tracking-wider">SiliconTech</span>
        </div>
      </div>

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
