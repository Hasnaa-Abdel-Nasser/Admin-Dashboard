import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import './index.css'
const Layout = () => {
  const [open, setOpen] = useState(true);
  const handleResize = () => {
    if (window.innerWidth <= 620) {
      setOpen(false);
    }
  };
  useEffect(()=>{
    handleResize();
  },[])
  return (
    <>
      <Header className={'search'}/>
      <Sidebar open={open} setOpen={setOpen} />
      <div className={`mt-12 flex flex-col items-start p-8 ${open?'page':'close-page'}`} onClick={()=>handleResize()}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout