"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'
const Intro = () => {
  const { ref } = useSectionInView("Home",0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
  <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[99rem]'>
    <div className='flex items-center justify-center'>
          <div className='relative'>
           <motion.div initial={{opacity:0, scale:0}}
           animate ={{opacity:1,scale:1}}
           transition= {{ type :'tween', duration:0.2}}>
            <Image src="/p.jpg" alt="bitisha" width="200" height="200" quality="95" priority={true}
            className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl' />
         <motion.span
         initial={{opacity:0,scale:0}}
         animate={{opacity:1,scale:1}}
         transition ={{
            type:"spring",
            stiffness: 125,
            delay:0.1,
            duration:0.7,
        }}
         className='text-4xl absolute bottom-0 right-0'>
        👩🏻‍💻

         </motion.span>
         </motion.div>
          </div>
    </div>
    <motion.p
    initial={{opacity:0, y:100}}
    animate={{opacity:1,y:0}}
    className='mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-4xl'>
      Hi, I&rsquo;m <motion.span
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            type: 'verticle',
            stiffness: 125,
            delay: 0.4,
            duration: 0.7,
          }}
          className='font-bold text-4xl'
        >
           Bitisha Maharjan.
        </motion.span> <br /> I am a{" "}
      <span  className="font-bold">full-stack developer</span> . I construct
       userfriendly <span className="italic">websites and applications</span> , mainly using{" "}
      <span className="underline hover:text-orange-500 transition duration-500">Mern stack   </span>
    </motion.p>

    <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        onClick={() => {
          setActiveSection("Contact")
          setTimeOfLastClick(Date.now())
        }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/Bitisha-Maharjan-cv.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className=" bg-gray-200 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/bitisha-maharjan-40862b241/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-gray-200 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/racerfire321"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
  </section>
    )
}

export default Intro