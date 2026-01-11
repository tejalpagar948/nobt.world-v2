import Image from 'next/image';
import Link from 'next/link';
import destinationData from '@/app/data/destinations.json';

/* ================================
   TYPES
================================ */

type ItineraryDay = {
  day: string;
  title: string;
  description: string;
};

type Package = {
  slug: string;
  title: string;
  startingPrice: string;
  priceNote: string;
  duration: string;
  nights: string;
  heroImage: string;
  overview: string;
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
};

type GalleryItem = {
  name: string;
  src: string;
};

type Destination = {
  slug: string;
  title: string;
  description: string;
  image: string;
  packages: Package[];
  gallery?: GalleryItem[];
};

type DestinationsData = Record<string, Destination>;

type PageProps = {
  params: Promise<{ slug: string }>;
};

/* ================================
   PAGE
================================ */

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;

  const data = destinationData as DestinationsData;
  const destination = data[slug];

  if (!destination) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-3xl font-serif text-red-600">
          Destination not found
        </h1>
      </div>
    );
  }

  return (
    <main className="font-sans">
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh]">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          priority
          className="object-cover brightness-90"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-serif mb-6">
            {destination.title}
          </h1>

          <p className="text-white/80 max-w-xl mb-8 text-lg">
            Plan your perfect getaway to {destination.title} with curated travel
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
              Enquire Now
            </Link>

            <Link
              href="#packages"
              className="border border-white/70 hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-lg font-medium transition">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Explore the Beauty of {destination.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Discover why {destination.title} is one of the most loved travel
              destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {destination.description}
              </p>

              <ul className="space-y-4">
                {[
                  'Scenic landscapes and unforgettable views',
                  'Rich culture and heritage',
                  'Perfect for couples, families, and solo travelers',
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 font-bold">
                      ✓
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '4.8★', label: 'Traveler Rating' },
                { value: '120+', label: 'Happy Clients' },
                { value: 'Best', label: 'Time to Visit' },
                { value: 'Top', label: 'Destination' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-md">
                  <h3 className="text-4xl font-bold text-yellow-500 mb-2">
                    {item.value}
                  </h3>
                  <p className="text-sm text-gray-600 uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="bg-black py-20" id="packages">
        <div className="wrapper">
          <h2 className="text-3xl md:text-[45px] font-serif text-center mb-12 text-white">
            {destination.title} Packages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destination.packages.map((pkg) => (
              <Link
                href={`/destination/${destination.slug}/${pkg.slug}`}
                target="_blank">
                <div
                  key={pkg.slug}
                  className="relative h-[320px] rounded-2xl overflow-hidden group shadow-lg">
                  <Image
                    src={pkg.heroImage || destination.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{pkg.title}</h3>
                    <p className="text-sm text-white/80 mb-2">{pkg.duration}</p>
                    <p className="text-sm text-white/90 mb-4 line-clamp-3">
                      {pkg.overview}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">
                        {pkg.startingPrice}
                      </span>

                      <Link
                        href={`/destination/${destination.slug}/${pkg.slug}`}
                        className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-medium">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      {destination.gallery && (
        <section className="py-20 bg-white">
          <div className="wrapper">
            <h2 className="text-3xl md:text-[45px] font-serif text-center mb-12">
              Things To Do In{' '}
              <span className="text-yellow-500">{destination.title}</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {destination.gallery.map((item, index) => (
                <div key={index}>
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 text-lg font-bold text-center text-gray-700">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
