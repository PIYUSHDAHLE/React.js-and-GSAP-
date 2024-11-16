import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {

    const user = useContext(DataContext)

  return (
    <div>Section : Age of the user is {user.age}</div>
  )
}

export default Section