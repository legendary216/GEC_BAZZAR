import React from 'react'
import Link from 'next/link'

function page() {
  return (
    
    <div className='w-full h-full '>
        <div className='w-screen h-screen border border-white flex justify-center items-center flex-col gap-10 bg-[url(/img/blue.jpg)] bg-cover'>
            <div className='flex flex-col justify-center items-center '>
            <div className='text-[50px]  font-bold'> Welcome To  </div>
            <div className='text-[100px]  font-bold'>GEC BAZAAR </div>
            <p >From boiler suits to books, we've got your college essentials covered!</p>

            </div>
           
            <p>continue as?</p>

            <div className='flex gap-10'>
                <Link href="/login"> <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-[15px] px-[50px] rounded w-[80px] flex justify-center items">user</button></Link>
           <Link href="/loginadmin"><button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-[15px] px-[50px] rounded w-[80px] flex justify-center items">admin</button></Link>
            
            </div>

        </div>
    </div>
  )
}

export default page