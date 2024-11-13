import React from 'react'
import Page1 from './components/Page1'

// flow of data files
// App.jsx --> page1.jsx --> page2.jsx

const App = () => {
  return (
    <div className='flex justify-center items-center flec-col p-10 text-4xl'>
      <Page1 name="Piyush Dahle"/>
    </div>
  )
}

export default App