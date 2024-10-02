'use client';
import React,{useState} from 'react'
import FurtherCatagory from './FurtherCatagory'

function FurtherCatagories() {
  const [selectedIndex,setSelectedIndex]=useState(false)

  const changingThings=[
    {
    content:[
      {catagory:'Installation',id:0},
      {catagory:'Editor Setup',id:1},
      {catagory:'Using with Preprocessors',id:2},
      {catagory:'Optimizing for Production',id:3},
      {catagory:'Browser Support',id:4},
      {catagory:'Upgrade Guide',id:5}
    ],
    heading:'Getting Started'
  },
    {
      content:[
        {catagory:'Utility-First Fundamentals',id:6},
        {catagory:'Hover, Focus, and Other States',id:7},
        {catagory:' Responsive Design',id:8},
        {catagory:'Dark Mode',id:9},
        {catagory:'Reusing Styles',id:10},
        {catagory:'Adding Custom Styles',id:11},
        {catagory:'Functions & Directives',id:12},
      ],
    heading:'Customization'
  },
    {
      heading:'Layout',
      content:[
        {catagory:'Installation',id:13},
        {catagory:'Container',id:14},
        {catagory:'Columns',id:15},
        {catagory:' Break After',id:16},
        {catagory:'Break Before',id:17},
        {catagory:'Break Inside',id:18},
        {catagory:'Box Decoration Break',id:19},
        {catagory:'Box Sizing',id:20},
        {catagory:'Display',id:21},
        {catagory:'Overflow',id:22},
        {catagory:'Object Position',id:23}
      ]
    }
  ]
  const catagoryProps=changingThings.map((catagoryObj,index)=>{
    return(
    <ul className='flex flex-col text-[#94A3B8] gap-4' key={index}>
    <p className='font-bold text-sm text-white'>{catagoryObj.heading}</p>

    {catagoryObj.content.map((contentObj,_)=>(
    <FurtherCatagory key={contentObj.id} 
    onclick={()=>{setSelectedIndex(contentObj.id)}}
    isClicked={selectedIndex===contentObj.id}>
      {contentObj.catagory}
    </FurtherCatagory>
    
  ))}

    </ul>
    )
  })
  return (
    <>
        {catagoryProps}
    </>
  )
}

export default FurtherCatagories;