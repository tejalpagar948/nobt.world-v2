import Image from 'next/image';
import destinationData from '@/app/data/destinations.json';
import ItineraryAccordion from '@/app/component/itinerary-accordion';
import Link from 'next/link';
import QueryButton from '@/app/component/query-button';

type PageProps = {
  params: Promise<{ slug: string; package: string }>;
};

export default async function PackagePage({ params }: PageProps) {
  const { slug, package: packageSlug } = await params;

  const destination = destinationData[slug as keyof typeof destinationData];
  const pkg = destination?.packages.find((p) => p.slug === packageSlug);

  if (!pkg) {
    return <div className="p-20 text-center">Package not found</div>;
  }

  const includes = [
    { name: 'Flights', icon: '✈️' },
    { name: 'Sightseeing', icon: '🏞️' },
    { name: 'Transport', icon: '🚗' },
    { name: 'Hotel', icon: '🏨' },
    { name: 'Breakfast', icon: '🍳' },
  ];

  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative h-[85vh]">
        <Image
          src={pkg.heroImage}
          alt={pkg.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
          <div className="mx-auto text-white">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-center">
              {pkg.title}
            </h2>
            <p className="max-w-xl text-lg text-center">{pkg.overview}</p>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="wrapper pt-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-black transition">
          Home
        </Link>
        {' / '}
        <Link
          href={`/destination/${destination.slug}`}
          className="hover:text-black transition capitalize">
          {destination.slug}
        </Link>
        {' / '}
        <span className="text-black font-medium">{pkg.title}</span>
      </div>

      {/* TITLE */}
      <section className="pt-5 wrapper">
        <h3 className="text-3xl font-bold mb-4">Package Overview</h3>
        <p className="text-gray-600 max-w-3xl">{pkg.overview}</p>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-20 pt-5">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* LEFT */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-2 text-lg font-bold mb-6 text-gray-600">
              📅 {pkg.nights}, {pkg.days}
            </div>
            <ItineraryAccordion itinerary={pkg.itinerary} />
          </div>

          {/* RIGHT */}
          <div className="sticky top-24 space-y-6">
            <div className="bg-black text-white rounded-2xl shadow-xl p-8 text-center">
              <p className="text-sm mb-1 text-gray-300">Starting from</p>
              <h3 className="text-4xl font-bold mb-1">{pkg.startingPrice}</h3>
              <p className="text-gray-400 mb-4">Per Person</p>
              <p className="mb-6">{pkg.nights} Stay</p>

              <QueryButton
                destination={destination.title}
                packageTitle={pkg.title}
              />
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFF7E0] flex items-center justify-center shadow-inner">
                🎧
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-1 text-lg">Need Assistance?</p>
                <p>+91 9875097169</p>
                <p>+91 9106639179</p>
                <p className="text-[#D6A200]">info@nobt.world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOUR INCLUDES */}
      <section className="py-20 bg-black">
        <div className="wrapper">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Tour Includes
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {includes.map((item) => (
              <div
                key={item.name}
                className="
            bg-[#111]
            border border-white/10
            rounded-2xl
            p-6
            text-center
            transition
            hover:border-[#D6A200]
            hover:shadow-[0_0_0_1px_#D6A200]
          ">
                <div
                  className="
              w-14 h-14
              mx-auto mb-4
              rounded-full
              bg-black
              border border-gray-800
              flex items-center justify-center
              text-xl
            ">
                  {item.icon}
                </div>

                <p className="font-medium text-white">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS & EXCLUSIONS */}
      <section className="py-20 bg-white">
        <div className="wrapper">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Inclusions & Exclusions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* INCLUSIONS */}
            <div className="bg-black rounded-3xl p-10 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Inclusions
              </h3>

              <div className="h-px bg-white mb-6" />

              <ul className="space-y-4">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 text-sm">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXCLUSIONS */}
            <div className="bg-black rounded-3xl p-10 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Exclusions
              </h3>

              <div className="h-px bg-white mb-6" />

              <ul className="space-y-4">
                {pkg.excludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/15 text-red-400 text-sm">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
