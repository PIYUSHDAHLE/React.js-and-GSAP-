import React from 'react'
import Card from './components/Card'

const App = () => {

  const data = [
    {
      "name": "John Doe",
      "age": 28,
      "city": "New York",
      "profession": "Software Developer",
      "img": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      "name": "Emily Brown",
      "age": 34,
      "city": "Los Angeles",
      "profession": "Graphic Designer",
      "img": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      "name": "Michael Johnson",
      "age": 42,
      "city": "Chicago",
      "profession": "Marketing Manager",
      "img": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      "name": "Sophia Lee",
      "age": 29,
      "city": "San Francisco",
      "profession": "Data Scientist",
      "img": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      "name": "David Kim",
      "age": 36,
      "city": "Seattle",
      "profession": "Product Manager",
      "img": "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ]
  
  return (
    <div className='flex justify-center items-center bg-black w-full h-[100vh]'>
      <div className='bg-purple-900 p-10 flex gap-5 justify-center items-center'>
        {data.map(function(elem,idx){
          return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} prof={elem.profession} photo={elem.img} />
        })}
      </div>
    </div>
  )
}

export default App