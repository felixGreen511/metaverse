'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { StartSteps, TitleText, TypingText } from '../components'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion'; 
import { startingFeatures } from '../constants'



const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
    variants={staggerContainer} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: 'false', amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
      variants={planetVariants('left')}
      className={`flex-1 ${styles.flexCenter}`}
      >
        <img 
        src="/get-started.png"
        alt="get-started"
        className="w-[90%] h-[50%] object-contain"
        />
      </motion.div>
      <motion.div 
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| HOW METAVERSES WORKS"/>
        <TitleText title={<>Let's just get Started with MetaVerse in just a click</>}/>
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feacture, index) => (
            <StartSteps 
            key={feacture} 
            number={index + 1}
            text={feacture}
            />
          ))}
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
