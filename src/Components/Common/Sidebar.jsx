import React from 'react'

function Sidebar() {
  return (
  
  <div className="  bg-light h-[650px]  w-72 flex-inline-block shadow-md">
    <ul className='space-y-14 pt-4  list-style-none '>
    
    <li><a className='py-8  '>All todos</a></li>
    <li><a className='py-2 text-black space-y-4 '>Important</a></li>
    <li><a className='py-2 text-black'>Urgent but not Important</a></li>
    <li><a className='py-2 text-black'>Delegate</a></li>
    </ul>
    
    </div>
  )
};

export default Sidebar;
