import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {

    const user = useContext(DataContext)

  return (
    <div>Footer </div>
  )
}

export default Footer