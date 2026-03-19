import { useState, useRef, useEffect } from "react";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

const departments = [
  "DIRECTORS",
  "SPONSORSHIP",
  "EVENT MANAGEMENT",
  "WEBSITE",
  "GRAPHICS",
  "DOCUMENTATION",
  "SOCIAL MEDIA",
  "PR & MARKETING",
  "CREATIVE",
  "MEDIA PRODUCTION",
] as const;

type Department = typeof departments[number];

interface TeamMember {
  name: string;
  role: "Lead" | "Co-Lead" | "Member";
  photo: string;
}

// Placeholder team data - replace with real photos and names
const teamData: Record<Department, TeamMember[]> = {
  "DIRECTORS": [
    { name: "Director 1", role: "Lead", photo: "/placeholder.svg" },
    { name: "Director 2", role: "Member", photo: "/placeholder.svg" },
  ],
  "SPONSORSHIP": [
    { name: "Sponsor Lead", role: "Lead", photo: "/placeholder.svg" },
    { name: "Sponsor Co-Lead", role: "Co-Lead", photo: "/placeholder.svg" },
    { name: "Member 1", role: "Member", photo: "/placeholder.svg" },
    { name: "Member 2", role: "Member", photo: "/placeholder.svg" },
  ],
  "EVENT MANAGEMENT": [
    { name: "Prakhar Mishra", role: "Lead", photo: "/placeholder.svg" },
    { name: "S N Parsuram Swain", role: "Co-Lead", photo: "/placeholder.svg" },
    { name: "Shubham Kumar Jha", role: "Member", photo: "/placeholder.svg" },
    { name: "Sampad Prasad Nayak", role: "Member", photo: "/placeholder.svg" },
  ],
  "WEBSITE": [
    { name: "Satyam Sinha", role: "Lead", photo: "/placeholder.svg" },
    { name: "Md. Rizvi Hassan Ansari", role: "Member", photo: "/placeholder.svg" },
    { name: "Bhimesh Kr Mehra", role: "Member", photo: "/placeholder.svg" },
    { name: "Jasdeep Singh", role: "Member", photo: "/placeholder.svg" },
  ],
  "GRAPHICS": [
    { name: "Graphics Lead", role: "Lead", photo: "/placeholder.svg" },
    { name: "Graphics Member", role: "Member", photo: "/placeholder.svg" },
  ],
  "DOCUMENTATION": [
    { name: "Doc Lead", role: "Lead", photo: "/placeholder.svg" },
    { name: "Doc Member", role: "Member", photo: "/placeholder.svg" },
  ],
  "SOCIAL MEDIA": [
    { name: "Ashlesa Mahapatra", role: "Lead", photo: "/placeholder.svg" },
    { name: "Anubhav Poddar", role: "Co-Lead", photo: "/placeholder.svg" },
    { name: "Aryan Singh", role: "Member", photo: "/placeholder.svg" },
  ],
  "PR & MARKETING": [
    { name: "PR Lead", role: "Lead", photo: "/placeholder.svg" },
    { name: "PR Member", role: "Member", photo: "/placeholder.svg" },
  ],
  "CREATIVE": [
    { name: "Creative Lead", role: "Lead", photo: "/placeholder.svg" },
    { name: "Creative Member", role: "Member", photo: "/placeholder.svg" },
  ],
  "MEDIA PRODUCTION": [
    { name: "Media Lead", role: "Lead", photo: "/placeholder.svg" },
    { name: "Media Member", role: "Member", photo: "/placeholder.svg" },
  ],
};

const Team = () => {
  const [activeDept, setActiveDept] = useState<Department>("DIRECTORS");
  const tabBarRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view
  useEffect(() => {
    if (tabBarRef.current) {
      const activeBtn = tabBarRef.current.querySelector('[data-active="true"]');
      activeBtn?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeDept]);

  const members = teamData[activeDept];

  return (
    <main className="overflow-x-hidden bg-background min-h-screen flex flex-col">
      <NavigationOverlay />
      <Header />

      {/* Title */}
      <section className="pt-28 pb-4 text-center">
        <h1 className="font-display text-foreground text-4xl md:text-7xl">
          Meet the <span className="text-primary italic">Team</span>
        </h1>
      </section>

      {/* Department name */}
      <div className="text-center py-6">
        <h2 className="font-display text-foreground/80 text-2xl md:text-4xl">
          {activeDept.charAt(0) + activeDept.slice(1).toLowerCase().replace(/\b\w/g, c => c.toUpperCase())}
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mt-3" />
      </div>

      {/* Team member cards */}
      <section className="flex-1 px-4 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div key={i} className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-3">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale bg-card"
                />
              </div>
              <p className="font-display text-foreground text-sm md:text-base">
                {member.name}
              </p>
              <p className="font-mono text-primary text-xs">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky bottom tab bar */}
      <div className="sticky bottom-0 z-30 bg-surface-dark/95 backdrop-blur-md border-t border-primary/30 py-3 px-2">
        <div
          ref={tabBarRef}
          className="max-w-6xl mx-auto flex items-center gap-1 overflow-x-auto scrollbar-hide"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              data-active={activeDept === dept}
              onClick={() => setActiveDept(dept)}
              className={`font-mono text-[10px] md:text-xs tracking-wider px-3 md:px-4 py-2 rounded-full whitespace-nowrap transition-all shrink-0 ${
                activeDept === dept
                  ? "bg-foreground text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      <FooterSection />
    </main>
  );
};

export default Team;
