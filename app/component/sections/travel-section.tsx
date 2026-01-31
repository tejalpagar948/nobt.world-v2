'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import locationIcon from '../../../public/assets/icons/location.svg';
import travelJson from '../../data/destination-card.json';

/* ================= TYPES ================= */

type TabType = 'destination' | 'international' | 'domestic';

/* 
  IMPORTANT:
  - Do NOT over-restrict these types
  - JSON imports are inferred as `string`
*/
type TravelCard = {
  title: string;
  country: string;
  price?: string;
  image: string;
  category: string;
  travelType: string;
  link: string;
};

/* ============== CONSTANTS ================ */

const INITIAL_COUNT = 8;
const TABS: TabType[] = ['destination', 'international', 'domestic'];

/* ============== COMPONENT ================ */

const TravelSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('destination');
  const [showAll, setShowAll] = useState(false);

  /* ========== FILTER (NO TS ERRORS) ========== */
  const filteredData = travelJson.destinations.filter((item) => {
    switch (activeTab) {
      case 'destination':
        // Show all destinations
        return item.category === 'destination';

      case 'international':
        return (
          item.category === 'destination' && item.travelType === 'international'
        );

      case 'domestic':
        return (
          item.category === 'destination' && item.travelType === 'domestic'
        );

      default:
        return false;
    }
  });

  const visibleData = showAll
    ? filteredData
    : filteredData.slice(0, INITIAL_COUNT);

  return (
    <section className="my-14 lg:my-27">
      <div className="wrapper">
        {/* HEADING */}
        <div className="text-center max-w-[520px] mx-auto">
          <h3 className="text-4xl lg:text-5xl font-serif font-semibold">
            Find Out The Best <br /> Travel Choice
          </h3>
          <p className="mt-4 text-gray-500">
            Explore the most popular destinations around the world with
            affordable packages.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-11 mt-10">
          <div className="flex gap-2 border rounded-full p-3 flex-wrap justify-center">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setShowAll(false);
                }}
                className={`px-7 py-2.5 rounded-full text-sm font-medium uppercase transition
                hover:bg-black hover:text-white
                ${activeTab === tab ? 'bg-gray-100' : ''}`}>
                {tab === 'destination' ? 'All Destinations' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-400">No destinations found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
            {visibleData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group relative h-[380px] rounded-2xl overflow-hidden block">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-0 w-full px-5 py-4 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-serif leading-none">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 mt-3 text-sm text-white/70">
                        <Image
                          src={locationIcon}
                          alt="Location"
                          width={20}
                          height={20}
                        />
                        <span>{item.country}</span>
                      </div>
                    </div>

                    {item.price && (
                      <div className="text-right flex flex-col gap-3">
                        <span className="text-sm text-white">Start From</span>
                        <span className="text-2xl font-semibold leading-none">
                          ₹
                          {Number(
                            item.price.replace(/,/g, '')
                          ).toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* VIEW ALL */}
        {!showAll && filteredData.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full border font-medium hover:bg-black hover:text-white transition">
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelSection;
