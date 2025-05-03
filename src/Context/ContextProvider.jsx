import React, {  createContext, useState } from 'react'

export const MyContext = createContext()


export default function ContextProvider({children}) {


  let [num , setNum] = useState(1)

  return (
    <>
      <MyContext.Provider value={{num , setNum}}>
        {children}
      </MyContext.Provider>
    </>
  )
}
