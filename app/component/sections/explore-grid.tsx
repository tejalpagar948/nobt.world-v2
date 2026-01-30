'use client';

import Image from 'next/image';
import Link from 'next/link';
import ArrowTopRight from '../../../public/assets/icons/arrow-top-right.svg';
import exploreGridData from '../../data/homePageData.json';

/* ================= TYPES ================= */
type ExploreItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  wrapperClass?: string;
  link?: string;
};

/* ================= DATA ================= */
const exploreData: ExploreItem[] = exploreGridData.exploreGridSection.items;

/* ================= CARD ================= */
const Card = ({
  title,
  subtitle,
  image,
  link,
}: {
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}) => {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl group">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
          <p className="text-white/80 text-sm mt-1">{subtitle}</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm">
          <Image
            src={ArrowTopRight.src}
            alt="Arrow Right"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

/* ================= COMPONENT ================= */
export default function ExploreGrid() {
  return (
    <section className="my-15 lg:my-30" id="explore-grid">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-5 lg:gap-11 wrapper">
        {exploreData.map((item) => (
          <div key={item.id} className={item.wrapperClass ?? ''}>
            <Link href={item.link ?? '/'} target="_self">
              <Card
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
