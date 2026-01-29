'use client';
import React from 'react';
import { Playfair_Display } from 'next/font/google';
import Button from '../button';
import Image from 'next/image';
import SocialIcons from '../social-icons';
import homeData from '../../data/homePageData.json';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const heroData = homeData.herosection;

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section relative min-h-screen w-full overflow-hidden text-white">
      <div className="wrapper">
        {/* Background spacing */}
        <div className="relative h-[260px]" />

        {/* DESKTOP VIDEO */}
        <div className="hidden xl:block absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${heroData.video.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroData.video.youtubeId}&modestbranding=1&rel=0`}
              title="YouTube video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* MOBILE VIDEO */}
        <div className="block xl:hidden absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-w-[177.77vh] min-h-[100vh] -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${heroData.video.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroData.video.youtubeId}&modestbranding=1&rel=0`}
            title="YouTube background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 flex min-h-screen flex-col mb-6 md:mb-23 -top-28 md:top-0">
          {/* HERO CONTENT */}
          <div className="w-[90%] max-w-2xl flex flex-col gap-4 mb-12 md:mb-32">
            <Button
              className="border border-white/40 !bg-[#ffffff2b] !text-white hero-cta"
              title={heroData.ctaTop.label}
              href={heroData.ctaTop.href}
            />

            <h2
              className={`mb-5 md:mb-7 text-5xl md:text-7xl font-bold leading-tight ${playfair.className}`}>
              {heroData.heading}
            </h2>

            <Button
              title={heroData.ctaMain.label}
              href={heroData.ctaMain.href}
              icon={heroData.ctaMain.icon}
            />
          </div>

          {/* BOTTOM INFO */}
          <ul className="flex gap-7 md:gap-10 flex-col md:flex-row">
            {heroData.infoList.map((item, index) => (
              <li key={index} className="flex gap-3.5 lg:w-1/3 max-w-[400px]">
                <figure className="p-3 h-max rounded-full border border-white/40 bg-[#ffffff2b]">
                  <Image
                    src={item.icon}
                    alt="Info Icon"
                    width={40}
                    height={40}
                  />
                </figure>
                <p>{item.text}</p>
              </li>
            ))}
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
            {heroData.scroll.label}
          </span>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById(heroData.scroll.targetId)
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="cursor-pointer">
            <Image
              src={heroData.scroll.icon}
              alt="Scroll down"
              width={16}
              height={30}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
