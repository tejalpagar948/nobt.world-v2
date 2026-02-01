'use client';
import { useState } from 'react';
import Link from 'next/link';
import pianoGalleryData from '@/data/homePageData.json';

export default function PianoGalleryResponsive() {
  const [active, setActive] = useState(2);

  const { items } = pianoGalleryData.pianoGallery;

  return (
    <section className="relative bg-black text-white" id="pianoGallery">
      {/* ================= DESKTOP ================= */}
      <div className="relative hidden h-screen overflow-hidden lg:block">
        {/* BACKGROUND IMAGE */}
        <div
          key={active}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${items[active].img})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* DIVIDER LINES */}
        <div className="pointer-events-none absolute inset-0 z-20 flex">
          {items.map(
            (_, i) =>
              i !== 0 && (
                <span
                  key={i}
                  className="h-full w-px bg-white/40"
                  style={{ marginLeft: '20%' }}
                />
              )
          )}
        </div>

        {/* PIANO TABS */}
        <div className="relative z-30 flex h-full">
          {items.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="flex w-1/5 cursor-pointer items-start justify-center text-center">
              {/* TAB */}
              <div className="relative w-full h-[190px] py-15 overflow-hidden">
                {/* SLIDE DOWN BACKGROUND */}
                <div
                  className={`absolute inset-0 bg-black
                transform transition-transform duration-500 ease-in-out
                ${active === i ? 'translate-y-0' : '-translate-y-full'}
              `}
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <p className="mb-2 text-sm tracking-widest">VISIT</p>
                  <h2 className="font-serif text-3xl">{item.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden">
        <div className="relative h-[60vh] overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <div
            key={active}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${items[active].img})` }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />

          {/* GRID BUTTONS */}
          <div className="absolute inset-0 z-20 grid grid-cols-2 gap-px bg-white/20">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="relative flex items-center justify-center text-center overflow-hidden">
                {/* SLIDE DOWN BACKGROUND */}
                <div
                  className={`absolute inset-0 bg-black
                 transform transition-transform duration-500 ease-in-out
                 ${active === i ? 'translate-y-0' : '-translate-y-full'}
               `}
                />

                {/* CONTENT */}
                <div className="relative z-10 text-white">
                  <p className="text-xs tracking-widest">VISIT</p>
                  <h3 className="font-serif text-lg">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
