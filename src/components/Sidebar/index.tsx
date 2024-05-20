import { Boxes, LayoutGrid, ShoppingBasket } from "lucide-react";
import "./index.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="bg-[#2A2D3E] w-[15%] h-[100vh] fixed top-0 left-0">
      <img src="/images/logo.png" alt="logo" className="w-[200px]" />
      <ul className='py-5'>
        <li>
          <NavLink to="/" className="buttons">
            <LayoutGrid size={30} /> Dashboard
          </NavLink>
          <li>
            <NavLink to="/products" className="buttons">
              <ShoppingBasket size={30} /> Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className="buttons">
              <Boxes size={30} /> Categories
            </NavLink>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
