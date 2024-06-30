import ProductDetails from "./ProductDetails";
import ProductItem from "./ProductItem";

const ProductSection = ({ isProductDetails,productList }) => {
  return !isProductDetails ? (
    <div className="grid grid-cols-2 [@media(max-width:400px)]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:col-span-9 min-[768px]:col-span-8 lg:col-span-9 xl:col-span-10 gap-2 mt-4 mb-20 px-4 md:px-0 md:mt-0  ">
      {productList
        .map((product, index) => {
          return <ProductItem key={product.productId} product={product} favKey={false} />;
        })}
    </div>
  ) : (
    <div className="grid  md:col-span-9 lg:col-span-9 min-[768px]:col-span-8 max-[947px]:col-span-8 xl:col-span-10">
      {<ProductDetails productList={productList} isProductDetails={isProductDetails} />}
    </div>
  );
};

export default ProductSection;
