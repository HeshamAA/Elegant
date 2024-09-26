import { Header } from "../../components/common/Header/Header";

import { Outlet, useLocation } from "react-router-dom";
import Themes from "../../components/common/Themes/Themes";
import { Toaster } from "react-hot-toast";
import { Footer } from "../../components/common/Footer/Footer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getWatchlist } from "../../store/addToWatchList/addToWatchListSlice";

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { accessToken } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (accessToken) {
      dispatch(getWatchlist());
    }
  }, []);

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
      <Toaster />
      <Themes></Themes>

      <div className="overlay"></div>

      {!isAuthPage && <Header />}

      <main>

        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </>
  );
};
export default MainLayout;
