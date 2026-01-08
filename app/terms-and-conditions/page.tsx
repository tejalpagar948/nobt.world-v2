'use client';

import React from 'react';
import Image from 'next/image';
import TermsHero from '../../public/assets/images/travel-hero-section-large-image.jpg';

export default function TermsAndConditions() {
  return (
    <main className="w-full bg-white text-black">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full">
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
              Please read these terms carefully before using NOBT World.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-14 lg:py-24 bg-[#fafafa]">
        <div className="wrapper max-w-4xl">
          {/* INTRO */}
          <p className="text-gray-600 leading-relaxed mb-10">
            These Terms & Conditions govern your use of the NOBT World website
            and services. By accessing or using our website, you agree to be
            bound by these terms.
          </p>

          {/* TERMS BLOCK */}
          {[
            {
              title: '1. Use of Website',
              content:
                'You agree to use this website only for lawful purposes. You must not use the site in any way that may cause damage to the website or impair accessibility for others.',
            },
            {
              title: '2. Travel Information',
              content:
                'All travel-related information provided on NOBT World is for general guidance only. Prices, availability, and itineraries may change without prior notice.',
            },
            {
              title: '3. Bookings & Payments',
              content:
                'Bookings made through NOBT World are subject to availability and confirmation. Payments must be completed as per the provided instructions to confirm your reservation.',
            },
            {
              title: '4. Cancellations & Refunds',
              content:
                'Cancellation and refund policies vary depending on the service provider. Please review the specific terms applicable to your booking before making a purchase.',
            },
            {
              title: '5. Intellectual Property',
              content:
                'All content on this website, including text, images, logos, and designs, is the property of NOBT World and may not be reproduced without written permission.',
            },
            {
              title: '6. Limitation of Liability',
              content:
                'NOBT World shall not be liable for any loss, injury, or damages arising from the use of this website or participation in any travel activities.',
            },
            {
              title: '7. Third-Party Links',
              content:
                'Our website may contain links to third-party websites. NOBT World is not responsible for the content or practices of these external sites.',
            },
            {
              title: '8. Changes to Terms',
              content:
                'We reserve the right to update or modify these Terms & Conditions at any time. Continued use of the website constitutes acceptance of the revised terms.',
            },
            {
              title: '9. Governing Law',
              content:
                'These terms are governed by and interpreted in accordance with applicable laws. Any disputes shall be subject to the jurisdiction of relevant courts.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="mb-8 rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 text-white">
        {/* Background Image */}
        <Image
          src={TermsHero.src}
          alt="Contact NOBT World"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 wrapper text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Have Questions About Our Terms?
          </h2>

          <p className="text-white/70 mb-8">
            Feel free to reach out to us for any clarification.
          </p>

          <button className="rounded-full bg-white text-black px-10 py-4 font-medium hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
