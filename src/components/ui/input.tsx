import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    className?:string
    label?: string
}
export const Input = forwardRef(({className , label, ...rest}:IProps , ref:Ref<HTMLInputElement>) => {

  return (
    <>
    {
      label &&  <label className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
    }
     <input 
        ref={ref} 
        {...rest}
        className={`border outline-none text-sm rounded-lg block w-full p-2.5 ${className}`}/>
    </>
  );
},);
