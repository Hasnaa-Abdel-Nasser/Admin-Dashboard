import { MdCancel } from "react-icons/md";
import { IProduct } from "../../interfaces";
import Rate from "./Rate";
import Modal from "../Modals";

interface IProps {
  setOpen: (value: boolean) => void;
  product: IProduct;
}
const SingleProduct = ({ setOpen, product }: IProps) => {
  return (
    <Modal setOpen={setOpen}>
      <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:max-w-md p-2 relative m-8">
        <div className="flex justify-center rounded-t-lg h-56 md:p-4 p-2">
          <img className="h-full" src={product.image} />
          <button className="absolute top-3 right-3" onClick={() => setOpen(false)}>
            <MdCancel color="gray" size={25} />
          </button>
        </div>
        <div className="flex flex-col p-4 leading-normal text-start bg-zinc-200 rounded-lg">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <div className="ml-3 flex flex-col justify-between h-full">
            <p className="mb-3 text-xs text-gray-700">{product.description}</p>
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex items-center gap-4">
                <Rate rate={product.rating?.rate || 0} />
                <span className="bg-sky-400 text-xs px-3 py-1 rounded-md">
                  {product.rating?.count}
                </span>
              </div>
              <p className="text-3xl text-slate-600 font-semibold">
                $ {product.price}
              </p>
            </div>
          </div>
        </div>
        <button onClick={() => setOpen(false)} className="bg-gray-500 mt-2 p-2 rounded-md font-medium hover:bg-gray-600">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SingleProduct;
