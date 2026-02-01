import React from 'react';
import Image from 'next/image';

interface BlogSection {
  heading?: string;
  content: string[];
  images?: string[];
}

interface BlogEntry {
  slug: string;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  sections: BlogSection[];
}

interface BlogPageProps {
  blog: BlogEntry;
}

export default function BlogPage({ blog }: BlogPageProps) {
  return (
    <main className="w-full bg-white text-black">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[45vh] w-full">
        <Image
          src={blog.heroImage}
          alt="About NOBT World"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center text-center pt-18">
          <div className="max-w-3xl px-5">
            <h1 className="text-4xl md:text-6xl font-serif text-white">
              {blog.title}
            </h1>
            <p className="mt-2 text-white/80 text-lg">{blog.date}</p>
          </div>
        </div>
      </section>

      {/* ================= BLOG CONTENT ================= */}
      <article className="wrapper px-6 py-10">
        {blog.sections.map((section, idx) => (
          <section key={idx} className="mb-10">
            {section.content.map((p, i) => (
              <p key={i} className="text-lg text-gray-800 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.images?.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`${section.heading ?? 'Section'} image ${i + 1}`}
                width={1920}
                height={1080}
                className="w-full my-6 rounded-lg shadow-md object-cover h-[400px] xl:h-[95vh]"
                priority={i === 0}
              />
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
