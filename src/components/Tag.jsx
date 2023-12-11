import React from 'react'

export default function Tag({chilren}) {
  return (
    <div className='p-5 rounded-lg bg-primary-100/30 min-w-[300px] min-h-[120px] cursor-pointer transition duration-150 ease-out hover:ease-in hover:bg-primary-100/50 '>
        <div className=''>
            <span className='text-3xl text-primary-100'>Öffnungszeiten</span>
            <div className='flex items-center flex-col text-primary-text mt-6'>
                <span className='text-xl'>Montag bis Samstag</span>
                <span className=''>10:00 – 20.00 Uhr</span>
            </div>
        </div>
    </div>
  )
}
