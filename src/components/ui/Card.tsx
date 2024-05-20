import { FaStar } from "react-icons/fa6";
import { MdEdit, MdDelete } from "react-icons/md";
import { Boxes, DollarSign } from "lucide-react";
import { IProduct } from "../../interfaces";
import { useEffect, useState } from "react";
import EditProductModal from "../Modals/EditProduct";
import DeleteProduct from "../Modals/DeleteProduct";
import SingleProduct from "./SingleProduct";
import { allowScroll } from "../../utils";

const ProductCard = ({ product }: { product: IProduct }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  useEffect(()=>{
    if(showEditModal||showDeleteModal||showProduct){
      allowScroll(true);
    }else{
      allowScroll(false);
    }
  },[showEditModal,showDeleteModal,showProduct])
  return (
    <>
      {product.id && (
        <div>
          <div className="w-64 bg-[#2A2D3E] p-3 rounded-2xl card relative">
            <div className="h-40 bg-white flex justify-center rounded-lg">
              <img src={product.image} className="h-full" />
              <div className="text-[20px] absolute right-4 top-4">
                <button
                  className="text-[#32cc16] bg-[#32cc164a] rounded-full p-1 mr-1"
                  onClick={() => {
                    setShowEditModal(true);
                  }}
                >
                  <MdEdit />
                </button>
                <button
                  className="text-red-500 bg-[#cc161626] rounded-full p-1"
                  onClick={() => {
                    setShowDeleteModal(true);
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
            <div className="my-3">
              <div className="flex justify-between mb-2">
                <p className="font-bold">
                  {product.title.substring(0, 10) + "..."}
                </p>
                <div className="flex items-center gap-1 text-[12px]">
                  <FaStar color={"#ffd744"} />
                  <span className="font-bold">{product.rating?.rate}</span>
                  <span>({product.rating?.count})</span>
                </div>
              </div>
              <p className="flex items-center gap-2 text-sm">
                <Boxes size={16} /> {product.category}
              </p>
              <p className="flex items-center gap-2 text-sm">
                <DollarSign size={16} /> {product.price}
              </p>
            </div>
              <button
                onClick={() => setShowProduct(true)}
                className="bg-darkGray hover:bg-primary w-full h-8 rounded-lg font-semibold text-sm transition-all duration-300"
              >
                Read more
              </button>
          </div>
        </div>
      )}
      {showEditModal && (
        <EditProductModal
          setOpen={setShowEditModal}
          product={product}
        />
      )}
      {showDeleteModal && (
        <DeleteProduct
          setOpen={setShowDeleteModal}
          id={product.id}
        />
      )}
      {showProduct && (
        <SingleProduct
          setOpen={setShowProduct}
          product={product}
        />
      )}
    </>
  );
};

export default ProductCard;
