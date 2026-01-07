'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '../../public/assets/icons/facebook.svg';
import twitter from '../../public/assets/icons/twitter.svg';
import instagram from '../../public/assets/icons/instagram.svg';

interface SocialIconsProps {
  ulClassName?: string;
  liClassName?: string;
  figureClassName?: string;
  iconSize?: number;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  ulClassName = '',
  liClassName = 'w-10',
  figureClassName = '',
  iconSize = 40,
}) => {
  const icons = [
    { name: 'Facebook', href: 'https://facebook.com', icon: facebook },
    { name: 'Twitter', href: 'https://twitter.com', icon: twitter },
    { name: 'Instagram', href: 'https://instagram.com', icon: instagram },
  ];

  return (
    <ul className={ulClassName}>
      {icons.map((item) => (
        <li key={item.name} className={liClassName}>
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block">
            <figure className={figureClassName}>
              <Image
                src={item.icon}
                alt={item.name}
                width={iconSize}
                height={iconSize}
              />
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
