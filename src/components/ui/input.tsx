import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    className:string
}
export const Input = ({className , ...rest}:IProps) => {

  return (
      <input
        {...rest}
        className={`outline-none text-xs rounded-md w-80 h-7 px-3 ${className}`}
      />
  );
};
