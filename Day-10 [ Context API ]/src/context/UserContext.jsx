import React, { createContext } from 'react'

export const DataContext = createContext()
const UserContext = ({children}) => {
//    console.log(children);
   
   const userData = {
         username: 'Piyush Dahle',
         email: 'piyushdahle@gmail.com',
         age: 24,
         occupation: 'Software Engineer',
         hobbies: ['Coding ', 'Reading ', 'Playing Guitar'],
         address: {
            street: '123 Main St',
            city: 'Balaghat',
            state: 'MP',
            zipCode: '481001'
            }
   }

    return (
        <>
        <div className='flex justify-center items-center flex-col gap-5 bg-black h-[100vh] text-white text-5xl'>
        <div>UserContext</div>
        <div>
            <DataContext.Provider value={userData}>
            {children}
            </DataContext.Provider>
        </div>
        </div>
        </>
  )
}

export default UserContext