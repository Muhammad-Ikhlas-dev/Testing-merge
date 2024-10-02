import React from 'react';
import NavbarLeft from './NavbarLeft/NavbarLeft';
import NavbarRight from './NavbarRight/NavbarRight.jsx';

function NavBar() {
  return (
    <nav className='border-b-2 border-gray-700 flex justify-between items-center bg-[#141D2F]
    md:px-8 py-4 px-4 text-white w-[100%]'>
        <NavbarLeft/>
        <div></div>
        <NavbarRight/>
    </nav>
  )
}

export default NavBar;
