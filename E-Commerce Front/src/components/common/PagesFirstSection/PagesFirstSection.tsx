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
    switch (true) {
      case location.pathname.includes("kids"):
        return kidsPhoto;
      case location.pathname.includes("women"):
        return womenPhoto;
      case location.pathname.includes("sport"):
        return sportPhoto;
      case location.pathname.includes("cart"):
        return cartPhoto;
      default:
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
