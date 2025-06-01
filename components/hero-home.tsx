import Image from "next/image";
import Typewriter from "./typewriter";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-16">
          {/* Section header */}
          <div className="pb-8 text-center md:pb-12">
            <div className="pb-5" data-aos="fade-up">
              <Typewriter 
                text="0xU Hong Kong Blockchain Club"
                speed={50}
                className="text-4xl md:text-5xl font-semibold font-mono"
              />
            </div>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Initiated by university students in Hong Kong, committed to cross-school cooperation and integration into the Web3 industry. We Incubate, Educate, and Bridge the future of blockchain.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/events"
                  >
                    <span className="relative inline-flex items-center">
                      Explore Events
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="/articles"
                  >
                    Read Research
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto max-w-4xl" data-aos="fade-up">
            <Image
              src="/images/0xu.png"
              alt="0xU Team"
              width={1104}
              height={576}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
