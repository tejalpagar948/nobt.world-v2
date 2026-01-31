'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BannerYouTubeProps {
  videoId: string;
  start?: number;
}

export default function BannerYouTube({
  videoId,
  start = 0,
}: BannerYouTubeProps) {
  const [play, setPlay] = useState(false);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {!play ? (
        <>
          <Image
            src="/assets/images/banner-img.jpg" // LOCAL image = FASTEST
            alt="Banner video thumbnail"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <button
            onClick={() => setPlay(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center text-black text-3xl shadow-xl">
              ▶
            </div>
          </button>
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?start=${start}&autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&rel=0`}
          title="Banner Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
}
