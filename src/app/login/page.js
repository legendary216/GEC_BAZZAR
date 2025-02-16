import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='w-full h-full'>
        <div className='w-screen h-screen flex justify-center items-center border border-white bg-[url(/img/blue.jpg)] object-fill bg-center '>
           
            <div className='border 0 border-black h-[560px] w-[420px] bg-white text-black flex justify-center items-center flex-col gap-4 relative'>
            <div className='border bg-[url(/img/blue.jpg)] border-black h-[560px] w-[420px] bg-white text-black flex justify-center items-center flex-col gap-4 relative rounded-xl'>
             
              <Link href="/" className='text-[30px] font-bold absolute top-5'>GEC BAZAAR</Link>

              <div className='text-black font-bold text-[20px]'>LOGIN</div>

              <form className='flex flex-col gap-5 '>

                <div>
                <label >Email : </label><br/>
                <input type="email" placeholder='Enter your email' className='border border-black px-[40px] py-[13px] rounded-xl'/>
                </div>

              <div>
                <label>Password : </label><br/>
                <input type="password" required placeholder='Enter password' className='border border-black px-[40px] py-[13px] rounded-xl'/>
              </div>
          
              <div className='flex justify-center items-center'>

              <Link href="/mainuser"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[5px] px-[15px] rounded w-[80px] flex justify-center items-center hover:scale-90 transform transition duration-75">SUBMIT</button></Link>
             
              </div>
              </form>

            <div className='flex justify-center items-center absolute bottom-[100px] gap-3 text-[13px]'>
              <p>not yet registered? </p>
              <Link href="signup"> <p className='text-blue-900 cursor-pointer underline underline-offset-1'>  CLICK HERE </p></Link>
             
            </div>
              
 
            </div>
        </div>
    </div>
  )
}

export default page