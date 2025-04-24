import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import { Link } from 'react-router-dom'

export default function ItemList() {
    return (
        <>
            <div className="item">
                <Header />
            </div>
            <div className="max-w-[1300px]  w-[95%] mx-auto ">
                <h1 className=' px-[20px] py-[4px] text-[12px] md:text-[14px] font-bold  capitalize '>buy milk online </h1>

            </div>
            <div className="max-w-[1300px] w-[95%] mx-auto h-[80vh]  bg-[#F6F6F9]  ">
                <div className="w-full h-full grid grid-cols-[15%_auto] md:grid-cols-[12%_auto] lg:grid-cols-[7%_auto]">
                    <div className=" overflow-y-scroll px-[5px] grid grid-cols-1 gap-[10px]">
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/1.jpeg" alt="" />
                                <h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/2.jpeg" alt="" />
                                <h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/3.jpeg" alt="" /><h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/4.jpeg" alt="" /><h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/5.jpeg" alt="" /><h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/6.jpeg" alt="" /><h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/7.jpeg" alt="" /><h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/8.jpeg" alt="" /><h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/9.jpeg" alt="" /><h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/10.jpeg" alt="" /><h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>
                        <Link to='/item/'>
                            <div className="box">
                                <img src="/images/slider/11.jpeg" alt="" /><h1 className=' font-bold text-[12px] capitalize text-center'> milk </h1>
                            </div>
                        </Link>

                    </div>
                    <div className=" overflow-y-scroll">
                        <div className=" px-[5px] py-[10px] desktop  grid grid-cols-2 lg:grid-cols-6 gap-[10px] lg:gap-[20px]  ">
                            <Link to='/prn/'  >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/1.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/2.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/3.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/4.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/5.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/6.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/7.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/8.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/9.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/10.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/11.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/12.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/13.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/14.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/15.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/16.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/17.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to='/prn/' >
                                <div className=" bg-[white] shadow-[0px_0px_5px_1px_#d5d5d590] border border-[#a7a7a782] rounded-[5px]   px-[10px] py-[10px] cursor-pointer ">
                                    <div className="">
                                        <img src="/images/slider/18.jpeg" alt="" />
                                    </div>
                                    <h1 className='   flex items-center  '>
                                        <img src="/images/slider/15-mins.png" className='w-[6%] bg-[#a6a6a652] ' alt="" />
                                        <p className=" capitalize bg-[#b2b2b252] font-medium text-[9px]">
                                            8 mins
                                        </p>
                                    </h1>
                                    <h1 className=' w-[90%] font-medium capitalize text-[13px] my-[10px]'>
                                        amul tazza toned fresh milk
                                    </h1>
                                    <h1 className=' text-[rgb(102,_102,_102)] text-[12px]'>
                                        1 ltr
                                    </h1>
                                    <div className=" flex justify-between items-center">
                                        <h1 className='text-[rgb(31,31,31)] font-medium text-[14px]'>
                                            $55
                                        </h1>
                                        <button className=" uppercase bg-[#F7FFF9] border-1 rounded-[10px] p-[5px_15px] border-[#0C831F]">
                                            add
                                        </button>
                                    </div>
                                </div>
                            </Link>



                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-2 bg-[#ffffff] max-w-[1300px] w-[95%] mx-auto shadow">
                <div className="w-[87%] mx-auto pt-[30px]">
                    <div className="text-[#666666] text-[15px] md:text-[24px] font-extrabold uppercase ">
                        Milk
                    </div>
                    <p className="text-[#666666] text-[12px] md:text-[15px] capitalize py-[35px]">
                        The richness of milk as nature’s perfect food is demonstrated by its high content of essential nutrients, variety in cooking, and most importantly its indispensable role in sustaining life. Milk has been more than just a biological necessity for human consumption since it originated as an essential diet for young mammals.
                    </p>
                    <div className="text-[#666666] text-[15px] md:text-[24px] font-extrabold uppercase ">
                    Composition:
                    </div>
                    <p className="text-[#666666] text-[12px] md:text-[15px] capitalize py-[35px]">
                    Primarily, milk contains water, proteins, fats, carbohydrates, vitamins, and minerals that together determine its nutritive value and sensory properties. Water accounts for about 87% of the total volume of milk making it a major component. Proteins such as casein and whey contain all the necessary amino acids required for growth and development (Tungland & Meyer 2018). The lipid components contain saturated fats, monounsaturated fats, and polyunsaturated fats which are responsible for taste enhancement in milk but also act as carriers for fat-soluble vitamins including A, D, E and K among others. Primarily lactose is the principal carbohydrate providing an energy source while facilitating mineral absorption (Young et al., 2013). Besides these elements, there are other vital minerals such as calcium, phosphorus, potassium, and magnesium, which help to retain good muscle function, bone health processes along metabolic processes
                    </p>
                </div>
            </div>


            <Footer />
        </>
    )
}
