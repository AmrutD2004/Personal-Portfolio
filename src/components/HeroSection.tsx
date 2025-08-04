"use client";
import React from 'react';
import { Spotlight } from "@/components/ui/spotlight-new";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaMailBulk, FaCss3, FaCss3Alt, FaReact, FaPython, FaBootstrap, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { DiDjango } from "react-icons/di";
import Link from 'next/link';
import Card from './Card';
import '../app/globals.css';
import '../assets/style.css'

const HeroSection = () => {
    const cardData = [
        {
            title: "TrakX",
            description: "Daily expense tracker with analytics and PDF reports.",
            image: "https://res.cloudinary.com/dq7ldqmy4/image/upload/v1754300938/Screenshot_2025-08-04_151743_jinehu.png",
            link: "https://daily-expense-tracker-frontend.onrender.com"
        },
        {
            title: "RedStore",
            description: "An online E-commerce Website Using Django.",
            image: "https://res.cloudinary.com/dq7ldqmy4/image/upload/v1751905369/ecommerece_lkept6.png",
            link: "#",
        },
        {
            title: "TravelWorld",
            description: "A Travel Website to explore world.",
            image: "https://res.cloudinary.com/dq7ldqmy4/image/upload/v1751905369/TravelWorld_oewxwr.png",
            link: "#",
        }
    ];

    // Duplicate the cards for seamless looping
    const duplicatedCards = [...cardData, ...cardData];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
                <Spotlight />
                {/* Your existing decorative elements */}
                <div className="absolute inset-y-0 left-0 h-full w-px">
                    <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent" />
                </div>
                <div className="absolute inset-y-0 right-0 h-full w-px">
                    <div className="absolute h-40 w-px bg-gradient-to-b from-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px w-full">
                    <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent" />
                </div>

                {/* Profile Content */}
                <div id='Home' className="px-4 py-10 md:py-20">
                    <div className='pt-9 flex flex-row items-center justify-center'>
                        <img
                            className='w-40 h-40 object-cover rounded-full border-2 border-gray-300 block1 dark:border-gray-600'
                            src="https://res.cloudinary.com/dq7ldqmy4/image/upload/v1754230104/profile_ohzfca.png"
                            alt="Profile"
                        />
                    </div>
                    <h1 className="pt-9 relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
                        {"Hey, I'm Amrut".split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className="mr-2 inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        className="relative z-10 mx-auto max-w-xl py-4 mt-2 text-center text-3xl font-normal text-neutral-600 dark:text-neutral-400"
                    >
                        FullStack Developer
                    </motion.p>
                </div>

                {/* Social Links */}
                <div className='flex flex-row gap-6 text-4xl social-links block1'>
                    <Link href='https://github.com/AmrutD2004/' target="_blank" rel="noopener noreferrer">
                        <button className=' aria-label flex items-center'>
                            <FaGithub className="me-2" />Github
                        </button>
                    </Link>
                    <Link href='https://www.linkedin.com/in/amrut-deshpande-538b692b4/' target="_blank" rel="noopener noreferrer">
                        <button className='flex items-center'>
                            <FaLinkedinIn className='me-2' />LinkedIn
                        </button>
                    </Link>
                    <Link href='mailto:amrutdeshpande2004@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <button className='flex items-center'>
                            <IoMdMail className='me-2' />Mail
                        </button>
                    </Link>
                </div>
                        <div className="flex">
  <div className="ms-auto overflow-fixed">
    <img 
      src="./Scroll Down Arrows.gif" 
      alt="Scroll down indicator" 
      className="w-30 h-30 ms-auto"
    />
  </div>
</div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <section id="about" className="px-4 sm:px-6 lg:px-8 py-10 block">
  <div className="text-center">
    <h1 className="text-4xl sm:text-5xl font-semibold text-slate-300 text-start">About Me</h1>
    <br />
    <hr className='text-blue-200' />
  </div>
  <br />
  <br />

  <div className="max-w-4xl ms-auto mx-auto space-y-6 text-slate-300 text-lg sm:text-xl leading-relaxed ">
    <p className="text-lg leading-relaxed">
                                                            Hello! I'm <strong className='font-bold underline'>Amrut Deshpande</strong>, a final-year B.Tech student at MGM's Jawaharlal Nehru Engineering College. I'm passionate about becoming a skilled full-stack developer, with a focus on mastering Python and modern web technologies.
                            </p>
                            <p className='text-lg leading-relaxed'>
                                 I believe in continuous learning, staying curious, and contributing positively to every team I’m part of. I'm excited to grow in this field and work on meaningful tech projects.
                            </p>
                            <p className='text-lg leading-relaxed'>
                                 Thanks for visiting my portfolio — feel free to get in touch!
                            </p> 
  </div>
</section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Tech Stack */}
            <section className="px-6 py-10 overflow-hidden block">
                <div>
                    <h1 className="text-5xl text-slate-300 font-semibold">Tech Stack</h1>
                    <br />
                    <hr className='text-blue-200' />
                </div>
                <br />
                <br />
                <br />
                <div className="flex justify-center">
                    <div className="flex gap-6 flex-wrap justify-center max-w-4xl block1">
                        {/* HTML */}
                        <div className="tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <FaHtml5 className="text-5xl" />HTML
                        </div>

                        {/* CSS */}
                        <div className="tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <FaCss3Alt className="text-5xl" />CSS
                        </div>

                        {/* JavaScript */}
                        <div className="tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <IoLogoJavascript className="text-5xl" />JavaScript
                        </div>

                        {/* React */}
                        <div className=" tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <FaReact className="text-5xl" />React
                        </div>

                        {/* Next.js */}
                        <div className="tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <RiNextjsFill className="text-5xl" />Next.js
                        </div>
                        {/* Python */}
                        <div className="tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <FaPython className="text-5xl" />Python
                        </div>
                        {/* Django */}
                        <div className=" tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <DiDjango className="text-5xl" />Django
                        </div>
                        {/* Tailwind */}
                        <div className=" tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <SiTailwindcss className="text-5xl" />Tailwind
                        </div>
                        {/* Bootstrap */}
                        <div className="tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <FaBootstrap className="text-5xl" />Bootstrap
                        </div>
                         {/* SQL */}
                        <div className=" tech-stack bg-[#2d2d2d] hover:bg-[#3a3a3a] transition-colors duration-300 px-6 py-4 rounded-xl flex flex-col items-center w-32 h-32 justify-between">
                            <SiMysql className="text-5xl" />MySQL
                        </div>
                    </div>
                </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Projects Section with Infinite Scroll */}
            <section id='projects' className="px-6 py-10 overflow-hidden block">
                <div>
                    <h1 className="text-5xl text-slate-300 font-semibold">Projects</h1>
                    <br />
                    <hr className='text-blue-200' />
                </div>
                <div className="relative w-full py-8">
                    <div className="flex w-max animate-scroll-x hover:animation-paused">
                        {duplicatedCards.map((card, index) => (
                            <div key={`${card.title}-${index}`} className="px-4">
                                <Card
                                    title={card.title}
                                    description={card.description}
                                    imageUrl={card.image}
                                    link={card.link}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Contact Section */}
<section id="contact" className="px-6 py-10 overflow-hidden block">
  <div>
    <h1 className="text-5xl text-slate-300 font-semibold">Contact</h1>
    <br />
    <hr className='text-blue-200' />
  </div>
  
  <div className="mt-12 max-w-4xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Email Contact */}
    <div className="flex items-center gap-4 p-9 w-100 bg-[#2d2d2d] rounded-lg hover:bg-[#3a3a3a] transition-colors">
      <div className="p-3 bg-blue-900/20 rounded-full">
        <IoMdMail className="text-3xl text-blue-400" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-slate-300">Email</h3>
        <a 
          href="mailto:amrutdeshpande2004@gmail.com" 
          className="text-blue-400 hover:underline text-lg"
        >
          amrutdeshpande2004@gmail.com
        </a>
      </div>
    </div>

    {/* Phone Contact */}
    <div className="flex items-center gap-4 p-6 w-100 bg-[#2d2d2d] rounded-lg hover:bg-[#3a3a3a] transition-colors">
      <div className="p-3 bg-blue-900/20 rounded-full">
        <FaPhoneAlt className="text-3xl text-blue-400" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-slate-300">Phone</h3>
        <a 
          href="tel:+917620759288"
          className="text-blue-400 hover:underline text-lg"
        >
          +91 7620759288
        </a>
      </div>
    </div>
  </div>
</div>
</section>
        </div>
    );
}

export default HeroSection;