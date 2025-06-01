import Image from "next/image";

export default function OrganizationStructure() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 md:py-12">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-6 text-center md:pb-8">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Partner Universities & Our Community
            </h2>

          </div>

          {/* Content Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Partner Universities */}
            <div className="rounded-lg bg-slate-800 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-200">
                Partner Universities
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/hku.png"
                    alt="HKU"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/cuhk.png"
                    alt="CUHK"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/hkust.png"
                    alt="HKUST"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/cityu.png"
                    alt="CityU"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/polyu.png"
                    alt="PolyU"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Our Community */}
            <div className="rounded-lg bg-slate-800 p-6">
              <h3 className="mb-4 text-xl font-semibold text-gray-200">
                Our Community
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Core Members</span>
                  <span className="text-2xl font-bold text-primary">80+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Active Builders</span>
                  <span className="text-2xl font-bold text-secondary">150+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Total Community</span>
                  <span className="text-2xl font-bold text-accent">2000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 