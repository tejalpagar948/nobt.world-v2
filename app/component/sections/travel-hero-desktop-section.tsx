'use client';
import Image from 'next/image';
import heroData from '../../data/homePageData.json';
import Link from 'next/link';

interface HeroTravelDesktopProps {
  className?: string;
}

const HeroTravelDesktop: React.FC<HeroTravelDesktopProps> = ({ className }) => {
  const { topContent, bottomImages } = heroData.TravelHeroSection;

  return (
    <section
      className={`w-full bg-white my-14 lg:my-27 hidden lg:block ${className}`}>
      <div className="wrapper">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-9 items-start pb-13">
          <h3 className="font-serif text-[48px] leading-[1.2] max-w-xl lg:col-span-5">
            {topContent.title}
          </h3>

          <div className="max-w-lg lg:col-span-4">
            <p className="text-gray-500 mb-8 leading-relaxed">
              {topContent.description}
            </p>

            <div className="flex gap-4">
              {topContent.buttons.map((btn, index) => (
                <Link
                  href={btn.link}
                  key={index}
                  className={`px-8 py-4 rounded-full text-sm tracking-wide ${
                    btn.type === 'primary'
                      ? 'bg-black text-white'
                      : 'border border-black'
                  }`}>
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM IMAGES */}
        <div className="relative grid grid-cols-1 lg:grid-cols-11 gap-2 items-start">
          <div className="lg:col-span-6 w-full">
            <figure className="absolute transform -translate-x-1/2 left-0 w-full h-[700px]">
              <Image
                src={bottomImages.largeImage}
                alt="Landscape"
                fill
                className="rounded-2xl"
              />
            </figure>
          </div>

          <div className="lg:col-span-5 grid lg:grid-cols-6 gap-13">
            <div className="lg:col-span-6 col-span-2 relative h-[340px]">
              <Image
                src={bottomImages.secondImage}
                alt="Travel"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex col-span-6 flex-wrap flex-col">
              <div className="relative w-[60%] h-[400px]">
                <Image
                  src={bottomImages.thirdImage}
                  alt="Temple"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* <div className="bg-black text-white rounded-3xl p-8 flex flex-col justify-center h-auto w-[50%] ml-15">
                <div className="hidden xl:flex  w-12 h-8 mb-6 rounded-full bg-white items-center justify-center">
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
                  {bottomImages.overlayBox.title
                    .split(' <br />')
                    .map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  {bottomImages.overlayBox.description}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTravelDesktop;
