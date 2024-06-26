import TopBar from "./TopBar";
import SortBar from "./SortBar";
import BottomBar from "./BottomBar";
import ProductDetails from "./ProductDetails";
import SideBarSection from "./SideBarSection";
import SortBarSection from "./SortBarSection";
import ProductSection from "./ProductSection";
import DesktopNavbar from "./DesktopNavbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";
const Shop = ({productList,isProductDetails,updateIsProductDetails}) => {
    return (
        <div>
            <TopBar/>
            <div className="flex flex-col gap-8 h-full">
                {
                    isProductDetails && <><TopBar /> <SortBar /> </>
                }

                <DesktopNavbar />

                <BottomBar />
                {/* md and bigger */}
                <div className="grid md:grid-rows[55px,minmax(500px,1fr)] md:grid-cols-12 gap-4 container max-w-screen-2xl mx-auto md:px-4">
                    <SideBarSection isProductDetails={isProductDetails} />
                    <SortBarSection />
                    <ProductSection productList={productList} isProductDetails={isProductDetails} updateIsProductDetails={updateIsProductDetails}/>
                </div>
            </div>

        


        </div>
    );
};

export default Shop;