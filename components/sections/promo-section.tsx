'use client';

import Image from 'next/image';
import Link from 'next/link';
import promoData from '@/data/homePageData.json';

export default function PromoHeroSection() {
  const { title, description, button, image } = promoData.promoHeroSection;

  return (
    <section className="relative w-full h-[520px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt="Promo Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="w-full md:w-8/12">
          <h3 className="font-serif text-white text-[38px] leading-tight lg:text-[48px] mb-2">
            {title}
          </h3>

          <p className="text-gray-300 text-base lg:text-lg mb-9 max-w-2xl mx-auto">
            {description}
          </p>

          <Link
            href={button.url}
            className="bg-white text-black px-12 py-4 rounded-full text-sm tracking-wide font-medium hover:bg-gray-200 transition">
            {button.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
