'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import facebook from '../../public/assets/icons/facebook.svg';
import twitter from '../../public/assets/icons/twitter.svg';
import instagram from '../../public/assets/icons/instagram.svg';
import Logo from './logo';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-black text-gray-300 pt-20">
      {/* TOP FOOTER */}
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-0 pb-12 items-start">
        {/* LOGO & ADDRESS */}
        <div className="flex flex-col gap-1">
          <Logo />

          <div className="space-y-1">
            <p>Badung, Bali —</p>
            <p>Jl. Desa Sawangan, No. 11</p>
            <p>Nusa Dua, 81566</p>
          </div>

          <div className="flex space-x-4 mt-6">
            <Link href="#" className="hover:text-white">
              <Image src={instagram} alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Image src={facebook} alt="Facebook" width={20} height={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Image src={twitter} alt="Twitter" width={20} height={20} />
            </Link>
          </div>
        </div>

        {/* PAGE LINKS */}
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-2xl mb-4">Page</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* IMPORTANT LINKS */}
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-2xl mb-4">
            Important Link
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Career
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-white">
                Term & Condition
              </Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col">
          <h2 className="text-white font-semibold text-2xl mb-4">
            Our Newsletter
          </h2>

          <p className="mb-5 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <div className="flex items-center max-w-[400px] rounded-full border border-white/20 bg-black/70 backdrop-blur-md p-2">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/60 px-4 py-1 text-sm focus:outline-none my-2"
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-semibold text-sm px-5 py-3 rounded-full hover:opacity-90 transition absolute right-0 m-2">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="wrapper border-t border-[#ffffff30] py-6 text-sm flex flex-col md:flex-row justify-between">
        <span>Tour & Travel Template Kit by Jegtheme</span>
        <span>Copyright © 2023. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
