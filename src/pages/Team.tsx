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
  role: string;
}

const teamData: Record<Department, TeamMember[]> = {
  "DIRECTORS": [
    { name: "Shaswat Tripathi", role: "President" },
    { name: "Shubham Srivastav", role: "Vice President" },
    { name: "Piush Praharaj", role: "Director" },
    { name: "Priyanshi Dubey", role: "Director" },
    { name: "Puja Mahato", role: "Director" },
  ],
  "SPONSORSHIP": [
    { name: "Jayadeep Dash", role: "Lead" },
    { name: "Suryanshu Panigrahi", role: "Co-Lead" },
    { name: "Nishan Mishra", role: "Member" },
    { name: "Pranav Kumar", role: "Member" },
    { name: "S N Parshuram Swain", role: "Member" },
    { name: "Garima Mohapatra", role: "Member" },
  ],
  "EVENT MANAGEMENT": [
    { name: "Prakhar Mishra", role: "Lead" },
    { name: "S N Parsuram Swain", role: "Co-Lead" },
    { name: "Shubham Kumar Jha", role: "Member" },
    { name: "Sampad Prasad Nayak", role: "Member" },
    { name: "Arjun Behera", role: "Member" },
    { name: "Ritik Patel", role: "Member" },
    { name: "Swati Mohanty", role: "Member" },
    { name: "Aman Sahoo", role: "Member" },
  ],
  "WEBSITE": [
    { name: "Satyam Sinha", role: "Lead" },
    { name: "Md. Rizvi Hassan Ansari", role: "Member" },
    { name: "Bhimesh Kr Mehra", role: "Member" },
    { name: "Jasdeep Singh", role: "Member" },
  ],
  "GRAPHICS": [
    { name: "Bhimesh Kr Mehra", role: "Lead" },
    { name: "Rishabh Kumar", role: "Co-Lead" },
    { name: "Jayadeep Dash", role: "Member" },
    { name: "Akankshya Swain", role: "Member" },
    { name: "Nitin Pradhan", role: "Member" },
    { name: "Prachi Mishra", role: "Member" },
    { name: "Saurav Nanda", role: "Member" },
    { name: "Divya Rout", role: "Member" },
  ],
  "DOCUMENTATION": [
    { name: "Ananya Patel", role: "Documentation Head" },
    { name: "Rohan Verma", role: "Co-Lead" },
    { name: "Sneha Kumari", role: "Member" },
    { name: "Aditya Mohanty", role: "Member" },
    { name: "Ritika Sahoo", role: "Member" },
    { name: "Harsh Panda", role: "Member" },
    { name: "Meera Das", role: "Member" },
    { name: "Vivek Jena", role: "Member" },
  ],
  "SOCIAL MEDIA": [
    { name: "Ashlesa Mahapatra", role: "Social Media Head" },
    { name: "Anubhav Poddar", role: "Co-Lead" },
    { name: "Aryan Singh", role: "Member" },
    { name: "Priya Sharma", role: "Member" },
    { name: "Soumya Dash", role: "Member" },
    { name: "Tanmay Rout", role: "Member" },
    { name: "Shruti Nayak", role: "Member" },
    { name: "Alok Behera", role: "Member" },
  ],
  "PR & MARKETING": [
    { name: "Vikram Rout", role: "PR & Marketing Head" },
    { name: "Shalini Das", role: "Co-Lead" },
    { name: "Rahul Behera", role: "Member" },
    { name: "Tanvi Gupta", role: "Member" },
    { name: "Akash Mohanty", role: "Member" },
    { name: "Neha Swain", role: "Member" },
    { name: "Debasis Sahoo", role: "Member" },
    { name: "Payal Jena", role: "Member" },
  ],
  "CREATIVE": [
    { name: "Deepak Sahoo", role: "Creative Head" },
    { name: "Megha Tripathy", role: "Co-Lead" },
    { name: "Kunal Pradhan", role: "Member" },
    { name: "Isha Nayak", role: "Member" },
    { name: "Ranjan Mishra", role: "Member" },
    { name: "Sweta Panda", role: "Member" },
    { name: "Anil Das", role: "Member" },
    { name: "Gargi Mohanty", role: "Member" },
  ],
  "MEDIA PRODUCTION": [
    { name: "Soumya Ranjan", role: "Media Production Head" },
    { name: "Ankita Mishra", role: "Co-Lead" },
    { name: "Siddharth Jena", role: "Member" },
    { name: "Riya Panda", role: "Member" },
    { name: "Bibhu Rout", role: "Member" },
    { name: "Pallavi Dash", role: "Member" },
    { name: "Manish Nayak", role: "Member" },
    { name: "Jyoti Sahoo", role: "Member" },
  ],
};

const Team = () => {
  const [activeDept, setActiveDept] = useState<Department>("DIRECTORS");
  const tabBarRef = useRef<HTMLDivElement>(null);

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

      {/* Team member cards - no photos */}
      <section className="flex-1 px-4 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {members.map((member, i) => (
            <div key={i} className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 border border-border/20 bg-card flex items-center justify-center">
                <span className="text-muted-foreground/30 font-display text-4xl">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <p className="font-display text-foreground text-sm md:text-base leading-tight">
                {member.name}
              </p>
              <p className="font-mono text-primary text-xs mt-1">
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
