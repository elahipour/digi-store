
const ProductProperties = () => {
    return (
        <div className="flex flex-col gap-y-1">

            <h3>
                ویژگی های کالا:
            </h3>

            <span className="flex flex-col">
            <span className="flex  gap-x-1">
                <span className="text-red-300 text-2xl">&#8226;</span>
                <span className="flex items-center">حافظه داخلی:</span>
            </span>
                <span className="mr-3">128 گیگابایت</span>
            </span>

            <span className="flex flex-col">
            <span className="flex  gap-x-1">
                <span className="text-red-300 text-2xl">&#8226;</span>
                <span className="flex items-center">بازه اندازه صفحه نمایش:</span>
            </span>
                <span className="mr-3">6 اینچ و بزرگتر</span>
            </span>
            <span className="flex flex-col">
            <span className="flex  gap-x-1">
                <span className="text-red-300 text-2xl">&#8226;</span>
                <span className="flex items-center">شبکه های ارتباطی:</span>
            </span>
                <span className="mr-3">2G 3G 4G 5G</span>
            </span>
        </div>
    );
};

export default ProductProperties;