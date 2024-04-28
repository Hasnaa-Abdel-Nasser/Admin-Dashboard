import { ReactNode } from "react";

interface IProps{
  setOpen: (value:boolean) => void
  children: ReactNode
}
const Modal = ({ setOpen, children }:IProps) => {

  return (
    <div onClick={()=>setOpen(false)} id="crud-modal" className=" overflow-y-auto overflow-x-hidden fixed top-0 left-0 bottom-0 flex z-50 justify-center items-center w-full md:inset-0 max-h-full bg-slate-900 bg-opacity-55 backdrop-blur-sm">
      <div className="form relative p-4 w-full max-w-md max-h-full">
        {children}
      </div>
    </div>
  );
};

export default Modal;
