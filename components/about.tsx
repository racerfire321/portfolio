"use client";
import React from 'react'
import SectionHeading from './section-header'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks';


const About = () => {

  const {ref} = useSectionInView('About');
  
  return (
    <motion.section 
    ref = {ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id='about'
    >
       <SectionHeading>About me</SectionHeading>
        <p className='mb-4 font-medium leading-7'>
        Hi, I'm Bitisha Maharjan, a student at PCPS College studying Software Engineering. I enjoy creating apps and websites, aiming to become a well-rounded full-stack developer. I'm familiar with technologies like MERN stack, Next.js, JavaScript, Python, Java and HTML5 canvas for games, and I've completed courses on platforms like Coursera and Amazon, earning certificates. For front-end development, I prefer using React with Tailwind CSS. I'm currently looking for opportunities, be it freelancing or a full-time role in web development. 
        </p>
        <p className='font-medium leading-7'>
        In addition to my interests in coding, I like reading a wide variety of literary books. Debugging code issues is a highly engaging exercise that also greatly contributes to my overall professional development by helping me to improve my problem-solving abilities. I enjoy playing the guitar and other musical instruments as a way to clear my head and mentally recharge. I am also quite active in sports, where I have won medals and certificates, among other accolades. This diverse approach not only highlights my dedication to a balanced and holistic work lifestyle, but it also enhances my technical proficiency.
         </p>
    </motion.section>
  )
}

export default About