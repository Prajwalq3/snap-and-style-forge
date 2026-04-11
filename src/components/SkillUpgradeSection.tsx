import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const SkillUpgradeSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-primary text-4xl md:text-5xl mb-4 tracking-wide">
          Skill Upgrade
        </h2>
        <p className="text-muted-foreground font-mono text-sm md:text-base mb-10 max-w-2xl mx-auto">
          Elevate your expertise with hands-on workshops, mentorship, and real-world projects. Register now to unlock your potential.
        </p>
        <button
          onClick={() => navigate("/skill-upgrade/login")}
          className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-mono text-lg rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
        >
          Join Skill Upgrade
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default SkillUpgradeSection;
