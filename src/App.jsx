import Cart from "./Components/Cart";
import Shop from "./Components/Shop";
import Favorites from "./Components/Favorites";
import { Routes, Route, useSearchParams } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Spinner from "./Components/Spinner";

const App = () => {
  const productList = useSelector((state) => state.product);
  useEffect(() => {
    setProductsToLocalStorage();
  }, []);
  function setProductsToLocalStorage() {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) return;
    localStorage.setItem("products", JSON.stringify(productList));
  }

  return (
    <div className="bg-gray-100 bg-fixed w-full m-auto h-full">
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route
          path="/Product_details/:id"
          element={
            <ProductDetails
              productList={productList}
              isProductDetails={ProductDetails}
            />
          }
        />
        <Route path="/" element={<Shop productList={productList}/>} />
      </Routes>
    </div>
  );
};

export default App;
