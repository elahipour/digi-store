import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
const BrandFilter = () => {
  const brandFormRef = useRef();
  const [searchParams, updateSearchParams] = useSearchParams();
  const resetForm = {
    fujitsu: false,
    acer: false,
    sony:false,
    asus: false,
    MSI: false,
    HP: false,
    lenovo: false,
  };
  const [formElems, updateFormElems] = useState({
    fujitsu: isCheckedBrand('fujitsu')||false,
    acer: isCheckedBrand('acer')||false,
    sony: isCheckedBrand('sony')||false,
    asus: isCheckedBrand('asus')||false,
    MSI: isCheckedBrand('MSI')||false,
    HP: isCheckedBrand('HP')||false,
    lenovo: isCheckedBrand('lenovo')||false,
  });

  function isCheckedBrand(currentBrand){
    const brandParams=searchParams.get('brand')||'';
    const brands=brandParams.split('_');
    for (const brand of brands) {
      if(brand===currentBrand) return true
    
    }

  }

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
    const isAllBrandChecked = Object.values(formElems).filter(
      (checked) => !checked
    );
    if (!isAllBrandChecked.length) {
      updateFormElems({ ...resetForm });
    }
    updateSearchParams({
      search: search,
      category: targetCategory,
      lessthan: priceFilter,
      brand: selectedBrand.join("_"),
    });
  }, [formElems, searchParams]);

  const handleCheckChanges = (e) => {
    updateFormElems({ ...formElems, [e.target.name]: e.target.checked });
  };
  return (
    <form ref={brandFormRef}>
      <ul className="flex gap-1 flex-col py-2 divide-y-1 relative divide-gray-950">
        {
         Object.keys(formElems).map(brand=>{
           return <li key={brand} className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
            <input
              name={brand}
              id={brand}
              type="checkbox"
              className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
              onChange={handleCheckChanges}
              data-brand={brand}
              checked={formElems[brand]}
            />
            <label htmlFor={brand} className="cursor-pointer select-none">
              {brand}
            </label>
          </li>
         })
        }

      </ul>
    </form>
  );
};

export default BrandFilter;
