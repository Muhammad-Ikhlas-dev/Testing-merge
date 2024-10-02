import React from 'react'

function LightMode({clicked}) {
  return (
      <div className='bg-white p-2 lg:p-1 rounded-full flex justify-center items-center'>
         <img className='w-4 cursor-pointer hover:scale-105'
         src="/assets/light_mode.png"
         alt="light" 
         onClick={clicked}/>
         </div>
  )
}

export default LightMode;