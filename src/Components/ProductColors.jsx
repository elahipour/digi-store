import { useState } from "react";
const ProductColors = () => {
    const [productColor, updateProductColor] = useState(0);
    const [colors, UpdateColors] = useState([
        {
            id: new Date().getTime(),
            color: "bg-gray-200",
        
        },
        {
            id: new Date().getTime(),
            color: "bg-green-200",
         
        },
        {
            id: new Date().getTime(),
            color: "bg-blue-200",
           
        },
        {
            id: new Date().getTime(),
            color: "bg-yellow-200",
      
        },
        {
            id: new Date().getTime(),
            color: "bg-white",
        
        },

    ])
    return (
        <div>
        <ul className="w-full h-full flex">
            {
                colors.map((item, index) => (
                    <li key={index} onClick={() => updateProductColor(index + 1)} className={`w-5 h-5 ${item.color} border border-red-100 rounded-full relative`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="lightgreen" className={`w-4 h-4  ${productColor === index + 1 ? 'block ring-2 ring-red-200 rounded-full ring-offset-sm' : 'hidden'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </li>
                ))
            }
        </ul>
        </div>
    );
};

export default ProductColors;