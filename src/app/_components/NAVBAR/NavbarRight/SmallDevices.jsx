"use-client";
import React,{useState} from 'react'
import Pop from './Pop';

function SmallDevices() {
    const [menuClicked,setMenuClicked]=useState(false)
  return (
    <div className='flex justify-center items-center gap-4 lg:hidden'>
          <img className='w-5 h-fit' src="/assets/search_icon.png" alt="" />
          <img className='w-5 h-fit' src="/assets/menu_dots.png" alt="" onClick={()=>{setMenuClicked(!menuClicked)}}/>
          {menuClicked?
          <Pop setMenuClicked={setMenuClicked} menuClicked={menuClicked}></Pop>:null
        }
      </div>
  )
}

export default SmallDevices
