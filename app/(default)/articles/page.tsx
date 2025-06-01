import React from "react";
import type { Metadata } from "next";
import PageIllustration from "@/components/page-illustration";

export const metadata: Metadata = {
  title: "Articles & Publications - 0xU Hong Kong Blockchain Club",
  description: "Explore our research reports, tutorials, and educational content on Web3 and blockchain technology.",
};

export default function Articles() {
  return (
    <>
      <PageIllustration />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Page header */}
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Articles & Publications
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl text-indigo-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Discover our research insights, educational content, and thought leadership in the Web3 and blockchain space.
                </p>
              </div>
            </div>

            {/* Research Reports Section */}
            <div className="pb-12 md:pb-20">
              <h2 className="mb-8 text-3xl font-bold text-gray-200" data-aos="fade-up">
                Research Reports
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Market Research */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={100}>
                  <div className="mb-4">
                    <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">Market Research</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">DeFi Market Analysis Q4 2023</h3>
                  <p className="mb-4 text-gray-400">
                    Comprehensive analysis of the DeFi ecosystem, including TVL trends, protocol innovations, and market dynamics.
                  </p>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By 0xU Research Department</span> • <span>Dec 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Read More →</a>
                </div>

                {/* Project Research */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={200}>
                  <div className="mb-4">
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">Project Research</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">Layer 2 Scaling Solutions Deep Dive</h3>
                  <p className="mb-4 text-gray-400">
                    In-depth analysis of Ethereum Layer 2 solutions, comparing performance, security, and adoption metrics.
                  </p>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By Oscar Cheng</span> • <span>Nov 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Read More →</a>
                </div>

                {/* Economic Research */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={300}>
                  <div className="mb-4">
                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-300">Economic Research</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">Crypto Regulation in Asia-Pacific</h3>
                  <p className="mb-4 text-gray-400">
                    Analysis of regulatory frameworks across APAC region and their impact on crypto adoption and innovation.
                  </p>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By 0xU Research Department</span> • <span>Oct 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Read More →</a>
                </div>

                {/* NFT Market Analysis */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={400}>
                  <div className="mb-4">
                    <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300">Market Research</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">NFT Utility Evolution Report</h3>
                  <p className="mb-4 text-gray-400">
                    Exploring the evolution of NFTs from digital collectibles to utility-driven assets in gaming and DeFi.
                  </p>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By Dennis Wong</span> • <span>Sep 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Read More →</a>
                </div>

                {/* DAO Governance */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={500}>
                  <div className="mb-4">
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">Project Research</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">DAO Governance Mechanisms Study</h3>
                  <p className="mb-4 text-gray-400">
                    Comparative study of governance models across major DAOs and their effectiveness in decision-making.
                  </p>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By Charles Li</span> • <span>Aug 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Read More →</a>
                </div>

                {/* Macroeconomic Impact */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={600}>
                  <div className="mb-4">
                    <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300">Economic Research</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">Crypto & Macroeconomic Trends</h3>
                  <p className="mb-4 text-gray-400">
                    Analysis of how global macroeconomic factors influence cryptocurrency markets and adoption patterns.
                  </p>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By Oliver Chen</span> • <span>Jul 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Read More →</a>
                </div>
              </div>
            </div>

            {/* Educational Content Section */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-gray-200" data-aos="fade-up">
                Tutorials & Educational Content
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {/* Web3 Fundamentals */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={100}>
                  <div className="mb-4">
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">Tutorial Series</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">Web3 Fundamentals Course</h3>
                  <p className="mb-4 text-gray-400">
                    Comprehensive tutorial series covering Bitcoin, Ethereum, DeFi, NFTs, and DAOs. Based on our successful HKU Offline Web3 Course.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Bitcoin</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Ethereum</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">DeFi</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">NFT</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">DAO</span>
                    </div>
                  </div>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By 0xU Education Team</span> • <span>Updated Dec 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Start Learning →</a>
                </div>

                {/* Developer Guides */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={200}>
                  <div className="mb-4">
                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">Developer Guide</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">Smart Contract Development Guide</h3>
                  <p className="mb-4 text-gray-400">
                    Step-by-step guides for building smart contracts, from basic Solidity concepts to advanced DeFi protocols.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Solidity</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Web3.js</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Hardhat</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Testing</span>
                    </div>
                  </div>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By 0xU Technology Department</span> • <span>Updated Nov 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">View Guides →</a>
                </div>

                {/* Trading & Investment */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={300}>
                  <div className="mb-4">
                    <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-300">Investment Guide</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">DeFi Investment Strategies</h3>
                  <p className="mb-4 text-gray-400">
                    Educational content on DeFi investment strategies, risk management, and yield farming techniques.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Yield Farming</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Liquidity Mining</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Risk Management</span>
                    </div>
                  </div>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By Investment Research Team</span> • <span>Updated Oct 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Learn More →</a>
                </div>

                {/* Industry Insights */}
                <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={400}>
                  <div className="mb-4">
                    <span className="rounded-full bg-pink-500/20 px-3 py-1 text-sm text-pink-300">Industry Insights</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-200">Web3 Career Pathways</h3>
                  <p className="mb-4 text-gray-400">
                    Comprehensive guide to career opportunities in Web3, from technical roles to business development and research positions.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Career Planning</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Skill Development</span>
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs text-gray-300">Networking</span>
                    </div>
                  </div>
                  <div className="mb-4 text-sm text-gray-500">
                    <span>By Growth Department</span> • <span>Updated Sep 2023</span>
                  </div>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300">Explore Careers →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 