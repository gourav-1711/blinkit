import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingBag, FaSortDown } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { MdLibraryBooks, MdOutlineShoppingCart } from "react-icons/md";
import '/src/index.css'
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FiInfo } from "react-icons/fi"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx";
import { GiScooter } from 'react-icons/gi';
import { MyContext } from '../Context/ContextProvider';


export default function Header() {

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

    let [drop, setdrop] = useState(false)

    let dropdown = () => {
        setdrop(!drop)

    }


    // cart

    let { myCart, setMyCart } = useContext(MyContext)



    return (
        <>
            {/* dropdown overlay */}
            <div className={`  overlay fixed w-full h-screen top-0 bg-[#00000090] invisible opacity-0 cursor-pointer  ${drop ? "active z-[30] " : ""}  ${offCanvas ? "active z-[30]" : ""} `} onClick={closefn}></div>

            {/* desktop header */}
            <header className={` max-w-full w-full hidden lg:block border border-[#c7c7c77e] sticky top-0 bg-[white]  ${drop ? "z-[60]" : "z-[100]"} `}>
                <nav className=" grid  grid-cols-[14%_20%_auto_12%_12%] gap-[10px] items-center ">
                    <Link to='/'>
                        <div className="flex justify-center items-center border-r border-[#c7c7c781] py-[10px]  hover:bg-[rgba(240,240,240,0.42)] duration-500 ">
                            <img src="/images/blinkit-logo_casestudy.png" className=' w-[65%] ' alt="" />
                        </div>
                    </Link>
                    <div className="address  py-[15px] text-center grid justify-center hover:bg-[rgba(240,240,240,0.42)] duration-500 ">
                        <h1 className='text-[18px] font-bold capitalize'>
                            delivery in 8 minutes
                        </h1>
                        <p className="flex  items-center text-[15px] capitalize text-center">
                            b62 pocket b south city <FaSortDown />
                        </p>
                    </div>
                    <div className="  search overflow-hidden ">
                        <Link to='/s/'>
                            <div className="flex items-center py-[15px] px-[10px] rounded-[18px] bg-[#F8F8F8] relative  ">
                                <IoSearchSharp className=' text-[27px] ' />

                                <input type="" className=' outline-0 border-0 ms-2  w-[500px] relative ' />


                                <p className=' sText absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "chips" </p>
                                <p className=' sText2 absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "milk" </p>
                            </div>
                        </Link>
                    </div>
                    <div className="dropdown text-center py-[15px] relative  hover:bg-[rgba(240,240,240,0.42)] duration-500">
                        <button onClick={dropdown} className='flex gap-[5px] items-center text-[20px] font-light capitalize mx-auto cursor-pointer '>
                            Account <span className='text-[18px]'> <FaSortDown /></span>
                        </button>

                        {/* dropdown */}
                        <div className={` z-[49] absolute h-[300px] w-[200px] right-0 bg-[white] text-left top-[100%] p-[5px_20px] capitalize ${drop ? "block" : "hidden"} rounded-2xl  `}>
                            <div className="">
                                <h1 className=' text-[17px] text-gray-700 font-bold '>my account</h1>
                                <h2 className=' text-[13px] font-[390] text-gray-600 '>8387840848</h2>
                                <ul className=' text-[14px] text-gray-600 pt-[15px] border-spacing-y-2.5 space-y-2.5 '>
                                    <li className=' hover:bg-gray-200 duration-100 font-[350] '>my order</li>
                                    <li className=' hover:bg-gray-200 duration-100 font-[350] '> saved address</li>
                                    <li className=' hover:bg-gray-200 duration-100 font-[350] '>number</li>
                                    <li className=' hover:bg-gray-200 duration-100 font-[350] '>e gift cards</li>
                                    <li className=' hover:bg-gray-200 duration-100 font-[350] '>faq</li>
                                    <li className=' hover:bg-gray-200 duration-100 font-[350] '>account privacy</li>
                                    <li className=' hover:bg-gray-200 duration-100 font-[350] '>log out</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* my cart btn */}
                    <div className="">
                        <button onClick={offCan} className=" relative cursor-pointer flex items-center gap-[5px] bg-[green] p-[10px] rounded-[10px]">
                            <span className='text-[30px] invert-100'><MdOutlineShoppingCart /></span><span className='text-[white] capitalize font-bold'>my cart {myCart.length}</span>
                        </button>

                    </div>
                </nav>


                {/* off canvas */}

                <div className={`z-[100] offcanvas absolute right-0 top-0 w-[30%] h-screen bg-white overflow-y-scroll invisible opacity-0 ${offCanvas ? "active" : ""}   `}>

                    {/* title */}
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
                                    <p className="text-gray-500 text-[15px]">Shipment of {myCart.length} item</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 my-4"></div>


                            {/* all products */}
                            <div className={` space-y-1 ${myCart.length > 1 ? "h-[200px]" : "h-auto"} overflow-y-scroll`}>
                                {/* item 1 */}
                                {
                                    myCart.length > 0 ?

                                        myCart.map((v, i) => {
                                            return (

                                                <CartBox v={v} key={i} />
                                            )

                                        })
                                        :
                                        <div className=" text-2xl capitalize text-center">
                                            No items in cart
                                        </div>
                                }
                            </div>


                        </div>


                        {/* bill part */}

                        <Bil />

                    </div>




                </div>


            </header>


            {/* mobile header */}
            <header className="mobile z-50 block lg:hidden sticky top-0 bg-[white] shadow-[0px_0px_5px_1px_gray] pb-[10px] pt-[10px] ">
                <nav className='  '>
                    <div className="flex justify-between">
                        <div className="  px-[20px] py-[5px]   hover:bg-[rgba(240,240,240,0.42)] duration-500 ">
                            <h1 className=' text-[14px] lg:text-[16px] font-bold capitalize'>
                                delivery in 8 minutes
                            </h1>
                            <p className="flex  items-center text-[12px] md:text-[15px] capitalize  overflow-hidden  ">
                                b62 pocket b south city sector 30 haryana 122027 india <FaSortDown />
                            </p>
                        </div>
                        <div className=" px-[20px] md:py-[20px] text-[35px] ">
                            <RiAccountCircleLine />
                        </div>
                    </div>

                    <div className=" px-[20px] search overflow-hidden ">
                        <Link to='/s/'>
                            <div className="flex items-center py-[5px] md:py-[10px] px-[10px] rounded-[18px] bg-[#F8F8F8] relative  ">
                                <IoSearchSharp className=' text-[27px] ' />

                                <input type="" className=' outline-0 border-0 ms-2  w-full relative ' />


                                <p className='  sText absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "chips" </p>
                                <p className=' sText2 absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "milk" </p>
                            </div>
                        </Link>
                    </div>
                </nav>

            </header>


        </>
    )
}


