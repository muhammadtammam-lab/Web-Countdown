'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { backgroundImages, countryFlags } from '@/config/background.config';
import { motion, AnimatePresence } from 'framer-motion';

export interface HeroBackgroundProps {
  className?: string;
}

const SLIDE_INTERVAL = 6000;
const FLAG_INTERVAL = 3000;

function shuffleArray<T>(array: readonly T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i] as T;
    shuffled[i] = shuffled[j] as T;
    shuffled[j] = temp;
  }
  return shuffled;
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  const [isClient, setIsClient] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [shuffledFlags, setShuffledFlags] = useState(countryFlags);
  const bgIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const flagIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setIsClient(true);
    setShuffledFlags(shuffleArray(countryFlags));
  }, []);

  useEffect(() => {
    if (!isClient) return;

    bgIntervalRef.current = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, SLIDE_INTERVAL);

    flagIntervalRef.current = setInterval(() => {
      setCurrentFlagIndex((prev) => (prev + 1) % shuffledFlags.length);
    }, FLAG_INTERVAL);

    return () => {
      if (bgIntervalRef.current) clearInterval(bgIntervalRef.current);
      if (flagIntervalRef.current) clearInterval(flagIntervalRef.current);
    };
  }, [isClient, shuffledFlags.length]);

  const currentImage = backgroundImages[currentBgIndex];

  if (!currentImage) {
    return null;
  }

  const flags = isClient ? shuffledFlags : countryFlags;
  const visibleFlags = [];
  for (let i = 0; i < 6; i++) {
    const idx = (currentFlagIndex + i) % flags.length;
    if (flags[idx]) {
      visibleFlags.push(flags[idx]);
    }
  }

  return (
    <div
      className={`absolute inset-0 -z-10 overflow-hidden ${className ?? ''}`}
      aria-hidden="true"
    >
      {/* Background images slideshow */}
      {isClient ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              priority={currentImage.priority}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="absolute inset-0">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Country flags overlay - right side vertical */}
      <div className="absolute top-0 right-0 h-full w-auto pointer-events-none overflow-hidden">
        <div className="absolute inset-0 w-28 bg-gradient-to-l from-black/40 via-black/10 to-transparent" />

        <div className="relative h-full flex flex-col justify-center px-3 md:px-4 py-6">
          <div className="flex flex-col gap-3 md:gap-4">
            {visibleFlags.map((flag) => (
              <div
                key={flag.id}
                className="flex items-center gap-2"
              >
                <div className="relative w-10 h-7 md:w-14 md:h-9 flex-shrink-0 rounded-md overflow-hidden shadow-lg ring-1 ring-white/20">
                  <Image
                    src={flag.flagUrl}
                    alt={`Bendera ${flag.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40px, 56px"
                  />
                </div>
                <span className="text-[9px] md:text-[10px] text-white/90 font-medium leading-tight drop-shadow-md hidden md:block">
                  {flag.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent" />
    </div>
  );
}