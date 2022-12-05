import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img 
        className='h-16 rounded-full border p-[2px] '
        src="https://w.namu.la/s/126588db9d20e18ebae80ad547e784ffc25c2e2a62d41e2e0d6bc0ec45bf77c4e0dc3f757cd2ea5e1690ace9288f424edb6f0c5bfd5da345f4b4c254e6d129603aae552d36278efb1382b484ef37d46bcf4552ff44eca993b8fcc745def00f6bea496d0b7bcd85c7506c2d17c62fda33"
        alt="userImage" />
      <div className='flex-1 ml-4'>
        <h2 className='font-bold'>name</h2>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>
      <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  )
}
