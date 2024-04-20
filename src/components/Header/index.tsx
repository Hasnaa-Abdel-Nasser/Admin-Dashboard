import { Input } from "../ui/input";

const Header = () => {
  return (
    <div className="bg-[#2A2D3E] py-4 px-5 flex justify-between ml-[15%] fixed w-[85%] left-0 top-0">

        <Input className="bg-[#212332]" type="text" placeholder="Search"/>
      <button className='flex items-center gap-2 border-[1px] border-gray-600 w-fit rounded-md text-xs px-3 py-1'>
        <img src='/images/user.png' alt='admin' className='w-5'/>
        Hasnaa Abdel Nasser
      </button>
    </div>
  );
};

export default Header;
