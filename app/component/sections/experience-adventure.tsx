'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import playButton from '../../../public/assets/icons/play-button.svg';
import VideoModal from '.././video-modal';
import adventureDataJSON from '../../data/homePageData.json';

const ExperienceAdventure = () => {
  const data = adventureDataJSON.experienceAdventureSection;
  const [open, setOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePlay = (videoUrl: string) => {
    setActiveVideo(videoUrl);
    setOpen(true);
  };

  return (
    <section className="w-full bg-white my-15 lg:my-30">
      <div className="wrapper mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-5">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h3 className="font-serif text-5xl text-black">{data.title}</h3>
          <p className="mt-5 max-w-lg text-gray-500">{data.description}</p>

          <div className="mt-7 space-y-6">
            {data.features.map((item, index) => (
              <div key={index} className="flex gap-5">
                <figure className="flex h-max items-center justify-center rounded-full bg-black text-white mt-[6px] p-4">
                  <Image src={item.icon} alt="icon" width={65} height={65} />
                </figure>
                <div>
                  <h4 className="text-2xl font-semibold text-black">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative lg:col-span-3 overflow-hidden rounded-3xl h-[570px]">
          <figure className="h-full w-full">
            <Image
              src={data.mainImage}
              alt="Adventure"
              fill
              className="object-cover"
            />
          </figure>

          {/* VIDEO CARDS */}
          <div className="absolute transform -translate-x-1/2 left-1/2 bottom-5 flex gap-5 w-full z-10 px-5 justify-end flex-col md:flex-row">
            {data.videoCards.map((card, index) => (
              <div
                key={index}
                className="relative w-full md:w-[39%] overflow-hidden rounded-3xl h-39 border-13 border-[#ffffff2b]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button
                    onClick={() => handlePlay(card.videoUrl)}
                    className="rounded-full bg-white p-3 hover:scale-110 transition">
                    <Image
                      src={playButton.src}
                      alt="Play Button"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <VideoModal
            open={open}
            videoUrl={activeVideo}
            onClose={() => {
              setOpen(false);
              setActiveVideo(null);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceAdventure;
