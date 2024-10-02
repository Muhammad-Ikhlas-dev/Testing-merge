import React,{useContext} from 'react'
import DarkMode from './DarkMode.jsx';
import LightMode from './LightMode.jsx';
import { NavContext } from '../contexts/NavContext.js';

function Pop(props) {
const {toogleDarkLight,darkModeClicked}=useContext(NavContext)

  return (
    <div className='fixed flex justify-center items-center inset-0 bg-transparent' id='container'
    onClick={(e)=>{props.setMenuClicked(!props.menuClicked)}}>

    <div className="rounded-lg fixed bg-[#1E293B] right-[2%] top-[3%] z-30
    flex flex-col gap-4 text-[#566276] w-72 h-96 p-4 text-lg font-bold" id="pop"
    onClick={(e)=>{e.stopPropagation()}}>
        {/* TOP */}
        <div className='flex justify-between'>
    <ul className='flex flex-col gap-8'>
      <li className='hover:text-[#38BDF8]'>Docs</li>
      <li className='hover:text-[#38BDF8]'>Components</li>
      <li className='hover:text-[#38BDF8]'>Blog</li>
      <li className='hover:text-[#38BDF8]'>Showcase</li>
      <li className='hover:text-[#38BDF8]'>GitHub</li>
      </ul>
      <img 
      className='w-7 h-7'
      src="/assets/cross.png" 
      alt="unable to load" 
      onClick={()=>{props.setMenuClicked(!props.menuClicked)}}/>
      </div>
      {/* Bottom */}
      <div className='w-[95%] h-0.5 bg-[#323D4D] m-auto'></div>
      <div className='flex justify-between'>
           <p>Switch theme</p>
           {darkModeClicked?(
       <LightMode clicked={toogleDarkLight}/>
    ):
    (
      <DarkMode clicked={toogleDarkLight}/>
     )}
      </div>
    </div>
    </div>
  )
}

export default Pop
