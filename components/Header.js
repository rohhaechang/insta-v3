import Image from 'next/image'
import React from 'react'
import {MagnifyingGlassIcon, PlusCircleIcon} from '@heroicons/react/24/outline'
import {HomeIcon} from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
      
      {/* Left */}
      
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            fill
            className='object-contain '/>
        </div>
        <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            fill
            className='object-contain '/>
        </div>

      {/* Middle */}
        
        <div className='relative mt-1'>
          <div className='absolute top-2 left-2'>
            <MagnifyingGlassIcon className='h-5 text-gray-500' />
          </div>
          <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
        </div>
        
      {/* Right */}

      <div className='flex space-x-4 items-center'>
        <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
        <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
        <Image 
          src="https://w.namu.la/s/126588db9d20e18ebae80ad547e784ffc25c2e2a62d41e2e0d6bc0ec45bf77c4e0dc3f757cd2ea5e1690ace9288f424edb6f0c5bfd5da345f4b4c254e6d129603aae552d36278efb1382b484ef37d46bcf4552ff44eca993b8fcc745def00f6bea496d0b7bcd85c7506c2d17c62fda33"
          alt='picture'
          className='rounded-full object-contain cursor-pointer'
          width={40}
          height={40} />
      </div>
    </div>
  )
}
