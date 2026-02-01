'use client';
import { useState } from 'react';
import Image from 'next/image';

interface BannerYouTubeProps {
  videoId: string;
}

export default function BannerYouTube({ videoId }: BannerYouTubeProps) {
  const [play, setPlay] = useState(false);

  return (
    <section className="relative w-full h-[520px] bg-black overflow-hidden">
      {!play ? (
        <>
          {/* FAST thumbnail (loads instantly) */}
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Banner video thumbnail"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Play button */}
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
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1&rel=0`}
          title="Banner Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </section>
  );
}
