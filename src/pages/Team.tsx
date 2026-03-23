import { useState, useRef, useEffect } from "react";
import NavigationOverlay from "@/components/NavigationOverlay";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

import teamRef1 from "@/assets/team-ref-1.png";
import teamRef2 from "@/assets/team-ref-2.png";
import teamRef3 from "@/assets/team-ref-3.png";
import teamRef4 from "@/assets/team-ref-4.png";

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
  photo: string;
}

const teamData: Record<Department, TeamMember[]> = {
  "DIRECTORS": [
    { name: "Shaswat Tripathi", role: "President", photo: teamRef1 },
    { name: "Shubham Srivastav", role: "Vice President", photo: teamRef2 },
    { name: "Piush Praharaj", role: "Director", photo: teamRef3 },
    { name: "Priyanshi Dubey", role: "Director", photo: teamRef4 },
    { name: "Puja Mahato", role: "Director", photo: teamRef1 },
  ],
  "SPONSORSHIP": [
    { name: "Jayadeep Dash", role: "Lead", photo: teamRef1 },
    { name: "Nishan Mishra", role: "Member", photo: teamRef2 },
    { name: "Pranav Kumar", role: "Member", photo: teamRef3 },
    { name: "S N Parshuram Swain", role: "Member", photo: teamRef4 },
    { name: "Suryanshu Panigrahi", role: "Co-Lead", photo: teamRef1 },
    { name: "Garima Mohapatra", role: "Member", photo: teamRef2 },
  ],
  "EVENT MANAGEMENT": [
    { name: "Prakhar Mishra", role: "Lead", photo: teamRef1 },
    { name: "S N Parsuram Swain", role: "Co-Lead", photo: teamRef2 },
    { name: "Shubham Kumar Jha", role: "Member", photo: teamRef3 },
    { name: "Sampad Prasad Nayak", role: "Member", photo: teamRef4 },
    { name: "Arjun Behera", role: "Member", photo: teamRef1 },
    { name: "Ritik Patel", role: "Member", photo: teamRef2 },
    { name: "Swati Mohanty", role: "Member", photo: teamRef3 },
    { name: "Aman Sahoo", role: "Member", photo: teamRef4 },
  ],
  "WEBSITE": [
    { name: "Satyam Sinha", role: "Lead", photo: teamRef3 },
    { name: "Md. Rizvi Hassan Ansari", role: "Member", photo: teamRef4 },
    { name: "Bhimesh Kr Mehra", role: "Member", photo: teamRef1 },
    { name: "Jasdeep Singh", role: "Member", photo: teamRef2 },
  ],
  "GRAPHICS": [
    { name: "Bhimesh Kr Mehra", role: "Lead", photo: teamRef1 },
    { name: "Jayadeep Dash", role: "Member", photo: teamRef2 },
    { name: "Rishabh Kumar", role: "Co-Lead", photo: teamRef3 },
    { name: "Akankshya Swain", role: "Member", photo: teamRef4 },
    { name: "Nitin Pradhan", role: "Member", photo: teamRef1 },
    { name: "Prachi Mishra", role: "Member", photo: teamRef2 },
    { name: "Saurav Nanda", role: "Member", photo: teamRef3 },
    { name: "Divya Rout", role: "Member", photo: teamRef4 },
  ],
  "DOCUMENTATION": [
    { name: "Ananya Patel", role: "Lead", photo: teamRef4 },
    { name: "Rohan Verma", role: "Co-Lead", photo: teamRef1 },
    { name: "Sneha Kumari", role: "Member", photo: teamRef2 },
    { name: "Aditya Mohanty", role: "Member", photo: teamRef3 },
    { name: "Ritika Sahoo", role: "Member", photo: teamRef4 },
    { name: "Harsh Panda", role: "Member", photo: teamRef1 },
    { name: "Meera Das", role: "Member", photo: teamRef2 },
    { name: "Vivek Jena", role: "Member", photo: teamRef3 },
  ],
  "SOCIAL MEDIA": [
    { name: "Ashlesa Mahapatra", role: "Lead", photo: teamRef2 },
    { name: "Anubhav Poddar", role: "Co-Lead", photo: teamRef3 },
    { name: "Aryan Singh", role: "Member", photo: teamRef4 },
    { name: "Priya Sharma", role: "Member", photo: teamRef1 },
    { name: "Soumya Dash", role: "Member", photo: teamRef2 },
    { name: "Tanmay Rout", role: "Member", photo: teamRef3 },
    { name: "Shruti Nayak", role: "Member", photo: teamRef4 },
    { name: "Alok Behera", role: "Member", photo: teamRef1 },
  ],
  "PR & MARKETING": [
    { name: "Vikram Rout", role: "Lead", photo: teamRef1 },
    { name: "Shalini Das", role: "Co-Lead", photo: teamRef2 },
    { name: "Rahul Behera", role: "Member", photo: teamRef3 },
    { name: "Tanvi Gupta", role: "Member", photo: teamRef4 },
    { name: "Akash Mohanty", role: "Member", photo: teamRef1 },
    { name: "Neha Swain", role: "Member", photo: teamRef2 },
    { name: "Debasis Sahoo", role: "Member", photo: teamRef3 },
    { name: "Payal Jena", role: "Member", photo: teamRef4 },
  ],
  "CREATIVE": [
    { name: "Deepak Sahoo", role: "Lead", photo: teamRef3 },
    { name: "Megha Tripathy", role: "Co-Lead", photo: teamRef4 },
    { name: "Kunal Pradhan", role: "Member", photo: teamRef1 },
    { name: "Isha Nayak", role: "Member", photo: teamRef2 },
    { name: "Ranjan Mishra", role: "Member", photo: teamRef3 },
    { name: "Sweta Panda", role: "Member", photo: teamRef4 },
    { name: "Anil Das", role: "Member", photo: teamRef1 },
    { name: "Gargi Mohanty", role: "Member", photo: teamRef2 },
  ],
  "MEDIA PRODUCTION": [
    { name: "Soumya Ranjan", role: "Lead", photo: teamRef1 },
    { name: "Ankita Mishra", role: "Co-Lead", photo: teamRef2 },
    { name: "Siddharth Jena", role: "Member", photo: teamRef3 },
    { name: "Riya Panda", role: "Member", photo: teamRef4 },
    { name: "Bibhu Rout", role: "Member", photo: teamRef1 },
    { name: "Pallavi Dash", role: "Member", photo: teamRef2 },
    { name: "Manish Nayak", role: "Member", photo: teamRef3 },
    { name: "Jyoti Sahoo", role: "Member", photo: teamRef4 },
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

      {/* Team member cards */}
      <section className="flex-1 px-4 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {members.map((member, i) => (
            <div key={i} className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 border border-border/20">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 bg-card"
                />
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
