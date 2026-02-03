'use client';
import React from 'react';
import SocialIcons from './social-icons';
import Logo from './logo';

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
        className={`hidden lg:block fixed top-0 right-0 z-100 h-screen w-[420px] bg-black text-white
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
          <Logo className="mb-5" />

          <p className="text-gray-400 mb-8 leading-relaxed">
            We specialize in curated group departures, experiential journeys,
            and personalized travel across India and the world. Reach out to us
            and let’s design something meaningful for you.
          </p>

          {/* CONTACT */}
          <h4 className="font-serif text-2xl mb-4">Our Contact</h4>

          <div className="text-gray-400 space-y-4">
            <p>
              4/52/1 , Petrolpump Chauraha , Baluganj , Rakanganj , Agra , Uttar
              Pradesh - 282001
            </p>

            <p>+91 9627237442</p>
            <p>nobtholidays@gmail.com</p>
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
