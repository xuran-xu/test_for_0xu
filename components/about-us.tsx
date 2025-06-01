import Image from "next/image";

export default function AboutUs() {
  const universities = [
    { name: "The University of Hong Kong", shortName: "HKU", logo: "/images/hku.png" },
    { name: "The Chinese University of Hong Kong", shortName: "CUHK", logo: "/images/cuhk.png" },
    { name: "The Hong Kong University of Science and Technology", shortName: "HKUST", logo: "/images/hkust.png" },
    { name: "City University of Hong Kong", shortName: "CityU", logo: "/images/cityu.png" },
    { name: "The Hong Kong Polytechnic University", shortName: "PolyU", logo: "/images/polyu.png" },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              About Us
            </h2>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                We are a cross-university blockchain community with members from all major universities across Hong Kong, fostering collaboration and innovation in the Web3 space.
              </p>
            </div>
          </div>

          {/* Universities Section */}
          <div className="pb-12 md:pb-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-200" data-aos="fade-up">
              Partner Universities
            </h3>
            <div className="grid gap-8 md:grid-cols-5" data-aos="fade-up" data-aos-delay={200}>
              {universities.map((uni) => (
                <div key={uni.name} className="text-center">
                  <div className="mb-4 flex items-center justify-center">
                    <Image
                      src={uni.logo}
                      alt={uni.name}
                      width={80}
                      height={80}
                      className="transition-opacity hover:opacity-80"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-300">{uni.shortName}</p>
                  <p className="mt-1 text-xs text-gray-400">{uni.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="pb-12 md:pb-16">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-200" data-aos="fade-up">
              Our Community
            </h3>
            <div className="grid gap-8 md:grid-cols-3" data-aos="fade-up" data-aos-delay={200}>
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-indigo-400">30+</span>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-200">Core Members</h4>
                <p className="text-gray-400">Dedicated leaders driving our initiatives forward</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-purple-400">150+</span>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-200">Active Builders</h4>
                <p className="text-gray-400">Developers and researchers actively contributing</p>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-400">2000+</span>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-gray-200">Community Members</h4>
                <p className="text-gray-400">Total members across all our platforms</p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="text-center">
            <h3 className="mb-8 text-2xl font-bold text-gray-200" data-aos="fade-up">
              Our Mission
            </h3>
            <div className="grid gap-8 md:grid-cols-3" data-aos="fade-up" data-aos-delay={200}>
              <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <div className="mb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                    <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-4 text-xl font-semibold text-gray-200">Incubate</h4>
                <p className="text-gray-400">Foster innovative Web3 projects and startups within our community</p>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <div className="mb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                    <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-4 text-xl font-semibold text-gray-200">Educate</h4>
                <p className="text-gray-400">Provide comprehensive Web3 education and research opportunities</p>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-6 backdrop-blur-sm">
                <div className="mb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                    <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-4 text-xl font-semibold text-gray-200">Bridge</h4>
                <p className="text-gray-400">Connect students with industry leaders and career opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 