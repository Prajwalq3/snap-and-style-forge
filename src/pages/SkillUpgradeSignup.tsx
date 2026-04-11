import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SkillUpgradeSignup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { username, email, phone, password };
    const stored = sessionStorage.getItem("skill_users");
    const users = stored ? JSON.parse(stored) : [];
    users.push(user);
    sessionStorage.setItem("skill_users", JSON.stringify(users));
    sessionStorage.setItem("skill_current_user", JSON.stringify(user));
    navigate("/skill-upgrade/dashboard");
  };

  const inputStyle = {
    background: "hsl(230, 18%, 16%)",
    border: "1px solid hsl(230, 15%, 22%)",
    color: "hsl(0, 0%, 90%)",
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
        <h1
          className="text-center text-4xl font-bold mb-2"
          style={{ color: "hsl(0, 0%, 95%)", fontFamily: "'Special Elite', cursive" }}
        >
          Create account
        </h1>
        <p className="text-center text-sm mb-8" style={{ color: "hsl(230, 10%, 55%)" }}>
          Please Use Your ERP User Name And Password For The Convenience
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "USER NAME", type: "text", value: username, setter: setUsername, placeholder: "Enter username" },
            { label: "EMAIL", type: "email", value: email, setter: setEmail, placeholder: "you@example.com" },
            { label: "PHONE NUMBER", type: "tel", value: phone, setter: setPhone, placeholder: "Enter phone number" },
            { label: "PASSWORD", type: "password", value: password, setter: setPassword, placeholder: "••••••" },
          ].map((field) => (
            <div key={field.label}>
              <label
                className="block text-xs font-bold tracking-wider mb-2"
                style={{ color: "hsl(255, 80%, 65%)" }}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                required
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                placeholder={field.placeholder}
                className="w-full px-4 py-3.5 rounded-lg text-sm outline-none transition-all"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "hsl(255, 80%, 65%)")}
                onBlur={(e) => (e.target.style.borderColor = "hsl(230, 15%, 22%)")}
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, hsl(255, 80%, 60%), hsl(255, 80%, 50%))",
            }}
          >
            Create Account →
          </button>
        </form>

        <p className="text-center mt-6 text-sm" style={{ color: "hsl(230, 10%, 55%)" }}>
          Already have an account?{" "}
          <button
            onClick={() => navigate("/skill-upgrade/login")}
            className="font-semibold hover:underline"
            style={{ color: "hsl(255, 80%, 65%)" }}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SkillUpgradeSignup;
