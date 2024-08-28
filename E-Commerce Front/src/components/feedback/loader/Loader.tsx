import React from "react";
import styles from "./loader.module.css";

const { spinnerContainer,loader } = styles;
function Loader() {
  return <div className={spinnerContainer}>
    <span className={loader}>L &nbsp; ading</span>
  </div>;
}

export default Loader;
