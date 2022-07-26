import React from 'react'

function Signin() {
  return (
    <div>
        <h4>Email</h4>
         <div className="h-12 bg-white ml-10 w-[94%]">
          <form class="flex items-center ">
            <input
              class="placeholder:italic m-1.5 ml-20  block w-[80%] py-2 pl-9 pr-3 pb-1"
              placeholder="Enter your email address"
              type="email"
              email="email@gmail.com"
            />
          </form>
        </div>
    </div>
  )
}

export default Signin