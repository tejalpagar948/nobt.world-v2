'use client';

import Image from 'next/image';
import LargeImage from '../../../public/assets/images/travel-hero-section-large-image.jpg';
import SecondImage from '../../../public/assets/images/travel-section-image2.jpg';

interface HeroTravelMobileProps {
  className?: string; // optional string
}

const HeroTravelMobile: React.FC<HeroTravelMobileProps> = ({ className }) => {
  return (
    <section className={`w-full bg-white my-14 lg:hidden ${className}`}>
      <div className="wrapper">
        <h3 className="font-serif text-[32px] leading-[1.2] mb-3">
          Begin Your New Life Experience With Exploring New Destination
        </h3>

        <p className="text-gray-500 mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>

        <div className="flex gap-4 mb-10">
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm">
            ABOUT US
          </button>
          <button className="border border-black px-6 py-3 rounded-full text-sm">
            EXPLORE TRIP
          </button>
        </div>

        {/* STACKED IMAGES */}
        <div className="flex flex-col gap-6">
          {[LargeImage, SecondImage, SecondImage].map((img, i) => (
            <div key={i} className="relative w-full h-[360px]">
              <Image
                src={img.src}
                alt="Travel"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          ))}

          {/* CARD */}
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
              Variation Of Asian <br /> Travel Trip
            </h4>

            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, aenean commodo ligula.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTravelMobile;
