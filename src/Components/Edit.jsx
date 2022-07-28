import React from 'react'
import Navbar from './Common/Navbar'
import Sidebar from './Common/Sidebar'
import Buttons from './Common/Buttons';


function Edit() {
  return (
    <div>
        <div className='flex-justify-between' > <Navbar/> </div>
        <div className=" py-8 bg-white h-[400px]  w-[100%]  shadow-md">
          <div className='col-12' >
        <div className=' text-left ml-24 pt-3 font-bold'>Title</div>
        <input className=" bg-light outline-none text-black w-[60%] h-10 pt-center " placeholder="Add Title" />
        <div className=' text-left ml-24 pt-3 font-bold'>Description</div>
        <input className=" bg-light  flex-start outline-none text-black w-[60%] h-10 pt-center " placeholder="Important" />
        <div className='pt-5 ml-80'><Buttons name="Submit " /></div>
        </div>
        
        </div>
    </div>
  )
}

export default Edit