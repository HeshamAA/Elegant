import { NavLink } from "react-router-dom";
import styles from "./navLinks.module.css";
import useHeader from "../../../../hooks/useHeader";
import { useAppSelector } from "../../../../store/hooks/hooks";
import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";
import DashboardMenu from "./DashboardMenu/DashboardMenu";

const { navLinks,link, active } = styles;

function NavLinks() {
  const { linksTitles } = useHeader();
  const { role } = useAppSelector((state) => state.auth.user);

  const renderNavLink = (linkTitle: string) => {
    switch (linkTitle) {
      case "categories":
        return <CategoriesMenu />;
      case "dashboard":
        return role === "admin" ? <DashboardMenu /> : null;
      default:
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? `${link} ${active}` : link
            }
            to={`/${linkTitle === "home" ? "" : linkTitle}`}
          >
            {linkTitle}
          </NavLink>
        );
    }
  };
  return (
    <nav className={navLinks}>
      <ul>
        {linksTitles.map((linkTitle) => (
          <li key={linkTitle}>{renderNavLink(linkTitle)}</li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
