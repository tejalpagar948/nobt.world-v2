'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import SocialIcons from './social-icons';
import Logo from './logo';
import destinations from '@/data/destinations.json';

/* Destination type */
interface Destination {
  slug: string;
  title: string;
  type?: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  /* Auto-open DESTINATION on destination pages */
  useEffect(() => {
    if (pathname.startsWith('/destination')) {
      setOpenSubmenu('destination');
    }
  }, [pathname]);

  /* Reset submenu when hamburger closes */
  useEffect(() => {
    if (!open) {
      setOpenSubmenu(null);
    }
  }, [open]);

  /* 🔹 GROUP DESTINATIONS BY TYPE */
  const groupedDestinations = Object.values(destinations).reduce<
    Record<string, Destination[]>
  >((acc, destination) => {
    const type = destination.type || 'Other';

    if (!acc[type]) {
      acc[type] = [];
    }

    acc[type].push(destination);
    return acc;
  }, {});

  const mainActive = 'bg-[#4b453f]';
  const subActive = 'bg-black text-white font-semibold';

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
          <button onClick={onClose} className="text-2xl font-bold">
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-4 text-sm font-medium tracking-widest">
          <Link
            href="/"
            onClick={onClose}
            className={`block rounded-full px-6 py-3 ${
              pathname === '/' ? mainActive : ''
            }`}>
            HOME
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className={`block rounded-full px-6 py-3 ${
              pathname === '/about' ? mainActive : ''
            }`}>
            ABOUT US
          </Link>

          <Link
            href="/contact-us"
            onClick={onClose}
            className={`block rounded-full px-6 py-3 ${
              pathname === '/contact-us' ? mainActive : ''
            }`}>
            CONTACT US
          </Link>

          {/* DESTINATION */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenSubmenu(
                  openSubmenu === 'destination' ? null : 'destination'
                )
              }
              className={`w-full flex items-center justify-between px-6 py-3 rounded-full
                ${
                  pathname.startsWith('/destination')
                    ? 'bg-white text-black'
                    : ''
                }`}>
              DESTINATION
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openSubmenu === 'destination' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {/* 🔹 DYNAMIC SUBMENU */}
            {openSubmenu === 'destination' && (
              <div className="mt-4 rounded-2xl bg-white text-black px-3 py-3 space-y-4 z-200 absolute w-full">
                {Object.entries(groupedDestinations).map(
                  ([type, destinations]) => (
                    <div key={type}>
                      <h4 className="px-3 py-2 font-bold uppercase text-sm">
                        {type}
                      </h4>

                      {destinations.map((destination) => (
                        <Link
                          key={destination.slug}
                          href={`/destination/${destination.slug}`}
                          onClick={onClose}
                          className={`block rounded-full px-4 py-2 transition
                            ${
                              pathname === `/destination/${destination.slug}`
                                ? subActive
                                : 'hover:bg-gray-200'
                            }`}>
                          {destination.title.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Social Icons */}
        <div className="absolute bottom-0 px-4">
          <SocialIcons ulClassName="flex my-10" iconSize={20} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
