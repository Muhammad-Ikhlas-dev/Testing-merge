import React from 'react'

function InputField() {
  return (
       <div className='flex items-center text-sm relative justify-between'>
      <img className='w-4 absolute ml-3' src="/assets/search_icon.png" alt="search_icon" />
      <input className='bg-[#1E293B] pl-10 w-[100%] h-8 rounded-lg box-border'
      style={{'boxShadow': 'inset 0px 0px 20px 4px #ffffff0d'}} 
      type="text" 
      placeholder='Quick search...'/>
      <span className='absolute ml-[80%] text-[#9CA3AF]'>Ctrl K</span>
      </div>
  )
}
export default InputField;