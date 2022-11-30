import Image from 'next/image'
import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <div className='flex items-center justify-between max-w-6xl'>
      
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

      <h1>Right sides</h1>
    </div>
  )
}
