
const SortBar = () => {
    return (
        <div className="flex md:hidden justify-between items-center px-4 relative top-8 gap-2">
            <div className="w-1/2 bg-white shadow-sm shadow-white flex items-center justify-start gap-2 py-3 px-2 rounded-sm">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                <span className="font-bold text-sm">محبوب ترین محصول</span>
            </div>
            <div className="w-1/2 bg-white shadow-sm shadow-white flex items-center justify-start gap-2 py-3 px-2 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#777" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
                <span className="font-bold text-sm">فیلتر:برند اپل</span>
            </div>
        </div>
    );
};

export default SortBar;