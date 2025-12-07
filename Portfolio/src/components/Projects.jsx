
import { Github, Globe } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {
    const cardData = [


        {
            title: "Invoicy - AI Powered Invoice generator",
            description: "Smart invoicing platform with AI support for automated invoice extraction, business insights, and PDF generation.",
            image: "https://res.cloudinary.com/dq7ldqmy4/image/upload/v1763979988/Screenshot_2025-11-24_155522_dawte2.png",
            link: "https://invoicy-d2.onrender.com/",
            gitLink : 'https://github.com/AmrutD2004/Invoice-Generator'
        },
        {
            title: "RateX - CryptoCurrency Price Tracking",
            description: "RateX-AI-powered-CryptoCurrency-Price-Tracking",
            image: "https://res.cloudinary.com/dq7ldqmy4/image/upload/v1764528817/Screenshot_2025-12-01_002255_glgsdz.png",
            link: "https://ratexx.onrender.com/",
            gitLink : 'https://github.com/AmrutD2004/RateX-AI-powered-CryptoCurrency-Price-Tracking'
        },
        {
            title: "TrakX - Daily Expense Tracker",
            description: "Daily expense tracker with analytics and PDF reports.Full-stack web app to manage and visualize daily expenses with features like sign-up/login and detailed dashboards.",
            image: "https://res.cloudinary.com/dq7ldqmy4/image/upload/v1754300938/Screenshot_2025-08-04_151743_jinehu.png",
            link: "https://daily-expense-tracker-frontend.onrender.com",
            gitLink : 'https://github.com/AmrutD2004/Daily-expense-Tracker'
        },
        {
            title: "MotoRental - Motorcycle Rental Website",
            description: "Full-stack web application for browsing, booking, and managing motorcycle rentals with user registration and admin management.",
            image: "https://res.cloudinary.com/dq7ldqmy4/image/upload/v1761671330/Screenshot_2025-10-28_223513_eaktye.png",
            link: "https://github.com/AmrutD2004/MotoRental",
            gitLink : 'https://github.com/AmrutD2004/MotoRental'
        },
    ];
    return (
        <div className='flex flex-col items-center justify-center space-y-3'>
            <div className='flex items-center justify-center'>
                <h1 className='relative text-xl z-20 bg-white px-4 py-3 font-semibold'>Projects</h1>
                <hr className='absolute text-neutral-500 w-full max-w-7xl' />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {cardData.map((items, idx) => (
                    <div key={idx} className='flex flex-col justify-between border border-neutral-300 rounded-md shadow-md group hover:scale-102 transition-all duration-200'>
                        <img className='object-cover rounded-md group-hover:blur-xs transition-all duration-200 mask-b-from-0.5' src={items.image} alt="" />
                        <div className='border border-neutral-300'></div>
                        <div className=' flex flex-col gap-4 px-3 py-3'>
                            <h1 className=' text-base text-neutral-700 font-medium'>{items.title}</h1>
                            <p className='text-sm text-neutral-500'>{items.description}</p>
                        </div>
                        <div className='flex items-start justify-start px-3 py-3 gap-5'>
                            <a target='_black' rel='noopener noreferrer' href={`${items.link}`}>
                                <div className='p-2 bg-gray-100 rounded-md shadow-sm'>
                                <Globe className='text-neutral-500' size={18} />
                                </div>
                            </a>
                            <a target='_black' rel='noopener noreferrer' href={`${items.gitLink}`}>
                                 <div className='p-2 bg-gray-100 rounded-md shadow-sm'>
                                <Github className='text-neutral-500' size={18} />
                                </div>
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects