import BreadCrump from "./BreadCrump";
import TopBar from './TopBar';
import ProductColors from './ProductColors';
import ProductProperties from './ProductProperties';
import ProductReview from './ProductReview';
import Sellers from './Sellers.jsx'
import { useParams } from "react-router-dom";


const ProductDetails = ({ isProductDetails,productList }) => {
    const param=useParams();
    const id=+param.id;
    const currentProduct=productList[id-1];
const {productId,product,productCategory,desc,productPrice,img}=currentProduct;
    return (
        <div className={`${!isProductDetails && 'hidden'} flex flex-col gap-y-4 max-w-[1200px] relative mx-auto bg-white`}>
            <TopBar />
            <BreadCrump />
            {/* product details */}
            <div className='md:flex md:px-4'>
                <div className='flex flex-col gap-y-4'>
                    <div>

                        <img className='w-2/3 mx-auto max-w-[250px]' src={img} alt='product' />
                    </div>
                    <div className=' gap-x-4 justify-center hidden md:flex'>
                        <img className='w-20' src={img} alt="product" />
                        <img className='w-20' src={img} alt="product" />
                        <img className='w-20' src={img} alt="product" />
                    </div>

                </div>

                <div className='flex flex-col gap-y-5 px-4'>
                    <div className="flex flex-col">
                        <p className='font-bold w-'>{product}</p>
                        <p className='text-gray-200 md:text-gray-950'>{product}</p>
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
        
          <Sellers currentProduct={currentProduct} sellersPosition={'product_details'}/>
            <ProductReview desc={desc}/>
        </div>
    );
};

export default ProductDetails;