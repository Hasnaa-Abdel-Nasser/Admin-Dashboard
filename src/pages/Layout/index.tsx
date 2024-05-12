import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import { Outlet } from "react-router-dom"
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Header/>
      <Sidebar open={open} setOpen={setOpen} />
      <div className='mt-12 flex flex-col items-start p-8' style={{ marginLeft: open ? "200px" : "70px"}}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout