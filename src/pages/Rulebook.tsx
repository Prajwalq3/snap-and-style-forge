import { useParams, useNavigate } from "react-router-dom";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

import stockup1 from "@/assets/rulebook-stockup-1.png";
import stockup2 from "@/assets/rulebook-stockup-2.png";
import stockup3 from "@/assets/rulebook-stockup-3.png";
import stockup4 from "@/assets/rulebook-stockup-4.png";
import stockup5 from "@/assets/rulebook-stockup-5.png";
import stockup6 from "@/assets/rulebook-stockup-6.png";
import stockup7 from "@/assets/rulebook-stockup-7.png";

import startuppitch1 from "@/assets/rulebook-startuppitch-1.png";
import startuppitch2 from "@/assets/rulebook-startuppitch-2.png";
import startuppitch3 from "@/assets/rulebook-startuppitch-3.png";

const rulebooks: Record<string, { title: string; pages: string[] }> = {
  "stock-up": {
    title: "Stock Up",
    pages: [stockup1, stockup2, stockup3, stockup4, stockup5, stockup6, stockup7],
  },
  "startup-pitch": {
    title: "Startup Pitch",
    pages: [startuppitch1, startuppitch2, startuppitch3],
  },
};

const Rulebook = () => {
  const { eventSlug } = useParams();
  const navigate = useNavigate();
  const rulebook = eventSlug ? rulebooks[eventSlug] : null;

  if (!rulebook) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <NavigationOverlay />
        <Header />
        <div className="flex-1 flex items-center justify-center pt-28">
          <div className="text-center">
            <h1 className="font-display text-primary text-4xl mb-4">Rulebook Not Available</h1>
            <p className="text-muted-foreground mb-6">The rulebook for this event will be uploaded soon.</p>
            <button
              onClick={() => navigate("/events")}
              className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-bold rounded hover:bg-primary/90 transition-colors"
            >
              ← Back to Events
            </button>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationOverlay />
      <Header />

      <section className="pt-28 pb-8 text-center">
        <h1 className="font-display text-primary text-4xl md:text-6xl">{rulebook.title}</h1>
        <p className="text-muted-foreground font-mono mt-2 text-sm tracking-wider">RULE BOOK</p>
      </section>

      <div className="flex-1 px-4 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto space-y-6">
          {rulebook.pages.map((page, i) => (
            <img
              key={i}
              src={page}
              alt={`${rulebook.title} Rulebook Page ${i + 1}`}
              className="w-full rounded-lg shadow-xl"
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/events")}
            className="px-8 py-3 bg-primary text-primary-foreground font-mono text-sm font-bold rounded hover:bg-primary/90 transition-colors"
          >
            ← Back to Events
          </button>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Rulebook;
