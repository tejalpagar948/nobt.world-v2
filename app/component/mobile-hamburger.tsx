'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import SocialIcons from './social-icons';
import Logo from './logo';
interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const [active, setActive] = useState<string | null>(null);

  const toggle = (key: string) => {
    setActive(active === key ? null : key);
  };

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-500 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1a120b]" />

      {/* Menu content */}
      <div className="relative h-full overflow-y-auto px-2 pt-6 text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 px-4">
          <Logo />
          <button
            onClick={onClose}
            className="text-2xl font-bold focus:outline-none"
            aria-label="Close menu">
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-4 text-sm font-medium tracking-widest">
          {/* HOME */}
          <Link
            href="/"
            onClick={onClose}
            className="block bg-[#4b453f] rounded-full px-6 py-3 transition hover:bg-[#5a5247]">
            HOME
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            onClick={onClose}
            className="block px-6 py-3 rounded-full hover:bg-[#4b453f] transition">
            ABOUT US
          </Link>

          {/* ABOUT */}
          <Link
            href="/contact-us"
            onClick={onClose}
            className="block px-6 py-3 rounded-full hover:bg-[#4b453f] transition">
            CONTACT US
          </Link>

          {/* DESTINATION */}
          <div>
            <button
              onClick={() => toggle('destination')}
              className={`w-full flex items-center justify-between px-6 py-3 rounded-full transition
                ${
                  active === 'destination'
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-[#4b453f]'
                }
              `}
              aria-expanded={active === 'destination'}>
              <span>DESTINATION</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  active === 'destination' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {active === 'destination' && (
              <div className="mt-3 rounded-2xl bg-white text-black px-6 py-4 space-y-3">
                <Link
                  href="/destination/kerala"
                  onClick={onClose}
                  className="block">
                  KERALA
                </Link>
                <Link
                  href="/destination/ooty"
                  onClick={onClose}
                  className="block">
                  OOTY
                </Link>
              </div>
            )}
          </div>
        </nav>
        {/* SOCIAL ICONS */}
        <div className="absolute bottom-0 px-4">
          <SocialIcons
            ulClassName="flex my-10"
            figureClassName=""
            iconSize={20}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
