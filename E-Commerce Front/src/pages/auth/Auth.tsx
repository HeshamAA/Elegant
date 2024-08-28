import styles from "./auth.module.css";
import photo from "../../assets/regBackground.jpg";
import { Link, useLocation } from "react-router-dom";
import Register from "./register/Register";
import Login from "./login/Login";


const { authSection, authPhotoContent } = styles;

function Auth() {
  const location = useLocation();

  return (
    <section className={authSection}>
      <div>
        <img src={photo}></img>
        <div className={authPhotoContent}>
          <h1>
          <span>E</span>legant
          </h1>
          <div>
            Discover our latest collection of stylish and affordable clothing,
            designed to elevate your everyday look with ease and elegance,
            <Link to="/">visit us</Link>
          </div>
        </div>
      </div>
      {location.pathname.includes("register") ? (
        <Register></Register>
      ) : (
        <Login></Login>
      )}
    </section>
  );
}

export default Auth;
