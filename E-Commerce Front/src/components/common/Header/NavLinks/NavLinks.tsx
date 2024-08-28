import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import styles from "./navLinks.module.css";
import useHeader from "../../../../hooks/useHeader";

const { menuContainer, link, categoriesLink, active } = styles;
function NavLinks() {
  const { linksTitles, categories } = useHeader();

  return (
    <nav>
      <ul>
        {linksTitles.map((linkTitle, index) => {
          return (
            <li key={index}>
              {linkTitle === "categories" ? (
                <div className={menuContainer}>
                  {categories.map((el) => {
                    return (
                      <Link to={`/products/${el.prefix}`} key={el.id}>
                        <IoIosArrowForward />
                        <span>{el.title}</span>
                      </Link>
                    );
                  })}
                </div>
              ) : null}

              {linkTitle === "categories" ? (
                <a className={`${link} ${categoriesLink}`}>categories</a>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${link} ${active}` : link
                  }
                  to={`/${linkTitle === "home" ? "" : linkTitle}`}
                >
                  {linkTitle}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavLinks;
