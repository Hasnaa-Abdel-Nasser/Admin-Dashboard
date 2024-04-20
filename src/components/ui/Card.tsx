import { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { MdEdit , MdDelete } from "react-icons/md";
import { Boxes, DollarSign } from "lucide-react";

interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
const ProductCard = ({product}:{product:IProduct}) => {
  const [description , setDescription] = useState(false);
  return (
    <>
        {
            product.id &&
            <div >
            <div className='w-72 bg-[#2A2D3E] p-3 rounded-2xl card'>
              <div className="h-40 bg-white flex justify-center rounded-lg">
                <img src={product.image} className="h-full"/>
                <div className="text-[20px] absolute right-4 top-4">
                  <button className="text-[#32cc16] bg-[#32cc164a] rounded-full p-1 mr-1"><MdEdit /></button>
                  <button  className="text-red-500 bg-[#cc161626] rounded-full p-1"><MdDelete /></button>
                </div>
              </div>
              <div className={`my-3 ${description ? 'grow' : ''}`} onMouseEnter={()=>setDescription(true)} onMouseLeave={()=>setDescription(false)}>
                <div className="flex justify-between mb-2">
                <p className="font-bold">{!description?product.title.substring(0, 10) + '...':product.title}</p>
                <div className="flex items-center gap-1 text-[12px]">
                  <FaStar color={"#ffd744"}/>
                  <span className="font-bold">{product.rating.rate}</span>
                  <span>({product.rating.count})</span>
                </div>
                </div>
                {description && <p className="text-[12px] my-2 text-stone-300 description" >{product.description}</p>}
                <p className="flex items-center gap-2 text-sm"><Boxes size={16} /> {product.category}</p>
                <p className="flex items-center gap-2 text-sm"><DollarSign size={16}/> {product.price}</p>
              </div>         
            </div>
          </div>
        }
    </>
  )
}

export default ProductCard