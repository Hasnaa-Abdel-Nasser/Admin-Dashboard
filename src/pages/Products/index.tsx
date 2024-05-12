import { BadgePlus } from "lucide-react";
import "./index.css";
import ProductCard from "../../components/ui/Card";
import useGetData from "../../hooks/useGetData";
import { IProduct } from "../../interfaces";
import NewProductModal from "../../components/Modals/NewProduct";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import search, { allowScroll } from "../../utils";
import Spinner from "../../components/ui/Spinner";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [products , setProducts] = useState<IProduct[]>([]);
  const [searchParams] = useSearchParams(); 
  const searchValue = searchParams.get('search');

  const { isLoading, data }= useGetData({
    queryKey: ["products"],
    url: "products",
  });

  useEffect(()=>{
    allowScroll(showAddModal);
  },[showAddModal]);

  useEffect(() => {
    if (data) {
      if (searchValue) {
        const result = search(searchValue, data);
        setProducts(result);
      } else {
        setProducts(data);
      }
    }
  }, [searchValue, data]);

  useEffect(()=>{
    if (!isLoading) {
      setProducts(data);
    }
  },[isLoading, data]);
  return (
    <div className="w-full">
      <div className="flex justify-between w-full flex-wrap gap-5">
        <p className="text-lg font-medium">Products</p>
        <button
          className="bg-primary text-sm font-medium p-2 rounded-md flex gap-2"
          onClick={() => setShowAddModal(true)}
        >
          <BadgePlus size={20} strokeWidth={1.75} />
          Add new product
        </button>
      </div>
      {isLoading ? (
        <Spinner/>
      ) : (
        <div className="flex flex-wrap gap-5 justify-evenly md:justify-around my-7">
          {products.map((product: IProduct) => 
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
