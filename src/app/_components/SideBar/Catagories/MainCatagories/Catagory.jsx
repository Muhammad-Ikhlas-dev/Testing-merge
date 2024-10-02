'use client';
import React,{useRef} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/navigation';

function Catagory({src,content,bg,isSelected,path}) {
  // console.log("re-rendered isSelected ",isSelected )
  const router=useRouter();
  const catagoryReference=useRef(null)
 
const hovered=()=>{
  if(!isSelected)
catagoryReference.current.style.backgroundColor=bg;
}

const unhovered=()=>{
  if(!isSelected)
  catagoryReference.current.style.backgroundColor='#334155';
}
  return (
    <Link href={`/catagories/${path}`}>
      <li 
    className='flex items-center gap-4 hover:text-white cursor-pointer text-sm font-bold group' 
    onMouseOver={hovered}
    onMouseOut={unhovered}>
    
    {/*image*/}
    <div className={`${isSelected?bg:'bg-[#334155]'} p-1 flex justify-center items-center rounded-md`}
    ref={catagoryReference}>
    <img className='w-3 h-3' src={src} alt="image" />
    </div>

    {/* Content  */}
    <span className={`${isSelected?'text-customColor':'text-[#94A3B8] group-hover:text-white'}`}>
      {content}
    </span>
    </li>
    </Link>
  )
}

export default Catagory