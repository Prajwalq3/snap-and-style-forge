import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SkillUpgradeLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store login state in sessionStorage (UI only)
    const stored = sessionStorage.getItem("skill_users");
    const users = stored ? JSON.parse(stored) : [];
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (user) {
      sessionStorage.setItem("skill_current_user", JSON.stringify(user));
      navigate("/skill-upgrade/dashboard");
    } else {
      alert("Invalid credentials. Please sign up first.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "hsl(230, 25%, 8%)" }}>
      <div
        className="w-full max-w-md rounded-2xl p-10"
        style={{
          background: "hsl(230, 20%, 12%)",
          border: "1px solid hsl(230, 15%, 20%)",
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ border: "2px solid hsl(255, 80%, 65%)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(255, 80%, 65%)" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        <h1
          className="text-center text-4xl font-bold mb-2"
          style={{ color: "hsl(0, 0%, 95%)", fontFamily: "'Special Elite', cursive" }}
        >
          Welcome back
        </h1>
        <p className="text-center text-sm mb-8" style={{ color: "hsl(230, 10%, 55%)" }}>
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-xs font-semibold tracking-wider mb-2"
              style={{ color: "hsl(230, 10%, 55%)" }}
            >
              EMAIL
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
              style={{
                background: "hsl(230, 18%, 16%)",
                border: "1px solid hsl(230, 15%, 22%)",
                color: "hsl(0, 0%, 90%)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "hsl(255, 80%, 65%)")}
              onBlur={(e) => (e.target.style.borderColor = "hsl(230, 15%, 22%)")}
            />
          </div>

          <div>
            <label
              className="block text-xs font-semibold tracking-wider mb-2"
              style={{ color: "hsl(230, 10%, 55%)" }}
            >
              PASSWORD
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
              style={{
                background: "hsl(230, 18%, 16%)",
                border: "1px solid hsl(230, 15%, 22%)",
                color: "hsl(0, 0%, 90%)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "hsl(255, 80%, 65%)")}
              onBlur={(e) => (e.target.style.borderColor = "hsl(230, 15%, 22%)")}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, hsl(255, 80%, 60%), hsl(255, 80%, 50%))",
            }}
          >
            Sign In →
          </button>
        </form>

        <p className="text-center mt-6 text-sm" style={{ color: "hsl(230, 10%, 55%)" }}>
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/skill-upgrade/signup")}
            className="font-semibold hover:underline"
            style={{ color: "hsl(255, 80%, 65%)" }}
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
};

export default SkillUpgradeLogin;
