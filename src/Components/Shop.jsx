import TopBar from "./TopBar";
import SortBar from "./SortBar";
import BottomBar from "./BottomBar";
import SideBarSection from "./SideBarSection";
import SortBarSection from "./SortBarSection";
import ProductSection from "./ProductSection";
import DesktopNavbar from "./DesktopNavbar";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { filterProduct } from "../utils/filterProduct";

const Shop = ({ isProductDetails, updateIsProductDetails, productList }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedProducts, updateSearchedProducts] = useState([]);

  const handleSearch = (search) => {
    const filtered=filterProduct(productList,searchParams);
    const category=searchParams.get('category')||'';
    setSearchParams({ search: search ,category:category});
    updateSearchedProducts(filtered)
  };
  useEffect(() => {
    const filtered=filterProduct(productList,searchParams);
    updateSearchedProducts(filtered);
  }, [searchParams, productList]);

  return (
    <div>
      <TopBar />
      <div className="flex flex-col gap-8 h-full">
        {isProductDetails && (
          <>
            <TopBar /> <SortBar />{" "}
          </>
        )}

        <DesktopNavbar handleSearch={handleSearch} />

        <BottomBar />
        {/* md and bigger */}
        <div className="grid md:grid-rows[55px,minmax(500px,1fr)] md:grid-cols-12 gap-4 container max-w-screen-2xl mx-auto md:px-4">
          <SideBarSection isProductDetails={isProductDetails} />
          <SortBarSection />
          <ProductSection
            searchedProducts={searchedProducts}
            isProductDetails={isProductDetails}
            updateIsProductDetails={updateIsProductDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
