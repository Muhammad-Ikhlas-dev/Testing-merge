import React from 'react'

function DarkMode(props) {
  return (
    <img className='w-8 cursor-pointer hover:scale-105'
    src="/assets/dark_mode.png"
    alt="dark" 
    onClick={props.clicked}/>
  )
}

export default DarkMode
