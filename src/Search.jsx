import React, { useEffect, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Header from '../Comman/Header'
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FiInfo } from 'react-icons/fi'
import { FaRupeeSign } from 'react-icons/fa'
import axios from 'axios'
import ImageMagnifier from '../Comman/Magnify'

export default function Search() {




    /////////////////////////////

    let [offCanvas, setOffCan] = useState(false)
    let offCan = () => {
        setOffCan(true)
    }
    let closefn = () => {
        setOffCan(false)
        setdrop(false)
    }

    let [count, setCount] = useState(1)
    let inc = () => {
        setCount(count + 1)
    }
    let dec = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }




    ////////////////////// api work


    let [sValue, setValue] = useState("")

    let type = (value) => {
        setValue(value.target.value)
    }

    const [ApiData, setApiData] = useState([])

    let api;




    const Apifun = () => {

        if (sValue !== "") {
            api = `https://dummyjson.com/products/search?q=${sValue}`


        }
        else {
            api = "https://dummyjson.com/products/search?q=1234567890"
        }

        axios.get(api)
            .then((ress) => {
                setApiData(ress.data.products);


            })
            .catch((error) => {
                console.log(error);

            })
    }

    useEffect(() => {
        Apifun()
    }, [sValue])

    useEffect(()=>{
       let input =  document.querySelector("s-input")
    })


    return (
        <>
            <header className=" z-50 max-w-full w-full hidden lg:block  border border-[#c7c7c77e] sticky top-0 bg-[white] ">
                <nav className=" grid  grid-cols-[15%_auto_15%] gap-[15px] items-center ">
                    <Link to='/' >
                        <div className="  flex justify-center items-center border-r border-[#c7c7c781] py-[10px]  hover:bg-[rgba(240,240,240,0.42)] duration-500 ">
                            <img src="/images/blinkit-logo_casestudy.png" className=' w-[65%] ' alt="" />
                        </div>
                    </Link>

                    <div className="  search overflow-hidden ">
                        <div className="flex items-center py-[15px] border px-[10px] rounded-[18px] active:border-1  bg-[#fcfcfc] relative  ">
                            <IoSearchSharp className=' text-[27px] ' />

                            <input type="" autoFocus placeholder='search anything s-input' value={sValue} onChange={type} className=' outline-0 border-0 ms-2  w-full relative capitalize ' />


                            {/* <p className=' sText absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "chips" </p>
                            <p className=' sText2 absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "milk" </p> */}
                        </div>
                    </div>

                    <div className="">
                        <button onClick={offCan} className=" cursor-pointer flex items-center gap-[5px] bg-[green] p-[10px] rounded-[10px]">
                            <span className='text-[30px] invert-100'><MdOutlineShoppingCart /></span><span className='text-[white] capitalize font-bold'>my cart</span>
                        </button>
                    </div>
                </nav>
            </header>

            <div className={`  overlay fixed w-full h-screen top-0 bg-[#00000090] hidden cursor-pointer z-40 ${offCanvas ? "active" : ""}  `} onClick={closefn}></div>


            <div className={`z-50 offcanvas absolute right-0 top-0 w-[30%] h-screen bg-white overflow-y-scroll hidden ${offCanvas ? "active" : ""}  `}>
                <div className="flex justify-between items-center p-4 bg-white ">
                    <h1 className="text-[18px] font-bold text-gray-800">My Cart</h1>
                    <button onClick={closefn} className="text-gray-800 text-[25px] cursor-pointer">
                        <RxCross1 />
                    </button>
                </div>

                <div className="p-4 space-y-4">
                    <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-gray-100 rounded-[10px] p-3">
                                <img src='/images/15-mins.png' className="text-green-700 h-6 w-6" />
                            </div>
                            <div>
                                <h2 className="text-[16px] font-bold">Delivery in 8 minutes</h2>
                                <p className="text-gray-500 text-[15px]">Shipment of 1 item</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 my-4"></div>

                        <div className="flex items-center justify-between">
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
                                <button className="px-1 py-1 text-white cursor-pointer" aria-label="Decrease quantity" onClick={dec}>
                                    <AiOutlineMinus />
                                </button>
                                <span className="px-1 py-1"> {count} </span>
                                <button className="px-1 py-1 text-white cursor-pointer" aria-label="Increase quantity" onClick={inc}>
                                    <AiOutlinePlus />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                        <h2 className="text-[16px] font-bold mb-4">Bill details</h2>

                        <div className="space-y-1">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className=" text-[16px] text-gray-700">Items total</span>
                                </div>
                                <span className=" text-[16px] font-medium">₹60</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-700 text-[16px]">Delivery charge</span>
                                    <FiInfo className="text-gray-400" />
                                </div>
                                <span className="font-medium text-[16px]">₹25</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-700 text-[16px]">Handling charge</span>
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


            </div>

            <header className="p-[20px] block lg:hidden">
                <div className="  search overflow-hidden  ">
                    <div className="flex items-center py-[15px] px-[10px] rounded-[18px] border bg-[#fcfcfc] relative  ">
                        <IoSearchSharp className=' text-[27px] ' />

                        <input type="" placeholder='search anything' value={sValue} onChange={type} className=' outline-0 border-0 ms-2  w-full relative capitalize ' />


                        {/* <p className=' sText absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "chips" </p>
                        <p className=' sText2 absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "milk" </p> */}
                    </div>
                </div>
            </header>


           

            {/* api data */}


            <div className="max-w-[1150px] px-[30px] md:px-[10px] lg:px-[5px] mx-auto">


                <div className="results">
                    <div className="">

                        {

                            ApiData.length > 0 ?

                                <div className="">
                                    <h1 className='text-[24px]  capitalize font-medium py-[10px] '>search result for {sValue} </h1>
                                </div>

                                :

                                ""
                        }

                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-[15px]">

                            {

                                ApiData.length > 0 ?

                                    ApiData.map((v, i) => {
                                        return (

                                            <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px]  " key={i}>
                                                <Link to={`/product/${v.category}/${v.id}`}  >
                                                    <div className="cursor-pointor">
                                                        <img src={v.thumbnail} alt="" />
                                                    </div>
                                                </Link>
                                                <h1 className='   flex items-center  '>
                                                    <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                                    <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                                        8 mins
                                                    </p>
                                                </h1>
                                                <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                                    {v.title}
                                                </h1>
                                                <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                                    <span className=' capitalize'>stock :</span>  {v.stock}
                                                </h1>
                                                <div className=" flex justify-between items-center">
                                                    <h1 className='text-[rgb(31,31,31)] flex items-center font-medium text-[14px]'>
                                                        <FaRupeeSign /> {v.price}
                                                    </h1>
                                                    <button className=" cursor-pointer uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                                        add
                                                    </button>
                                                </div>
                                            </div>

                                        )
                                    })

                                    :

                                    ""



                            }


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
