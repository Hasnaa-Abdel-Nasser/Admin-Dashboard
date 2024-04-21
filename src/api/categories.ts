import axiosInstance from "../config/axios.config";


export const productsInCategory = async(name:string)=>{
    try {
        const { data } = await axiosInstance.get(`/products/category/${name}`);
        return data;
      } catch (error) {
        console.log(error);
      }
}

