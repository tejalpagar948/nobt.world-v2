'use client';
import React from 'react';
import AboutImage from '../../public/assets/images/blog-section-image.jpg';
import AboutImage2 from '../../public/assets/images/travel-hero-section-large-image.jpg';
import Image from 'next/image';
import SecurityIcon from '../../public/assets/icons/security.svg';
import AboutImage3 from '../../public/assets/images/destination1.jpg';

export default function AboutPage() {
  return (
    <main className="w-full bg-white text-black">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] w-full">
        <Image
          src={AboutImage.src}
          alt="About NOBT World"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-5">
            <h1 className="text-4xl md:text-6xl font-serif text-white">
              About NOBT World
            </h1>
            <p className="mt-5 text-white/80 text-lg">
              Discover the world through meaningful journeys, unforgettable
              experiences, and stories that stay with you forever.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="py-14 lg:py-27">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              NOBT World was created with a simple belief — travel should be
              more than just visiting places. It should be about connection,
              discovery, and moments that turn into lifelong memories.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What began as a passion for exploring new destinations has grown
              into a platform dedicated to helping travelers experience the
              world with confidence, comfort, and curiosity.
            </p>
          </div>

          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden">
            <Image
              src={AboutImage2.src}
              alt="Our story"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="py-14 lg:py-27 relative bg-black">
        <div className="wrapper">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-12 text-white text-center">
            Our Mission
          </h2>
          {/* Mission Card */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-[#1b1b1b] p-10 shadow-lg border ">
              <h3 className="text-2xl font-serif mb-4 text-white">
                Our Mission
              </h3>
              <p className="text-gray-300">
                To design seamless and inspiring travel experiences that help
                people explore the world effortlessly while creating memories
                that last a lifetime.
              </p>
            </div>
            {/* Vision Card */}
            <div className="rounded-3xl bg-[#1b1b1b] p-10 shadow-lg border ">
              <h3 className="text-2xl font-serif mb-4 text-white">
                Our Vision
              </h3>
              <p className="text-gray-300">
                To become a trusted global travel brand that inspires
                responsible exploration, cultural appreciation, and meaningful
                journeys across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="py-14 lg:py-27 bg-[#fafafa]">
        <div className="wrapper">
          {/* SECTION TITLE */}
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-6 md:mb-12">
            Why Choose NOBT World
          </h2>
          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
            {[
              {
                title: 'Curated Experiences',
                desc: 'Thoughtfully designed journeys that go beyond standard travel packages.',
                icon: SecurityIcon,
              },
              {
                title: 'Expert Guidance',
                desc: 'Travel insights and planning support from experienced explorers.',
                icon: SecurityIcon,
              },
              {
                title: 'Transparent Planning',
                desc: 'Clear guidance, honest recommendations, and stress-free bookings.',
                icon: SecurityIcon,
              },
              {
                title: 'Passion for Travel',
                desc: 'Every journey is crafted with genuine love for exploration.',
                icon: SecurityIcon,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border-1 border-gray-200
            group
            relative
            rounded-[28px]
            bg-white
            p-9
            text-center
            transition-all duration-300
            hover:-translate-y-3
            hover:shadow-2xl
          ">
                {/* ICON */}
                <div
                  className="
              mx-auto mb-7
              flex h-16 w-16 items-center justify-center
              rounded-full
              bg-black
              transition-transform duration-300
              group-hover:scale-110
            ">
                  <Image
                    src={item.icon.src}
                    alt={item.title}
                    width={28}
                    height={28}
                  />
                </div>

                {/* TITLE */}
                <h4 className="text-lg font-semibold mb-4">{item.title}</h4>

                {/* TEXT */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER ACCENT */}
                <span
                  className="
              pointer-events-none
              absolute inset-x-10 bottom-6
              h-[1px]
              bg-black/0
              transition
              group-hover:bg-black/10
            "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-14 lg:py-27 bg-black">
        <div className="wrapper">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-6 md:mb-12 text-white">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                title: 'Customized Trips',
                desc: 'Personalized travel plans designed around your interests and pace.',
              },
              {
                title: 'Group Tours',
                desc: 'Well-organized group experiences that bring people together.',
              },
              {
                title: 'Travel Assistance',
                desc: 'End-to-end support to ensure a smooth and worry-free journey.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#1b1b1b] to-[#0f0f0f]">
                {/* IMAGE */}
                <div className="group relative h-45 overflow-hidden">
                  <Image
                    src={AboutImage3}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* GRADIENT */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="px-10 py-8 text-center">
                  <h4 className="text-2xl font-serif mb-3 text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 text-white">
        {/* Background Image */}
        <Image
          src={AboutImage2.src}
          alt="Travel background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 wrapper text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Ready to Explore the World?
          </h2>

          <p className="text-white/70 mb-10">
            Let NOBT World help you plan your next unforgettable journey.
          </p>

          <button className="rounded-full bg-white text-black px-10 py-4 font-medium hover:bg-gray-200 transition">
            Start Your Journey
          </button>
        </div>
      </section>
    </main>
  );
}
