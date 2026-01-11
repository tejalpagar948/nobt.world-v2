'use client';

import { useEffect } from 'react';

type Props = {
  destination: string;
  packageTitle: string;
  onClose: () => void;
};

export default function QueryModal({
  destination,
  packageTitle,
  onClose,
}: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div className="relative w-full max-w-3xl rounded-2xl bg-gradient-to-b from-[#111] to-black p-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white text-2xl">
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#D6A200] mb-8">
          Plan Your Trip
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Name */}
          <div className="md:col-span-2">
            <label className="text-white text-sm mb-2 block">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full bg-black border border-[#D6A200] rounded-lg px-4 py-3 text-white outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="text-white text-sm mb-2 block">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              className="w-full bg-black border border-[#D6A200] rounded-lg px-4 py-3 text-white outline-none"
            />
          </div>

          {/* Destination */}
          <div>
            <label className="text-white text-sm mb-2 block">Destination</label>
            <input
              type="text"
              value={destination}
              disabled
              className="w-full bg-[#1f2937] border border-[#D6A200] rounded-lg px-4 py-3 text-gray-300"
            />
          </div>

          {/* Package */}
          <div>
            <label className="text-white text-sm mb-2 block">Package</label>
            <input
              type="text"
              value={packageTitle}
              disabled
              className="w-full bg-[#1f2937] border border-[#D6A200] rounded-lg px-4 py-3 text-gray-300"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-white text-sm mb-2 block">Travel Date</label>
            <div className="relative">
              <input
                type="date"
                className="w-full bg-black border border-[#D6A200] rounded-lg px-4 py-3 text-white outline-none"
              />
              <span className="absolute right-4 top-3 text-[#D6A200]">📅</span>
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 pt-6">
            <button
              type="submit"
              className="w-full hover:bg-[#D6A200] bg-yellow-400 transition text-black py-4 rounded-xl font-semibold text-lg">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
