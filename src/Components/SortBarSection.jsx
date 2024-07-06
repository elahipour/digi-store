import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const sortBtns=["محبوب ترین", "گران ترین", "ارزان ترین", "پرفروش ترین"]
const SortBarSection = () => {
    const [sortLink, updateSortLink] = useState('محبوب ترین');
const [searchParams,updateSearchParams]=useSearchParams();
const search = searchParams.get("search") || "";
const targetCategory = searchParams.get("category") || "";
const brandFilter = searchParams.get("brand") || "";
const price = searchParams.get("lessthan") || "";
    useEffect(()=>{
        updateSearchParams({
                search: search,
                category: targetCategory,
                lessthan: price,
                brand: brandFilter,
                sortby:sortLink
          });
    },[sortLink,searchParams])
    return (
        <div className=" hidden bg-white md:block  md:col-span-9 lg:col-span-9 min-[768px]:col-span-8 max-[947px]:col-span-8 xl:col-span-10   px-2 rounded-xl">
            <div className="flex gap-4 text-gray-400 flex items-center  mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-orange-500  bg-orange-200 rounded-md p-1" fill="none" viewBox="0 0 24 24" stroke="none" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                {
                    sortBtns.map((btns, index) => (
                        <button
                        key={index}
                            onClick={() => updateSortLink(btns)}
                            className={`font-bold py-3 relative ${sortLink === btns && ' text-gray-950 transition duration-1500 before:content-[" "] before:absolute before:left-[-6px] before:top-[8px] before:w-2 before:h-2 before:bg-orange-600 before:rounded-full'}`}>
                            {btns}
                        </button>
                    ))
                }

               
            </div>
        </div>
    );
};

export default SortBarSection;