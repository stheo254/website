'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // Optional delay for the animation
  direction?: 'top' | 'left' | 'right' | 'bottom'; // New: Fade direction
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'bottom', // Default direction
}: FadeInProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  // Determine the initial position based on the direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'top':
        return { y: -50 };
      case 'bottom':
        return { y: 50 };
      case 'left':
        return { x: -50 };
      case 'right':
        return { x: 50 };
      default:
        return { y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
