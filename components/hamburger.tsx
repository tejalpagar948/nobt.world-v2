'use client';
import React from 'react';

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ open, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className="relative h-12 flex items-center justify-end mr-2.5 w-[140px]">
      <span
        className={`absolute h-[2px] w-6 rounded-full bg-white transition-all duration-300 ease-in-out
          ${open ? 'rotate-45' : '-translate-y-2'}
        `}
      />

      <span
        className={`absolute h-[2px] w-6 rounded-full bg-white transition-all duration-200 ease-in-out
          ${open ? 'opacity-0' : ''}
        `}
      />

      <span
        className={`absolute h-[2px] w-6 rounded-full bg-white transition-all duration-300 ease-in-out
          ${open ? '-rotate-45' : 'translate-y-2'}
        `}
      />
    </button>
  );
};

export default Hamburger;
