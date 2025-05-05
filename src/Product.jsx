import React, { useContext, useEffect, useState } from 'react'
import Header from './Comman/Header'
import Footer from './Comman/Footer'

import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';
import CartBtn from './Comman/CartBtn'

import { FaCaretDown, FaCaretRight, FaCaretUp, FaMinus, FaPlus } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import axios from 'axios';
import ImageMagnifier from './Comman/Magnify';
import { MyContext } from './Context/ContextProvider';
import { toast, ToastContainer } from 'react-toastify';

export default function Product() {



  let id = useParams()






  //single product api

  let api = `https://dummyjson.com/products/${id.id}`

  let [ProData, setProData] = useState([])


  let [BigImg, setBigImg] = useState()
  let [img, setImg] = useState([])


  let apiFun = () => {

    axios.get(api)
      .then((ress) => {
        setProData(ress.data);
        setImg(ress.data.images)
        setBigImg(ress.data.thumbnail)



      })



  }




  useEffect(() => {
    apiFun(), ProFun()
  }, [id.id])




  // related products api

  let [relaData, SetrelaData] = useState([])

  let ProFun = () => {

    let RelatedApi = `https://dummyjson.com/products/category/${id.category}`

    axios.get(RelatedApi)
      .then((ress2) => {
        SetrelaData(ress2.data.products)
        // console.log(RelatedApi);
      })
  }



  // console.log(relaData);



  // slider and img func
  var settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    rows: 1,
    // freePlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          variableWidth: true
        }
      }
    ]
  };



  let [details, setDetails] = useState(false)
  let open = () => {
    setDetails(!details)
  }



  // cart function

  let { myCart, setMyCart, filterCart, setFilterCart } = useContext(MyContext)

  let cartObj = {
    id: ProData.id,
    image: ProData.thumbnail,
    title: ProData.title,
    quantity: 1,
    price: ProData.price,
    brand: ProData.brand

  }


  let addCart = () => {
    
    setMyCart(old => [...old, cartObj])
    
  }



  return (
    <>
      {/* notification */}
      <ToastContainer />

      <Header />

      {/* desktop page */}
      <div className="max-w-[1300px] desktop  mx-auto hidden lg:block">


        <div className=" grid grid-cols-[auto_45%] desktop    ">


          <div className=" overflow-y-scroll scroll  h-[110vh]  ">
            <div className="slider-container w-[100%]  mx-auto  ">
              <div className=" w-[100%] mx-auto z-[10] grid justify-center ">

                <div className="bigImg">
                  <div className="mb-8 mx-auto flex justify-center " >

                    <ImageMagnifier
                      src={BigImg}
                      width={500}
                      height={500}
                      magnifierHeight={500}
                      magnifierWidth={600}
                      zoomLevel={2.5}
                      spotlightSize={140} // Size of the spotlight area
                    />
                  </div >
                </div>

                <div className="smallImgs grid grid-cols-6  w-[70%] mx-auto gap-[5px]">
                  {/* small image */}
                  {
                    img.length > 0 ?
                      img.map((v, i) => {
                        return (
                          <img key={i} src={v} alt="" className=' cursor-pointer border' onClick={() => setBigImg(v)} />
                        )
                      })
                      : <div className="loader"></div>
                  }
                </div>
              </div>

              {/* product details  */}
              <div className="details mt-[50px] bg-[#FFFFFF] px-[20px]">
                <h1 className=' text-[24px]  capitalize font-medium pb-[20px]'> product details</h1>
                <h2 className="text-[14px]  uppercase font-medium py-[5px]"> {ProData.title} </h2>
                <p className="text-[13px]  text-[gray]  uppercase font-medium py-[5px]">type</p>


                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Stock</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]"> {ProData.stock} </p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Storage Tip</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Refrigerated</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> FSSAI License</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">10012021000071</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Shelf Life</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">2 days</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Return Policy</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]"> {ProData.returnPolicy} </p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Warranty Information </h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]"> {ProData.warrantyInformation} </p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Country of Origin</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">India</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Customer Care Details</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Email: info@blinkit.com</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Seller</h2>
                <p className="text-[13px]  text-[gray]  uppercase font-medium py-[5px]"> {ProData.brand} </p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Seller FSSAI</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">10823999000118</p>

                <h2 className="text-[14px] capitalize font-medium py-[5px]"> Disclaimer</h2>
                <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>

              </div>


            </div>

          </div>

          {/* product tittle and add to cart desktop */}
          <div className=" px-[40px]  ">
            <div className="top pt-[40px] ">
              <ul className=' flex gap-[5px] capitalize text-[13px] font-medium '>
                <li> <Link to='/'>home / </Link> </li>
                <li> <Link to='/item/'> products / </Link> </li>
                <li>  {ProData.title}  </li>
              </ul>
            </div>
            <div className="">
              <h1 className=' font-bold text-[23px] py-[10px]'> {ProData.title} </h1>
            </div>
            <div className="">
              <h1 className='   flex items-center  '>
                <img src="/images/slider/15-mins.png" className='w-[4%] bg-[#F5F5F5] ' alt="" />
                <p className=" capitalize bg-[#F5F5F5] font-medium text-[14px]">
                  {ProData.shippingInformation}
                </p>
              </h1>

              <Link >
                <h1 className=' mt-[10px]  flex items-center text-green-700 font-medium text-[20px]'>
                  <span>View all by {ProData.brand}</span> <FaCaretRight />
                </h1>
              </Link>
            </div>
            <div className=" border-t my-[15px] border-gray-300 h-[2px] w-full "></div>
            <h1 className='font-medium text-[14px] text-gray-600'>Select Unit</h1>
            <div className="mt-[10px]">
              <button className=' capitalize shadow text-gray-900 text-[14px] bg-[#F7FFF9] font-medium p-[6px_12px] rounded-[10px] border border-green-600 cursor-pointer '>
                {ProData.minimumOrderQuantity}
                <br />
                <span className='flex items-center uppercase'> mrp <FaRupeeSign /> {ProData.price}</span>
              </button>
              {/* <button className='ms-[10px] capitalize text-gray-900 text-[14px] bg-[#FFFFFF] font-medium p-[6px_12px] rounded-[10px] border border-gray-300  cursor-pointer'>
              {ProData.minimumOrderQuantity}
                <br />
                <span className='flex items-center uppercase'> mrp <FaRupeeSign /> {ProData.price}</span>
              </button> */}

              <h1 className='font-medium text-[13px] py-[10px] text-gray-600'>(Inclusive of all taxes)</h1>
              <button onClick={addCart} className=' uppercase  shadow text-green-700 text-[15px] upp bg-[#F7FFF9] font-medium p-[4px_20px] rounded-[10px] border border-green-600 cursor-pointer '>
                add
              </button>
            </div>
            <div className="w-full">
              <h1 className=' font-medium text-[18px] py-[25px] text-gray-900'> Why shop from blinkit?</h1>
              <ul>
                <li className=' flex items-center gap-[20px]'>
                  <img src="/images/8(2).png" alt="" className='w-[15%]' />
                  <h1 className=''>
                    <p className='  text-[14px] '>
                      Superfast Delivery
                    </p>
                    <span className=' text-gray-600 text-[13px]' >
                      Get your order delivered to your doorstep at the earliest from dark stores near you.
                    </span>
                  </h1>
                </li>
                <li className=' py-[20px] flex items-center gap-[20px]'>
                  <img src="/images/9(2).png" alt="" className='w-[15%]' />
                  <h1 className=''>
                    <p className='  text-[14px] '>
                      Superfast Delivery
                    </p>
                    <span className=' text-gray-600 text-[13px]' >
                      Get your order delivered to your doorstep at the earliest from dark stores near you.
                    </span>
                  </h1>
                </li>
                <li className=' flex items-center gap-[20px]'>
                  <img src="/images/10(2).png" alt="" className='w-[15%]' />
                  <h1 className=''>
                    <p className='  text-[14px] '>
                      Superfast Delivery
                    </p>
                    <span className=' text-gray-600 text-[13px]' >
                      Get your order delivered to your doorstep at the earliest from dark stores near you.
                    </span>
                  </h1>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* mobile add to cart page */}
      <div className="block lg:hidden">
        <div className="slider w-[50%] md:w-[60%] mx-auto   ">
          <Slider {...settings2}>

            {

              img.map((v, i) => {
                return (
                  <div className="" key={i}>
                    <img src={v} alt="" className='border-0' />
                  </div>
                )

              })
            }


          </Slider>
        </div>
        <div className=" px-[20px] ">
          <h1 className=' font-bold text-[23px] py-[10px]'> {ProData.title}</h1>
        </div>
        <div className="top pt-[10px] px-[20px] ">
          <ul className=' flex gap-[5px] capitalize text-[13px] font-medium '>
            <li> <Link to='/'>home / </Link> </li>
            <li> <Link to='/item/'> products / </Link> </li>
            <li>  {ProData.title}  </li>
          </ul>
        </div>
        <div className=" px-[20px] py-[10px] ">
          <h1 className='   flex items-center  '>
            <img src="/images/slider/15-mins.png" className='w-[5%] ' alt="" />
            <p className=" capitalize font-medium text-[15px]">
              {ProData.shippingInformation}
            </p>
          </h1>
        </div>

        <div className="mt-[10px]  px-[20px]">
          <button className=' capitalize shadow text-gray-900 text-[14px] bg-[#F7FFF9] font-medium p-[6px_12px] rounded-[10px] border border-green-600 cursor-pointer '>
            {ProData.minimumOrderQuantity}
            <br />
            <span className='flex items-center uppercase'> mrp <FaRupeeSign /> {ProData.price}</span>
          </button>
          {/* <button className='ms-[10px] capitalize text-gray-900 text-[14px] bg-[#FFFFFF] font-medium p-[8px_20px] rounded-[10px] border border-gray-300  cursor-pointer'>
            500 ml
            <br />
            <span className='flex items-center uppercase'> mrp <FaRupeeSign /> 28</span>
          </button> */}

          <div className="flex justify-between  ">
            <span className='flex items-center uppercase'> mrp <FaRupeeSign /> {ProData.price} </span>
            <button type="button" onClick={addCart} className=" uppercase  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">add to cart</button>
          </div>

          <h1 className='font-medium text-[10px] text-gray-600'>(Inclusive of all taxes)</h1>

          <div className="">
            <h1 className=' font-bold text-[23px] py-[10px] capitalize'> highlights</h1>
            <button className=' capitalize text-gray-900 text-[14px] bg-gray-100 font-medium p-[8px_20px] rounded-[10px] border border-gray-300  cursor-pointer'>
              Stock : {ProData.stock}
              <br />
              <span className='flex items-center uppercase'> mrp <FaRupeeSign /> {ProData.price} </span>
            </button>
          </div>

        </div>

        <div className={details ? "block" : "hidden"}>
          <div className="details mt-[50px] bg-[#FFFFFF] px-[20px]">
            <h1 className=' text-[24px]  capitalize font-medium pb-[20px]'> product details</h1>
            <h2 className="text-[14px]  uppercase font-medium py-[5px]"> {ProData.title} </h2>
            <p className="text-[13px]  text-[gray]  uppercase font-medium py-[5px]">type</p>


            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Stock</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]"> {ProData.stock} </p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Storage Tip</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Refrigerated</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> FSSAI License</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">10012021000071</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Shelf Life</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">2 days</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Return Policy</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]"> {ProData.returnPolicy} </p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Warranty Information </h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]"> {ProData.warrantyInformation} </p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Country of Origin</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">India</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Customer Care Details</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Email: info@blinkit.com</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Seller</h2>
            <p className="text-[13px]  text-[gray]  uppercase font-medium py-[5px]"> {ProData.brand} </p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Seller FSSAI</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">10823999000118</p>

            <h2 className="text-[14px] capitalize font-medium py-[5px]"> Disclaimer</h2>
            <p className="text-[13px]  text-[gray]  capitalize font-medium py-[5px]">Every effort is made to maintain accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>

          </div>

        </div>


        <div className=" flex cursor-pointer px-[20px] gap-1 items-center py-[20px] " onClick={open}>
          <h1 className='text-green-600 capitalize text-[15px] font-bold '> {details ? "view less details" : "view full details"} </h1>
          <span className='text-green-600'> {details ? <FaCaretUp /> : <FaCaretDown />}  </span>
        </div>


        <h1 className='  text-[24px] font-bold capitalize pt-[20px] mb-[10px] px-[20px]'  > top products in this category</h1>



        <div className=" w-[98%] px-[20px] desktop   ">

          <Slider {...settings3} >
            {
              relaData.length < 0 ?
                <div className="hidden"></div>
                :
                <div className="hidden"></div>
            }



            {
              relaData.length > 0 ?
                relaData.map((v, i) => {
                  return (
                    <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px]  " key={i}>
                      <Link to={`/product/${v.category}/${v.id}`}   >
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


          </Slider>
          <CartBtn />

        </div>
      </div>





      <Footer />
    </>
  )
}
