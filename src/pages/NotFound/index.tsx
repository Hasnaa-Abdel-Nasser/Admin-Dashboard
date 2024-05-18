import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/Button"

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <img src="images/404.jpg" className="w-1/4"/>
      <h1 className="text-green-600 text-4xl">OOPS!</h1>
      <p className="text-slate-500 text-xs">The page you requested could not be found..</p>
      <Button className="bg-[#59E4A8] mt-12 text-xs py-3 px-4 rounded-full font-semibold" onClick={()=>navigate("/")}>Back To Home</Button>
    </div>
  )
}

export default NotFoundPage