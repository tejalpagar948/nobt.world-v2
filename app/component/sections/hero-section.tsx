'use client';
import React from 'react';
import { Playfair_Display } from 'next/font/google';
import Button from '../button';
import ArrowIcon from '../../../public/assets/icons/arrow.svg';
import ClockIcon from '../../../public/assets/icons/clock.svg';
import ArrowDown from '../../../public/assets/images/arrow-down.png';
import Image from 'next/image';
import SocialIcons from '../social-icons';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="hero-section relative min-h-screen w-full overflow-hidden text-white">
        <div className="wrapper">
          {/* Background Video */}
          <div className="relative h-[276px]"></div>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee">
            <source
              src="assets/videos/Nobt-world-banner.mp4"
              type="video/mp4"
            />
          </video>
          {/* <Header /> */}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Main Content */}
          <div className="relative z-10 flex min-h-screen flex-col mb-6 md:mb-23 -top-28 md:top-0">
            {/* HERO CONTENT */}
            <div className="w-[90%] max-w-xl flex flex-col gap-4 md:gap-2 mb-12 md:mb-32">
              <Button
                className="border border-white/40 !bg-[#ffffff2b] !text-white hero-cta"
                title={`Feel The Experience`}
                href={`FIXME`}
              />
              <h2
                className={`mb-5 md:mb-9 text-5xl md:text-7xl font-bold leading-tight ${playfair.className}`}>
                Explore The Majestic Asia Landscape Now
              </h2>
              <Button
                title={`GET STARTED`}
                href={`FIXME`}
                icon={ArrowIcon.src}
              />
            </div>

            {/* BOTTOM INFO */}
            <ul className="flex gap-7 md:gap-10 flex-col md:flex-row">
              <li className="flex gap-3.5 lg:w-1/3 max-w-[400px]">
                <figure className="p-3 h-max rounded-full border border-white/40 bg-[#ffffff2b] ">
                  <Image
                    src={ClockIcon.src}
                    alt="Clock Icon"
                    width={40}
                    height={40}
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </li>

              <li className="flex gap-3.5 lg:w-1/3 max-w-[400px]">
                <figure className="p-3 h-max rounded-full border border-white/40 bg-[#ffffff2b] ">
                  <Image
                    src={ClockIcon.src}
                    alt="Clock Icon"
                    width={40}
                    height={40}
                  />
                </figure>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </li>
            </ul>
          </div>

          {/* SOCIAL ICONS */}
          <SocialIcons
            ulClassName="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 text-white/80"
            figureClassName="p-3 rounded-full border border-white/40 bg-[#ffffff2b]"
            iconSize={32}
          />

          {/* SCROLL INDICATOR */}
          <div className="z-200 absolute bottom-23 right-6 hidden lg:flex items-center text-xs tracking-widest">
            <span className="rotate-270 leading-none -mr-4 font-medium">
              SCROLL
            </span>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById('explore-grid')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="cursor-pointer">
              <Image
                src={ArrowDown.src}
                alt="Scroll down"
                width={16}
                height={30}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
