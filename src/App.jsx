import Cart from "./Components/Cart";
import Shop from "./Components/Shop";
import Favorites from "./Components/Favorites"
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-gray-100 bg-fixed w-full m-auto h-full">
      <Routes>
        <Route path="/Cart" Component={Cart} />
        <Route path="/Favorites" Component={Favorites} />
        <Route path="/" Component={Shop} />
      </Routes>
    </div>
  );
};

export default App;
