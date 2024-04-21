import { X } from 'lucide-react';

const ErrorMessage = ({message}:{message?:string}) => {
  return (
   <div className="text-red-400 pl-1 pt-1 text-xs font-medium flex items-center gap-1">
    <X size={17}/>
    <p>{message}</p>
   </div>
  )
}

export default ErrorMessage