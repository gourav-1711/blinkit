import React, { useContext, useEffect, useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FiInfo } from 'react-icons/fi'
import { FaRupeeSign } from 'react-icons/fa'
import axios from 'axios'
import CartBtn from './Comman/CartBtn'
import { MyContext } from './Context/ContextProvider'

export default function Search() {


      let { myCart, setMyCart, filterCart, setFilterCart } = useContext(MyContext)


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


    // add to cart 
    let addCart = (name , price , thumbnail , id ,brand)=>{
        let cartObj = {
            id: id,
            image: thumbnail,
            title: name,
            quantity: 1,
            price: price,
            brand: brand
        
          }
          console.log(name,price,thumbnail,id,brand);
    setMyCart(old => [...old, cartObj])
          
    }


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

                            <input type="" autoFocus placeholder='search anything ' value={sValue} onChange={type} className=' outline-0 border-0 ms-2  w-full relative capitalize ' />


                            {/* <p className=' sText absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "chips" </p>
                            <p className=' sText2 absolute bottom-[50%] capitalize font-medium text-[#a1a1a1] '> search "milk" </p> */}
                        </div>
                    </div>

                    
                </nav>
            </header>

           

                

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
                                                    <button onClick={()=> addCart(v.title , v.price , v.thumbnail,v.id,v.brand)} className=" cursor-pointer uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
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

            <div className="block lg:hidden">
            <CartBtn/>

            </div>
        </>
    )
}
