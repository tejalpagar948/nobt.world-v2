'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '@/public/assets/icons/facebook.svg';
import instagram from '@/public/assets/icons/instagram.svg';

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
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61579188870576&rdid=XawPnNfKoomGMMpG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Mdk51Dvxz%2F#',
      icon: facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/nobtholidays?igsh=MXN4N3IxbHQ3dzhpbw%3D%3D',
      icon: instagram,
    },
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
