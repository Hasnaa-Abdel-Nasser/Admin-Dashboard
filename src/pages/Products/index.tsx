import { BadgePlus } from "lucide-react";
import "./index.css";
import ProductCard from "../../components/ui/Card";
import useGetData from "../../hooks/useGetData";
import { IProduct } from "../../interfaces";
import NewProductModal from "../../components/Modals/NewProduct";
import { useEffect, useState } from "react";
import EditProductModal from "../../components/Modals/EditProduct";
import DeleteProduct from "../../components/Modals/DeleteProduct";
import { initProduct } from "../../utils";
import { Toaster } from "react-hot-toast";

const ProductsPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productSelected, setProductSelected] = useState(initProduct);

  useEffect(()=>{
    const open = showAddModal || showEditModal || showDeleteModal;
    const body = document.querySelector("body");

    if (body) {
      body.style.overflow = open ? "hidden" : "auto";
    }
    
  },[showAddModal,showEditModal,showDeleteModal]);

  const { isLoading, data } = useGetData({
    queryKey: ["products"],
    url: "products",
  });

  return (
    <div className="page">
      <div className="flex justify-between w-full">
        <p className="text-lg font-medium">Products</p>
        <button className="bg-[#44A5FF] text-sm font-medium p-2 rounded-md flex gap-2" onClick={() => setShowAddModal(true)}>
          <BadgePlus size={20} strokeWidth={1.75} />
          Add new product
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="cards my-5 text-start flex flex-wrap justify-evenly">
          {data.map((product: IProduct) => (
            <ProductCard
              product={product}
              key={product.id}
              setOpenEditModal={setShowEditModal}
              setOpenDeleteModal={setShowDeleteModal}
              setProduct={setProductSelected}
            />
          ))}
        </div>
      )}
      {showAddModal ? (
        <NewProductModal setOpen={setShowAddModal} />
      ) : null}
      {showEditModal ? (
        <EditProductModal
          setOpen={setShowEditModal}
          product={productSelected}
        />
      ) : null}
      {showDeleteModal ? (
        <DeleteProduct setOpen={setShowDeleteModal} id={productSelected.id}/>
      ) : null}
      <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default ProductsPage;
