import React from 'react'
import Page2 from './Page2'

const Page1 = (wow) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>

    <div className='text-purple-700'>Mera naam hai {wow.name}</div>
    <Page2 user={wow.name}/>
    </div>
    
  )
}

export default Page1