import ProductDetails from "./ProductDetails";
import ProductItem from "./ProductItem";
import img1 from "../assets/Images/thumb1.webp";
import img2 from "../assets/Images/thumb2.jpg";
import img3 from "../assets/Images/thumb3.webp";
import img4 from "../assets/Images/thumb4.webp";
import img5 from "../assets/Images/thumb5.webp";
import img6 from "../assets/Images/thumb6.webp";
import img7 from "../assets/Images/thumb7.webp";
import img8 from "../assets/Images/thumb8.webp";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];
const ProductSection = ({ isProductDetails }) => {
  return !isProductDetails ? (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:col-span-9 min-[768px]:col-span-8 lg:col-span-9 xl:col-span-10 gap-2 mt-4 mb-20 px-4 md:px-0 md:mt-0  ">
      {Array(8)
        .fill(null)
        .map((item, index) => {
          return <ProductItem key={index} thumbImg={images[index]} />;
        })}
    </div>
  ) : (
    <div className="grid  md:col-span-9 lg:col-span-9 min-[768px]:col-span-8 max-[947px]:col-span-8 xl:col-span-10">
      {<ProductDetails isProductDetails={isProductDetails} />}
    </div>
  );
};

export default ProductSection;
