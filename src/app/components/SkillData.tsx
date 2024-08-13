
'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillData = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    console.log(`Image at index ${index} in view: ${inView}`);
  }, [inView, index]);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >

      <img 
        src={src} 
        width={width} 
        height={height} 
        alt="skill image" 
      />
    </motion.div>
  );
};

export default SkillData;
