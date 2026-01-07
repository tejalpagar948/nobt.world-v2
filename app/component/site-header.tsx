'use client';

import React, { useState } from 'react';
import Navbar from './navBar';
import Link from 'next/link';
import Image from 'next/image';
import LogoWhite from '../../public/assets/images/matour-logo_1.png';
import Hamburger from '../component/hamburger';
import DesktopMenu from '../component/dekstop-menu';
import MobileMenu from '../component/mobile-hamburger';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-20 w-full py-4">
      <div className="flex items-center justify-between wrapper">
        {/* Logo */}
        <h1>
          <Link href="/" className="text-3xl font-bold text-white">
            <Image
              src={LogoWhite.src}
              alt="Matour Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <Navbar />

        {/* 🔥 ONE HAMBURGER FOR ALL SCREENS */}
        <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

        {/* MOBILE MENU */}
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* DESKTOP MENU */}
        <DesktopMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
