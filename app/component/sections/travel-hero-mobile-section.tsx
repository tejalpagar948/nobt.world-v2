'use client';

import Image from 'next/image';
import Link from 'next/link';
import heroData from '../../data/homePageData.json';

interface HeroTravelMobileProps {
  className?: string;
}

const HeroTravelMobile: React.FC<HeroTravelMobileProps> = ({ className }) => {
  const { topContent, bottomImages } = heroData.TravelHeroSection;

  const images = [
    bottomImages.largeImage,
    bottomImages.secondImage,
    bottomImages.thirdImage,
  ];

  return (
    <section className={`w-full bg-white my-14 lg:hidden ${className}`}>
      <div className="wrapper">
        {/* TITLE */}
        <h3 className="font-serif text-[32px] leading-[1.2] mb-3">
          {topContent.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mb-4 leading-relaxed">
          {topContent.description}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mb-10">
          {topContent.buttons.map((btn, index) => (
            <Link key={index} href={btn.link}>
              <button
                className={`px-6 py-3 rounded-full text-sm transition ${
                  btn.type === 'primary'
                    ? 'bg-black text-white'
                    : 'border border-black'
                }`}>
                {btn.text}
              </button>
            </Link>
          ))}
        </div>

        {/* STACKED IMAGES */}
        <div className="flex flex-col gap-6">
          {images.map((img, i) => (
            <div key={i} className="relative w-full h-[360px]">
              <Image
                src={img}
                alt="Travel"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          ))}

          {/* OVERLAY CARD */}
          <div className="bg-black text-white rounded-3xl p-8">
            <div className="w-12 h-12 mb-6 rounded-full bg-white flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="10" y1="18" x2="14" y2="18" />
              </svg>
            </div>

            <h4 className="font-serif text-2xl leading-snug mb-4">
              {bottomImages.overlayBox.title}
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed">
              {bottomImages.overlayBox.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTravelMobile;
