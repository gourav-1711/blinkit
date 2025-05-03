import React from 'react'
import { Link } from 'react-router-dom'

export default function CartBtn() {
    return (
        <>
            <div className=" fixed bottom-0 bg-[#ffffff00] w-full right-0  p-[20px] ">
                <Link to='/cart'>
                    <div className=" shadow-2xl  cursor-pointer capitalize  bg-green-700  rounded-2xl py-[5px] flex justify-between text-white items-center px-[20px] ">
                        <div className="total font-bold flex flex-col items-center">
                            <div className="">89</div>
                            <div className=" font-light">total</div>
                        </div>
                        <div className="">proceed to pay</div>
                    </div>
                </Link>
            </div>
        </>
    )
}
