import React from 'react'


const Navbar = () => {
    return ( 
        <nav class="navbar navbar-light bg-light  shadow-md">
        <div class="container-fluid">
          <a class="navbar-brand">TODOlist</a>
          <form class="d-flex">
          <div className="navbar-nav flex mr-auto">
          <li className="nav-item">
              Add
          </li>
</div>
          </form>
          
        </div>
      </nav>

      
    
     );
}
 
export default Navbar;