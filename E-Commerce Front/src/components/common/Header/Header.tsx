import { FaShoppingCart } from "react-icons/fa";
import styles from "./header.module.css";
import { useEffect } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import NavLinks from "./NavLinks/NavLinks";
import useHeader from "../../../hooks/useHeader";
import { PiListHeartFill } from "react-icons/pi";
import FlyOutCart from "../../Ecommerce/cart/flyOutCart/FlyOutCart";
import useCart from "../../../hooks/useCart";
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import TopBar from "../TopBar/TopBar";

const { header, cartNumber, headerContainer } = styles;

export const Header = () => {
  const {
    dispatch,
    navigate,
    getCategories,
    watchListTotalQuantityFull,
  } = useHeader();

  const { cartTotalQuantity, isFlyOutCartOpened, openFlyOutCartHandler } =
    useCart();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      {isFlyOutCartOpened ? <FlyOutCart /> : ""}

      <header className={`${header}`}>
        <TopBar></TopBar>

        <div className={`container ${headerContainer}`}>
          <div>
            <h1
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <span>E</span>legant
            </h1>
          </div>

          <NavLinks />

          <div>
            <HeaderIcons
              className={cartNumber}
              value={watchListTotalQuantityFull}
              children={
                <PiListHeartFill
                  onClick={() => navigate("/watchlist")}
                  size={28}
                />
              }
            />

            <HeaderIcons
              className={cartNumber}
              value={cartTotalQuantity}
              children={
                <FaShoppingCart onClick={openFlyOutCartHandler} size={28} />
              }
            />

            <BurgerMenu />
          </div>
        </div>
      </header>
    </>
  );
};
