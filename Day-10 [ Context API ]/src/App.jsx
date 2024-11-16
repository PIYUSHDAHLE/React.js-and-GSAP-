import React, { useContext } from 'react'
import { DataContext } from './context/UserContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'

const App = () => {

  const user = useContext(DataContext)

  return (
    <>
    <div>
      <h1 className='text-blue-400'>{user.username}</h1>
      <h1 className='text-blue-400'>{user.email}</h1>
      <h1 className='text-blue-400'>{user.age}</h1>
      <h1 className='text-blue-400'>{user.occupation}</h1>
      <h1 className='text-blue-400'>{user.hobbies}</h1>
      <h1 className='text-blue-400'>{user.hobbies.join(', ')}</h1>
      <h1 className='text-blue-400'>{user.address.city}</h1>
    </div>
    <Header/>
    <Section/>
    <Footer/>
    </>
  )
}

export default App