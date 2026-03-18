import { useNavigate } from "react-router-dom";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

import eventIdeaBuildup from "@/assets/event-idea-buildup.jpg";
import eventBannerExpo from "@/assets/event-banner-expo.jpg";
import eventBiddingWar from "@/assets/event-bidding-war.jpg";
import eventStartupPitch from "@/assets/event-startup-pitch.jpg";
import eventStockUp from "@/assets/event-stock-up.jpg";
import logoEdc from "@/assets/logo-edc.png";
import logoIic from "@/assets/logo-iic.png";
import logo25 from "@/assets/logo-25years.png";

const events = [
  {
    name: "Idea Build-Up",
    tagline: "Build Under Pressure",
    image: eventIdeaBuildup,
  },
  {
    name: "Banner Expo",
    tagline: "Make Them Look Twice",
    image: eventBannerExpo,
  },
  {
    name: "Bidding War",
    tagline: "Raise or Retreat",
    image: eventBiddingWar,
  },
  {
    name: "Startup Pitch",
    tagline: "Face the Jury",
    image: eventStartupPitch,
  },
  {
    name: "Stock Up",
    tagline: "Command the Market",
    image: eventStockUp,
  },
];

const CARD_HEIGHT = 420; // px height per card

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

      {/* Stacking cards container - each card is sticky and stacks */}
      <div className="relative px-4 md:px-12 pb-40">
        {events.map((event, index) => (
          <div
            key={event.name}
            className="sticky mb-4"
            style={{
              top: `${80 + index * 30}px`,
              zIndex: index + 1,
              height: `${CARD_HEIGHT}px`,
            }}
          >
            <div
              className="max-w-6xl mx-auto rounded-2xl border border-border/40 overflow-hidden h-full"
              style={{
                backgroundColor: "hsl(225 30% 16%)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex flex-col md:flex-row items-stretch h-full">
                {/* Left: Poster image with logos */}
                <div className="md:w-[40%] relative p-4 md:p-6 flex flex-col">
                  {/* Mini logos row */}
                  <div className="flex items-center gap-2 mb-3">
                    <img src={logoEdc} alt="EDC" className="h-5 object-contain" />
                    <img src={logoIic} alt="IIC" className="h-5 object-contain" />
                    <img src={logo25} alt="25 Years" className="h-5 object-contain" />
                    <span className="text-foreground text-xs font-bold tracking-wider">SiliconTech</span>
                  </div>
                  <img
                    src={event.image}
                    alt={event.name}
                    className="flex-1 rounded-xl object-cover w-full min-h-0"
                  />
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
        ))}
      </div>

      <FooterSection />
    </main>
  );
};

export default Events;
