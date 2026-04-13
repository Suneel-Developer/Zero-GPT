import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='px-3.5 sm:px-6 py-4 flex items-center justify-between'>
      <Link href='/'>
        <Image src='/assets/dashboard-logo.svg' alt='logo' width={39} height={36} />
      </Link>
      <div className='flex items-center gap-2'>
        <Link href='/contact-us' className='hover:shadow-2xl hover:text-white transition-all duration-300 hover:bg-main-clr border border-gray-olive text-dark-ash-gray py-2.5 px-3.5 rounded-full font-medium text-sm leading-[16px] tracking-[0.3px]'>Feedback</Link>
        <button className='hover:shadow-2xl hover:text-white transition-all duration-300 hover:bg-main-clr border border-gray-olive text-dark-ash-gray py-2.5 px-3.5 rounded-full font-medium text-sm leading-[16px] tracking-[0.3px]'>Profile</button>
      </div>
    </div>
  )
}

export default Header