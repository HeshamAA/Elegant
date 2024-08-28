import { lazy, Suspense, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const MainLayout = lazy(() => import("../layouts/MainLayout/MainLayout"));
const Home = lazy(() => import("../pages/home/Home"));
const Products = lazy(() => import("../pages/products/Products"));
const CartPage = lazy(() => import("../pages/cart/cartPage/CartPage"));
const Auth = lazy(() => import("../pages/auth/Auth"));
const CartLayout = lazy(() => import("../layouts/CartLayout/CartLayout"));
const ContactUs = lazy(() => import("../pages/contactUs/ContactUs"));
const WatchList = lazy(() => import("../pages/watchlist/WatchList"));
const Product = lazy(() => import("../pages/product/Product"));
import Loader from "../components/feedback/loader/Loader";
import { Error404 } from "../components/common/Error404/Error404";
const categories = ["men", "women", "sport", "kids"];
const ids = Array.from({ length: 29 }, (_, index) => index + 1);
console.log(ids);

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
          <Suspense fallback={<Loader></Loader>}>
            <Auth />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader></Loader>}>
            <Auth />
          </Suspense>
        ),
      },
      {
        path: "contact-us",
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
        loader: ({ params }) => {
          const { id } = params;
          if (!ids.includes(parseInt(id))) {
            throw new Response("Not Found", {
              statusText: "Category not found",
              status: 404,
            });
          }
          return true;
        },
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
          if (!categories.includes(prefix)) {
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
    ],
  },
]);

const AppRoutes = () => {
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

  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoutes;
