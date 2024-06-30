import { Link } from "react-router-dom";
import ProductColors from "./ProductColors";
import {  useDispatch } from "react-redux";
import {toggleFavorite} from '../features/favorite/favoriteSlice'
const ProductItem = ({ product,favKey }) => {
  const dispatch=useDispatch();
  return (
    <div className="bg-white overflow-hidden rounded-xl flex flex-col shadow-md px-2">
      <div className="w-full h-full rounded-xl relative  overflow-hidden">
        <button onClick={()=>dispatch(toggleFavorite(product))} className="rounded-full flex justify-center items-center absolute top-2 right-2 md:top-2 md:right-0 w-7 h-7 bg-gray-200 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="orange"
            viewBox="0 0 24 24"
            stroke="none"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <img src={product.img} alt="product" className="" />
        <div className="flex justify-between items-center w-full">
          <span className="text-gray-200 font-bold">
            {product.productCategory}
          </span>
          {!favKey && <ProductColors />}
        </div>
      </div>
      <div className="flex w-full flex-col gap-4  justify-between">
       <div className='flex flex-col gap-2 h-full justify-between'>
        <p className="py-4">{product.product}</p>

        <div className="flex flex-col gap-2  divide-y">
          <p className="text-center text-sm font-bold text-orange-400">
            {product.productPrice} تومان
          </p>
          <Link
            to={`/Product_details/${product.productId}`}
            className="py-2 border-top text-orange-400 text-center bg-white font-bold"
          >
            مشاهده و سفارش
          </Link>
        </div>
</div>
      </div>
    </div>
  );
};

export default ProductItem;
