
import TopBar from "./TopBar";
import SortBar from "./SortBar";
import BottomBar from "./BottomBar";
import DesktopNavbar from "./DesktopNavbar";
import CartItemsList from './CartItemsList'
import { useState } from "react";

import img1 from '../assets/Images/thumb1.webp';
import img2 from '../assets/Images/thumb2.jpg';
import img3 from '../assets/Images/thumb3.webp';


const Cart = () => {
    const [isProductDetails, updateIsProductDetails] = useState(false);
    return (
        <div>
            <div className="flex flex-col gap-8 h-full">
                {
                    isProductDetails && <><TopBar /> <SortBar /> </>
                }

                <DesktopNavbar />

                <BottomBar />
                {/* md and bigger */}
                <div className='flex flex-col md:flex-row w-full bg-gray-200 mb-20 rounded-md mx-auto my-4 px-4 py-4 gap-4 container max-w-screen-2xl'>
                    {/* cart items */}
                    <div className='flex order-2 flex-col rounded-md px-4 py-2 bg-gray-100  md:w-2/3 md:order-1'>
                        <div className='flex gap-4 flex-col'>
                            <div className='flex justify-between'>
                                <span>
                                    <a>بازگشت به خانه</a>
                                </span>
                                <span>
                                    <a>سبد خرید</a>
                                </span>
                            </div>
                            {/* cart items list */}
                            <div className='grid grid-cols-1 min-[350px]:grid-cols-2 min-[410px]:grid-cols-1  gap-4'>
                                <CartItemsList thumbImg={img1}/>
                                <CartItemsList thumbImg={img2}/>
                                <CartItemsList thumbImg={img3}/>

                            </div>


                        </div>

                    </div>
                    {/* cart actions */}
                    <div className='flex shadow-lg order-1 flex-col h-fit gap-4 rounded-md px-4 py-2 bg-white  md:w-1/3 min-[410px]:w-[350px] min-[410px]:mx-auto md:order-2 '>
                        <div className='flex justify-between'>
                            <span>مجموع قیمت:</span>
                            <span>6,650,000ت</span>
                        </div>
                        <div className="flex justify-center items-center ">
                            <span>کد تخفیف:</span>
                            <div className='flex shadow-md'>
                                <input type="text" className='border-none  rounded-tr-lg rounded-br-lg w-32 min-[410px]:w-full outline-0 ring-1 ring-white' placeholder='کد را وارد کنید' />
                                <button className='text-center bg-orange-400 px-4 py-2  rounded-tl-lg rounded-bl-lg text-white'>اعمال</button>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <span>تخفیف:</span>
                            <span>250,000ت</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>قیمت نهایی:</span>
                            <span>6,400,000ت</span>
                        </div>

                        <div className="flex flex-col min-[410px]:flex-row md:flex-col lg:flex-row items-center gap-4">
                            <span className='w-full'>
                                <button className='px-4 py-2 w-full bg-orange-400 text-white font-bold rounded-md'>ادامه فرآیند خرید</button>
                            </span>
                            <span className='w-full'>
                                <button className='px-4 py-2 w-full bg-white text-orange-400 border-2 border-orange-400 rounded-md font-bold'>انصراف از خرید</button>
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Cart;