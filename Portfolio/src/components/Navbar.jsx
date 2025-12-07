import { Menu } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='max-w-4xl mx-auto selection:bg-neutral-800 selection:text-white'>
            <div className='lg:hidden text-black mt-5  fixed backdrop-blur-md '>
                <button onClick={() => setOpenMenu(!openMenu)} className='px-2.5 py-2 rounded-md cursor-pointer'>
                    <Menu className='text-neutral-500' />
                </button>
            </div>
            {openMenu && (
                <div className="absolute flex flex-col items-start justify-center mt-14 w-full 
                bg-gray-50/70 backdrop-blur-md px-3 shadow-lg fixed">

                    <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="/">Home</a>
                    <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#hero">About</a>
                    <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#project">Projects</a>
                    <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#expeirence">Experience</a>
                    <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#education">Education</a>
                    <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#contact">Contact</a>
                </div>
            )}
            <div className='hidden lg:flex items-center space-x-16 mt-5 shadow-lg px-4 py-2 rounded-full fixed top-0 z-50 backdrop-blur-2xl '>

                <h1 className='text-lg font-extrabold text-white bg-[#515151] px-2.5 py-2 rounded-full'>AD</h1>
                <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="/">Home</a>
                <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#hero">About</a>
                <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#project">Projects</a>
                <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#expeirence">Experience</a>
                <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#education">Education</a>
                <a className='hover:bg-gray-100 rounded-full px-2.5 py-2 transition-colors duration-200' href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar