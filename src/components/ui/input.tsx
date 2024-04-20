import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    className:string
    label: string
}
export const Input = ({className , label, ...rest}:IProps) => {

  return (
    <>
     <label htmlFor={rest.name} className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
     <input className={`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 block w-full p-2.5 ${className}`} {...rest}/>
    </>
  );
};
