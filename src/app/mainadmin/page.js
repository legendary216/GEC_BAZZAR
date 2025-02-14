import React from 'react'
import Link from 'next/link'
export default function page() {


  return (
    <div>
      <div className='flex justify-between items-center p-2 border border-white'>
        <div className='text-[30px] font-bold' >GEC BAZZAR</div>
        <div className='flex justify-center items-center gap-3'>
        
        <Link href="/dashboard">
         <div className='flex justify-center items-center gap-1 cursor-pointer'>
          <img src="/img/dash.svg" className='w-[30px] invert'/>
          <div className='text-[20px]'>DashBoard</div>
          </div>
        </Link>
          
        </div>
      </div>

      <div className='border border-white w-screen h-[90vh] flex justify-center items-center'>
        <div className='border border-white w-[98vw] h-[85vh]'>

        </div>
      </div>

    </div>
  )
}
