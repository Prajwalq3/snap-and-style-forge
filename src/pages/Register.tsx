import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <button
          onClick={() => navigate("/")}
          className="text-muted-foreground font-mono text-sm mb-8 hover:text-foreground transition-colors"
        >
          ← Back to Home
        </button>

        <h1 className="font-display text-primary text-4xl md:text-5xl mb-4">
          Register
        </h1>
        <p className="text-muted-foreground font-mono text-sm mb-10">
          Join the Spark Up Summit and ignite your entrepreneurial journey.
        </p>

        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Registration submitted!");
          }}
        >
          <div>
            <label className="block text-foreground font-mono text-sm mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-foreground font-mono text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-foreground font-mono text-sm mb-2">
              Phone
            </label>
            <input
              type="tel"
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-foreground font-mono text-sm mb-2">
              College / Organization
            </label>
            <input
              type="text"
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your college or organization"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-mono text-lg py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
