import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import shoppingCartImg from '../assets/Images/shopping-bag-icon.svg';
import favoriteImg from '../assets/Images/heart-lover-svgrepo-com.svg'
import navbarLogo from '../assets/Images/logo.png'
import { useState } from "react";
const DesktopNavbar = ({handleSearch}) => {
  const cart = useSelector((state) => state.cart.cartItems);
  const favorites=useSelector(state=>state.product);
  const [searchInput,updateSearchInput]=useState('');
  return (
    <nav className="sticky hidden md:block rounded-md md:rounded-none bg-white md:mx-0 top-0 mt-4 md:mt-0 items-end shadow-lg py-5 z-10">
      <div className="container max-w-screen-2xl flex justify-between gap-x-4 mx-auto">
        <div className="flex order-2 gap-2 items-center relative w-1/3  [@media(max-width:920px)]:w-1.5/4 py-2">
          <svg
          onClick={()=>handleSearch(searchInput)}
            className=" absolute right-[8px] w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="orange"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="w-full ml-4 pr-9 pl-4 border-none rounded-lg focus:outline-none ring ring-1 py-2 ring-orange-200 focus:ring-2 focus:ring-orange-300"
            type="text"
            placeholder="جستوجو"
            onChange={(e)=>updateSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
        <ul className="flex order-1 flex-col md:flex-row [@media(min-width:920px)]:gap-2 [@media(max-width:920px)]:w-full items-center space-between w-1/2 md:w-fit ">
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">
              <img src={navbarLogo} alt="navbarLogo" className={"min-w-7 h-7"}/>
            </a>
          </li>
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-200 rounded">
              فروشگاه
            </Link>
          </li>
          {/* <li>
            <Link
              to="laptop"
              className="block py-2 px-4 hover:bg-gray-200 rounded"
            >
              لپ تاپ
            </Link>
          </li>
          <li>
            <Link
              to="smart_watch"
              className="block py-2 px-4 hover:bg-gray-200 rounded"
            >
              ساعت هوشمند
            </Link>
          </li>
          <li>
            <Link
              to="mobile_phone"
              className="block py-2 px-4 hover:bg-gray-200 rounded"
            >
              تلفن همراه
            </Link>
          </li> */}
          {
           cart.length ? <li>
              <Link
                to="/cart"
                className="block py-2 px-4 hover:bg-gray-200 rounded"
              >
                <span className='flex flex-row-reverse gap-2'><i className="not-italic">سبد خرید</i><img src={shoppingCartImg} alt="ShoppingCart" /></span>
              </Link>
            </li> :null
          }
           {
           favorites.filter(product=>product.like).length ? 
           <li>
              <Link
                to="/Favorites"
                className="block py-2 px-4 hover:bg-gray-200 rounded"
              >
                <span className='flex flex-row-reverse gap-2'><i className="not-italic">علاقه مندی ها</i><img src={favoriteImg} alt="favorites" /></span>
              </Link>
            </li> 
            :null
          }
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
