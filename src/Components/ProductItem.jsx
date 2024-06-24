import ProductColors from './ProductColors';
const ProductItem = ({thumbImg}) => {
    return (
        <div className="bg-white overflow-hidden rounded-xl flex flex-col shadow-md px-2 ">
            <div className='w-full h-fit rounded-xl relative bg-gray-200  overflow-hidden'>
                <div className="rounded-full flex justify-center items-center absolute top-2 right-2 md:top-2 md:right-0 w-7 h-7 bg-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="orange" viewBox="0 0 24 24" stroke="none" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
                <img src={thumbImg} alt="product" className="bg-gray-100"/>
            </div>
           <div className="flex w-full flex-col gap-4">
            <div className="flex justify-between items-center w-full">
                <span className="text-gray-200 font-bold">اپل</span>
                <ProductColors />
            </div>
            <div className="flex flex-col divide-y ">
                <div className="flex flex-col gap-2 ">
                    <p className="text-right">ساعت هوشمند3</p>
                    <p className="text-center text-sm font-bold text-orange-400">2,250,000 تومان</p>
                </div>

                <a className="py-2 border-top text-orange-400 text-center bg-white font-bold" href="/">مشاهده و سفارش</a>
            </div>
            </div>
        </div>

    );
};

export default ProductItem;