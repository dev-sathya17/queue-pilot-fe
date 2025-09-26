import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { faqCategory, docCategories as initialCategories } from "../data/docs";

const docCategories = [...initialCategories, faqCategory];

const Docs = () => {
  const [search, setSearch] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [selectedCategory, setSelectedCategory] = useState<string>(
    docCategories[0].name
  );

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black text-gray-200 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="px-4 sm:px-12 md:px-20 py-16 sm:py-20 md:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-400">
          Queue Pilot Documentation
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Everything you need to get started, understand the credit system, run
          jobs efficiently, and manage your account.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search docs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full sm:w-1/2 px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-200"
        />
      </section>

      {/* Docs Content with Sidebar */}
      <section className="flex flex-col lg:flex-row px-4 sm:px-16 md:px-20 py-28 sm:py-8 md:py-4 gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="hidden lg:block bg-white/[0.02] border border-white/5 rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {docCategories.map((cat) => (
                <li
                  key={cat.name}
                  className={`cursor-pointer px-3 py-1 rounded-lg hover:bg-white/[0.05] transition ${
                    selectedCategory === cat.name
                      ? "bg-pink-500/30 font-semibold"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile dropdown */}
          <div className="lg:hidden relative mb-4">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="w-full px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <span>{selectedCategory}</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute mt-2 w-full bg-zinc-900/90 border border-white/10 rounded-lg shadow-lg z-20">
                {docCategories.map((cat) => (
                  <li
                    key={cat.name}
                    className="px-4 py-2 cursor-pointer hover:bg-zinc-800/70 transition"
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setDropdownOpen(false);
                    }}
                  >
                    {cat.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* Docs List */}
        <div className="flex-1 space-y-6">
          {docCategories
            .filter((cat) => cat.name === selectedCategory)
            .map((category) =>
              category.items
                .filter(
                  (item) =>
                    item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.content.toLowerCase().includes(search.toLowerCase())
                )
                .map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/[0.02] border border-white/5 rounded-xl p-4 hover:bg-white/[0.05] transition cursor-pointer"
                  >
                    <div
                      className="flex justify-between items-center"
                      onClick={() => toggleSection(item.title)}
                    >
                      <h3 className="font-semibold">{item.title}</h3>
                      <span className="text-gray-400">
                        {expandedSections[item.title] ? "-" : "+"}
                      </span>
                    </div>
                    {expandedSections[item.title] && (
                      <p className="mt-2 text-gray-400 text-sm">
                        {item.content}
                      </p>
                    )}
                  </div>
                ))
            )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Docs;
