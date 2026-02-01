'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TermsHero from '@/public/assets/images/travel-hero-section-large-image.jpg';
import termsData from '@/data/termsAndConditions.json';

/* ================= TYPES ================= */

type ListSection = {
  id: string;
  title: string;
  type: 'list';
  items: string[];
};

type ParagraphSection = {
  id: string;
  title: string;
  type: 'paragraph';
  content: string;
};

type MixedSection = {
  id: string;
  title: string;
  type: 'mixed';
  subSections: {
    title: string;
    items: string[];
  }[];
  note?: string;
};

type Section = ListSection | ParagraphSection | MixedSection;

/* ================= COMPONENT ================= */

export default function TermsAndConditions() {
  const sections = termsData.sections as Section[];

  return (
    <main className="w-full bg-white text-black">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] w-full">
        <Image
          src={TermsHero}
          alt="Terms and Conditions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-5">
            <h1 className="text-4xl md:text-6xl font-serif text-white">
              Terms & Conditions
            </h1>
            <p className="mt-5 text-white/80 text-lg">
              Please read these terms carefully before booking with NOBT World.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-14 lg:py-20 bg-[#fafafa]">
        <div className="wrapper max-w-4xl">
          <p className="text-gray-600 leading-relaxed mb-12">
            {termsData.intro}
          </p>

          {sections.map((section) => (
            <div
              key={section.id}
              className="mb-8 rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>

              {/* LIST SECTION */}
              {section.type === 'list' && (
                <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-relaxed">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* PARAGRAPH SECTION */}
              {section.type === 'paragraph' && (
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              )}

              {/* MIXED SECTION */}
              {section.type === 'mixed' && (
                <>
                  {section.subSections.map((sub, i) => (
                    <div key={i} className="mb-6">
                      <h4 className="font-medium text-lg mb-3">{sub.title}</h4>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                        {sub.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {section.note && (
                    <p className="text-gray-600 leading-relaxed">
                      {section.note}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 text-white">
        <Image
          src={TermsHero.src}
          alt="Contact NOBT World"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 wrapper text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Have Questions About Our Terms?
          </h2>

          <p className="text-white/70 mb-8">
            Feel free to reach out to us for any clarification.
          </p>

          <Link
            href="/contact-us"
            target="_blank"
            className="inline-block rounded-full bg-white text-black px-10 py-4 font-medium hover:bg-gray-200 transition">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
