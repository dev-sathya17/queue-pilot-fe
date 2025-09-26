import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import Header from "../components/Header";
import { plans } from "../data/plans";

const Pricing = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black text-gray-200 flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="px-4 sm:px-12 md:px-20 py-16 sm:py-20 md:py-28 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl md:max-w-4xl mx-auto">
          Choose the Plan That Fits Your Needs
          <span className="block bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
            Flexible Pricing for Every Scale ✈️
          </span>
        </h2>
        <p className="mt-4 sm:mt-6 text-gray-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Queue Pilot offers plans for hobby projects to large-scale
          enterprises. Scale smoothly without worrying about job execution
          limits.
        </p>
      </section>

      {/* Pricing Grid */}
      <section className="px-4 sm:px-12 md:px-20 py-12 sm:py-16 md:py-24 bg-gradient-to-b from-zinc-950/40 to-black">
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 sm:p-8 border border-white/5 ${plan.bg} hover:bg-white/[0.05] transition shadow-md text-center flex flex-col justify-between`}
            >
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  {plan.name}
                </h4>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  {plan.price}
                  {plan.price !== "Contact Us" && (
                    <span className="text-gray-400 text-sm sm:text-lg">
                      /mo
                    </span>
                  )}
                </p>
                <ul className="mb-4 sm:mb-6 text-gray-400 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-pink-400 flex-shrink-0 mt-1" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <NavLink
                to="/signup"
                className={`mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gradient-to-r ${plan.gradient} text-black font-semibold shadow-lg hover:opacity-90 transition`}
              >
                {plan.price === "Contact Us" ? "Contact Sales" : "Get Started"}
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;