let CartBox = ({ v, i }) => {
    let { myCart, setMyCart } = useContext(MyContext)


    // quantity increase function 
    let [myCartQ, setQuantity] = useState(v.quantity || 1)



    const dec = () => {
        if (v.quantity > 1) {
            v.quantity--
            setQuantity(v.quantity);
        }
        else {
            let deleteData = myCart.filter((value, index) => i != index)
            setMyCart(deleteData)
        }
    }
    const inc = () => {
        v.quantity++
        setQuantity(v.quantity);
    }

    let update = () => {
        let newData = myCart.filter((value, index) => {
            if (i == index) {
                return value.quantity = myCartQ
            }
            return value
        })
        setMyCart(newData)
    }

    useEffect(() => {
        update()
    }, [myCartQ])

    return (
        <>
            {/* item detail box */}
            <div className="flex items-center justify-between py-2.5">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 relative">
                        <img src={v.image} alt="" />
                    </div>
                    <div>
                        <h3 className="font-medium text-[14px] text-gray-800"> {v.title} </h3>
                        <p className="text-gray-500 text-[12px]"> {
                            v.brand} </p>
                        <p className="font-medium">₹ {v.price}</p>
                    </div>
                </div>

                <div className="flex items-center bg-green-600 text-white rounded-md">
                    <button onClick={dec} className="px-1 py-1 text-white cursor-pointer"  >
                        <AiOutlineMinus />
                    </button>
                    <span className="px-1 py-1"> {myCartQ} </span>
                    <button onClick={inc} className="px-1 py-1 text-white cursor-pointer" >
                        <AiOutlinePlus />
                    </button>
                </div>
            </div>
        </>
    )
}

let Bil = () => {

    let { myCart, setMyCart } = useContext(MyContext)

    let [price, setPrice] = useState(0)
    let [gst, setGst] = useState(0)
    let [delCharge, setDelCharge] = useState(0)
    let total = 0

    // total function


    useEffect(() => {
        myCart.forEach(sum => {
            total += Number((sum.price) * (sum.quantity))
        });
        setPrice(Number((total).toFixed(2)))

        setGst(price * 18 / 100)

        // console.log(gst,price);

        let delFun = () => {
            { price > 499 ? setDelCharge(50) : setDelCharge(0) }
        }
        delFun()

    }, [myCart, price])


    // console.log(total , price);

    return (
        <>
            <div className="bg-white rounded-lg p-4">
                <h2 className="text-[16px] font-bold mb-4">Bill details</h2>

                <div className="space-y-1">

                    {/* items total */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span><MdLibraryBooks /></span>
                            <span className=" text-[14px] font-bold text-gray-700"> Items total</span>
                        </div>
                        <span className=" text-[16px] font-medium">₹ {price}</span>
                    </div>

                    {/* delievery charge */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span><GiScooter /></span>
                            <span className="text-gray-700 text-[14px] font-bold">Delivery charge</span>
                            <FiInfo className="text-gray-400" />
                        </div>
                        <span className="font-medium text-[16px]">₹ {delCharge} </span>
                    </div>

                    {/* handling charge */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span><FaShoppingBag /></span>
                            <span className="text-gray-700 text-[14px] font-bold ">GST</span>
                            <FiInfo className="text-gray-400" />
                        </div>
                        <span className="font-medium text-[16px]">₹ {(gst).toFixed(2)} </span>
                    </div>


                    {/* total */}
                    <div className="border-t border-gray-100 pt-2">
                        <div className="flex justify-between items-center">
                            <span className="text-[16px] font-bold">Grand total</span>
                            <span className=" text-[16px] font-bold">₹ {(price + gst + delCharge).toFixed(2)} </span>
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

            {/* button to buy */}
            <div className="bg-white w-[90%] lg:w-[50%] right-0  p-[20px] rounded-2xl ms-5 ">
                <div className="  cursor-pointer capitalize  bg-green-600  rounded-2xl py-[5px] flex justify-between text-white items-center px-[20px] ">
                    <div className="total font-bold flex flex-col items-center">
                        <div className="">{(price + gst + delCharge).toFixed(2)}</div>
                        <div className=" font-light">total</div>
                    </div>
                    <div className="">proceed to pay</div>
                </div>
            </div>
        </>
    )
}