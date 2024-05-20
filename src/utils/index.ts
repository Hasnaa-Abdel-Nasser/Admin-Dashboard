import { carts } from "../api/carts";
import { IOrder, IProduct } from "../interfaces";

export const cardsData = [
  {
    image: "/images/product.png",
    color: "bg-amber-500",
    title: "Products",
    number: 20,
  },
  {
    image: "/images/category.png",
    color: "bg-sky-400",
    title: "Categories",
    number: 4,
  },
  {
    image: "/images/cart.png",
    color: "bg-slate-400",
    title: "Carts",
    number: 7,
  },
  {
    image: "/images/money.png",
    color: "bg-lime-300",
    title: "Sales",
    number: 30,
  },
];

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

export const logout = ()=>{
  const token = localStorage.getItem("token");
  if(token){
    localStorage.removeItem("token");
  }else{
    sessionStorage.removeItem("token")
  }
  location.replace("/login");
}

export default function search({value, data}:{value:string,data:IProduct[]}) {

  const result :IProduct[]= data.filter((ele:IProduct) => {
    const title = isInclude({text:ele.title, value});
    const category = isInclude({text:ele.category, value});
    const price = isInclude({text:ele.price.toString(), value});

    return title || category || price;
  });

  return result;
}
const isInclude = ({text, value}:{text:string , value:string}) => text.toLowerCase().includes(value.toLowerCase());
