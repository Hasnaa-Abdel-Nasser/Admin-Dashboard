import { BadgePlus } from "lucide-react";
import "./index.css";
import ProductCard from "../../components/ui/Card";
import useGetData from "../../hooks/useGetData";
import { IProduct } from "../../interfaces";
import NewProductModal from "../../components/Modals/NewProduct";
import { useState } from "react";
import EditProductModal from "../../components/Modals/EditProduct";

const ProductsPage = () => {
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [productSelected, setProductSelected] = useState({
    id: 0,
    title: "",
    description: "",
    category: "",
    image: "",
    price: 1,
  });
  const { isLoading, data } = useGetData({
    queryKey: ["products"],
    url: "products",
  });

  return (
    <div className="page">
      <div className="flex justify-between w-full">
        <p className="text-lg font-medium">Products</p>
        <button className="bg-[#44A5FF] text-sm font-medium p-2 rounded-md flex gap-2" onClick={() => setShowAddProductModal(true)}>
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
              setOpen={setShowEditProductModal}
              setProduct={setProductSelected}
            />
          ))}
        </div>
      )}
      {showAddProductModal ? (
        <NewProductModal setOpen={setShowAddProductModal} />
      ) : null}
      {showEditProductModal ? (
        <EditProductModal
          setOpen={setShowEditProductModal}
          product={productSelected}
        />
      ) : null}
    </div>
  );
};

export default ProductsPage;
