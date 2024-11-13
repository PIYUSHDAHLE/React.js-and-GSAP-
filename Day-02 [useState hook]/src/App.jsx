import React, { useState } from 'react'

const App = () => {

const [user, setUser] = useState('Piyush Dahle')

const ChangeName = () =>{
  console.log({user});
  setUser('Sheryian')
  console.log({user});
  
}

  return (
    <div className='bg-pink-200 w-full h-[100vh] flex justify-center items-center'>  
      <div className="box flex-col gap-2 bg-purple-400 w-[50vw] h-[30vh] border-4 border-red-400 rounded-md flex justify-center items-center">
  <h1 className='text-3xl'>Hello, {user} Sir</h1>
<button onClick={ChangeName} className='bg-green-700 text-xl font-bold text-white px-4 py-2 border-2 border-amber-400 rounded-2xl'>Change Name</button>
      </div>

    </div>
  )
}

export default App