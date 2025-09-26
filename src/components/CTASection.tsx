import { NavLink } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="text-center py-16 px-6 sm:py-20 bg-gradient-to-t from-zinc-950/40 to-black">
      <h3 className="text-2xl md:text-3xl font-bold mb-6">
        Ready to take Queue Pilot for a spin?
      </h3>
      <NavLink
        to="/sign-up"
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-blue-400 text-black font-semibold shadow-lg hover:opacity-90 transition"
      >
        Start Free Today
      </NavLink>
    </section>
  );
};

export default CTASection;
