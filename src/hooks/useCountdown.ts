'use client';

import { useState, useEffect } from 'react';
import type { CountdownValue } from '@/types/countdown.types';

function getTimeRemaining(targetDate: Date): CountdownValue {
  const now = Date.now();
  const diff = targetDate.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isExpired: false };
}

export function useCountdown(targetDate: string): CountdownValue {
  const [countdown, setCountdown] = useState<CountdownValue>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const target = new Date(targetDate);

    function tick() {
      setCountdown(getTimeRemaining(target));
    }

    tick();

    const interval = setInterval(() => {
      const remaining = getTimeRemaining(target);
      setCountdown(remaining);

      if (remaining.isExpired) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}