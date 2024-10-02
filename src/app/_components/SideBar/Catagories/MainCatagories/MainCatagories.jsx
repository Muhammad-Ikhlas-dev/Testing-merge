"use client";
import React,{useState} from 'react'
import Catagory from './Catagory'
import { usePathname } from "next/navigation"; // Import the usePathname hook

function MainCatagories() { 
  const currentPath = usePathname(); // Get the current path

  let CatagoryProps=[
    {src:"/assets/dark_mode.png",content:'Documentation',bg:'bg-pink-500',path:'/documentation'},
    {src:"/assets/github.png",content:'Components',bg:'bg-yellow-500',path:'/components'},
    {src:"/assets/search_icon.png",content:'Templates',bg:'bg-white',path:'/templates'},
    {src:"/assets/tailwind.png",content:'Screenshots',bg:'bg-red-500',path:'/screenshots'},
    {src:"/assets/dark_mode.png",content:'Playground',bg:'bg-pink-500',path:'/playground'},
    {src:"/assets/light_mode.png",content:'Resources',bg:'bg-white',path:'/resources'},
    {src:"/assets/github.png",content:'Community',bg:'bg-purple-500',path:'/community'}
  ]

  let mainCatogories=CatagoryProps.map((propsToPass,index)=>{
    return (
      <Catagory 
      src={propsToPass.src} 
      content={propsToPass.content} 
      bg={propsToPass.bg}
      path={propsToPass.path} 
      key={index} 
      isSelected={currentPath===propsToPass.path}
      />
    )
  })
console.log("path fetched ",currentPath)

  return (
   <ul className='flex flex-col gap-4 text-[#94A3B8]'>
       {mainCatogories}
   </ul>
  )
}

export default MainCatagories