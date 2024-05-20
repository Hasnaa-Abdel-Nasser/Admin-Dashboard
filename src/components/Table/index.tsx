import { useEffect, useState } from "react";
import search, { calcSales } from "../../utils";
import useGetData from "../../hooks/useGetData";
import { IProduct } from "../../interfaces";
import Spinner from "../ui/Spinner";
import { useSearchParams } from "react-router-dom";

export default function Table() {
  const [searchParams] = useSearchParams(); 
  const searchValue = searchParams.get('search');
  const [sales, setSales] = useState<{ [productId: number]: number }>({});
  const [products , setProducts] = useState<IProduct[]>([]);
  const { isLoading, data } = useGetData({
    queryKey: ["products"],
    url: "products",
  });
  
  useEffect(() => {
    if (data) {
      if (searchValue) {
        const result:IProduct[] = search({value:searchValue, data});
        setProducts(result);
      } else {
        setProducts(data);
      }
    }
  }, [searchValue, data]);

  useEffect(()=>{
    if (!isLoading) {
      getSales();
      setProducts(data);
    }
  },[isLoading, data]);

  const getSales = async () => {
    setSales(await calcSales());
  };
  const tableHeader = ["ID", "Product name", "Category", "Price", "Sales"];

  return (
    <div className="overflow-x-auto shadow-md rounded-lg w-full">
      <table className="w-full text-xs text-center">
        <thead className="uppercase bg-[#2A2D3E]">
          <tr>
            {tableHeader.map((head) => (
              <th key={head} className="px-6 py-5 text-neutral-400">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5} className="relative">
                  <Spinner />
              </td>
            </tr>
          ) : (
            products.map((row: IProduct) => (
              <tr key={row.id} className="bg-[#2A2D3E] text-slate-50 hover:bg-slate-600 cursor-pointer">
                <td className="px-6 py-4 font-thin text-gray-400">
                  # {row.id}
                </td>
                <td className="px-6 py-4 max-w-52 font-semibold">
                  {row.title}
                </td>
                <td className="px-6 py-4">{row.category}</td>
                <td className="px-6 py-4">{row.price}</td>
                <td className="px-6 py-4">{sales[row.id] || 0}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
