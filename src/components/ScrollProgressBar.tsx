import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#285bff] via-[#85a6ff] to-[#b8c4ff] shadow-[0_0_10px_rgba(40,91,255,0.8)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
