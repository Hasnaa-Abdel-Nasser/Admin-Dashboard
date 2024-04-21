import { InputHTMLAttributes, Ref, forwardRef } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    className?:string
    label: string
}
export const Input = forwardRef(({className , label, ...rest}:IProps , ref:Ref<HTMLInputElement>) => {

  return (
    <>
     <label className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
     <input 
        ref={ref} 
        {...rest}
        className={`border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-300 block w-full p-2.5 ${className}`}/>
    </>
  );
},);
