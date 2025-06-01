export const metadata = {
  title: "Events - 0xU Hong Kong Blockchain Club",
  description: "Discover our events, competitions, and collaborative activities in the Web3 space.",
};

import PageIllustration from "@/components/page-illustration";

export default function Events() {
  return (
    <>
      <PageIllustration />
      <section>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Page header */}
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Our Events
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl text-indigo-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Discover our signature events, collaborative activities, and competitions that drive innovation in the Web3 space.
                </p>
              </div>
            </div>

            {/* Our Events Section */}
            <div className="pb-12 md:pb-20">
            <h2 className="mb-8 text-3xl font-bold text-gray-200" data-aos="fade-up">
                Our Signature Events
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {/* 0xU Unitour Series */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20" data-aos="fade-up" data-aos-delay={100}>
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Image section */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-600/30 to-purple-600/20"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">🎓</div>
                    </div>
                    {/* Glowing orb effect */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                  </div>
                  
                  {/* Content section */}
                  <div className="relative p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">0xU Unitour Series</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">Quarterly</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Cross-university tour events bringing together blockchain enthusiasts from all Hong Kong universities.
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-medium">Active</span>
                      </div>
                      <div className="text-xs text-slate-400">🔥 Popular</div>
                    </div>
                  </div>
                </div>

                {/* 0xU Career Day */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20" data-aos="fade-up" data-aos-delay={200}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-600/30 to-pink-600/20"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">💼</div>
                    </div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                  </div>
                  
                  <div className="relative p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">0xU Career Day</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">Annual</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Connect students with leading Web3 companies and explore career opportunities in blockchain.
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-yellow-400 font-medium">Featured</span>
                      </div>
                      <div className="text-xs text-slate-400">⭐ Premium</div>
                    </div>
                  </div>
                </div>

                {/* Company Visits */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20" data-aos="fade-up" data-aos-delay={300}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-cyan-600/30 to-teal-600/20"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">🏢</div>
                    </div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                  </div>
                  
                  <div className="relative p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">Company Visits</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">Monthly</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Exclusive visits to top Web3 companies and startups in Hong Kong and beyond.
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-orange-400 font-medium">Trending</span>
                      </div>
                      <div className="text-xs text-slate-400">🚀 Hot</div>
                    </div>
                  </div>
                </div>

                {/* Demo Days */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20" data-aos="fade-up" data-aos-delay={400}>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-600/30 to-green-600/20"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">🚀</div>
                    </div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                  </div>
                  
                  <div className="relative p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">Demo Days</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">Bi-monthly</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Showcase innovative Web3 projects developed by our community members.
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-blue-400 font-medium">Innovation</span>
                      </div>
                      <div className="text-xs text-slate-400">💡 Creative</div>
                    </div>
                  </div>
                </div>

                {/* Academic Presentations */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20" data-aos="fade-up" data-aos-delay={500}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-indigo-600/30 to-violet-600/20"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">📚</div>
                    </div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-indigo-400 rounded-full animate-pulse shadow-lg shadow-indigo-400/50"></div>
                  </div>
                  
                  <div className="relative p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">Academic Presentations</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">Weekly</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Deep-dive sessions on blockchain technology, DeFi protocols, and Web3 innovations.
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-purple-400 font-medium">Educational</span>
                      </div>
                      <div className="text-xs text-slate-400">📖 Learning</div>
                    </div>
                  </div>
                </div>

                {/* AMAs & Twitter Spaces */}
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-rose-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/20" data-aos="fade-up" data-aos-delay={600}>
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 via-rose-600/30 to-pink-600/20"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
                    <div className="relative h-full flex items-center justify-center">
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">💬</div>
                    </div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-rose-400 rounded-full animate-pulse shadow-lg shadow-rose-400/50"></div>
                  </div>
                  
                  <div className="relative p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors duration-300">AMAs & Twitter Spaces</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-rose-500/20 text-rose-300 rounded-full border border-rose-500/30">Bi-weekly</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Interactive sessions with industry leaders and Web3 pioneers.
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-red-400 font-medium">Live</span>
                      </div>
                      <div className="text-xs text-slate-400">🎙️ Interactive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Event Highlights */}
            <div className="pb-12 md:pb-20">
              <h2 className="mb-8 text-3xl font-bold text-gray-200" data-aos="fade-up">
                Past Event Highlights
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={100}>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">0xU Youth Pioneer Forum</h3>
                  <p className="mb-4 text-gray-400">
                    A groundbreaking forum that brought together young Web3 innovators from across Asia-Pacific.
                  </p>
                  <span className="text-sm text-indigo-400">2023</span>
                </div>
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={200}>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">HKU Offline Web3 Course</h3>
                  <p className="mb-4 text-gray-400">
                    Comprehensive Web3 education program covering Bitcoin, Ethereum, DeFi, NFTs, and DAOs.
                  </p>
                  <span className="text-sm text-indigo-400">2023</span>
                </div>
              </div>
            </div>

            {/* Competitions */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-200" data-aos="fade-up">
                Competitions
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={100}>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">0xU Web3 Game Tournament</h3>
                  <p className="mb-4 text-gray-400">
                    Competitive gaming tournament featuring the latest Web3 games and blockchain-based gaming platforms.
                  </p>
                  <span className="text-sm text-indigo-400">Annual Competition</span>
                </div>
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={200}>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">Ape.Pro Trading Competition</h3>
                  <p className="mb-4 text-gray-400">
                    Trading competition in partnership with Ape.Pro, testing skills in DeFi and crypto trading.
                  </p>
                  <span className="text-sm text-indigo-400">Quarterly Competition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 