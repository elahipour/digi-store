import { useState } from 'react';
import { Link } from 'react-router-dom';
const DesktopNavbar = () => {
    const [mobileMenuVisibility, updateMobileMenuVisibility] = useState(false);
    return (

        <nav className="sticky hidden md:block rounded-md md:rounded-none bg-white md:mx-0 top-0 mt-4 md:mt-0 items-end shadow-lg py-2 z-10">
            <div className='container max-w-screen-2xl flex justify-between gap-x-4 mx-auto'>
                <div className="flex order-2 gap-2 items-center relative w-1/3 py-2">
                    <svg className=" absolute right-[8px] w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className="w-[100%] ml-4 pr-10 border-none rounded-lg focus:outline-none ring ring-1 ring-orange-200 focus:ring-2 focus:ring-orange-300" type="text" placeholder='جستوجو' />
                </div>
                <ul className="flex order-1 flex-col md:flex-row gap-4 items-center space-between w-1/2 md:w-fit ">
                    <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">LOGO</a>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 px-4 hover:bg-gray-200 rounded">خانه</Link>
                    </li>
                    <li>
                        <Link to="laptop" className="block py-2 px-4 hover:bg-gray-200 rounded">لپ تاپ</Link>
                    </li>
                    <li>
                        <Link to="smart_watch" className="block py-2 px-4 hover:bg-gray-200 rounded">ساعت هوشمند</Link>
                    </li>
                    <li>
                        <Link to="mobile_phone" className="block py-2 px-4 hover:bg-gray-200 rounded">تلفن همراه</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default DesktopNavbar;