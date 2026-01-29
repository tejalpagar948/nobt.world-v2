'use client';
import React, { useState } from 'react';
import Navbar from './navBar';
import Hamburger from '../component/hamburger';
import DesktopMenu from '../component/dekstop-menu';
import MobileMenu from '../component/mobile-hamburger';
import Logo from './logo';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-20 w-full py-4">
      <div className="flex items-center justify-between wrapper">
        <Logo />
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
