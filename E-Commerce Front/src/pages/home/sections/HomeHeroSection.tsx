import styles from "../home.module.css";
import heroPhoto from "../../../assets/heroo.png";
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
        <div className="flexBetween">
          <div>
            <h1>
              <span>Discover</span> the Essence of Timeless Elegance
            </h1>
            <p>
              Shop the Latest Trends in Fashion for Men, Women, and Kids{" "}
              <button>Shop Now!</button>
            </p>
          </div>
          <div>
            <img src={heroPhoto}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
