import React from 'react'

const Educations = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
                <h1 className='relative text-xl z-20 bg-white px-4 py-3 font-semibold'>Education</h1>
                <hr className='absolute text-neutral-500 w-full max-w-7xl' />
            </div>
            <div className="w-full flex flex-row  justify-between mt-10">

                {/* LEFT SIDE */}
                <div className="flex flex-col space-y-8 items-start leading-tight">

                    <div>
                        <h1 className="text-xl font-medium">State Board of Secondary School</h1>
                        <p className="text-neutral-500">Anant Bhalerao Vidya Mandir</p>
                    </div>

                    <div>
                        <h1 className="text-xl font-medium">Higher Secondary School</h1>
                        <p className="text-neutral-500">Sarasvati Bhuvan College of Science</p>
                    </div>

                    <div>
                        <h1 className="text-xl font-medium">B.Tech: Computer Science</h1>
                        <p className="text-neutral-500">MGM University</p>
                    </div>

                </div>

                {/* RIGHT SIDE (MATCHED GAP) */}
                <div className="flex flex-col items-center justify-between">
                    <p className="text-sm text-neutral-500">2020/05 </p>
                    <p className="text-sm text-neutral-500">2022/04</p>
                    <p className="text-sm text-neutral-500">2022 - Present</p>
                </div>

            </div>

        </div>
    )
}

export default Educations