import React from 'react'
import img from '../assets/amrut.jpg'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
    const skills = ['JavaScript', 'Python', 'React', 'Django', 'HTML', 'CSS', 'TailwindCSS', 'MySQL', 'MongoDB', 'Git', 'Github']
    return (
        <div className="flex flex-col items-center text-center py-10 mt-4 selection:text-white selection:bg-neutral-800">

            {/* Top Section: Image + Heading + Subtitle */}
            <div className="flex flex-col gap-4 items-center justify-between w-full mt-20 lg:flex-row ">

                <img
                    className="w-38 h-38 object-cover rounded-full border border-neutral-300 shadow-sm hover:blur-xs transition-all duration-200"
                    src={img}
                    alt="Amrut Deshpande"
                />

                <div className='flex flex-col items-start gap-3'>
                    <h1 className="text-4xl font-semibold tracking-tight">
                        Hey, I’m Amrut Deshpande
                    </h1>

                    <p className="text-neutral-600 text-lg">
                        Full stack developer • India
                    </p>
                    <div className='flex items-start space-x-4 justify-start'>
                        <a target='_blank' rel='noopener noreferrer' className='text-neutral-800 hover:text-neutral-500 transition-colors duration-200 cursor-pointer' href="https://github.com/AmrutD2004/"><Github size={18}/></a>
                        <a target='_blank' rel='noopener noreferrer' className='text-neutral-800 hover:text-neutral-500 transition-colors duration-200 cursor-pointer' href="https://www.linkedin.com/in/amrut-deshpande-538b692b4/"><Linkedin size={18}/></a>
                        <a target='_blank' rel='noopener noreferrer' className='text-neutral-800 hover:text-neutral-500 transition-colors duration-200 cursor-pointer' href="mailto:amrutdeshpande2004@gmail.com"> <Mail size={18}/></a>
                    </div>
                    <div className="flex space-x-4 pt-2">
                        <a href='#contact' className="px-4 py-2 bg-[#515151] text-white rounded-md shadow-sm">
                            Get In Touch
                        </a>
                        <a href='/pdf/AmrutDeshpande_Resume (2).pdf' download='AmrutDeshpandeResume.pdf'>
                            <button className="px-4 py-2 border border-neutral-300 rounded-md shadow-sm cursor-pointer">
                                View Resume
                            </button>
                        </a>
                    </div>
                </div>


            </div>

            {/* Description */}
            <p className="mt-10 max-w-3xl text-start text-neutral-700 text-lg leading-relaxed">
                Passionate full-stack developer skilled in React, Django, and Python, dedicated
                to building scalable and intuitive web applications.
            </p>
            <div className="flex flex-col items-start w-full mt-10">
                <h1 className="text-xl font-medium tracking-tight mb-4">
                    Technical Skills
                </h1>

                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-4 py-1 rounded-md border border-neutral-300 text-neutral-700 text-base shadow-sm hover:bg-neutral-100 transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Hero
