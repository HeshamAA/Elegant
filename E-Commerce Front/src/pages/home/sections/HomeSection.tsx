import { useEffect } from "react";
import styles from "../home.module.css";
import { Link } from "react-router-dom";
import useHome from "../../../hooks/useHome";
import AOS from "aos";

const { homeSection, timerWrapper, time, signUpButton } = styles;
const HomeSection = () => {
  const {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    hours,
    setHours,
    setDays,
    timeData,
  } = useHome();

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds <= 0) {
        setSeconds(59);
        setMinutes((prev: number) => prev - 1);
      } else {
        setSeconds((prev: number) => prev - 1);
      }

      if (minutes <= 0 && seconds <= 0) {
        setMinutes(59);
        setHours((prev: number) => prev - 1);
      }

      if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        setHours(23);
        setDays((prev: number) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, minutes, hours]);
  
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);



  const countDownTimer = timeData.map((el, index) => {
    return (
      <div key={index} className={time}>
        <div style={{ fontSize: "50px", fontWeight: "bold" }}>{el.value}</div>
        <div>{el.label}</div>
      </div>
    );
  });

  return (
    <section className={` ${homeSection}`}>
      <div data-aos="fade-up" className="flexMiddleScreen container">
        <div>
          Hurry up,<div>Our biggest sale</div> is going to end
        </div>
        <div>
          Time left until
          <div>our biggest sales of the year ends</div>
        </div>
        <div className={timerWrapper}>{countDownTimer}</div>
        <div>
          What are you waiting for!
          <Link to="/register" className={signUpButton}>
            Sign Up
          </Link>{" "}
          now
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
