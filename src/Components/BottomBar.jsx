import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const BottomBar = () => {
    const [selectedItem,updateSelectedItem]=useState(1);
const location=useLocation();
    useEffect(()=>{
        if(location.pathname==='/Cart') updateSelectedItem(3)
        if(location.pathname==='/Favorites') updateSelectedItem(4)
    },[location])
    return (
        <div className='fixed bottom-0 left-0 right-0 rounded-tl-md rounded-tr-md bg-gray-300 z-20 md:hidden bg-gray-200/80 backdrop-blur-sm shadow-[0_-2px_8px_0_rgba(195,195,195,.5)]'>
            <nav className=''>
                <ul className=" flex justify-between px-4 py-1">
                 
                    <li className={`hover:bg-gray-100  ${selectedItem===1 && 'bg-gray-100'} rounded-md transition-all duration-1000 `}>
                        <Link to={'/'} onClick={()=>updateSelectedItem(1)} className='md:p-4 w-full p-2  font-bold flex items-center gap-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                    <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
                                </svg>
                            </span>
                            <span className={`${selectedItem!==1 && 'hidden'} text-lg [@media(min-width:490px)]:text-xl`}>فروشگاه</span>
                        </Link>
                    </li>

                    <li className={`hover:bg-gray-100  ${selectedItem===2 && 'bg-gray-100'} rounded-md transition-all duration-1000 `}>
                        <Link to={"/Categories"} onClick={()=>updateSelectedItem(2)} className='md:p-4 p-2 block font-bold flex items-center gap-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[30px] h-[30px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                                </svg>
                            </span>
                            <span className={`${selectedItem!==2 && 'hidden'} text-lg [@media(min-width:490px)]:text-xl`}>دسته بندی</span>
                        </Link>
                    </li>
                    <li className={`hover:bg-gray-100  ${selectedItem===3 && 'bg-gray-100'} rounded-md transition-all duration-1000 `}>
                        <Link to={"/Cart"} onClick={(e)=>{updateSelectedItem(3)}} className='md:p-4 p-2 font-bold flex items-center gap-2'>
                            <span>
                                <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-208 0H400v-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16z" />
                                </svg>

                            </span>
                            <span className={`${selectedItem!==3 && 'hidden'} text-lg [@media(min-width:490px)]:text-xl`}>سبد خرید</span>
                        </Link>
                    </li>
                    <li className={`hover:bg-gray-100  ${selectedItem===4 && 'bg-gray-100'} rounded-md transition-all duration-1000 `}>
                        <Link to={"/Favorites"} onClick={()=>updateSelectedItem(4)} className='md:p-4 p-2 font-bold flex items-center gap-2'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-[30px] h-[30px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>

                            </span>
                            <span className={`${selectedItem!==4 && 'hidden'} text-lg [@media(min-width:490px)]:text-xl`}>علاقه مندی ها</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BottomBar;