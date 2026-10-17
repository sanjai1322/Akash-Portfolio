/**
 * Motion utilities and spring/easing presets for architectural editorial transitions.
 */

export const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const; // Custom cubic-bezier for luxury editorial motion

export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom * 0.12,
      ease: EDITORIAL_EASE,
    },
  }),
};

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Calculates a smooth interpolated number for counter animations
 */
export function interpolateCount(progress: number, start: number, end: number): number {
  const clamped = Math.max(0, Math.min(1, progress));
  // easeOutExpo for classy deceleration
  const easeProgress = clamped === 1 ? 1 : 1 - Math.pow(2, -10 * clamped);
  return Math.round(start + (end - start) * easeProgress);
}

/**
 * Formats a scroll percentage cleanly
 */
export function formatScrollPercent(value: number): string {
  const pct = Math.round(Math.max(0, Math.min(100, value * 100)));
  return `${pct}%`;
}
