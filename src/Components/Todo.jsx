import React from 'react'
import Navbar from './Common/Navbar'
import Sidebar from './Common/Sidebar'
// import { AiFillHeart } from "react-icons/Ai";

function Todo() {
  return (
    <div>
        <div className="  bg-white h-[705px]  space-x-4 w-[100%]  shadow-md">
            <Navbar/>
            <div className='col-4'><Sidebar/>
            <div className='col-8'> 
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Like</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
    <tr>
      <td>baking</td>
      <td>important</td>
      {/* <td>< AiFillHeart/> </td> */}
    </tr>
    </tbody>
                </table>
                </div>
                </div>
        </div>
        </div>
  )
}

export default Todo