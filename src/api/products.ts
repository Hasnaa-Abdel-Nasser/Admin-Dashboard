import axiosInstance from "../config/axios.config";
import { IFormInput, IProduct } from "../interfaces";

export const add = async (config: IFormInput) => {
  try {
    const { data , status} = await axiosInstance.post("products", config);
    return {data , status};
  } catch (error) {
    console.log(error);
  }
};

export const edit = async (config: IProduct) => {
  try {
    const { id, ...item } = config;
    const { data , status} = await axiosInstance.patch(`products/${id}`, item);
    return {data , status};
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const { status } = await axiosInstance.delete(`products/${id}`);
    return status;
  } catch (error) {
    console.log(error);
  }
};

export const singleProduct = async (id: number) => {
  try {
    const { data } = await axiosInstance.get(`products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
