import useGetData from "../../hooks/useGetData";

interface IProps{
  title: string
  defaultValue : null | string
}
const Select = ({title , defaultValue}:IProps) => {
  const {isLoading , data} = useGetData({
    queryKey:['categories'],
    url:"products/categories"
  });
  
  const labelName = title.toLowerCase();

  return (
    <>
      <label htmlFor={labelName} className="block mb-2 text-sm font-medium text-gray-900 ">
        {title}
      </label>
      <select id={labelName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 block w-full p-2.5 primary-500 ">
        {
          isLoading
          ? null
          :data.map((value:string)=>
            (value !== defaultValue)
            ? <option value={value} key={value}>{value}</option>
            : <option selected value={value} key={value}>{value}</option>
          )
        }
      </select>
    </>
  );
};

export default Select;
