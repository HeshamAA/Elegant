import { useEffect } from "react";
import styles from "./burgerMenu.module.css";
import { Link } from "react-router-dom";
import useHeader from "../../../../hooks/useHeader";
import BurgerIcon from "./BurgerIcon/BurgerIcon";
import { useAppSelector } from "../../../../store/hooks/hooks";

import DetailsMenu from "../../DetailsMenu/DetailsMenu";

const { burgerContainer, burgerOpenMenu, burgerMenu } = styles;
function BurgerMenu() {
  const dashboardLinks = ["products", "users"];
  const {
    isBurgerOpened,
    setIsBurgerOpened,
    isCategoriesOpened,
    setIsCategoriesOpened,

    linksTitles,
  } = useHeader();

  const { role } = useAppSelector((state) => state.auth.user);
  const categories = ["men", "women", "kids", "sport"];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setIsBurgerOpened(false);
        setIsCategoriesOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderBurgerMenu = (linkTitle: string) => {
    switch (linkTitle) {
      case "categories":
        return (
          <DetailsMenu
            summaryTitle="Categories"
            data={categories}
            link="products"
            style={{
              position: "relative",
              backgroundColor: "var(--third-color)",
              boxShadow: "none",
            }}
          ></DetailsMenu>
        );
      case "dashboard":
        return role === "admin" ? (
          <DetailsMenu
            summaryTitle="Dashboard"
            data={dashboardLinks}
            link="dashboard"
            style={{
              position: "relative",
              backgroundColor: "var(--third-color)",
              boxShadow: "none",
            }}
          ></DetailsMenu>
        ) : null;
      default:
        return (
          <li>
            <Link
              onClick={() => {
                setIsBurgerOpened(false);
                setIsCategoriesOpened(false);
              }}
              to={`/${linkTitle === "home" ? "" : linkTitle}`}
            >
              {linkTitle}
            </Link>
          </li>
        );
    }
  };

  return (
    <div
      className={burgerContainer}
      style={{
        position: "relative",
        marginBottom: "6px",
      }}
    >
      <BurgerIcon
        isBurgerOpened={isBurgerOpened}
        setIsBurgerOpened={setIsBurgerOpened}
        setIsCategoriesOpened={setIsCategoriesOpened}
      />

      <div className={`${burgerMenu} ${isBurgerOpened ? burgerOpenMenu : ""}`}>
        <nav>
          <ul>
            {linksTitles.map((el) => (
              <>{renderBurgerMenu(el)}</>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
