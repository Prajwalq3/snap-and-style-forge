import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SkillUpgradeDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("skill_current_user");
    if (!stored) {
      navigate("/skill-upgrade/login");
      return;
    }
    setUser(JSON.parse(stored));
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("skill_current_user");
    navigate("/skill-upgrade/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: "hsl(230, 25%, 8%)" }}>
      <div className="max-w-2xl mx-auto">
        {/* Welcome badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "hsl(230, 20%, 15%)" }}>
          <span>🎉</span>
          <span className="text-xs font-semibold tracking-wider" style={{ color: "hsl(255, 80%, 65%)" }}>
            WELCOME
          </span>
        </div>

        <h1 className="text-5xl font-bold mb-4" style={{ color: "hsl(0, 0%, 95%)", fontFamily: "'Special Elite', cursive" }}>
          Hello,{" "}
          <span style={{ color: "hsl(255, 80%, 65%)", fontStyle: "italic" }}>{user.username}</span>
        </h1>
        <p className="text-base mb-10" style={{ color: "hsl(230, 10%, 55%)" }}>
          You're logged in! We would be honoured to connect with you and request your photo for our Teacher Honour section.
        </p>

        {/* Saved Details Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "hsl(230, 20%, 12%)",
            border: "2px solid hsl(255, 80%, 55%)",
          }}
        >
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2" style={{ color: "hsl(0, 0%, 90%)" }}>
            <span>📋</span> Your Saved Details
          </h2>

          <div className="space-y-4">
            {[
              { label: "NAME", value: user.username },
              { label: "EMAIL", value: user.email },
              { label: "PHONE", value: user.phone },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-3"
                style={{ borderBottom: "1px solid hsl(230, 15%, 20%)" }}
              >
                <span className="text-xs tracking-wider" style={{ color: "hsl(230, 10%, 50%)" }}>
                  {item.label}
                </span>
                <span className="font-semibold" style={{ color: "hsl(0, 0%, 90%)" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              background: "hsl(230, 20%, 15%)",
              color: "hsl(0, 0%, 80%)",
              border: "1px solid hsl(230, 15%, 22%)",
            }}
          >
            ← Back to Home
          </button>
          <button
            onClick={handleLogout}
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, hsl(255, 80%, 60%), hsl(255, 80%, 50%))",
              color: "white",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillUpgradeDashboard;
