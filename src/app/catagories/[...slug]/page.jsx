import React from 'react';

function Versions({ params }) {
    if(params.slug.length==1){
      return(
    <div className='m-auto'>
        <div>Welcome to {params.slug[0]}</div>
    </div>
      )
    }
    throw new Error('Fek there is no such page found check the URL again');
}

export default Versions;
