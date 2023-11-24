import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jumper from "@/public/jumper.jpg";
import game from "@/public/game.png";
import messenger from "@/public/messenger.jpg";
import image from "@/public/image.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Corazone - gameshoping",
    description:
      "This project is the Mern stack project where all the fuction are applied for a ecommerce website",
    tags: ["Sanity", "Next.js", "MongoDB", "Tailwind", "Stripe","React"],
    imageUrl: game,
  },
  {
    title: "Hotel Boooking App",
    description:
      "Hotel Booking App is the desktop app made for hotel Luton to book room with admin panel",
    tags: ["Java", "Mysql","desktop app"],
    imageUrl: image,
  },
  {
    title: "Jumper guy",
    description:
      "Jummper guy is a animated game using farmer motion where obstacle need to overpass using awdz keys",
    tags: ["Nextjs", "Javascript", "Canvas", "Farmer-motion", "Redux"],
    imageUrl: jumper,
  },
  {
    title: "Messenger-clone",
    description:
      "Signing up by facebook acc you can enter the group chat where you can message using fb profile and name ",
    tags: ["React", "Redis","Swr","Upstash", "Tailwind", "NextJS","Pusher"],
    imageUrl: messenger,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;