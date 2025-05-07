import React, {  createContext, useEffect, useState } from 'react'

export const MyContext = createContext()



export default function ContextProvider({children}) {


  
  let [num , setNum] = useState(1)
  
  let [myCart , setMyCart] = useState(JSON.parse(localStorage.getItem("data")) ?? [])


  let [filterCart , setFilterCart] = useState([])

  useEffect(()=>{
    localStorage.setItem("data" , JSON.stringify(myCart))
  },[myCart])

  return (
    <>
      <MyContext.Provider value={{num , setNum,myCart , setMyCart ,  filterCart , setFilterCart }}>
        {children}
      </MyContext.Provider>
    </>
  )
}
