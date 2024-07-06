import { Link, useLocation } from 'react-router-dom';

const BreadCrump = ({currentProduct=''}) => {

  function shortened(string){
    if(string.length > 15){
      return string.substring(0,15) + '...';
    }
    return string;
  }

console.log(currentProduct)
  const location = useLocation();
  let currentLocation = '';
  const crump = location.pathname.split('/').filter(crump=>crump!==' ').map((crump) => {
    currentLocation += crump+ '/';
    if (+crump === currentProduct.productId) crump = 'جزییات  ' + shortened(currentProduct.product);
    if (crump === 'Cart') crump = 'سبد خرید';
    if (crump === 'Product_details' || crump === '') return;
    return (
      <div key={currentLocation}>
        <Link to={currentLocation}>
          <span className={'bg-yellow-500 py-[3px] px-[2px] rounded-tr-none rounded-br-none rounded-sm text-white'}>{crump}</span>
        </Link>
      </div>
    );
  });
  return (
    <div className="mr-0 w-full mt-8 px-4">
      <div className="flex items-center ">
        <Link to="/">
          <span className={'bg-yellow-600 py-[3px] px-[2px] rounded-bl-none rounded-tl-none rounded-sm text-white'}>خانه</span>
        </Link>
        
        {crump}
      </div>
    </div>
  );
};

export default BreadCrump;
