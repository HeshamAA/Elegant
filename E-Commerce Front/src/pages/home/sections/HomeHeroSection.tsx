import styles from "../home.module.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const { homeHeroSection } = styles;
function HomeHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // مدة التأثير
    });
  }, []);
  return (
    <section className={homeHeroSection}>
      <div className="container" data-aos="fade-up">
        <div className="flex">
          <div className="flexBetween">
            <h1>
              <span>Discover</span> <br></br> the Essence of Timeless Elegance
            </h1>
            <p>
              Shop the Latest Trends in Fashion for Men, Women, and Kids{" "}
              <button>Shop Now!</button>
            </p>
          </div>
      
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
