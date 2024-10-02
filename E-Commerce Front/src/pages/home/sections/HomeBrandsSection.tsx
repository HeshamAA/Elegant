import React from "react";
import styles from "../home.module.css";
import zara from "../../../assets/brands/Zara.svg";
import adidas from "../../../assets/brands/Adidas.svg";
import chanel from "../../../assets/brands/Chanel.svg";
import dior from "../../../assets/brands/Christian_Dior.svg";
import hm from "../../../assets/brands/H&M.svg";
import gucci from "../../../assets/brands/Gucci.svg";
import nike from "../../../assets/brands/Nike.svg";
import balenciaga from "../../../assets/brands/Balenciaga.svg";
import calvin from "../../../assets/brands/Calvin_Klein.svg";

const { homeBrandsSection } = styles;
const brands = [zara, adidas, chanel, dior, gucci, nike, balenciaga, calvin];

const brandsImgs = brands.map((el, index) => (
  <img
    alt="brand logo"
    src={el}
    style={{ "--position": index + 1 } as React.CSSProperties}
    key={index}
  />
));



function HomeBrandsSection() {
  console.log("homeBrands");
  return (
    <section className={homeBrandsSection}>
      <h1>We work with a selection of top global brands</h1>
      <div className="container">{brandsImgs}</div>
    </section>
  );
}

export default HomeBrandsSection;
