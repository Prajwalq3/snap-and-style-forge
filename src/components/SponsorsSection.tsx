import sponsorsBg from "@/assets/sponsors-bg.jpg";

const sponsors = [
  "NALCO", "Business Intelligence Professionals Pvt. Ltd.", "AB's",
  "Jindal Steel & Power", "STL", "Startup Odisha",
  "OPTCL", "Texiant Software", "MCL",
];

const SponsorsSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${sponsorsBg})` }}
      />
      <div className="absolute inset-0 bg-surface-gray/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-foreground mb-2 tracking-wider">
          OUR PREVIOUS
        </h2>
        <h2 className="font-display text-primary text-5xl md:text-7xl mb-16">
          SPONSORS
        </h2>

        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sponsors.map((name) => (
            <div
              key={name}
              className="bg-card/90 backdrop-blur rounded-xl p-6 flex items-center justify-center min-h-[100px] shadow-lg"
            >
              <span className="text-card-foreground font-bold text-sm md:text-base text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
