import { ReactNode } from "react";

interface IProps{
  setOpen: (value:boolean) => void
  children: ReactNode
}
const Modal = ({ setOpen, children }:IProps) => {

  return (
    <>
      <div onClick={()=>setOpen(false)}  className="fixed top-0 left-0 bottom-0 z-40 w-full max-h-full bg-slate-900 bg-opacity-55 backdrop-blur-sm">
      </div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-form w-full max-w-lg">
          {children}
      </div>
    </>
  );
};

export default Modal;
