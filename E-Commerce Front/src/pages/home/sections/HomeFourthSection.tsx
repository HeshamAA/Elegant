import React from 'react'
import styles from "../home.module.css"
import zara from "../../../assets/brands/Zara.svg"
import adidas from "../../../assets/brands/Adidas.svg"
import chanel from "../../../assets/brands/Chanel.svg"
import dior from "../../../assets/brands/Christian_Dior.svg"
import hm from "../../../assets/brands/H&M.svg"
import gucci from "../../../assets/brands/Gucci.svg"
import nike from "../../../assets/brands/Nike.svg"
import balenciaga from "../../../assets/brands/Balenciaga.svg"
import calvin from "../../../assets/brands/Calvin_Klein.svg"
const {homeFourthSection} = styles
function HomeFourthSection() {
  return (
    <section className={homeFourthSection}>
        <h1>We work with a selection of top global brands</h1>
        <div className={`container`}>
          
          <img src={zara}></img>
          <img src={adidas}></img>
          <img src={chanel}></img>
          <img src={dior}></img>
          {/* <img src={hm}></img> */}
          <img src={gucci}></img>
          <img src={nike}></img>
          <img src={balenciaga}></img>
          <img src={calvin}></img>
        </div>
    </section>
  )
}

export default HomeFourthSection