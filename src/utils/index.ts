import { carts } from "../api/carts";
import { IOrder, IProduct } from "../interfaces";

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

export const allowScroll = (isOpen:boolean) => {
  const body = document.querySelector("body");
  if (body) {
    body.style.overflow = isOpen ? "hidden" : "auto";
  }
};

export const calcSales = async ()=>{
  const productSales: { [productId: number]: number } = {};
  const orders = await carts();
  if(orders && orders.status === 200){
    orders.data.forEach((order:IOrder) => {
      order.products.forEach(product => {
        if (productSales[product.productId]) {
          productSales[product.productId] += product.quantity;
        } else {
          productSales[product.productId] = product.quantity;
        }
      });
    });
  }
  return productSales;
}