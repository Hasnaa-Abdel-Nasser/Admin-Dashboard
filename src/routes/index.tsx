import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../pages/Layout";
import DashboardPage from "../pages/Dashboard";
import ProductsPage from "../pages/Products";
import CategoriesPage from "../pages/Category";
import NotFoundPage from "../pages/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<DashboardPage/>}/>
        <Route path='products' element={<ProductsPage/>}/>
        <Route path='categories' element={<CategoriesPage/>}/>
      </Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </>
  )
);
