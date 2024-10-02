import React, { useEffect, useState } from "react";
import styles from "../home.module.css";

const { homeSecondSection, homeSecondSectionContainer } = styles;

function HomeSecondSection() {
  console.log("homeSecond");
  return (
    <section className={homeSecondSection}>
   
 
      <div className={`container ${homeSecondSectionContainer}`}>
        <div>
          <div>Up To 70% Off</div>
          <div>Get your favourites before they're gone</div>
          <div>
            You can trust us to bring you the best clothing materials at
            unbeatable prices. Don’t miss this limited-time opportunity to
            upgrade your collection. Grab your perfect piece now!
          </div>
          <button>Get it now</button>
        </div>
      </div>
    </section>
  );
}

export default HomeSecondSection;
