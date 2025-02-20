import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='w-full h-full'>
        <div className='w-screen h-screen flex justify-center items-center border border-white bg-[url(/img/blue.jpg)] object-fill bg-center '>
           
            <div className='border bg-[url(/img/blue.jpg)] border-black h-[560px] w-[420px] bg-white text-black flex justify-center items-center flex-col gap-3 relative rounded-xl'>
             
              <Link href="/" className='text-[30px] font-bold absolute top-5'>GEC BAZAAR</Link>

              <div className='text-black font-bold text-[20px]'>SIGN UP</div>

              <form className='flex flex-col gap-9'>

                <div>
                <label >Email : </label><br/>
                <input type="email" placeholder='Enter your email' className='border border-black px-[40px] py-[13px] rounded-xl'/>
                </div>

              <div className='flex justify-center items-center'>

              <Link href="/login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[5px] px-[15px] rounded w-[80px] flex justify-center items-center hover:scale-90 transform transition duration-75">SUBMIT</button></Link>
              
              </div>
              </form>

              OR

              <div className="px-6 sm:px-0 max-w-sm absolute bottom-[105px]">
    <button type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2 hover:scale-90 transform transition duration-75"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
              </div>  
 
            </div>
        </div>
    </div>
  )
}

export default page