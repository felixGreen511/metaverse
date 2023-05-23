'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { TypingText } from '../components'
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.xPaddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
      <motion.div 
      variants={staggerContainer} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false,  amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| ABOUT METAVERSE" textStyles="text-center"/>
        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">MetaVerse</span> is a new technological 
          experience in the future, 
          there you can enjoy visual world. 
          You can feel what you see irrespective of where you are, 
          ethinicity, culture, 
          religion and social organizations
          MetaVerse is a new technological 
          experience in the future, 
          there you can enjoy 
          <span className="font-extrabold text-white"> visual world</span>. 
          You can feel what you see irrespective of where you are, 
          ethinicity, culture, 
          religion and social organizations
          MetaVerse is a <span className="font-extrabold text-white">new technological</span> 
          experience in the future, 
          there you can enjoy visual world. 
          You can feel what you see irrespective of where you are, 
          ethinicity, culture, 
          <span className="font-extrabold text-white"> religion and social organizations</span>
        </motion.p>
        <motion.img 
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
 
      </motion.div>
  </section>
);

export default About;
