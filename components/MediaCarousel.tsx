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
  // Graduation photo – save this image as /public/about/duke-grad-lei.jpg
  {
    type: 'image',
    src: '/about/duke-grad-lei.jpg',
    alt: 'Andrew at Duke Pratt graduation wearing lei',
    caption: 'Graduation from Duke Pratt School of Engineering.',
  },
  // Waterfall / hiking photo – save as /public/about/waterfall.jpg
  {
    type: 'image',
    src: '/about/hike.jpg',
    alt: 'Andrew on a hike in Hawaiʻi',
    caption: 'Back home in Hawaiʻi, recharging outdoors.',
  },
  // Sunset with dog photo – save as /public/about/sunset-dog.jpg
  {
    type: 'image',
    src: '/about/sunset-dog.jpg',
    alt: 'Andrew walking his dog at sunset by the ocean',
    caption: 'Evening walks with my dog on the west side.',
  },
  // Cameron Indoor / basketball photo – save as /public/about/cameron-intramurals.jpg
  {
    type: 'image',
    src: '/about/cameron-intramurals.jpg',
    alt: 'Andrew on the court after an intramural basketball game',
    caption: 'Intramural hoops at Cameron Indoor.',
  },
  // Basketball gym video – save this as /public/about/duke-gym.mp4
  {
    type: 'video',
    src: '/about/duke-gym.mp4',
    alt: 'Basketball court at Duke',
    caption: 'Where I still spend too much time shooting hoops.',
  },
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


