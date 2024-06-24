const CartItemsList = ({thumbImg}) => {
    return (
        <div className='flex shadow-lg w-full flex-col min-[410px]:flex-row min-[410px]:flex-start min-[410px]:gap-2 min-[410px]:px-4 min-[410px]:justify-between relative items-center bg-white rounded-md overflow-hidden'>
            <span className="absolute left-3 top-2">X</span>

            <div className=' w-[90%] min-[410px]:w-fit'>
                <img src={thumbImg} className='min-[410px]:w-32' alt="thump" />
            </div>

            <div className='min-[410px]:flex min-[410px]:items-center  min-[410px]:gap-2'>
                <p>ساعت هوشمند اپل سری 6</p>
                <span className='flex flex-col min-[410px]:flex-row min-[410px]:gap-4 items-center'>
                    <span className='text-orange-400'>2,250,000ت</span>
                 
                </span>
            </div>   
            <span className="flex items-center justify-center gap-[6px] mb-4 min-[410px]:my-auto">
                        <button className='rounded-full w-6 h-6 bg-gray-600 flex justify-center items-center font-bold'>+</button>
                        <span>1</span>
                        <button className='rounded-full w-6 h-6 bg-orange-400 flex justify-center items-center font-bold'>-</button>
                    </span>
        </div>
    );
};

export default CartItemsList;