import { IoWarningOutline } from "react-icons/io5";
import { deleteProduct } from "../../api/products";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../interfaces";
import { useState } from "react";
import Spinner from "../ui/Spinner";

interface IProps{
    setOpen: (value: boolean) => void
    id:number
}
const DeleteProduct = ({setOpen , id}:IProps) => {
  const[submitLoad , setSubmitLoad] = useState(false);

  const handleDelete = async()=>{
    setSubmitLoad(true);
    try {
      const status = await deleteProduct(id);
      if(status === 200){
        toast.success('Delete Product Successfully!');
        setOpen(false);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      console.error(errorObj.response?.data.message);
    } finally{
      setSubmitLoad(false);
    }
  }

  return (
    <>
         <div id="crud-modal" className="text-black overflow-y-auto overflow-x-hidden fixed top-0 left-0 bottom-0 flex z-50 justify-center items-center w-full md:inset-0 max-h-full bg-slate-900 bg-opacity-55 backdrop-blur-sm">
          <div className="form relative p-4 w-full max-w-md max-h-full">
              <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center gap-4">
                    <div className="w-14 h-14 bg-red-200 flex justify-center items-center rounded-full">
                    <IoWarningOutline color={"red"} size={"30px"}/>
                    </div>
                    <h5 className="text-xl">Are you sure?</h5>
                    <p className="text-sm text-slate-800">This action will delete this product.<br/>You won't be able to revent this!</p>
                      <div>
                        <button onClick={()=>handleDelete()} className="mr-3 text-white inline-flex items-center bg-[#ff4d44] hover:bg-[#d84e4e] focus:outline-nonefont-medium rounded-lg text-sm px-10 py-2.5 text-center">
                          {submitLoad && <Spinner/>}Yes,delete it
                        </button>
                        <button onClick={()=>setOpen(false)} className="text-white inline-flex items-center bg-[#c4d4e2] hover:bg-[#8c949f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Cancel
                        </button>
                      </div>
              </div>
          </div>
      </div> 
    </>
  )
}

export default DeleteProduct