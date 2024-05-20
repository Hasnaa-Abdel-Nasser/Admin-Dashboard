import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default Layout