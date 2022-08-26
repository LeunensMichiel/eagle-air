import { Variants } from 'framer-motion';

export const slideLeftVariants: Variants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const slideUpVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const dynamicSlideUpVariants: Variants = {
  offscreen: (i) => ({
    ...(i === 0 && { x: -100 }),
    ...(i === 1 && { y: -100 }),
    ...(i === 2 && { y: 100 }),
    ...(i === 3 && { x: 100 }),
    opacity: 0,
  }),
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
