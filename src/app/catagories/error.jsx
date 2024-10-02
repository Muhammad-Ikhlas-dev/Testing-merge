'use client';

import React from 'react'

function Error({error}) {
    return(
    <div className='m-auto text-red-500'>
      Error 404: {error.message}
    </div>
    )
}

export default Error
