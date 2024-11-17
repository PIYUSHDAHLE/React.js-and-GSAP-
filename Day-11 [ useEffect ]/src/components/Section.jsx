import React, { useEffect, useState } from 'react'

const Section = () => {

const [num, setNum] = useState(0)

// case:1
useEffect(() => {
    alert('Ek bar hi load hota hu mein (Mount)')
}, [])

// case:2
useEffect(() => {
    alert('Bar Bar aata hu mein')
})

// case:3
useEffect(() => {
alert('Number is Changes')
}, [num])


  return (
    <div className='flex justify-center items-center w-full h-[80vh] bg-purple-500'>
   
    <section className='text-white text-5xl flex justify-center items-center flex-col gap-5'>
   
    <h1 >Counter {num}</h1>
   
    <div className='flex justify-center items-center flex-col gap-5'>
   
    <button
    onClick={() =>{setNum(num + 1)}} 
    className='text-2xl bg-green-300 text-blue-700 px-5 py-1 rounded-lg'>Increase</button>
   
    <button 
    onClick={()=>{if(num<=0){setNum(num)}else{setNum(num - 1)}}}
    className='text-2xl bg-green-300 text-blue-700 px-4 py-1 rounded-lg'>Decrease</button>
  
    </div>
    </section>
    </div>
  )
}

export default Section