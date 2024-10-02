import React from 'react';

// for gerating dynamic routes rendered statically on build time
const versions = ['v3.4.11', 'v3.2.19', 'v1.9.6', 'v0.7.4'];

export async function generateStaticParams(){
    return versions.map((endPoint,index)=>{
    return {slug:[endPoint]}
    });
}

function Versions({ params }) {

  return (
    <div className='m-auto'>
        <div>This is version {params.slug[0]}</div>
    </div>
  );
}

export default Versions;
