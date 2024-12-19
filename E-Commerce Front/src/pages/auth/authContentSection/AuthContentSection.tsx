import { Link } from "react-router-dom";
import styles from "../auth.module.css";
import photo from "../../../assets/auth.jpg";
const { authPhotoContent } = styles;
function AuthContentSection() {
  return (
    <div>
      <img alt="image" src={photo}></img>
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
  );
}

export default AuthContentSection;
