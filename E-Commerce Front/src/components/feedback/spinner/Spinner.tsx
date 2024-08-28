import React from "react";
import styles from "./spinner.module.css";
const { loader } = styles;
function Spinner() {
  return <div className={loader}></div>;
}

export default Spinner;
