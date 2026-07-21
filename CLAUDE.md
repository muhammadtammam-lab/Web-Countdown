# Task Plan - Countdown Page Improvements

**User Request:**
1. ✅ Change title to "BPK IS / READY TO HOST / THE XXVI INCOSAI IN BALI" (multiline)
2. ✅ Update countdown to match web (811 days from now = Oct 9, 2028)
3. ✅ Redesign background: Left side Lampung (with bigger elephant), Right side Bali scenery
4. ✅ Make elephant larger in the background

## Files to modify:
- `src/config/site.config.ts` - update eventName and eventDate
- `src/components/organisms/HeroSection.tsx` - handle multiline title
- `src/components/organisms/HeroBackground.tsx` - split background layout
- `src/config/background.config.ts` - update background config