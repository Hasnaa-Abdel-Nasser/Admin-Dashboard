import { FaStar } from "react-icons/fa6";
import { MdEdit , MdDelete } from "react-icons/md";
import { Boxes, DollarSign } from "lucide-react";
import { IProduct } from '../../interfaces';
interface IProps{
  product:IProduct
  setOpenEditModal: (value: boolean) => void
  setOpenDeleteModal: (value: boolean) => void
  setProduct: (value:IProduct) => void
}
const ProductCard = ({product , setOpenEditModal , setOpenDeleteModal , setProduct}:IProps) => {
  return (
    <>
        {
            product.id &&
            <div className='mb-8 cursor-pointer'>
            <div className='w-64 bg-[#2A2D3E] p-3 rounded-2xl card relative'>
              <div className="h-40 bg-white flex justify-center rounded-lg">
                <img src={product.image} className="h-full"/>
                <div className="text-[20px] absolute right-4 top-4">
                  <button className="text-[#32cc16] bg-[#32cc164a] rounded-full p-1 mr-1" onClick={()=>{setProduct(product); setOpenEditModal(true)}}><MdEdit /></button>
                  <button  className="text-red-500 bg-[#cc161626] rounded-full p-1" onClick={()=>{setProduct(product); setOpenDeleteModal(true)}}><MdDelete /></button>
                </div>
              </div>
              <div className= 'my-3'>
                <div className="flex justify-between mb-2">
                <p className="font-bold">{product.title.substring(0, 10) + '...'}</p>
                <div className="flex items-center gap-1 text-[12px]">
                  <FaStar color={"#ffd744"}/>
                  <span className="font-bold">{product.rating?.rate}</span>
                  <span>({product.rating?.count})</span>
                </div>
                </div>
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