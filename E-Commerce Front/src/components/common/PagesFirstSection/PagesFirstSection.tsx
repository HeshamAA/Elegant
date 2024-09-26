import styles from "./pagesFirstSection.module.css";

import { useLocation } from "react-router-dom";
import { TPagesFirstSection } from "../../../types/pagesFirstSectionTypes";
const {
  PagesFirstSectionContainer,
  pageTitle,
  kidsPhoto,
  womenPhoto,
  sportPhoto,
  cartPhoto,
} = styles;


function PagesFirstSection({ title, children }: TPagesFirstSection) {
  const location = useLocation();
  const dynamicBackgroundImg = () => {
    if (location.pathname.includes("kids")) {
      return kidsPhoto;
    } else if (location.pathname.includes("women")) {
      return womenPhoto;
    } else if (location.pathname.includes("sport")) {
      return sportPhoto;
    } else if (location.pathname.includes("cart")) {
      return cartPhoto;
    } else {
      return "";
    }
  };
  return (
    <section
      className={`${PagesFirstSectionContainer} ${dynamicBackgroundImg()}`}
    >
      {children}
      <div className={pageTitle}>{title}</div>
    </section>
  );
}

export default PagesFirstSection;
