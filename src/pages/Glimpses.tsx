import { useState } from "react";
import { ChevronDown } from "lucide-react";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const categories = ["ALL", "INAUGURATION", "EVENTS", "CLOSING"] as const;
type Category = typeof categories[number];

// Placeholder glimpse data - replace with real photos
const glimpses = [
  { id: 1, src: "/placeholder.svg", category: "INAUGURATION" as Category, aspect: "tall" },
  { id: 2, src: "/placeholder.svg", category: "INAUGURATION" as Category, aspect: "wide" },
  { id: 3, src: "/placeholder.svg", category: "EVENTS" as Category, aspect: "square" },
  { id: 4, src: "/placeholder.svg", category: "INAUGURATION" as Category, aspect: "tall" },
  { id: 5, src: "/placeholder.svg", category: "EVENTS" as Category, aspect: "wide" },
  { id: 6, src: "/placeholder.svg", category: "CLOSING" as Category, aspect: "square" },
  { id: 7, src: "/placeholder.svg", category: "EVENTS" as Category, aspect: "tall" },
  { id: 8, src: "/placeholder.svg", category: "INAUGURATION" as Category, aspect: "wide" },
  { id: 9, src: "/placeholder.svg", category: "CLOSING" as Category, aspect: "square" },
  { id: 10, src: "/placeholder.svg", category: "EVENTS" as Category, aspect: "tall" },
  { id: 11, src: "/placeholder.svg", category: "CLOSING" as Category, aspect: "wide" },
  { id: 12, src: "/placeholder.svg", category: "EVENTS" as Category, aspect: "square" },
];

const Glimpses = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filtered = activeCategory === "ALL"
    ? glimpses
    : glimpses.filter((g) => g.category === activeCategory);

  return (
    <main className="overflow-x-hidden bg-background min-h-screen flex flex-col">
      <NavigationOverlay />
      <Header />

      {/* Hero title */}
      <section className="pt-28 pb-4 text-center flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="font-display text-foreground text-5xl md:text-8xl tracking-wider">
          EVENT
        </h1>
        <h1 className="font-display text-primary text-5xl md:text-8xl tracking-wider -mt-2">
          GLIMPSES
        </h1>
        <p className="font-display text-foreground/80 text-sm md:text-lg mt-6 tracking-wider">
          Moments that defined the experience
        </p>
        <ChevronDown className="w-6 h-6 text-foreground/50 mt-8 animate-bounce" />
      </section>

      {/* Photo gallery - masonry style */}
      <section className="px-4 md:px-8 pb-24 flex-1">
        <div className="max-w-7xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid rounded-xl overflow-hidden border border-border/20"
            >
              <img
                src={photo.src}
                alt={`Event glimpse ${photo.id}`}
                className={`w-full object-cover bg-card ${
                  photo.aspect === "tall"
                    ? "h-72 md:h-96"
                    : photo.aspect === "wide"
                    ? "h-40 md:h-56"
                    : "h-52 md:h-64"
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sticky bottom filter bar */}
      <div className="sticky bottom-0 z-30 bg-surface-dark/95 backdrop-blur-md border-t border-primary/30 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs md:text-sm tracking-wider px-4 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-foreground text-background font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <FooterSection />
    </main>
  );
};

export default Glimpses;
