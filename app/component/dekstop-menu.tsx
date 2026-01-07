'use client';

import React from 'react';
import SocialIcons from './social-icons';
import Link from 'next/link';
import Image from 'next/image';
import LogoWhite from '../../public/assets/images/matour-logo_1.png';

interface DesktopMenuProps {
  open: boolean;
  onClose: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ open, onClose }) => {
  return (
    <>
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-500 
        ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }
        `}
        onClick={onClose}
      />

      {/* RIGHT PANEL */}
      <aside
        className={`hidden lg:block fixed top-0 right-0 z-50 h-screen w-[420px] bg-black text-white
        transform transition-transform duration-500 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}
        `}>
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-2xl"
          aria-label="Close menu">
          ✕
        </button>

        {/* CONTENT */}
        <div className="flex h-full flex-col justify-center px-10">
          {/* LOGO / TITLE */}
          <h1 className=" mb-5">
            <Link href="/" className="text-3xl font-bold text-white">
              <Image
                src={LogoWhite.src}
                alt="NoBT World Logo"
                width={150}
                height={50}
                unoptimized
                priority
              />
            </Link>
          </h1>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar.
          </p>

          {/* CONTACT */}
          <h4 className="font-serif text-2xl mb-4">Our Contact</h4>

          <div className="text-gray-400 space-y-4">
            <p>Badung, Bali – Jl. Desa Sawangan, No. 11 Nusa Dua, 81566</p>

            <p>(+822) 2344 5678 1291</p>
            <p>matour@mail.com</p>
          </div>

          {/* SOCIAL ICONS */}
          <SocialIcons
            ulClassName="flex my-10"
            figureClassName=""
            iconSize={20}
          />
        </div>
      </aside>
    </>
  );
};

export default DesktopMenu;
