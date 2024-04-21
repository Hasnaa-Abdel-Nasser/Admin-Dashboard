import { useState } from "react";
import { IProduct } from "../../interfaces";
import Select from "../ui/Select";
import { Input } from "../ui/input";

interface IProps {
  setOpen: (value: boolean) => void;
  product: IProduct;
}
const EditProductModal = ({ setOpen, product }: IProps) => {
    const [productValues , ] = useState(product);
  return (
    <>
      <div
        id="crud-modal"
        className="overflow-y-auto overflow-x-hidden fixed top-0 left-0 bottom-0 flex z-50 justify-center items-center w-full md:inset-0 max-h-full bg-slate-900 bg-opacity-55 backdrop-blur-sm"
      >
        <div className="form relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Edit Product
              </h3>
            </div>
            <form className="p-4 md:p-5 text-start">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <Input label="Title" className='bg-gray-50' type="text" name="title" id="title" value={productValues.title} placeholder="Type product title"/>
                </div>
                <div className="col-span-2 sm:col-span-1">
                <Input label="Price" className='bg-gray-50' type="text" name="price" id="price" value={productValues.price} placeholder="$2999"/>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Select title={"Category"} defaultValue={productValues.category} />
                </div>
                <div className="col-span-2">
                <Input label="Image" className='bg-gray-50' type="text" name="image" id="image" value={productValues.price} placeholder="Type image URL"/>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    maxLength={200}
                    value={productValues.description}
                    className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-300 focus:border-blue-500 rk:text-white "
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="mr-3 text-white inline-flex items-center bg-[#44A5FF] hover:bg-[#4492ff] focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Update
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-white inline-flex items-center bg-[#c4d4e2] hover:bg-[#8c949f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProductModal;
