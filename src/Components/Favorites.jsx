import BottomBar from "./BottomBar";
import ProductItem from "./ProductItem";
import heartBreak from '../assets/Images/broken-heart-heartbreak-svgrepo-com.svg'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Favorites() {
  const products=useSelector(state=>state.product)
  const navigate=useNavigate();
  useEffect(() => {
    setTimeout(() => {
      !products.filter(product=>product.like).length && navigate("/");
    }, 1000);
  }, [products]);
  return (
    <div>
        {!products.filter(product=>product.like).length && <div className="m-auto w-fit"><img src={heartBreak} alt="heartBreak" /></div>}
      <div className='grid grid-cols-2 [@media(max-width:400px)]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:col-span-9 min-[768px]:col-span-8 lg:col-span-9 xl:col-span-10 gap-2 mt-4 mb-20 px-4 md:px-0 md:mt-0'>
        {
          products.filter(product=>product.like).map(product=>{
            return <ProductItem key={product?.productId} product={product} favKey={true}/>
          })
        }
        
      </div>
                <BottomBar />
    </div>
  )
}

export default Favorites