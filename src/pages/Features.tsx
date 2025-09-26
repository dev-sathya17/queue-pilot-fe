import Header from "../components/Header";
import { features } from "../data/features";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const Features = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black text-gray-200 flex flex-col">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="px-6 sm:px-12 md:px-20 py-20 md:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl mx-auto">
          Powerful Features to Run Jobs
          <span className="block bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
            Smoothly, Reliably, and at Scale ✈️
          </span>
        </h2>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Queue Pilot handles the heavy lifting of job scheduling, execution,
          and monitoring, so you can focus on building your product.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="px-6 sm:px-12 md:px-20 py-16 md:py-24 bg-gradient-to-b from-zinc-950/40 to-black">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition shadow-md text-center"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="px-6 sm:px-12 md:px-20 py-20 md:py-28 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          From Queue to Completion 🚀
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Every job you submit goes through a seamless process — from being
          queued, picked up by workers, executed, and finally tracked in your
          dashboard.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {["Queued", "Processing", "Completed"].map((step, idx) => (
            <div
              key={idx}
              className="w-full md:w-75 px-6 py-4 rounded-xl border border-white/5 bg-white/[0.02] shadow-md flex flex-col items-center"
            >
              <span className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">
                {step}
              </span>
              <span className="w-3 h-3 rounded-full bg-pink-400 animate-pulse" />
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

export default Features;
