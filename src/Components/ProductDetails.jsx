import React from 'react';
import BreadCrump from "./BreadCrump";
import TopBar from './TopBar';
import samsungLapTopImg from '../assets/Images/thumb7.avif'
import ProductColors from './ProductColors';
import ProductProperties from './ProductProperties';
import ProductReview from './ProductReview';
import Sellers from './Sellers.jsx'
const ProductDetails = ({ isProductDetails }) => {
    return (
        <div className={`${!isProductDetails && 'hidden'} flex flex-col gap-y-4 relative bg-white`}>
            <TopBar />
            <BreadCrump />
            {/* product details */}
            <div className='md:flex md:px-4'>
                <div className='flex flex-col gap-y-4'>
                    <div>

                        <img className='w-2/3 mx-auto max-w-[250px]' src={samsungLapTopImg} alt='iphone15' />
                    </div>
                    <div className=' gap-x-1 justify-center hidden md:flex'>
                        <img className='w-20' src={samsungLapTopImg} alt="iphone15" />
                        <img className='w-20' src={samsungLapTopImg} alt="iphone15" />
                        <img className='w-20' src={samsungLapTopImg} alt="iphone15" />
                    </div>

                </div>

                <div className='flex flex-col gap-y-5 px-4'>
                    <div className="flex flex-col">
                        <p className='font-bold'>گوشی آیفون 15 256</p>
                        <p className='text-gray-200 md:text-gray-950'>iphone 15 256 GB</p>
                    </div>

                    <div className="flex justify-evenly font-bold flex-col gap-y-4">
                        <div className='flex gap-x-4'>
                            <span>انتخاب رنگ:</span>
                            <ProductColors />
                        </div>

                        <ProductProperties />
                    </div>
                </div>
            </div>

            {/* sellers */}
        
          <Sellers sellersPosition={'product_details'}/>
            <ProductReview />

        
        </div>
    );
};

export default ProductDetails;