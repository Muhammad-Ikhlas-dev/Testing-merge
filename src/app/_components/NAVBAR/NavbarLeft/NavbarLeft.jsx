"use client";
import React,{useState} from 'react'
import { Pop } from './Pop';

function NavbarLeft() {
  const [versionDropDownClicked,setVersionDropDownClicked]=useState(false)
  const [versionToShow,setVersionToShow]=useState('v3.4.11')
  
  function detailsClickHandler(){
    setVersionDropDownClicked(true)
  }
  return (
    <div className='flex justify-center items-center gap-2'>
    <a className='flex justify-center items-center gap-2 decoration-none' href="/">
    <img className='w-8 h-4 cursor-pointer' src='/assets/tailwind.png' alt="Logo"/>
    <p className='text-xl cursor-pointer hidden sm:block'>tailwindcss</p>
    </a>
     <details className='rounded-xl px-2 py-1 text-xs text-[#8A98AE] bg-[#2A3446] cursor-pointer hover:bg-gray-700'
     onClick={detailsClickHandler}>
        <summary>   
        {versionToShow}
        </summary>
        {versionDropDownClicked? <Pop setVersionToShow={setVersionToShow}/>:null}  {/*as position is fixed the placement does'nt matter */}
     </details>

     <div className='rounded-full bg-gradient-to-r from-[#22435B] to-[#173953] cursor-pointer
     hover:bg-gradient-to-r hover:from-gray-700  hover:to-gray-700'>
      <p className='text-[#37B7F1] text-xs px-2 py-1 hidden min-[1100px]:block'>
        Introducting Catalyst . A modern application UI kit for React  
        </p>
     </div>
  </div>
  )
}

export default NavbarLeft
