import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center max-w-xl mx-auto'>
            <div className='flex items-center justify-center'>
                <h1 className='relative text-xl z-20 bg-white px-4 py-3 font-semibold'>Contact</h1>
                <hr className='absolute text-neutral-500 w-full max-w-7xl' />
            </div>
            <div className='flex items-center justify-between space-x-3 w-full mt-4'>
                <a
                    href="mailto:amrutdeshpande2004@gmail.com"
                    className="text-neutral-500 underline  text-base"
                >
                    amrutdeshpande2004@gmail.com
                </a>
                <a
                    href="tel:+917620759288"
                    className="text-neutral-500 underline text-base"
                >
                    +91 7620759288
                </a>
            </div>
        </div>
    )
}

export default Contact