'use client';
import Image from 'next/image';
import blogData from '@/data/homePageData.json';
import Link from 'next/link';

const { blogSection } = blogData;

export default function BlogSection() {
  return (
    <section className="py-14 xl:py-27">
      <div className="wrapper grid grid-cols-1 xl:grid-cols-12 gap-12">
        {/* LEFT COLUMN */}
        <div className="xl:col-span-6">
          <h2 className="font-serif text-[44px] leading-[1.15] mb-6">
            {blogSection.title.split(' Blog ')[0]} Blog <br />
            {blogSection.title.split(' Blog ')[1]}
          </h2>
          <p className="text-gray-500 max-w-xl mb-10">
            {blogSection.description}
          </p>

          {/* FEATURED CARD */}
          <Link href={blogSection.featured.link} className="block group">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={blogSection.featured.image}
                alt={blogSection.featured.alt}
                width={900}
                height={600}
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-serif mb-3 mr-8 max-w-md">
                  {blogSection.featured.title}
                </h3>

                <span className="flex items-center gap-2 text-sm font-medium">
                  READ MORE <span className="text-xl">→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-6 flex flex-col justify-between gap-5">
          {blogSection.items.map((item, index) => (
            <Link key={index} href={item.link} className="block group">
              <BlogItem {...item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* BLOG ITEM */
/* ---------------------------------- */

interface BlogItemProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

function BlogItem({ image, alt, title, description }: BlogItemProps) {
  return (
    <div className="grid gap-8 xl:grid-cols-6 items-center">
      <div className="xl:col-span-3">
        <Image
          src={image}
          alt={alt}
          width={900}
          height={600}
          className="rounded-3xl object-cover w-full h-[220px] sm:h-[240px] md:h-[260px] xl:h-[200px]"
        />
      </div>

      <div className="xl:col-span-3">
        <h4 className="font-serif text-[22px] leading-snug mb-2">{title}</h4>

        <p className="text-gray-500 text-sm mb-3">{description}</p>

        <button className="flex items-center gap-2 text-sm font-medium">
          READ MORE <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
