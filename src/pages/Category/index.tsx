import { useEffect, useState } from "react";
import { productsInCategory } from "../../api/categories";
import useGetData from "../../hooks/useGetData";
import { AxiosError } from "axios";
import { IErrorResponse, IProduct } from "../../interfaces";
import ProductCard from "../../components/ui/Card";
import { Toaster } from "react-hot-toast";
import Spinner from "../../components/ui/Spinner";

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
    <div className="w-full">
      <p className="text-lg font-medium">Categories</p>
      <div>
        {isLoading ? (
          <></>
        ) : (
          <ul className="text-xs flex ml-1 my-5">
            {categories.map((category: string) => (
              <li key={category}
                onClick={() => handleProducts(category)}
                className={`${
                  activeCategory === category &&
                  "bg-primary bg-opacity-25 text-primary"
                } text-gray-400 mr-2 hover:text-primary cursor-pointer w-fit p-2 rounded-md hover:bg-primary hover:bg-opacity-25`}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {isLoadingProducts ? (
          <Spinner/>
        ) : (
          <div className="flex flex-wrap gap-5 2xl:justify-start md:justify-evenly my-5 max-sm:justify-center">
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
