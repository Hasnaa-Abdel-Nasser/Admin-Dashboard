import axiosInstance from "../config/axios.config";


export const productsInCategory = async(name:string)=>{
    try {
        const { data , status} = await axiosInstance.get(`/products/category/${name}`);
        return {data , status};
      } catch (error) {
        console.log(error);
      }
}

