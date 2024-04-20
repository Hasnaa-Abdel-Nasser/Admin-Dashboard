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
      <div style={{ marginLeft: open ? "200px" : "70px" , width: open ? "85%" : "95%"}}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout