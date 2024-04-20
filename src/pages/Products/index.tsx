import { BadgePlus } from "lucide-react";
import './index.css'
import ProductCard from "../../components/ui/Card";
const ProductsPage = () => {
  const product = {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
  }
  return (
    <div className="page">
      <div className='flex justify-between w-full'>
        <p className="text-lg font-medium">Products</p>
        <button className="bg-[#44A5FF] text-sm font-medium p-2 rounded-md flex gap-2">
          <BadgePlus size={20} strokeWidth={1.75} />
          Add New Product
        </button>
      </div>
      <div className='cards relative my-5 text-start flex flex-wrap'>
        <ProductCard product={product}/>
      </div>
    </div>
  );
};

export default ProductsPage;
