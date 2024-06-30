import { useDispatch } from "react-redux";
import {increament,decreament,removeProduct} from '../features/cart/cartSlice';
import toast,{Toaster} from 'react-hot-toast'
const CartItemsList = ({ product }) => {
    const dispatch=useDispatch();
    function removeFromCart(){
        toast('با موفقیت حذف شد');
        dispatch(removeProduct(product))
      }
  return (
    <div className="flex shadow-lg w-full flex-col min-[410px]:flex-row min-[410px]:flex-start min-[410px]:gap-2 min-[410px]:px-4 min-[410px]:justify-between relative items-center bg-white rounded-md overflow-hidden">
      <button onClick={()=>removeFromCart()} className="absolute left-3 top-2">X</button>
      <Toaster
            toastOptions={{
              className: "",
              style: {
                fontWeight: "500",
                padding: "16px",
                color: "#31708f",
                backgroundColor: "#d9edf7"
              },
            }}
            gutter={10}
          />

      <div className=" w-[90%] min-[410px]:w-fit">
        <img src={product.img} className="min-[410px]:w-32" alt="thump" />
      </div>

      <div className="min-[410px]:flex min-[410px]:items-center  min-[410px]:gap-2">
        <p>{product.product}</p>
        <span className="flex flex-col min-[410px]:flex-row min-[410px]:gap-4 items-center">
          <span className="text-orange-400">{product.productPrice}</span>
        </span>
      </div>
      <span className="flex items-center justify-center gap-[6px] mb-4 min-[410px]:my-auto">
        <button onClick={()=>dispatch(increament(product))} className="rounded-full w-6 h-6 bg-gray-600 flex justify-center items-center font-bold">
          +
        </button>
        <span>{product.qty}</span>
        <button onClick={()=>dispatch(decreament(product))} className="rounded-full w-6 h-6 bg-orange-400 flex justify-center items-center font-bold">
          -
        </button>
      </span>
    </div>
  );
};

export default CartItemsList;
