import { lazy } from "react";

export const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));
export const Home = lazy(() => import("../pages/home/Home"));
export const Products = lazy(() => import("../pages/products/Products"));
export const CartPage = lazy(() => import("../pages/cart/cartPage/CartPage"));
export const Auth = lazy(() => import("../pages/auth/Auth"));
export const CartLayout = lazy(() => import("../layouts/CartLayout/CartLayout"));
export const ContactUs = lazy(() => import("../pages/contactUs/ContactUs"));
export const WatchList = lazy(() => import("../pages/watchlist/WatchList"));
export const Product = lazy(() => import("../pages/product/Product"));
export const DashboardLayout = lazy(
  () => import("../layouts/DashboardLayout/DashboardLayout")
);
export const ProtectedRoutes = lazy(
  () => import("../components/feedback/protectedRoutes/ProtectedRoutes")
);
export const DashboardProducts = lazy(
  () => import("../pages/admin/dashboard/dashboardProducts/DashboardProducts")
);
export const AddProduct = lazy(
  () => import("../pages/admin/dashboard/addProduct/AddProduct")
);
export const EditProduct = lazy(
  () => import("../pages/admin/dashboard/editProduct/EditProduct")
);

