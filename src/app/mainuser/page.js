import React from 'react'
import Link from 'next/link'
export default function page() {


  return (
    <div>
      <div className='flex justify-between items-center p-2 border border-white'>
        <div className='text-[30px] font-bold' >GEC BAZAAR</div>
        <div className='flex justify-center items-center gap-3'>
        
         <div className='flex justify-center items-center gap-1 pr-2'>
            <div className=' w-[30px] h-[30px] '>
              <img src="/img/noob.jpg" className='rounded-2xl '/>
            </div>
            <div>usernamee</div>
         </div>
          
        </div>
      </div>

      <div className='border border-white w-screen h-[90vh] flex justify-center items-center'>
        <div className='border border-white w-[98vw] h-[85vh]'>

        </div>
      </div>

    </div>
  )
}
