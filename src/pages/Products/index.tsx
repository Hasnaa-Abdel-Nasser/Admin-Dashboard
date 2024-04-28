import { BadgePlus } from "lucide-react";
import "./index.css";
import ProductCard from "../../components/ui/Card";
import useGetData from "../../hooks/useGetData";
import { IProduct } from "../../interfaces";
import NewProductModal from "../../components/Modals/NewProduct";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { allowScroll } from "../../utils";

const ProductsPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(()=>{
    allowScroll(showAddModal);
  },[showAddModal]);

  const { isLoading, data } = useGetData({
    queryKey: ["products"],
    url: "products",
  });

  return (
    <div className="page">
      <div className="flex justify-between w-full">
        <p className="text-lg font-medium">Products</p>
        <button
          className="bg-[#1fcec8] text-sm font-medium p-2 rounded-md flex gap-2"
          onClick={() => setShowAddModal(true)}
        >
          <BadgePlus size={20} strokeWidth={1.75} />
          Add new product
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="cards my-5 text-start flex flex-wrap justify-evenly">
          {data.map((product: IProduct) => 
            <ProductCard product={product} key={product.id} />
          )}
        </div>
      )}

      {
        showAddModal && <NewProductModal setOpen={setShowAddModal} />
      }
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default ProductsPage;
