'use client';

import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { Overlay } from '@/components/atoms/Overlay';
import { Heading } from '@/components/atoms/Heading';
import { LogoGroup } from '@/components/molecules/LogoGroup';
import { CountdownUnit } from '@/components/molecules/CountdownUnit';
import { siteConfig } from '@/config/site.config';
import { fadeInUp, staggerContainer } from '@/styles/animations';

export function HeroSection() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4">
      <HeroBackground />
      <Overlay variant="gradient" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6 md:gap-8 text-center max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp}>
          <LogoGroup logoSize="lg" />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Heading as="h1" className="text-4xl md:text-6xl lg:text-7xl">
            {siteConfig.eventName}
          </Heading>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-neutral-700 font-body max-w-2xl"
        >
          {siteConfig.eventTagline}
          {' '}
          &bull;{' '}
          {siteConfig.eventLocation}
        </motion.p>

        <motion.div variants={fadeInUp}>
          <CountdownUnit targetDate={siteConfig.eventDate} />
        </motion.div>
      </motion.div>
    </section>
  );
}