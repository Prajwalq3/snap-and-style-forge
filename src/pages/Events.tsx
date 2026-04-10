import { useNavigate } from "react-router-dom";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

import logoEdc from "@/assets/logo-edc.png";
import logoIic from "@/assets/logo-iic.png";
import logo25 from "@/assets/logo-25years.png";

const events = [
  {
    name: "Idea Build-Up",
    tagline: "Build Under Pressure",
  },
  {
    name: "Banner Expo",
    tagline: "Make Them Look Twice",
  },
  {
    name: "Bidding War",
    tagline: "Raise or Retreat",
  },
  {
    name: "Startup Pitch",
    tagline: "Face the Jury",
  },
  {
    name: "Stock Up",
    tagline: "Command the Market",
  },
];

const CARD_HEIGHT = 420;
const CARD_TOP = 80;
const CARD_OFFSET = 12;

const Events = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-x-hidden bg-background">
      <NavigationOverlay />
      <Header />

      {/* Title */}
      <section className="pt-28 pb-8 text-center">
        <h1 className="font-display text-primary text-5xl md:text-7xl">Events</h1>
      </section>

      {/* Stacking deck cards - hidden below each other, reveal on scroll */}
      <div className="relative px-4 md:px-12" style={{ marginBottom: '4rem' }}>
        {events.map((event, index) => (
          <div
            key={event.name}
            className="relative"
            style={{
              height: index < events.length - 1 ? `${CARD_HEIGHT}px` : 'auto',
            }}
          >
            <div
              className="sticky"
              style={{
                top: `${CARD_TOP + index * CARD_OFFSET}px`,
                zIndex: index + 1,
              }}
            >
              <div
                className="max-w-6xl mx-auto rounded-2xl border border-border/40 overflow-hidden bg-card shadow-2xl"
                style={{
                  height: `${CARD_HEIGHT}px`,
                  transform: `scale(${1 - index * 0.01})`,
                  transformOrigin: 'top center',
                }}
              >
                <div className="flex flex-col md:flex-row items-stretch h-full">
                  {/* Left: Placeholder poster area */}
                  <div className="md:w-[40%] relative p-4 md:p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <img src={logoEdc} alt="EDC" className="h-5 object-contain" />
                      <img src={logoIic} alt="IIC" className="h-5 object-contain" />
                      <img src={logo25} alt="25 Years" className="h-5 object-contain" />
                      <span className="text-foreground text-xs font-bold tracking-wider">SiliconTech</span>
                    </div>
                    <div className="flex-1 rounded-xl bg-secondary flex items-center justify-center min-h-0">
                      <span className="text-muted-foreground/30 font-display text-3xl">{event.name}</span>
                    </div>
                  </div>

                  {/* Right: Event details */}
                  <div className="md:w-[60%] flex flex-col items-center justify-center p-6 md:p-12">
                    <h2 className="font-display text-primary text-3xl md:text-6xl mb-3 text-center italic">
                      {event.name}
                    </h2>
                    <p className="font-mono text-foreground text-sm md:text-lg tracking-wider mb-6">
                      {event.tagline}
                    </p>
                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-bold rounded hover:bg-primary/90 transition-colors">
                        Rulebook
                      </button>
                      <button
                        onClick={() => navigate("/register")}
                        className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-bold rounded hover:bg-primary/90 transition-colors"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FooterSection />
    </main>
  );
};

export default Events;
