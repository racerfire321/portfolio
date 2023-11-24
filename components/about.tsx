"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-header';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');

  const danceAnimation = {
    y: [0, -10, 0, 10, 0], // Y-axis movement for a dancing effect
    transition: { duration: 1.5, repeat: Infinity },
  };

  return (
    <motion.section
      ref={ref}
      className='relative mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      {/* Unique background pattern */}
      <div className='absolute top-0 left-0 w-full h-full bg-pattern opacity-25'></div>

      <SectionHeading>About me</SectionHeading>
      <motion.p
        className='mb-4 font-medium leading-7 text-gray-700  dark:text-slate-300'
        animate={danceAnimation}
      >
        Hi, I&rsquo;m Bitisha Maharjan, a Software Engineering student at PCPS College. I have a passion for creating apps and websites, aspiring to become a well-rounded full-stack developer. My proficiency includes technologies such as MERN stack, Next.js, JavaScript, TypeScript, Python, Java, and HTML5 canvas for games. I have completed courses on platforms like Coursera and Amazon, earning certificates. For front-end development, I prefer using React with Tailwind CSS. Currently seeking opportunities, whether freelancing or a full-time role in web development.
      </motion.p>
      <motion.p
        className='font-medium leading-7 text-gray-700  dark:text-slate-300'
        animate={danceAnimation}
      >
        Beyond coding, I enjoy reading a wide variety of literary books. Debugging code issues is a highly engaging exercise that contributes significantly to my professional development by enhancing my problem-solving abilities. Playing musical instruments, including the guitar, is a way for me to clear my head and recharge mentally. I am also active in sports, winning medals and certificates. This diverse approach highlights my dedication to a balanced and holistic work lifestyle, enhancing both my technical proficiency and personal interests.
      </motion.p>
    </motion.section>
  );
};

export default About;
