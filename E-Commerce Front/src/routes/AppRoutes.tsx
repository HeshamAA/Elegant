import { Suspense, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,

} from "react-router-dom";
import Loader from "../components/feedback/loader/Loader";
import { Error404 } from "../components/common/Error404/Error404";
import { useAppSelector } from "../store/hooks/hooks";
import {
  MainLayout,
  Home,
  Products,
  CartPage,
  Auth,
  CartLayout,
  ContactUs,
  WatchList,
  Product,
  DashboardLayout,
  ProtectedRoutes,
  DashboardProducts,
  AddProduct,
  EditProduct,
} from "./index";
import DashboardUsers from "../pages/admin/dashboard/dashboardUsers/DashboardUsers";




// const ids = Array.from({ length: 29 }, (_, index) => index + 1);

const AppRoutes = () => {
  const categories = ["men", "women", "sport", "kids"];
  const { accessToken } = useAppSelector((state) => state.auth);
  const { role } = useAppSelector((state) => state.auth.user);
  

 

  
 

  useEffect(() => {
    const primary = localStorage.getItem("--primary-color");
    const secondary = localStorage.getItem("--secondary-color");
    const opposite = localStorage.getItem("--opposite-secondary");
    const fullPageOverlay = localStorage.getItem("--full-page-overlay");

    if (primary && secondary && opposite && fullPageOverlay) {
      document.documentElement.style.setProperty("--primary-color", primary);
      document.documentElement.style.setProperty(
        "--secondary-color",
        secondary
      );
      document.documentElement.style.setProperty(
        "--opposite-secondary",
        opposite
      );
      document.documentElement.style.setProperty(
        "--full-page-overlay",
        fullPageOverlay
      );
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader></Loader>}>
          <MainLayout />
        </Suspense>
      ),
      errorElement: (
        <Suspense fallback={<Loader></Loader>}>
          <Error404 />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader></Loader>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <ProtectedRoutes condition={accessToken}>
              <Suspense fallback={<Loader></Loader>}>
                <Auth />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
        {
          path: "login",
          element: (
            <ProtectedRoutes condition={accessToken}>
              <Suspense fallback={<Loader></Loader>}>
                <Auth />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Loader></Loader>}>
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: "watchlist",
          element: (
            <Suspense fallback={<Loader></Loader>}>
              <WatchList />
            </Suspense>
          ),
        },
        {
          path: "products/product/:id",
          element: (
            <Suspense fallback={<Loader></Loader>}>
              <Product />
            </Suspense>
          ),
         
        },
        {
          path: "products/:prefix",
          element: (
            <Suspense fallback={<Loader></Loader>}>
              <Products />
            </Suspense>
          ),
          loader: ({ params }) => {
            const { prefix } = params;
            if (!categories.includes(prefix as string)) {
              throw new Response("Not Found", {
                statusText: "Category not found",
                status: 404,
              });
            }
            return true;
          },
        },

        {
          path: "cart",
          element: (
            <Suspense fallback={<Loader></Loader>}>
              <CartLayout />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: <CartPage></CartPage>,
            },
            {
              path: "checkout",
              element: <CartPage></CartPage>,
            },
            {
              path: "ordercomplete",
              element: <CartPage></CartPage>,
            },
          ],
        },
        {
          path: "dashboard",
          element: (
            <ProtectedRoutes condition={role !== "admin"}>
              <Suspense fallback={<Loader></Loader>}>
                <DashboardLayout />
              </Suspense>
            </ProtectedRoutes>
          ),
          children: [
            {
              path: "products",
              element: <DashboardProducts />,
            },
            {
              path: "products/addproduct",
              element: <AddProduct />,
            },
            {
              path: "products/edit-products/:id",
              element: <EditProduct />,
            },
            {
              path: "users",
              element: <DashboardUsers />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoutes;
