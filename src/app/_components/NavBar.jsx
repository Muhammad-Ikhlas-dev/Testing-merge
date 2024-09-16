import React from 'react'
import tailwind from './src/app/components/tailwind.png';

function NavBar() {
  return (
    <nav className='border-2 border-white'>
    {/* LEFT */}
    <div>
      <img src={tailwind} alt="Logo"/>
       <details>
          <summary>   
          v3.4.11
          </summary>   
          <p>v3.4.11</p>   
              <p>v3.2.19</p>   
              <p>v1.9.6</p>   
              <p>v0.7.4</p>
       </details>
    </div>
    {/* RIGHT */}
  </nav>
  )
}

export default NavBar
