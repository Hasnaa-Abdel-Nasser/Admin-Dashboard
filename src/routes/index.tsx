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
import Login from "../pages/Login";
import ProdectedRoute from "../components/ProdectedRoute";

const userToken = localStorage.getItem("token") || sessionStorage.getItem("token");
const isLogin = userToken ? true : false;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProdectedRoute isAllowed={isLogin} redirectPath="/login">
            <Layout />
          </ProdectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Route>
      <Route
        path="/login"
        element={
          <ProdectedRoute isAllowed={!isLogin} redirectPath="/">
            <Login />
          </ProdectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);
