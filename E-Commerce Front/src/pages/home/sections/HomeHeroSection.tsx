import styles from "../home.module.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const { homeHeroSection } = styles;
import swip1 from "../../../assets/swip1.jpg";
import swip2 from "../../../assets/swip2.jpg";
import swip3 from "../../../assets/swip3.jpg";
import swip4 from "../../../assets/swip4.jpg";

function HomeHeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // مدة التأثير
    });
  }, []);

  const imagesData = [swip1, swip2, swip3, swip4];
  return (
    <section className={homeHeroSection}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          minHeight: "100vh",
        }}
      >
        {imagesData.map((bg, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              minHeight: "100vh",
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
      <div
        className="flexMiddleScreen"
        style={{
          height: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 2,
        }}
      >
        <div className="flex">
          <h1>
            <span>Discover</span> <br></br> the Essence of Timeless Elegance
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
