import logo from '../assets/Images/logo.png';
const TopBar = ({ isProductDetails }) => {
    return (
        <div className="flex md:hidden justify-between items-center p-8 rounded-lg rounded-t-none mx-4 sticky z-50 top-0 shadow-sm bg-gray-50  shadow-zinc-300">
            <div className="order-3 w-8">
                <img className='w-[100px]' src={logo} alt="logo" />
            </div>
            <h1 className="[@media(max-width:400px)]:text-xl font-bold order-2 text-2xl">موبایل ملت</h1>
            <div className="flex order-1 justify-center rounded-[50%] bg-white items-center p-1 w-8 h-8 shadow-zinc-300 shadow-md">
                {
                    isProductDetails ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                }
            </div>
        </div>
    );
};

export default TopBar;