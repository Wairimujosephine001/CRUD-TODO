import React from 'react'

function Sidebar() {
  return (
  
  <div className=" h-[650px] bg-gray  w-72 flex-inline-block shadow-md">
    <ul>
    <li><a className='py20 '>All todos</a></li>
    <li><a className='pt-20 '>Important</a></li>
    <li><a className='pt-20'>Urgent but not Important</a></li>
    <li><a className='pt-20'>Delegate</a></li>
    </ul>
    </div>
  

  )
};

export default Sidebar;
