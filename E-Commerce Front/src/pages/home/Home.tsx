import React from "react";
import HomeSection from "./sections/HomeSection";
import styles from "./home.module.css";
import HomeSecondSection from "./sections/HomeSecondSection";
import HomeThirdSection from "./sections/HomeThirdSection";
import HomeFourthSection from "./sections/HomeFourthSection";
const { home } = styles;
const Home = () => {
  return (
    <div className={home}>
      <HomeSection></HomeSection>
      <HomeSecondSection></HomeSecondSection>
      <HomeThirdSection></HomeThirdSection>
      <HomeFourthSection></HomeFourthSection>
    </div>
  );
};

export default Home;
