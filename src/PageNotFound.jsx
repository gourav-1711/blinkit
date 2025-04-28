import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <>
            <div className="w-[100%] md:w-[60%] lg:w-[50%] mx-auto  ">
                <h1 className="text-[30px] md:text-[90px] text-center font-medium capitalize "> 404</h1>
                <h1 className=' capitalize text-2xl text-center font-medium'> page not found</h1>
                <Link to='/'>
                    <button className='table mx-auto bg-green-500 p-[8px_25px] rounded-[12px] capitalize font-medium text-[18px] active:shadow-2xl active:translate-1 cursor-pointer mt-5 '> home page</button>
                </Link>
                <img  className='w-[100%] md:w-[90%] mx-auto  ' src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
               
            </div>


        </>
    )
}
