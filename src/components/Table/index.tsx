import { useEffect, useState } from "react";
import { calcSales } from "../../utils";
import useGetData from "../../hooks/useGetData";
import { IProduct } from "../../interfaces";

export default function BasicTable() {
  const [sales, setSales] = useState<{ [productId: number]: number }>({});
  const { isLoading, data } = useGetData({
    queryKey: ["products"],
    url: "products",
  });
  const getSales = async () => {
    setSales(await calcSales());
  };
  useEffect(() => {
    getSales();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg w-full">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs uppercase bg-[#2A2D3E] text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Sales
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
            <td colSpan={5} className="text-center py-4">Loading</td>
          </tr>
          ) : (
            data.map((row: IProduct) => (
              <tr className="border-b bg-[#2A2D3E] border-gray-700 text-slate-50">
                <td className="px-6 py-4 font-thin text-gray-400"># {row.id}</td>
                <th className="px-6 py-4 max-w-60">
                  {row.title}
                </th>
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
