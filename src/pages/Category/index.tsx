import { useEffect, useState } from "react";
import { productsInCategory } from "../../api/categories";
import useGetData from "../../hooks/useGetData";
import { AxiosError } from "axios";
import { IErrorResponse, IProduct } from "../../interfaces";
import ProductCard from "../../components/ui/Card";
import { Toaster } from "react-hot-toast";

const CategoriesPage = () => {
  const { isLoading, data: categories } = useGetData({
    queryKey: ["categories"],
    url: "products/categories",
  });

  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setLoadingProducts] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const handleProducts = async (category: string) => {
    setActiveCategory(category);
    setLoadingProducts(true);
    try {
      const req = await productsInCategory(category);
      if (req && req.status === 200) {
        setProducts(req.data);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      console.error(errorObj.response?.data.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    if (categories && categories.length > 0) {
      handleProducts(categories[0]);
    }
  }, [categories]);

  return (
    <div className="page">
      <p className="text-lg font-medium">Categories</p>
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <ul className="text-xs flex m-3">
            {categories.map((category: string) => (
              <li
                onClick={() => handleProducts(category)}
                className={`${
                  activeCategory === category &&
                  "bg-[#1fcec8] bg-opacity-25 text-[#1fcec8] "
                } text-gray-500 mr-2 hover:text-[#1fcec8] cursor-pointer w-fit p-2 rounded-md hover:bg-[#1fcec8] hover:bg-opacity-25`}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {isLoadingProducts ? (
          <p>LOading</p>
        ) : (
          <div className="cards text-start flex flex-wrap gap-3 justify-around md:justify-start">
            {products.map((product: IProduct) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default CategoriesPage;
