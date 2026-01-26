'use client';
import Image from 'next/image';
import LargeImage from '../../../public/assets/images/two-persons.jpeg';
import SecondImage from '../../../public/assets/images/group photo.jpeg';
import ThirdImage from '../../../public/assets/images/couple-pics.jpeg';

interface HeroTravelDesktopProps {
  className?: string;
}

const HeroTravelDesktop: React.FC<HeroTravelDesktopProps> = ({ className }) => {
  return (
    <section
      className={`w-full bg-white my-14 lg:my-27 hidden lg:block ${className}`}>
      <div className="wrapper">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-9 items-start pb-13">
          <h3 className="font-serif text-[48px] leading-[1.2] max-w-xl lg:col-span-5">
            Begin Your New Life Experience With Exploring New Destination
          </h3>

          <div className="max-w-lg lg:col-span-4">
            <p className="text-gray-500 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>

            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full text-sm tracking-wide">
                ABOUT US
              </button>
              <button className="border border-black px-8 py-4 rounded-full text-sm tracking-wide">
                EXPLORE TRIP
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM IMAGES */}
        <div className="relative grid grid-cols-1 lg:grid-cols-11 gap-2 items-start">
          <div className="lg:col-span-6 w-full">
            <figure className="absolute transform -translate-x-1/2 left-0 w-full h-[700px]">
              <Image
                src={LargeImage.src}
                alt="Landscape"
                fill
                className="rounded-2xl"
              />
            </figure>
          </div>

          <div className="lg:col-span-5 grid lg:grid-cols-6 gap-13">
            <div className="lg:col-span-6 col-span-2 relative h-[340px]">
              <Image
                src={SecondImage.src}
                alt="Travel"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex col-span-6 flex-wrap flex-col">
              <div className="relative w-[60%] h-[400px]">
                <Image
                  src={ThirdImage.src}
                  alt="Temple"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              <div className="bg-black text-white rounded-3xl p-8 flex flex-col justify-center h-[250px] w-[50%] ml-15">
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

                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                  Lorem ipsum dolor sit amet, aenean commodo ligula.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTravelDesktop;
