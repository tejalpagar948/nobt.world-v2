'use client';
import { useState } from 'react';
import faqTopData from '@/data/homePageData.json';
import faqItemsData from '@/data/faq.json';
import Link from 'next/link';

const { heading, description, button } = faqTopData.faqTopSection;
const { leftItems, rightItems } = faqItemsData;

type AccordionItemProps = {
  index: number;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
};

function AccordionItem({
  index,
  title,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="border-b border-white/20">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left">
        <h5 className="text-lg font-medium">
          {index}. {title}
        </h5>
        <svg
          width="20"
          height="20"
          viewBox="0 0 36 36"
          fill="none"
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}>
          <path
            d="M10 14.5L18 22L26 14.5"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}>
        <div className="overflow-hidden">
          <p className="text-gray-400 leading-relaxed max-w-xl">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  return (
    <section
      className="relative bg-gradient-to-br from-black via-[#1a0f05] to-black text-white py-14 lg:py-27"
      id="faq">
      <div className="wrapper">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16 items-center mb-5">
          <h3 className="font-serif text-[44px] leading-[1.15] lg:text-[50px] max-w-xl">
            {heading}
          </h3>

          <div className="max-w-xl mt-2">
            <p className="text-gray-400">{description}</p>

            <Link
              href={button.url}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-semibold tracking-wide text-black transition hover:bg-gray-200">
              {button.text}
            </Link>
          </div>
        </div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">
          <div>
            {leftItems.map((item, i) => (
              <AccordionItem
                key={i}
                index={i + 1}
                title={item.title}
                content={item.content}
                isOpen={openLeft === i}
                onClick={() => setOpenLeft(openLeft === i ? null : i)}
              />
            ))}
          </div>

          <div>
            {rightItems.map((item, i) => (
              <AccordionItem
                key={i}
                index={i + leftItems.length + i + 1}
                title={item.title}
                content={item.content}
                isOpen={openRight === i}
                onClick={() => setOpenRight(openRight === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* VIDEO */}
        <div className="relative h-[250px] lg:h-screen w-full overflow-hidden rounded-2xl mt-15">
          <iframe
            className="absolute top-1/2 left-1/2 w-[130%] h-[130%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/lQTj0lOLDG0?autoplay=1&mute=1&controls=0&loop=1&playlist=lQTj0lOLDG0&modestbranding=1&rel=0&fs=0&disablekb=1"
            title="YouTube background video"
            allow="autoplay; encrypted-media"
          />
        </div>
      </div>
    </section>
  );
}
