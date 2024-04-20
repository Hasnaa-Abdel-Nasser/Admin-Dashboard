
const Header = () => {
  return (
    <div className="z-10 bg-[#2A2D3E] py-4 px-5 flex justify-between fixed w-full left-0 top-0">
      <input className='bg-[#212332] outline-none text-xs rounded-md w-80 h-7 px-3 ml-[200px]' type="text" placeholder="Search"/>
      <button className='flex items-center gap-2 border-[1px] border-gray-600 w-fit rounded-md text-xs px-3 py-1'>
        <img src='/images/user.png' alt='admin' className='w-5'/>
        Hasnaa Abdel Nasser
      </button>
    </div>
  );
};

export default Header;
