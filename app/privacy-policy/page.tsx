'use client';

import React from 'react';
import Image from 'next/image';
import PrivacyHero from '../../public/assets/images/travel-hero-section-large-image.jpg';

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white text-black">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full">
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
      <section className="py-14 lg:py-24 bg-[#fafafa]">
        <div className="wrapper max-w-4xl">
          {/* INTRO */}
          <p className="text-gray-600 leading-relaxed mb-10">
            This Privacy Policy explains how NOBT World collects, uses, and
            protects your personal information when you use our website and
            services.
          </p>

          {/* POLICY SECTIONS */}
          {[
            {
              title: '1. Information We Collect',
              content:
                'We may collect personal information such as your name, email address, phone number, and travel preferences when you contact us, make a booking, or subscribe to our services.',
            },
            {
              title: '2. How We Use Your Information',
              content:
                'Your information is used to provide travel services, respond to inquiries, process bookings, improve our offerings, and communicate important updates.',
            },
            {
              title: '3. Cookies & Tracking',
              content:
                'Our website may use cookies and similar technologies to enhance user experience, analyze website traffic, and improve performance. You can control cookies through your browser settings.',
            },
            {
              title: '4. Sharing of Information',
              content:
                'We do not sell or rent your personal information. Data may be shared only with trusted service partners when required to fulfill travel services or comply with legal obligations.',
            },
            {
              title: '5. Data Security',
              content:
                'We implement reasonable security measures to protect your personal data. However, no method of online transmission is completely secure.',
            },
            {
              title: '6. Third-Party Links',
              content:
                'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites.',
            },
            {
              title: '7. Your Rights',
              content:
                'You have the right to request access, correction, or deletion of your personal data. Please contact us if you wish to exercise these rights.',
            },
            {
              title: '8. Policy Updates',
              content:
                'This Privacy Policy may be updated periodically. Any changes will be posted on this page with an updated revision date.',
            },
            {
              title: '9. Contact Information',
              content:
                'If you have any questions about this Privacy Policy or how your data is handled, please contact NOBT World directly.',
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
          src={PrivacyHero}
          alt="Contact NOBT World"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
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
