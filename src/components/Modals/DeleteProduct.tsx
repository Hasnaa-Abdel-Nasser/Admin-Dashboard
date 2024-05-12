import { IoWarningOutline } from "react-icons/io5";
import { deleteProduct } from "../../api/products";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../interfaces";
import { useState } from "react";
import Modal from ".";

interface IProps {
  setOpen: (value: boolean) => void;
  id: number;
}
const DeleteProduct = ({ setOpen, id }: IProps) => {
  const [, setSubmitLoad] = useState(false);

  const handleDelete = async () => {
    setSubmitLoad(true);
    try {
      const status = await deleteProduct(id);
      if (status === 200) {
        toast.success("Delete Product Successfully!");
        setOpen(false);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      console.error(errorObj.response?.data.message);
    } finally {
      setSubmitLoad(false);
    }
  };

  return (
    <>
      <Modal setOpen={setOpen}>
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center gap-4 m-8">
          <div className="w-14 h-14 bg-red-200 flex justify-center items-center rounded-full">
            <IoWarningOutline color={"red"} size={"30px"} />
          </div>
          <h5 className="text-xl text-slate-800">Are you sure?</h5>
          <p className="text-sm text-slate-800">
            This action will delete this product.
            <br />
            You won't be able to revent this!
          </p>
          <div>
            <button
              onClick={() => handleDelete()}
              className="mr-3 text-white inline-flex items-center bg-[#ff4d44] hover:bg-[#d84e4e] focus:outline-nonefont-medium rounded-lg text-sm px-10 py-2.5 text-center"
            >
            Yes,delete it
            </button>
            <button
              onClick={() => setOpen(false)}
              className="text-white inline-flex items-center bg-[#c4d4e2] hover:bg-[#8c949f] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteProduct;
