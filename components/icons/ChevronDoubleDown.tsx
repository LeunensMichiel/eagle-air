import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

const pathVariants = {
  from: {
    y: 0,
  },
  to: {
    y: 4,
  },
};

export const ChevronDoubleDown = ({ ...props }) => {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        d="M11.29 11.46C11.383 11.5537 11.4936 11.6281 11.6154 11.6789C11.7373 11.7297 11.868 11.7558 12 11.7558C12.132 11.7558 12.2627 11.7297 12.3846 11.6789C12.5065 11.6281 12.6171 11.5537 12.71 11.46L15.71 8.46C15.8059 8.36676 15.8824 8.25556 15.9353 8.13273C15.9882 8.0099 16.0164 7.87786 16.0183 7.74414C16.0201 7.61043 15.9956 7.47766 15.9462 7.35341C15.8967 7.22916 15.8233 7.11587 15.73 7.02C15.6368 6.92414 15.5256 6.84758 15.4027 6.79469C15.2799 6.7418 15.1479 6.71363 15.0142 6.71177C14.8804 6.70991 14.7477 6.73441 14.6234 6.78386C14.4992 6.83332 14.3859 6.90676 14.29 7L12 9.34L9.71002 7C9.51641 6.8117 9.25593 6.70802 8.98588 6.71177C8.71583 6.71552 8.45833 6.82639 8.27002 7.02C8.08172 7.21361 7.97804 7.47409 7.98179 7.74414C7.98554 8.0142 8.09641 8.2717 8.29002 8.46L11.29 11.46Z"
        fill="currentColor"
        initial={'from'}
        animate={'to'}
        variants={pathVariants}
        transition={{
          type: 'spring',
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 0.2,
        }}
      />
      <motion.path
        d="M12 14.84L14.29 12.54V12.58C14.4783 12.3917 14.7337 12.2859 15 12.2859C15.2663 12.2859 15.5217 12.3917 15.71 12.58C15.8983 12.7683 16.0041 13.0237 16.0041 13.29C16.0041 13.5563 15.8983 13.8117 15.71 14L12.71 17C12.6171 17.0938 12.5065 17.1682 12.3846 17.2189C12.2627 17.2697 12.132 17.2958 12 17.2958C11.868 17.2958 11.7373 17.2697 11.6154 17.2189C11.4936 17.1682 11.383 17.0938 11.29 17L8.29002 14C8.09641 13.8117 7.98554 13.5542 7.98179 13.2842C7.97804 13.0141 8.08172 12.7536 8.27002 12.56C8.45833 12.3664 8.71583 12.2556 8.98588 12.2518C9.25593 12.2481 9.51641 12.3517 9.71002 12.54L12 14.84Z"
        fill="currentColor"
        variants={pathVariants}
        initial={'from'}
        animate={'to'}
        transition={{
          type: 'spring',
          duration: 1,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    </motion.svg>
  );
};
