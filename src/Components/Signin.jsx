import React from 'react'
import Buttons from './Common/Buttons';

function Signin() {
  return (
    <div>
     
      <div className=" py-8 bg-white h-[400px]  w-[85%] ml-10 shadow-md">
      <h1 className='  pt-2 text-lg text-black  font-bold'>WELCOME BACK</h1>
        <div className=' text-left ml-24 pt-3 font-bold'>Email Address</div>
        <input className=" bg-light outline-none text-black w-[85%] h-10 pt-center " placeholder="Enter your Email" />
        <div className='  text-left ml-24 pt-3 font-bold'>Enter Password</div>
        <input className=" bg-light outline-none text-black w-[85%] h-10 pt-center " placeholder="Enter your Password" />
        {/* <div className='flex justify-between ml-20 w-[80%]'><input type="checkbox" />  Remember me? <div className='flex-end'>Forgot Password?</div></div> */}
        <div className="flex justify-between ml-24 font-bold text-black bg-#D9D9D9 drop-shadow-sm ">
                    <p><input type="checkbox" /> Remember me?</p><p className=' mr-20'>Forgot password?</p> </div>
        <div className='pt-5'><Buttons name="sign in " /></div>
    </div>
    
    </div>
  )
}

export default Signin;