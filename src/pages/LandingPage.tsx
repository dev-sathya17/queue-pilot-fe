import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, CheckCircle, Menu, X } from "lucide-react";
import { features } from "../data/features";
import Logo from "../assets/icons/logo.png";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black text-gray-200 flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-4 sm:px-8 py-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Queue Pilot Logo"
            className="w-8 h-8 inline mr-2"
          />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
            Queue Pilot
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/features" className="hover:text-pink-400">
            Features
          </NavLink>
          <NavLink to="/pricing" className="hover:text-pink-400">
            Pricing
          </NavLink>
          <NavLink to="/docs" className="hover:text-pink-400">
            Docs
          </NavLink>
          <NavLink
            to="/sign-up"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-blue-400 text-black font-semibold shadow-lg hover:opacity-90 transition"
          >
            Get Started
          </NavLink>
        </nav>

        {/* Mobile Nav */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isOpen && (
          <div className="absolute top-16 right-4 bg-zinc-900 border border-white/10 rounded-lg shadow-lg p-4 flex flex-col gap-3 md:hidden z-50">
            <NavLink to="/features" className="hover:text-pink-400">
              Features
            </NavLink>
            <NavLink to="/pricing" className="hover:text-pink-400">
              Pricing
            </NavLink>
            <NavLink to="/docs" className="hover:text-pink-400">
              Docs
            </NavLink>
            <NavLink
              to="/sign-up"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-blue-400 text-black font-semibold shadow-lg hover:opacity-90 transition text-center"
            >
              Get Started
            </NavLink>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-16 sm:py-20 md:py-32">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
          Run jobs with ease.
          <span className="block bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
            Let Queue Pilot fly them for you ✈️
          </span>
        </h2>
        <p className="mt-6 text-gray-400 max-w-xl text-base sm:text-lg">
          Queue Pilot is your co-pilot for background jobs — manage tasks like
          email notifications, image processing, and more, all in one SaaS
          platform.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <NavLink
            to="/sign-up"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-blue-400 text-black font-semibold shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={18} />
          </NavLink>
          <NavLink
            to="/docs"
            className="px-6 py-3 rounded-xl border border-white/10 hover:border-pink-400 transition"
          >
            Learn More
          </NavLink>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 sm:px-12 md:px-20 py-16 md:py-24 bg-gradient-to-b from-zinc-950/40 to-black">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Queue Pilot?
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition shadow-md"
            >
              <CheckCircle className="w-6 h-6 text-pink-400 mb-4" />
              <h4 className="text-lg font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 sm:py-20">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to launch your first job?
        </h3>
        <NavLink
          to="/sign-up"
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-blue-400 text-black font-semibold shadow-lg hover:opacity-90 transition"
        >
          Start Free Today
        </NavLink>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-white/5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Queue Pilot. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
