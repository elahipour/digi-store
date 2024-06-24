import React from 'react';

const Sellers = ({sellersPosition}) => {
    return (
        <div className={` flex flex-col  rounded-lg  mx-4 md:mx-0 bg-gray-100 gap-y-8 md:absolute h-[190px] max-[323px]:h-[230px] md:h-[240px] ${sellersPosition==='product_details' ? 'max-[1023px]:hidden max-[767px]:block  md:top-20 md:left-4' : 'lg:hidden md:relative md:top-0  bg-white md:left-0 md:mb-2'}`}>
        <div className='flex flex-col items-start gap-y-4 gap-x-4 justify-start px-2 sm:justify-center  md:flex md:flex-col '>
            <div className="text-md flex gap-x-2 mx-2  items-end min-[366px]:justify-center flex-auto md:justify-start  md:mt-4 mt-2">

                <span className="w-6 h-6 bg-gray-200 rounded-full relative top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-2 top-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </span>
                <span className='font-bold text-sm'>فروشنده : </span>
                <span className="text-sm">دیجی تایز</span>

            </div>
            <div className="text-md flex gap-x-2 mx-2  items-end   min-[366px]:justify-center flex-auto  md:justify-start">
                <span className="w-6 h-6 bg-gray-200 rounded-full relative ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-2 top-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </span>
                <span className='font-bold text-sm'>گارانتی : </span>
                <span className="text-sm">18 ماه زرین خدمت</span>

            </div>
            <div className="text-md flex gap-x-2 mx-2  items-end  min-[366px]:justify-center flex-auto  md:justify-start">

                <span className="w-6 h-6 bg-gray-200 rounded-full relative ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-2 top-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                </span>
                <span className='font-bold text-sm'>ارسال توسط : </span>
                <span className="text-sm">انبار تهران</span>
            </div>


        </div>
        <div className='flex flex-wrap  gap-y-4 justify-center md:flex-col px-4 w-full md:gap-y-0 md:items-center  max-[767px]:mt-8'>
            <span className='md:order-2 max-[323px]:order-2 md:w-full md:flex md:items-center'>
                <a href="" className='px-8 py-3 rounded-md  bg-red-400 text-sm text-white font-bold md:w-full text-center'>اضافه به سبد خرید</a>
            </span>
            <span className='flex justify-center md:justify-start flex-auto gap-2 md:order-1 max-[323px]:order-1'>
                <span className='font-bold'>28,200,000</span>
                <span>تومان</span>
            </span>

        </div>
    </div>
    );
};

export default Sellers;