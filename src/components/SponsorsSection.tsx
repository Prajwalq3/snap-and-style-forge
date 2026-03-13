import sponsorsBg from "@/assets/sponsors-bg.jpg";
import sponsorNalco from "@/assets/sponsor-nalco.png";
import sponsorBip from "@/assets/sponsor-bip.png";
import sponsorAbs from "@/assets/sponsor-abs.png";
import sponsorJindal from "@/assets/sponsor-jindal.png";
import sponsorStl from "@/assets/sponsor-stl.png";
import sponsorStartupOdisha from "@/assets/sponsor-startup-odisha.png";
import sponsorOptcl from "@/assets/sponsor-optcl.png";
import sponsorTexiant from "@/assets/sponsor-texiant.png";
import sponsorMcl from "@/assets/sponsor-mcl.png";

const sponsors = [
  { name: "NALCO", logo: sponsorNalco },
  { name: "Business Intelligence Professionals Pvt. Ltd.", logo: sponsorBip },
  { name: "AB's Absolute Barbecues", logo: sponsorAbs },
  { name: "Jindal Steel & Power", logo: sponsorJindal },
  { name: "STL", logo: sponsorStl },
  { name: "Startup Odisha", logo: sponsorStartupOdisha },
  { name: "OPTCL", logo: sponsorOptcl },
  { name: "Texiant Software", logo: sponsorTexiant },
  { name: "MCL", logo: sponsorMcl },
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
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="bg-card/90 backdrop-blur rounded-xl p-4 flex items-center justify-center min-h-[120px] shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-20 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
