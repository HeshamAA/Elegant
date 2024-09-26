import styles from "../home.module.css";
import heroPhoto from "../../../assets/heroo.png";
const { homeHeroSection } = styles;
function HomeHeroSection() {
  return (
    <section className={homeHeroSection}>
      <div className="container">
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
