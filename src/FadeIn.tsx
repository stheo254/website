'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // Optional delay for the animation
  direction?: string;
  rotate?: number; // Optional rotation in degrees
  distance?: number; // How far it should fade in (in pixels)
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'bottom', // Default direction
  rotate = 0, // Default: no rotation
  distance = 50, // Default fade-in distance
}: FadeInProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  // Determine the initial position based on the direction and distance
  const getInitialPosition = () => {
    switch (direction) {
      case 'top':
        return { y: -distance };
      case 'bottom':
        return { y: distance };
      case 'left':
        return { x: -distance };
      case 'right':
        return { x: distance };
      default:
        return { y: distance };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition(), rotate }}
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0, y: 0, rotate: 0 },
      }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
