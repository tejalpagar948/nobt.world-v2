'use client';

import React from 'react';
import Image from 'next/image';
import PrivacyHero from '../../public/assets/images/travel-hero-section-large-image.jpg';
import privacyData from '@/app/data/privacyPolicy.json';

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

type Section = ListSection | ParagraphSection;

/* ================= COMPONENT ================= */

export default function PrivacyPolicyPage() {
  const sections = privacyData.sections as Section[];

  return (
    <main className="w-full bg-white text-black">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] w-full">
        <Image
          src={PrivacyHero}
          alt="Privacy Policy"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-5">
            <h1 className="text-4xl md:text-6xl font-serif text-white">
              Privacy Policy
            </h1>
            <p className="mt-5 text-white/80 text-lg">
              Your privacy matters to us at NOBT World.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-14 lg:py-20 bg-[#fafafa]">
        <div className="wrapper max-w-4xl">
          <p className="text-gray-600 leading-relaxed mb-12">
            {privacyData.intro}
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
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 text-white">
        <Image
          src={PrivacyHero}
          alt="Contact NOBT World"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 wrapper text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Questions About Your Privacy?
          </h2>

          <p className="text-white/70 mb-8">
            We’re here to help you understand how your information is handled.
          </p>

          <button className="rounded-full bg-white text-black px-10 py-4 font-medium hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
