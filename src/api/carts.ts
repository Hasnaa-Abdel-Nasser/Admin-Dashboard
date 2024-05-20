import axiosInstance from "../config/axios.config";


export const  carts = async()=>{
    try {
        const { data , status} = await axiosInstance.get('carts');
        return {data , status};
      } catch (error) {
        console.log(error);
      }
}

