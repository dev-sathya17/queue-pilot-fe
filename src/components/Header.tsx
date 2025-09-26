import { useState } from "react";
import Logo from "../assets/icons/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center px-4 sm:px-8 py-6 border-b border-white/5">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
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
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-pink-400 transition ${
              isActive ? "text-pink-400 font-semibold" : "text-gray-300"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/features"
          className={({ isActive }) =>
            `hover:text-pink-400 transition ${
              isActive ? "text-pink-400 font-semibold" : "text-gray-300"
            }`
          }
        >
          Features
        </NavLink>

        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `hover:text-pink-400 transition ${
              isActive ? "text-pink-400 font-semibold" : "text-gray-300"
            }`
          }
        >
          Pricing
        </NavLink>

        <NavLink
          to="/docs"
          className={({ isActive }) =>
            `hover:text-pink-400 transition ${
              isActive ? "text-pink-400 font-semibold" : "text-gray-300"
            }`
          }
        >
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
  );
};

export default Header;
