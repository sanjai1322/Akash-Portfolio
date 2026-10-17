import React from 'react';
import { motion } from 'motion/react';
import { EDITORIAL_EASE } from '../utils/motion.ts';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordSpacing?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  wordSpacing = 'mr-2',
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: EDITORIAL_EASE,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={child}
          className={`inline-block ${wordSpacing}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
