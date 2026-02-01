'use client';
import { useState, useRef } from 'react';

type ItineraryDay = {
  day: string;
  title: string;
  description: string;
};

type Props = {
  itinerary: ItineraryDay[];
};

export default function ItineraryAccordion({ itinerary }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // all closed initially
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    // Only one open at a time
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-yellow-100 text-yellow-800 font-semibold px-6 py-3 rounded-lg text-lg">
        Day-wise Itinerary
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {itinerary.map((day, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              {/* Button */}
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-100 hover:bg-gray-200 font-semibold text-gray-800 transition-colors duration-200"
                onClick={() => toggle(i)}>
                <span>
                  {day.day}: {day.title}
                </span>

                {/* Attractive SVG Arrow */}
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Panel with smooth height animation */}
              <div
                ref={(el) => {
                  contentRefs.current[i] = el; // ✅ Fix TypeScript error
                }}
                style={{
                  height: isOpen
                    ? contentRefs.current[i]?.scrollHeight
                      ? contentRefs.current[i]!.scrollHeight + 'px'
                      : 'auto'
                    : '0px',
                  overflow: 'hidden',
                  transition: 'height 0.3s ease',
                }}
                className="px-6 text-gray-700 border-t border-gray-200">
                <div className="py-4">{day.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
