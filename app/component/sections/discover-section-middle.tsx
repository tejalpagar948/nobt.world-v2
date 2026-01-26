'use client';

import { useState } from 'react';
import Link from 'next/link';

const items = [
  {
    title: 'Bali',
    img: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80',
    link: '/destination/bali',
  },
  {
    title: 'Thailand',
    img: 'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/ancient-siam-or-ancient-city-bangkok-thailand--e1687499815736.jpg',
    link: '/destination/thailand',
  },
  {
    title: 'Turkey',
    img: 'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/happy-couple-in-cappadocia-the-man-proposed-to-the-girl-honeymoon-in-cappadocia-e1687499848976.jpg',
    link: '/destination/turkey',
  },
  {
    title: 'Japan',
    img: 'https://templatekit.jegtheme.com/matour/wp-content/uploads/sites/388/2023/06/himeji-castle-japan-in-spring-e1687500113328.jpg',
    link: '/destination/japan',
  },
  {
    title: 'V ietnam',
    img: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=1200&q=80',
    link: '/destination/vietnam',
  },
];

export default function PianoGalleryResponsive() {
  const [active, setActive] = useState(2);

  return (
    <section className="relative bg-black text-white">
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
