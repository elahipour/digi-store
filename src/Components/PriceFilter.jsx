
function PriceFilter({formRef,formElems,handleCheckChanges}) {
  return (
    <form ref={formRef}>
                        <ul className="flex gap-1 flex-col py-2 divide-y-1 relative divide-gray-950">
                          <li className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-gray-100">
                            <input
                              id="price-1"
                              type="checkbox"
                              className="w-4 h-4 text-orange-500 rounded border-none focus:ring-0 focus:ring-white focus:outline-none bg-gray-100 cursor-pointer"
                              name="priceFilter1"
                              data-price={10000000}
                              checked={formElems["priceFilter1"]}
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
                              name="priceFilter2"
                              data-price={20000000}
                              checked={formElems["priceFilter2"]}
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
                              name="priceFilter3"
                              data-price={30000000}
                              checked={formElems["priceFilter3"]}
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
                              name="priceFilter4"
                              data-price={40000000}
                              checked={formElems["priceFilter4"]}
                              onChange={handleCheckChanges}
                            />
                            <label
                              htmlFor="price-4"
                              className="cursor-pointer select-none"
                            >{`کمتر از 40 میلیون`}</label>
                          </li>
                        </ul>
                      </form>  )
}

export default PriceFilter