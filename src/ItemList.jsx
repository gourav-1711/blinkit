import React, { use, useEffect, useState } from 'react'
import Header from './Comman/Header'
import Footer from './Comman/Footer'
import { Link } from 'react-router-dom'
import CartBtn from './Comman/CartBtn'

import axios from 'axios';
import { FaRupeeSign } from 'react-icons/fa';




export default function ItemList() {

    let [Data, setData] = useState([])

    let [cat, setCat] = useState([])


    // for highlight
    let [liActive, setLiActive] = useState(null)




    let api;

    let DataFun = (v = "", i) => {


        // li color change
        setLiActive(i)

        //dynamic products

        if (v == "") {
            api = "https://dummyjson.com/products"
        }
        else {
            api = `https://dummyjson.com/products/category/${v}`
        }

        // all products
        axios.get(api)
            .then((ress) => {
                // console.log(ress.data.products);
                setData(ress.data.products)



            })
            .catch((error) => {
                console.log(error);

            })

        // category work

        let catApi = 'https://dummyjson.com/products/category-list'
        axios.get(catApi)
            .then((ress2) => {
                setCat(ress2.data)



            })
            .catch((error) => {
                console.log(error);

            })


    }
    useEffect(() => {
        DataFun()
    }, [])

    return (
        <>
            <div className="item">
                <Header />
            </div>
            <div className="max-w-[1300px]  w-[95%] mx-auto ">
                <h1 className=' px-[20px] py-[4px] text-[12px] md:text-[14px] font-bold  capitalize '>buy milk online </h1>

            </div>
            <div className="max-w-[1300px] w-[95%] mx-auto h-[80vh]  bg-[#F6F6F9]  ">


                <div className="w-full h-full grid grid-cols-[25%_auto] sm:grid-cols-[20%_auto] md:grid-cols-[15%_auto] lg:grid-cols-[15%_auto]">


                    <div className=" overflow-y-scroll px-[5px] grid grid-cols-1 gap-[10px]">



                        {cat.length > 0 ? cat.map((v, i) => {

                            return (

                                <div className="box" key={i}>

                                    <h2 className={`${i == liActive ? "text-yellow-500 text-shadow-[0px_0px_2px_white] " : ""}  font-bold text-[14px] lg:text-[16px] capitalize cursor-pointer hover:text-yellow-500`} onClick={() => DataFun(v, i)}> {v}  </h2>

                                </div>
                            )
                        })
                            :
                            <div className="loader"></div>

                        }

                    </div>


                    <div className=" overflow-y-scroll">
                        <div className=" px-[10px] sm:px-[5px] py-[10px] desktop  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] lg:gap-[15px] relative ">


                            {
                                Data.length > 0 ?
                                    Data.map((v, i) => {
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
                                    <div className=" fixed top-2/4 left-3/6 ">
                                        <div className="loader"></div>
                                    </div>


                            }


                        </div>
                    </div>

                </div>
            </div>
            {/* <div className="footer-2 bg-[#ffffff] max-w-[1300px] w-[95%] mx-auto shadow">
                <div className="w-[87%] mx-auto pt-[30px]">
                    <div className="text-[#666666] text-[15px] md:text-[24px] font-extrabold uppercase ">
                        Milk
                    </div>
                    <p className="text-[#666666] text-[12px] md:text-[15px] capitalize py-[35px]">
                        The richness of milk as nature’s perfect food is demonstrated by its high content of essential nutrients, variety in cooking, and most importantly its indispensable role in sustaining life. Milk has been more than just a biological necessity for human consumption since it originated as an essential diet for young mammals.
                    </p>
                    <div className="text-[#666666] text-[15px] md:text-[24px] font-extrabold uppercase ">
                        Description:
                    </div>
                    <p className="text-[#666666] text-[12px] md:text-[15px] capitalize py-[35px]">
                        Primarily, milk contains water, proteins, fats, carbohydrates, vitamins, and minerals that together determine its nutritive value and sensory properties. Water accounts for about 87% of the total volume of milk making it a major component. Proteins such as casein and whey contain all the necessary amino acids required for growth and development (Tungland & Meyer 2018). The lipid components contain saturated fats, monounsaturated fats, and polyunsaturated fats which are responsible for taste enhancement in milk but also act as carriers for fat-soluble vitamins including A, D, E and K among others. Primarily lactose is the principal carbohydrate providing an energy source while facilitating mineral absorption (Young et al., 2013). Besides these elements, there are other vital minerals such as calcium, phosphorus, potassium, and magnesium, which help to retain good muscle function, bone health processes along metabolic processes
                    </p>
                </div>
            </div> */}

            <div className="block lg:hidden">
                <CartBtn />

            </div>
            <Footer />
        </>
    )
}
