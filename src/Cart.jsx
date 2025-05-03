import React, { useContext } from 'react'
import Header from './Comman/Header'
import Footer from './Comman/Footer'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdLibraryBooks } from 'react-icons/md'
import { GiScooter } from 'react-icons/gi'
import { FiInfo } from 'react-icons/fi'
import { FaShoppingBag } from 'react-icons/fa'
import { MyContext } from './Context/ContextProvider'

export default function Cart() {

    let { num, setNum } = useContext(MyContext)

    const inc = ()=>{

        setNum(num++)
        
        
    }
    const dec = ()=>{
        if(num>=0){
            setNum(num--)
        }
    }



    return (
        <>
            <Header />

            <div className="cart">
                <div className='z-[100] right-0 top-0 w-[98%] lg:w-[90%] mx-auto  bg-[#F5F7FD] py-[20px]  '>


                    <div className="flex justify-between items-center p-4 bg-white rounded-2xl w-[97%] mx-auto  ">
                        <h1 className="text-[18px] font-bold text-gray-800">My Cart</h1>

                    </div>


                    {/* item details */}
                    <div className=" p-2 lg:p-4 space-y-4">
                        <div className="bg-white rounded-lg p-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-gray-100 rounded-[10px] p-3">
                                    <img src='/images/15-mins.png' className="text-green-700 w-10 " />
                                </div>
                                <div>
                                    <h2 className="text-[16px] font-bold">Delivery in 8 minutes</h2>
                                    <p className="text-gray-500 text-[15px]">Shipment of 1 item</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-4"></div>


                                {/* product details */}
                            <div className="products">

                                {/* item 1 */}
                                <div className="flex items-center justify-between py-2.5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-16 h-16 relative">
                                            <img src="/images/21.jpeg" alt="" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-[14px] text-gray-800">Amul Salted Butter</h3>
                                            <p className="text-gray-500 text-[12px]">100 g</p>
                                            <p className="font-medium">₹60</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center bg-green-600 text-white rounded-md">
                                        <button onClick={dec} className="px-1 py-1 text-white cursor-pointer"  >
                                            <AiOutlineMinus />
                                        </button>
                                        <span className="px-1 py-1"> {num} </span>
                                        <button onClick={inc} className="px-1 py-1 text-white cursor-pointer" >
                                            <AiOutlinePlus />
                                        </button>
                                    </div>
                                </div>
                                

                            </div>

                        </div>


                        {/* bill  */}
                        <div className="bg-white rounded-lg p-4">
                            <h2 className="text-[16px] font-bold mb-4">Bill details</h2>

                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span><MdLibraryBooks /></span>
                                        <span className=" text-[14px] font-bold text-gray-700"> Items total</span>
                                    </div>
                                    <span className=" text-[16px] font-medium">₹60</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span><GiScooter /></span>
                                        <span className="text-gray-700 text-[14px] font-bold">Delivery charge</span>
                                        <FiInfo className="text-gray-400" />
                                    </div>
                                    <span className="font-medium text-[16px]">₹25</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span><FaShoppingBag /></span>
                                        <span className="text-gray-700 text-[14px] font-bold ">Handling charge</span>
                                        <FiInfo className="text-gray-400" />
                                    </div>
                                    <span className="font-medium text-[16px]">₹2</span>
                                </div>

                                <div className="border-t border-gray-100 pt-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[16px] font-bold">Grand total</span>
                                        <span className=" text-[16px] font-bold">₹87</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-3">
                                    <div className="">
                                        <img src="/images/8(2).png" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-800">Feeding India donation</h3>
                                        <p className="text-gray-500 text-sm">
                                            Working towards a malnutrition free India. Feeding India...
                                            <span className="text-gray-400">read more</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">₹1</span>
                                    <input type="checkbox" className="h-4 w-4 border-gray-300 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* button to buy */}

                    <div className="bg-white w-[90%] lg:w-[50%] right-0  p-[20px] rounded-2xl ms-5 ">
                        <div className="  cursor-pointer capitalize  bg-green-600  rounded-2xl py-[5px] flex justify-between text-white items-center px-[20px] ">
                            <div className="total font-bold flex flex-col items-center">
                                <div className="">89</div>
                                <div className=" font-light">total</div>
                            </div>
                            <div className="">proceed to pay</div>
                        </div>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
}
