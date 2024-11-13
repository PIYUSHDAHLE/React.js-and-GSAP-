import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[18vw] h-[50vh] flex flex-col justify-center items-center gap-3 bg-pink-300 rounded'>
     <img 
     className='w-[150px] h-[150px] rounded-[50%]'
     src={props.photo} alt="NA" />
     <h1 className='text-3xl font-semibold '>{props.username}</h1>
     <h1 className='text-xl font-semibold '>{props.prof}</h1>
     <p className='text-sm text-purple-700 font-bold'>{props.city} , Age : {props.age} </p>
    
    </div>
  )
}

export default Card