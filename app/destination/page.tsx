import Image from 'next/image';

/* ---------------------------------
   DATA
---------------------------------- */

const destinationData = {
  kerala: {
    title: 'Kerala',
    description:
      'Kerala is known for its serene backwaters, lush greenery, and beautiful beaches.',
    image: '/assets/images/kerala-banner.jpg',
  },
  ooti: {
    title: 'Ooty',
    description:
      'Ooty is a charming hill station famous for tea gardens and cool climate.',
    image: '/assets/images/ooty-banner.jpg',
  },
  bengaluru: {
    title: 'Bengaluru',
    description:
      'Bengaluru is the Silicon Valley of India with vibrant culture and nightlife.',
    image: '/assets/images/bengaluru-banner.jpg',
  },
};

/* ---------------------------------
   PAGE (ASYNC — IMPORTANT)
---------------------------------- */

export default async function DestinationDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ unwrap params
  const { slug } = await params;

  const destination = destinationData[slug as keyof typeof destinationData];

  if (!destination) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-semibold">Destination not found</h1>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={destination.image}
          alt={destination.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white">
            {destination.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="wrapper max-w-4xl text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {destination.description}
          </p>
        </div>
      </section>
    </main>
  );
}
