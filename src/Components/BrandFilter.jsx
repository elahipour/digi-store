import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
const BrandFilter = () => {
  const brandFormRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [formElems, updateFormElems] = useState({
    fujitsu: true,
    acer: true,
    sony: true,
    asus: true,
    MSI: true,
    HP: true,
    lenovo: true,
  });
  useEffect(() => {
    const selectedBrand = [];
    for (const key in formElems) {
      if (formElems[key]) {
        selectedBrand.push(key);
      }
    }
    const search = searchParams.get("search") || "";
    const targetCategory = searchParams.get("category") || "";
    const priceFilter = searchParams.get("lessthan") || "";
    setSearchParams({
      search: search,
      category: targetCategory,
      lessthan: priceFilter,
      brand: selectedBrand.join("_"),
    });
  }, [formElems,searchParams]);

  const handleCheckChanges = (e) => {
    updateFormElems({ ...formElems, [e.target.name]: e.target.checked });
  };
  return (
    <form ref={brandFormRef}>
      <ul className="flex gap-1 flex-col py-2 divide-y-1 relative divide-gray-950">
        <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
          <input
            name="fujitsu"
            id="brand-1"
            type="checkbox"
            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
            onChange={handleCheckChanges}
            data-brand="fujitsu"
            checked={formElems["fujitsu"]}
          />
          <label htmlFor="brand-1" className="cursor-pointer select-none">
            فوجیتسو
          </label>
        </li>
        <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
          <input
            name="acer"
            id="brand-2"
            type="checkbox"
            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
            onChange={handleCheckChanges}
            data-brand="acer"
            checked={formElems["acer"]}
          />
          <label htmlFor="brand-2" className="cursor-pointer select-none">
            ایسر
          </label>
        </li>
        <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
          <input
            name="sony"
            id="brand-3"
            type="checkbox"
            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
            onChange={handleCheckChanges}
            data-brand="sony"
            checked={formElems["sony"]}
          />
          <label htmlFor="brand-3" className="cursor-pointer select-none">
            سونی
          </label>
        </li>
        <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
          <input
            name="asus"
            id="brand-4"
            type="checkbox"
            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
            onChange={handleCheckChanges}
            data-brand="asus"
            checked={formElems["asus"]}
          />
          <label htmlFor="brand-4" className="cursor-pointer select-none">
            ایسوس
          </label>
        </li>
        <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
          <input
            name="lenovo"
            id="brand-5"
            type="checkbox"
            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
            onChange={handleCheckChanges}
            data-brand="lenovo"
            checked={formElems["lenovo"]}
          />
          <label htmlFor="brand-5" className="cursor-pointer select-none">
            لنوو
          </label>
        </li>
        <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
          <input
            name="HP"
            id="brand-6"
            type="checkbox"
            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
            onChange={handleCheckChanges}
            data-brand="HP"
            checked={formElems["HP"]}
          />
          <label htmlFor="brand-6" className="cursor-pointer select-none">
        اچ پی
          </label>
        </li>
        <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
          <input
            name="MSI"
            id="brand-7"
            type="checkbox"
            className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
            onChange={handleCheckChanges}
            data-brand="MSI"
            checked={formElems["MSI"]}
          />
          <label htmlFor="brand-7" className="cursor-pointer select-none">
MSI          </label>
        </li>
      </ul>
    </form>
  );
};

export default BrandFilter;
