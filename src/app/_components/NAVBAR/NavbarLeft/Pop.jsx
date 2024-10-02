'use client';
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import { useRouter } from "next/navigation";

export const Pop = (props) => {
    const router=useRouter()
  const currentPath = usePathname(); // Get the current path
  const versions = ['v3.4.11', 'v3.2.19', 'v1.9.6', 'v0.7.4'];

  // Set default active version as 'v3.4.11'
  const [activeVersion, setActiveVersion] = useState('v3.4.11');

  const VersionsList = versions.map((version, index) => (
      <li onClick={()=>{
          setActiveVersion(version);
          props.setVersionToShow(version)
          router.push(`/versions/${version}`)
        }}
        key={index}
        className={`${activeVersion === version ? 'text-[#38BDF8]' : 'text-white'}
        hover:bg-gray-700 cursor-pointer px-2 h-8 font-bold flex gap-4 items-center justify-between`}>
        <p>{version}</p>
        {
        activeVersion === version && 
        <img 
        className="w-7" 
        src='/assets/tick.png' 
        alt='tick'/>
        }
      </li>
  ));

  return (
    <div className="w-fit h-fit fixed left-[3rem] md:left-[11rem] top-[3rem] z-30" id="pop">
      <ul className="bg-[#1E293B] w-32 rounded-lg py-1 flex flex-col text-xs">
        {VersionsList}
      </ul>
    </div>
  );
};