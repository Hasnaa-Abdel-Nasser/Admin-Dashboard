import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Header = ({className}:{className:string}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue , setSearchValue] = useState("");
  const path = window.location.pathname.split("/");
  const currentPage = path[path.length - 1];
  useEffect(() => {
    const search = searchParams.get('search') || '';
    setSearchValue(search);
  }, [searchParams]);

  const handleSearchInput = (value:string)=>{
    setSearchValue(value);
    if (value.trim() === '') {
      searchParams.delete('search');
    } else {
      searchParams.set('search', value);
    }
    setSearchParams(searchParams);
  }
  return (
    <div className="z-10 bg-[#2A2D3E] py-4 px-5 flex justify-between fixed w-full left-0 top-0">
      {
        currentPage !== "categories"?
        <input 
        value={searchValue}
        onChange={(event)=>handleSearchInput(event.target.value)} 
        className={`bg-[#212332] outline-none text-xs rounded-md w-80 h-7 px-3 ${className}`} type="text" placeholder="Search Here"/>
      :<span className="py-3"></span>
      }
      
    </div>
  );
};

export default Header;
