import HomeSection from "./sections/HomeSection";
import styles from "./home.module.css";
import HomeSecondSection from "./sections/HomeSecondSection";
import HomeThirdSection from "./sections/HomeBestSellersSection";
import HomeBrandsSection from "./sections/HomeBrandsSection";
import HomeHeroSection from "./sections/HomeHeroSection";
const { home } = styles;

const Home = () => {

  return (
    <div className={home}>
      <HomeSection></HomeSection>
      <HomeHeroSection></HomeHeroSection>
      <HomeBrandsSection></HomeBrandsSection>
      <HomeSecondSection></HomeSecondSection>
      <HomeThirdSection></HomeThirdSection>
    </div>
  );
};

export default Home;
