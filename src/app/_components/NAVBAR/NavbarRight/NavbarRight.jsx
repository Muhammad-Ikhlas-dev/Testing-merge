"use client";
import React,{useState} from 'react'
import DarkMode from './DarkMode.jsx';
import LightMode from './LightMode.jsx';
import Options from './Options.jsx';
import GitHub from './GitHub';
import SmallDevices from './SmallDevices';
import {NavContext} from '../contexts/NavContext.js';

function NavbarRight() {
  // const {toogleDarkLight,darkModeClicked}=useNavbarHook();
  const [darkModeClicked,setDarkModeClicked]=useState(true)
  const toogleDarkLight=()=>{
        let body=document.getElementsByTagName('body')[0];
        body.classList.toggle('dark:bg-gradient-to-tr')
        body.classList.toggle('dark:text-white')
        setDarkModeClicked(!darkModeClicked)
      }

  return (
    <>
      <NavContext.Provider value={{toogleDarkLight,darkModeClicked}}>
  <div className='justify-center items-center gap-12 hidden lg:flex'>
      <Options/>
    <div className='flex justify-center items-center gap-4'>
      {darkModeClicked?
      (<LightMode clicked={toogleDarkLight}/>)
    :
      (<DarkMode clicked={toogleDarkLight}/>)}
    <GitHub/>
    </div>
  </div>
    {/* FOR SMALL DEVICES */}
   <SmallDevices/>
   </NavContext.Provider>
    </>
  )
}

export default NavbarRight;
