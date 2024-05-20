
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs uppercase bg-[#2A2D3E] text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                ID
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
          {rows.map((row) => (
           <tr className="border-b bg-[#2A2D3E] border-gray-700">
           <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
               {row.name}
           </th>
           <td className="px-6 py-4">
               {row.calories}
           </td>
           <td className="px-6 py-4">
               Laptop
           </td>
           <td className="px-6 py-4">
               $2999
           </td>
           <td className="px-6 py-4">
               {row.protein}
           </td>
       </tr>
          ))}
          </tbody>
      </table>
  </div>
  );
}
