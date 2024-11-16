import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {
 
    const user = useContext(DataContext)

    return (
    <div>Header : User Name is {user.username} </div>
  )
}

export default Header