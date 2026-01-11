'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import SocialIcons from './social-icons';
import Logo from './logo';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);

  const toggle = (key: string) => {
    setActive(active === key ? null : key);
  };

  /* Auto open DESTINATION if route matches */
  useEffect(() => {
    if (pathname.startsWith('/destination')) {
      setActive('destination');
    }
  }, [pathname]);

  const activeClass = 'bg-[#4b453f]';

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden transition-transform duration-500 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#1a120b]" />

      {/* Content */}
      <div className="relative h-full overflow-y-auto px-2 pt-6 text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 px-4">
          <Logo />
          <button
            onClick={onClose}
            className="text-2xl font-bold"
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
            className={`block rounded-full px-6 py-3 transition
              ${pathname === '/' ? activeClass : 'hover:bg-[#4b453f]'}`}>
            HOME
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            onClick={onClose}
            className={`block rounded-full px-6 py-3 transition
              ${pathname === '/about' ? activeClass : 'hover:bg-[#4b453f]'}`}>
            ABOUT US
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact-us"
            onClick={onClose}
            className={`block rounded-full px-6 py-3 transition
              ${
                pathname === '/contact-us' ? activeClass : 'hover:bg-[#4b453f]'
              }`}>
            CONTACT US
          </Link>

          {/* DESTINATION */}
          <div>
            <button
              onClick={() => toggle('destination')}
              className={`w-full flex items-center justify-between px-6 py-3 rounded-full transition
                ${
                  pathname.startsWith('/destination') ||
                  active === 'destination'
                    ? 'bg-white text-black'
                    : 'hover:bg-[#4b453f]'
                }`}
              aria-expanded={active === 'destination'}>
              <span>DESTINATION</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300
                  ${active === 'destination' ? 'rotate-180' : ''}`}
              />
            </button>

            {active === 'destination' && (
              <div className="mt-3 rounded-2xl bg-white text-black px-6 py-4 space-y-3">
                <Link
                  href="/destination/kerala"
                  onClick={onClose}
                  className={`block ${
                    pathname === '/destination/kerala' ? 'font-semibold' : ''
                  }`}>
                  KERALA
                </Link>
                <Link
                  href="/destination/ooty"
                  onClick={onClose}
                  className={`block ${
                    pathname === '/destination/ooty' ? 'font-semibold' : ''
                  }`}>
                  OOTY
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Social Icons */}
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
