'use client';

import React from 'react';
import Image from 'next/image';
import ContactHero from '../../public/assets/images/travel-hero-section-large-image.jpg';
import ContactImage from '../../public/assets/images/blog-section-image.jpg';
import LocationIcon from '../../public/assets/icons/location-icon.svg';
import MailIcon from '../../public/assets/icons/mail-icon.svg';
import PhoneIcon from '../../public/assets/icons/phone.icon.svg';

export default function ContactPage() {
  return (
    <main className="w-full bg-white text-black">
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] w-full">
        <Image
          src={ContactHero.src}
          alt="Contact NOBT World"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-5">
            <h1 className="text-4xl md:text-6xl font-serif text-white">
              Contact Us
            </h1>
            <p className="mt-5 text-white/80 text-lg">
              Let’s start planning your next unforgettable journey together.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-14 lg:py-27">
        <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Whether you have a question, need assistance, or want to customize
              your travel plans, our team is always here to help.
            </p>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <Image
                    src={LocationIcon.src}
                    alt="Email Icon"
                    width={24}
                    height={24}
                  />
                </span>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-gray-600">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <Image
                    src={MailIcon.src}
                    alt="Email Icon"
                    width={24}
                    height={24}
                  />
                </span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-600">support@nobtworld.com</p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <Image
                    src={PhoneIcon.src}
                    alt="Phone Icon"
                    width={24}
                    height={24}
                  />
                </span>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-gray-600">+91 98765 43210</p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-3xl bg-[#1b1b1b] p-10 shadow-2xl border border-gray-800 min-h-full">
            <h3 className="text-2xl font-serif mb-6 text-white">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-full border border-gray-700 bg-[#252525] text-white px-6 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-gray-700 bg-[#252525] text-white px-6 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Tell us about your travel plans..."
                  className="w-full rounded-2xl border border-gray-700 bg-[#252525] text-white px-6 py-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white text-black py-4 font-medium hover:bg-gray-200 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 text-white">
        <Image
          src={ContactImage.src}
          alt="Travel with NOBT World"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 wrapper text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            We’re Just One Message Away
          </h2>
          <p className="text-white/70 mb-10">
            Start your journey with NOBT World today.
          </p>
        </div>
      </section>
    </main>
  );
}
