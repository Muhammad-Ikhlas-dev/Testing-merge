import React from 'react'

function FurtherCatagory(props) {
  return (
    <li className={`text-sm border-l-2 border-l-[#94A3B8] pl-4 py-0.5 
    text-[#94A3B8] font-bold cursor-pointer 
    ${props.isClicked?'text-customColor border-l-[#0EA5E9]':'hover:text-white'}`}
    onClick={props.onclick}>
    {props.children}
    </li>
  )
}

export default FurtherCatagory
