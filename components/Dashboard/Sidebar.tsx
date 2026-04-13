import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='h-screen bg-[#E6F2F7] border border-[#E5E7EB] min-w-[60px] sm:min-w-[100px] rounded-r-[12px] py-8 space-y-8'>
            <Link href='/dashboard' className='flex flex-col items-center gap-2 mr-2 hover:underline underline-offset-2 transition-all duration-300'>
                <button className='bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center' style={{ boxShadow: "0px 2px 4px -2px #0000001A, 0px 4px 6px -1px #0000001A" }}>
                    <Image src='/assets/plus-icons.svg' alt='plus' width={20} height={20} />
                </button>
                <h2 className='text-dark-ash-gray font-medium text-sm'>New</h2>
            </Link>
            <Link href='/dashboard' className='flex flex-col items-center gap-2 mr-2 hover:underline underline-offset-2 transition-all duration-300'>
                <Image src='/assets/dashboard-home-icon.svg' alt='dashboard-home-icon' width={24} height={24} />
                <h2 className='text-dark-ash-gray font-medium text-sm'>Home</h2>
            </Link>
            <Link href='/documents' className='flex flex-col items-center gap-2 mr-2 hover:underline underline-offset-2 transition-all duration-300'>
                <svg stroke="text-dark-ash-gray" fill="#3b3a3b" stroke-width="0" viewBox="0 0 1024 1024" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"></path></svg>
                <h2 className='text-dark-ash-gray font-medium text-sm md:block hidden'>documents</h2>
                <h2 className='text-dark-ash-gray font-medium text-sm md:hidden block'>docu</h2>
            </Link>
        </div>
    )
}

export default Sidebar