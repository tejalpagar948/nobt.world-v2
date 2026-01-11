'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import SubmenuArrowBlack from '../../public/assets/icons/submenu-arrow-black.svg';
import SubmenuArrowWhite from '../../public/assets/icons/submenu-arrow-white.svg';

export default function Navbar() {
  const pathname = usePathname();

  const activeClass = 'bg-white/20';

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-2 rounded-full border border-white backdrop-blur-md px-3 py-2 text-sm font-medium text-white">
        {/* HOME */}
        <li>
          <Link
            href="/"
            className={`rounded-full px-5 py-2 transition
              ${pathname === '/' ? activeClass : 'hover:bg-white/20'}`}>
            HOME
          </Link>
        </li>

        {/* ABOUT */}
        <li>
          <Link
            href="/about"
            className={`rounded-full px-5 py-2 transition
              ${
                pathname === '/about'
                  ? activeClass
                  : 'hover:bg-white hover:text-black'
              }`}>
            ABOUT US
          </Link>
        </li>

        {/* CONTACT */}
        <li>
          <Link
            href="/contact-us"
            className={`rounded-full px-5 py-2 transition
              ${
                pathname === '/contact-us'
                  ? activeClass
                  : 'hover:bg-white hover:text-black'
              }`}>
            CONTACT US
          </Link>
        </li>

        {/* DESTINATION */}
        <li className="relative group">
          <Link
            href="#"
            className={`flex items-center gap-1 rounded-full px-5 py-2 transition
              ${
                pathname.startsWith('/destination')
                  ? activeClass
                  : 'group-hover:bg-white group-hover:text-black'
              }`}>
            DESTINATION
            <Image
              src={SubmenuArrowWhite}
              alt="Down Arrow"
              className="mt-[2px] group-hover:hidden"
              width={18}
              height={18}
            />
            <Image
              src={SubmenuArrowBlack}
              alt="Down Arrow"
              className="mt-[2px] hidden group-hover:block"
              width={18}
              height={18}
            />
          </Link>

          {/* Dropdown */}
          <div
            className="absolute left-0 top-full mt-2 opacity-0
              pointer-events-none group-hover:opacity-100
              group-hover:pointer-events-auto transition-opacity">
            <ul className="w-50 rounded-xl bg-white p-2 text-black shadow-lg z-50">
              <li className="px-4 py-2 hover:bg-black hover:text-white hover:rounded-full">
                <Link href="/destination/kerala">KERALA</Link>
              </li>
              <li className="px-4 py-2 hover:bg-black hover:text-white hover:rounded-full">
                <Link href="/destination/ooty">OOTY</Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
