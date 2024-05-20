import { IoIosEye, IoIosEyeOff } from "react-icons/io";

interface IProps{
    hide:boolean
    setHide:(value:boolean)=>void
}

function Eye({hide , setHide}:IProps) {
  return (
    <div
      onClick={() => setHide(!hide)}
      className="absolute bottom-3 right-3 text-gray-500 cursor-pointer"
    >
      {hide ? <IoIosEye /> : <IoIosEyeOff />}
    </div>
  );
}

export default Eye;
