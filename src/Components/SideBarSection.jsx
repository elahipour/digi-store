import { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
// import ALinkrrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link, useSearchParams } from "react-router-dom";
import Sellers from "./Sellers";
import BrandFilter from "./BrandFilter";
const SideBarSection = ({ isProductDetails }) => {
  const formRef=useRef();
  const [expanded, setExpanded] = useState("panel1");
  const [searchParams, updateSearchParams] = useSearchParams();
  const [formElems, setFormElems] = useState({
    priceFliterCheckbox1: false,
    priceFliterCheckbox2: false,
    priceFliterCheckbox3: false,
    priceFliterCheckbox4: false,
  });
  useEffect(() => {
    const search = searchParams.get("search") || "";
    const targetCategory = searchParams.get("category") || "";
    const brandFilter = searchParams.get("brand") || "";

    const isAllPriceChecked = Object.values(formElems).filter(
      (checked) => checked
    );
    if (!isAllPriceChecked.length) {
      updateSearchParams({
        search: search,
        category: targetCategory,
        brand:brandFilter
        
      });
    }
  }, [formElems]);

  function handleCheckChanges(e){
    const { name, checked, tagName, dataset } = e.target;
    setFormElems({ ...formElems, [name]: checked });
    const search = searchParams.get("search") || "";
    const targetCategory = searchParams.get("category") || "";
    const brandFilter = searchParams.get("brand") || "";
    let checkBoxes=formRef.current.querySelectorAll('input');
    checkBoxes=Array.from(checkBoxes)
    
    if (tagName !== "INPUT") return;
    if(e.target.checked){
      for(let item of checkBoxes){
        if(item.checked) {
          updateSearchParams({
            search: search,
            category: targetCategory,
            lessthan: item.dataset.price,
            brand: brandFilter,
          });
        }
      }
    }else{
      
      for(let item of checkBoxes){
        if(item.checked) {
          updateSearchParams({
            search: search,
            category: targetCategory,
            lessthan: item.dataset.price,
            brand: brandFilter,
          });
        }
      }
    }


  }

  function handleCategory(e) {
    e.preventDefault();
    const name = e.target.tagName;
    const search = searchParams.get("search") || "";
    const brandFilter = searchParams.get("brand") || "";
    const targetCategory = e.target.dataset.category;
    if (name === "A")
      updateSearchParams({ search: search,brand:brandFilter, category: targetCategory });
  }

  function handleChange(panel) {
    return (e, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  }
  return (
    <div className="h-full grid hidden md:block lg:block md:col-span-3 lg:col-span-3 min-[768px]:col-span-4 max-[947px]:col-span-3  xl:col-span-2 md:row-span-2">
      <div className="sticky top-[80px] max-h-[500px] overflow-x-hidden scrollbar scrollbar-thumb-gray-300 scrollbar-track-white scrollbar-w-2">
        <div className={`${!isProductDetails && "hidden"}`}>
          <Sellers sellersPosition={"sidebar"} />
        </div>

        <div className=" bg-white py-5 px-4 rounded-xl">
          <h3 className="text-orange-400 font-bold text-xl">دسته بندی</h3>
          <ul className="flex flex-col mt-4 gap-2">
            <li className="text-lg">
              <Link
                href="#"
                className="py-2 px-2 hover:bg-gray-200 flex items-start gap-4 rounded-lg"
                data-category="laptop"
                onClick={handleCategory}
              >
                <span className="w-6 h-6 bg-gray-200 rounded-full relative  pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute right-2 top-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </span>
                <span className=" pointer-events-none">لپ تاپ</span>
              </Link>
            </li>

            <li className="text-lg">
              <Link
                href="#"
                className="py-2 px-2 hover:bg-gray-200 flex items-start gap-4 rounded-lg"
                data-category="smartPhone"
                onClick={handleCategory}
              >
                <span className="w-6 h-6 bg-gray-200 rounded-full relative pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute right-2 top-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </span>
                <span className="pointer-events-none">موبایل هوشمند</span>
              </Link>
            </li>

            <li className="text-lg">
              <Link
                href="#"
                className="py-2 px-2 hover:bg-gray-200 flex items-start gap-4 rounded-lg"
                data-category="smartWatch"
                onClick={handleCategory}
              >
                <span className="w-6 h-6 bg-gray-200 rounded-full relative pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute right-2 top-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </span>
                <span className="pointer-events-none">ساعت هوشمند</span>
              </Link>
            </li>
          </ul>
          <h3 className="text-orange-400 font-bold text-xl mt-4">
            جستوجوی پیشرفته
          </h3>
          <ul className="flex flex-col mt-4 gap-2">
            {
              <li className="text-lg relative hover:bg-gray-100">
                <MuiAccordion
                  sx={{
                    boxShadow: "0 1px 4px 1px rgba(225,225,225,.7)",
                  }}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <MuiAccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <a className=" flex justify-between items-center rounded-lg w-full">
                      <span className="flex gap-4">
                        <span className="w-6 h-6 bg-gray-200 rounded-full relative ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute right-2 top-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                            />
                          </svg>
                        </span>
                        <span>قیمت</span>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </a>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails>
                    <Typography component={"span"}>
                      <form ref={formRef}>
                        <ul className="flex gap-1 flex-col py-2 divide-y-1 relative divide-gray-950">
                          <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
                            <input
                              id="price-1"
                              type="checkbox"
                              className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
                              name="priceFliterCheckbox1"
                              data-price={10000000}
                              checked={formElems["priceFliterCheckbox1"]}
                              onChange={handleCheckChanges}
                            />
                            <label
                              htmlFor="price-1"
                              className="cursor-pointer select-none"
                            >{`کمتر از 1 میلیون`}</label>
                          </li>
                          <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
                            <input
                              id="price-2"
                              type="checkbox"
                              className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
                              name="priceFliterCheckbox2"
                              data-price={20000000}
                              checked={formElems["priceFliterCheckbox2"]}
                              onChange={handleCheckChanges}
                            />
                            <label
                              htmlFor="price-2"
                              className="cursor-pointer select-none"
                            >{`کمتر از 20 میلیون`}</label>
                          </li>
                          <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
                            <input
                              id="price-3"
                              type="checkbox"
                              className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
                              name="priceFliterCheckbox3"
                              data-price={30000000}
                              checked={formElems["priceFliterCheckbox3"]}
                              onChange={handleCheckChanges}
                            />
                            <label
                              htmlFor="price-3"
                              className="cursor-pointer select-none"
                            >{`کمتر از 30 میلیون`}</label>
                          </li>
                          <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
                            <input
                              id="price-4"
                              type="checkbox"
                              className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
                              name="priceFliterCheckbox4"
                              data-price={40000000}
                              checked={formElems["priceFliterCheckbox4"]}
                              onChange={handleCheckChanges}
                            />
                            <label
                              htmlFor="price-4"
                              className="cursor-pointer select-none"
                            >{`کمتر از 40 میلیون`}</label>
                          </li>
                        </ul>
                      </form>
                    </Typography>
                  </MuiAccordionDetails>
                </MuiAccordion>
              </li>
            }
            {
              <li className="text-lg relative">
                <MuiAccordion
                  sx={{
                    boxShadow: "0 1px 4px 1px rgba(225,225,225,.7)",
                  }}
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <MuiAccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <a className=" flex justify-between items-center gap-4 rounded-lg w-full">
                      <span className="flex gap-4">
                        <span className="w-6 h-6 bg-gray-200 rounded-full relative ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute right-2 top-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                            />
                          </svg>
                        </span>
                        <span>برند</span>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </a>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails>
                    <Typography component={"span"}>
                     <BrandFilter/>
                    </Typography>
                  </MuiAccordionDetails>
                </MuiAccordion>
              </li>
            }

            {
              <li className="text-lg relative">
                <MuiAccordion
                  sx={{
                    boxShadow: "0 1px 4px 1px rgba(225,225,225,.7)",
                  }}
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <MuiAccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <a className=" flex justify-between items-center gap-4 rounded-lg w-full">
                      <span className="flex gap-4">
                        <span className="w-6 h-6 bg-gray-200 rounded-full relative ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 absolute right-2 top-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                            />
                          </svg>
                        </span>
                        <span>رنگ</span>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </a>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails>
                    <Typography component={"span"}>
                      <ul className="flex gap-1 flex-col py-2 divide-y-1 relative divide-gray-950">
                        <li className="flex items-center gap-2 rounded-md px-2 py-2  hover:bg-gray-100">
                          <input
                            id="color-1"
                            type="checkbox"
                            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
                          />
                          <label
                            htmlFor="color-1"
                            className="select-none  cursor-pointer"
                          >
                            خاکستری
                          </label>
                        </li>
                        <li className="flex items-center gap-2 rounded-md px-2 py-2  hover:bg-gray-100">
                          <input
                            id="color-2"
                            type="checkbox"
                            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
                          />
                          <label
                            htmlFor="color-2"
                            className="select-none  cursor-pointer"
                          >
                            سبز
                          </label>
                        </li>
                        <li className="flex items-center gap-2 rounded-md px-2 py-2  hover:bg-gray-100">
                          <input
                            id="color-3"
                            type="checkbox"
                            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
                          />
                          <label
                            htmlFor="color-3"
                            className="select-none  cursor-pointer"
                          >
                            زرد
                          </label>
                        </li>
                        <li className="flex items-center gap-2 rounded-md px-2 py-2  hover:bg-gray-100">
                          <input
                            id="color-4"
                            type="checkbox"
                            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
                          />
                          <label
                            htmlFor="color-4"
                            className="select-none  cursor-pointer"
                          >
                            آبی
                          </label>
                        </li>
                        <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
                          <input
                            id="color-5"
                            type="checkbox"
                            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100  cursor-pointer"
                          />
                          <label
                            htmlFor="color-5"
                            className="select-none  cursor-pointer"
                          >
                            سفید
                          </label>
                        </li>
                      </ul>
                    </Typography>
                  </MuiAccordionDetails>
                </MuiAccordion>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarSection;
