import Image from 'next/image';
import LogoWhite from '@/public/assets/images/NOBT_logo_transparent_3.png';
import Link from 'next/link';

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function Logo({
  width = 140,
  height = 75,
  className = '',
}: LogoProps) {
  return (
    <Link href="/" target="_self">
      <Image
        src={LogoWhite}
        alt="NoBT Logo"
        width={width}
        height={height}
        className={`w-[140px] h-[75px] ${className}`}
        priority
      />
    </Link>
  );
}
