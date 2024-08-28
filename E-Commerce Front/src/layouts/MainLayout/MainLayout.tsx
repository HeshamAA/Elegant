import { Header } from "../../components/common/Header/Header";

import { Outlet } from "react-router-dom";
import Themes from "../../components/common/Themes/Themes";
import { Toaster } from "react-hot-toast";
import { Footer } from "../../components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Toaster />
      <Themes></Themes>

      <div className="overlay"></div>
      {/* <TopBar></TopBar> */}
      <Header></Header>

      <main>
        {" "}
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};
export default MainLayout;
