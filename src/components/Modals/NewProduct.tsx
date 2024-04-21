import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../ui/input"
import { yupResolver } from "@hookform/resolvers/yup"
import { IErrorResponse, IFormInput } from "../../interfaces"
import { add } from "../../api/products"
import { AxiosError } from "axios"
import useGetData from "../../hooks/useGetData"
import toast from "react-hot-toast"
import { useState } from "react"
import Spinner from "../ui/Spinner"
import ErrorMessage from "../ui/ErrorMessage"
import { productSchema } from "../../validation"

interface IProps{
  setOpen: (value: boolean) => void
}

const NewProductModal = ({setOpen}:IProps) => {

  const[submitLoad , setSubmitLoad] = useState(false)
  const {isLoading , data:categories} = useGetData({
    queryKey:['categories'],
    url:"products/categories"
  });

  const { register, handleSubmit , formState:{errors}} = useForm<IFormInput>(({resolver: yupResolver(productSchema)}));
  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    setSubmitLoad(true);
    try {
      const response = await add(data);
      if(response && response.status === 200){
        toast.success('Add Product Successfully!');
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
      <div id="crud-modal" className=" overflow-y-auto overflow-x-hidden fixed top-0 left-0 bottom-0 flex z-50 justify-center items-center w-full md:inset-0 max-h-full bg-slate-900 bg-opacity-55 backdrop-blur-sm">
          <div className="form relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow ">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                          Create New Product
                      </h3>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5 text-start">
                      <div className="grid gap-2 mb-4 grid-cols-2">
                          <div className="col-span-2">
                            <Input {...register("title")} label="Title" placeholder="Type product title"/>
                            {errors&& errors.title && <ErrorMessage message={errors.title.message}/>}
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <Input {...register("price")} label="Price" type="number" step={0.50} defaultValue={1}/>
                            {errors&& errors.price && <ErrorMessage message={errors.price.message}/>}
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                              <label className="block mb-2 text-sm font-medium text-gray-900 ">Category</label>
                              <select {...register("category")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 block w-full p-2.5 primary-500 ">
                              <option value={""}>Select Category</option>
                                {
                                  isLoading
                                  ? null
                                  :categories.map((value:string)=> <option value={value} key={value}>{value}</option>)
                                }
                              </select>
                              {errors&& errors.category && <ErrorMessage message={errors.category.message}/>}
                          </div>
                          <div className="col-span-2">
                            <Input {...register("image")} label="Image"placeholder="Type image URL"/>
                            {errors&& errors.image && <ErrorMessage message={errors.image.message}/>}
                          </div>
                          <div className="col-span-2">
                              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Product Description</label>
                              <textarea {...register("description")} rows={4} className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-300 focus:border-blue-500 rk:text-white " placeholder="Write product description here"></textarea>                    
                              {errors&& errors.description && <ErrorMessage message={errors.description.message}/>}
                          </div>
                      </div>
                      <div className={`mr-3 text-white inline-flex items-center bg-[#44A5FF] hover:bg-[#4492ff] focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                        {submitLoad && <Spinner/>}
                        <input type="submit"/>
                      </div>
                      <button onClick={()=>setOpen(false)} className="text-white inline-flex items-center bg-[#c4d4e2] hover:bg-[#8c949f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                          Cancel
                      </button>
                  </form>
              </div>
          </div>
      </div> 
    </>
  )
}

export default NewProductModal