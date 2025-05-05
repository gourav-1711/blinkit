import React, {  createContext, useState } from 'react'

export const MyContext = createContext()



export default function ContextProvider({children}) {


  let [num , setNum] = useState(1)
  let [myCart , setMyCart] = useState([])
  let [filterCart , setFilterCart] = useState([])



  return (
    <>
      <MyContext.Provider value={{num , setNum,myCart , setMyCart ,  filterCart , setFilterCart }}>
        {children}
      </MyContext.Provider>
    </>
  )
}
