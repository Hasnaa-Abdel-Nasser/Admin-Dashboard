import { LucideArrowLeft, Boxes, LayoutGrid, ShoppingBasket, LucideArrowRight , LogOut} from "lucide-react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { logout } from "../../utils";
interface IProps{
  open: boolean
  setOpen: (value: boolean) => void
}
const Sidebar = ({ open, setOpen } : IProps) => {
  return (
    <div className={`bg-[#2A2D3E] h-screen fixed z-20 top-0 left-0 ease-out duration-700 w-[${open?'200px':'70px'}]`}>
      {
        open ? <img src="/images/logo.png" alt="logo" className="w-[170px] m-auto" />
        : <img src="/images/icon.png" alt="logo" className="w-[65px] mx-auto mt-2" />
      }
      <ul className='py-5'>
          <NavLink to="/" className="buttons">
            <LayoutGrid size={30} /> 
            {open ? "Dashboard" : ""}
          </NavLink>
          <li>
            <NavLink to="/products" className="buttons">
              <ShoppingBasket size={30} /> 
              {open ? "Products" : ""}
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className="buttons">
              <Boxes size={30} /> 
              {open ? "Categories" : ""}
            </NavLink>
          </li>
          <li>
            <button className="buttons" onClick={()=>logout()}>
              <LogOut size={30} strokeWidth={2.5}/> 
              {open ? "Logout" : ""}
            </button>
          </li>
      </ul>
      <div className="relative px-6 mt-10">
        <hr />
        {
          open
          ?<button onClick={()=>setOpen(false)} className="absolute right-[-20px] top-[-20px] rounded-full flex justify-center items-center bg-[#2A2D3E] w-10 h-10"><LucideArrowLeft size={20} strokeWidth={1.1}/></button>
          :<button onClick={()=>setOpen(true)} className="absolute right-[-20px] top-[-20px] rounded-full flex justify-center items-center bg-[#2A2D3E] w-10 h-10"><LucideArrowRight size={20} strokeWidth={1.1}/></button>
        }
      </div>
    </div>
  );
};

export default Sidebar;
