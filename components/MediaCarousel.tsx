'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * MediaCarousel Component
 *
 * Displays a vertical portrait image (or video) with left/right controls to
 * cycle through additional media.
 *
 * EDIT THIS FILE TO:
 * - Add/remove photos or videos in the `mediaItems` array
 * - Update file paths (place files in the /public directory)
 * - Change the aspect ratio or styling of the media frame
 *
 * Location: components/MediaCarousel.tsx
 */

type MediaItem =
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: 'video';
      src: string;
      alt: string;
      caption?: string;
    };

// EDIT THIS ARRAY: add or remove images/videos here.
// Place your files in /public (e.g., /public/about/headshot-1.jpg)
const mediaItems: MediaItem[] = [
  {
    type: 'image',
    src: '/headshot.jpeg', // main portrait
    alt: 'Andrew Kwon Dawson',
    caption: 'At Duke, bringing a bit of Hawaiʻi to Durham.',
  },
  // Example additional items (update or replace these):
  // {
  //   type: 'image',
  //   src: '/about/basketball.jpg',
  //   alt: 'Andrew playing basketball',
  //   caption: 'Coaching and playing basketball in Durham.',
  // },
  // {
  //   type: 'video',
  //   src: '/about/music-madness-demo.mp4',
  //   alt: 'Music Madness demo',
  //   caption: 'Quick walkthrough of the Music Madness project.',
  // },
];

export function MediaCarousel() {
  const [index, setIndex] = useState(0);

  if (mediaItems.length === 0) return null;

  const current = mediaItems[index];

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-900/5 dark:bg-gray-100/5">
        {/* Media */}
        {current.type === 'image' ? (
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 320px, 60vw"
          />
        ) : (
          <video
            src={current.src}
            className="w-full h-full object-cover"
            controls
          />
        )}

        {/* Controls */}
        {mediaItems.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-1.5 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous media"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-1.5 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next media"
            >
              ›
            </button>
          </>
        )}

        {/* Indicator dots */}
        {mediaItems.length > 1 && (
          <div className="absolute bottom-3 inset-x-0 flex justify-center space-x-1">
            {mediaItems.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === index
                    ? 'bg-white'
                    : 'bg-white/40 dark:bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {current.caption && (
        <p className="mt-3 text-xs text-center text-gray-600 dark:text-gray-400">
          {current.caption}
        </p>
      )}
    </div>
  );
}


