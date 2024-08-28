import { useEffect } from "react";
import styles from "./burgerMenu.module.css";
import { Link } from "react-router-dom";
import useHeader from "../../../../hooks/useHeader";

const { burger, burgerOpen, burgerOpenMenu, burgerMenu, categoriesMenu } =
  styles;
function BurgerMenu() {
  const {
    isBurgerOpened,
    setIsBurgerOpened,
    isCategoriesOpened,
    setIsCategoriesOpened,
    categories,
  } = useHeader();

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

  return (
    <div
      className="burgerContainer"
      style={{ position: "relative", marginBottom: "6px" }}
    >
      <div
        onClick={() => {
          setIsBurgerOpened(!isBurgerOpened);
          setIsCategoriesOpened(false);
        }}
        className={`${burger} ${isBurgerOpened ? burgerOpen : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`${burgerMenu} ${isBurgerOpened ? burgerOpenMenu : ""}`}>
        <nav>
          <ul>
            <li>
              <Link
                onClick={() => {
                  setIsBurgerOpened(false);
                  setIsCategoriesOpened(false);
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <div
                onClick={() => {
                  setIsCategoriesOpened(!isCategoriesOpened);
                }}
              >
                Categories
              </div>
              {isCategoriesOpened ? (
                <div className={categoriesMenu}>
                  {categories.map((el) => {
                    return (
                      <Link
                        onClick={() => {
                          setIsBurgerOpened(false);
                          setIsCategoriesOpened(false);
                        }}
                        to={`/products/${el.title}`}
                      >
                        {" "}
                        &gt; {el.title}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </li>
            <li>
              <Link
                onClick={() => {
                  setIsBurgerOpened(false);
                  setIsCategoriesOpened(false);
                }}
                to="cart"
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BurgerMenu;
