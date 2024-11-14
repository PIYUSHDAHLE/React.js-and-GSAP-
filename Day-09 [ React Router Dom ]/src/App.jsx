import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'

const App = () => {

  return (
    <div>

      <div className='bg-black text-2xl text-white w-full h-[10vh]'>

      <Header/>
      </div>


     <div  className='flex justify-center items-center bg-fuchsia-300 text-5xl text-purple-950 w-full h-[100vh]'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>

     </div>
    </div>
  )
}

export default App