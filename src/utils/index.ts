import {IProduct } from "../interfaces";
export const initProduct = (): IProduct => {
  return {
    id: 0,
    title: "",
    description: "",
    category: "",
    image: "",
    price: 1,
  };
};
