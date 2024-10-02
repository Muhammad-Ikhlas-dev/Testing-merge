import React from 'react'
import InputField from './InputField.jsx';
import MainCatagories from './Catagories/MainCatagories/MainCatagories.jsx';
import FurtherCatagories from './Catagories/FurtherCatagories/FurtherCatagories.jsx';

function SideBar() {

  return (
    <section className='w-72 h-[100vh] flex flex-col gap-8 pl-7 pr-5 py-8
    overflow-y-scroll'>
     <InputField/>
     <MainCatagories/>
     <FurtherCatagories/>
    </section>
  )
}

export default SideBar