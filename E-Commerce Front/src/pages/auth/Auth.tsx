import styles from "./auth.module.css";
import { useLocation } from "react-router-dom";
import Register from "./register/Register";
import Login from "./login/Login";
import AuthContentSection from "./authContentSection/AuthContentSection";

const { authSection } = styles;

function Auth() {
  const location = useLocation();

  return (
    <section className={authSection}>
      <AuthContentSection></AuthContentSection>
      {location.pathname.includes("register") ? (
        <Register></Register>
      ) : (
        <Login></Login>
      )}
    </section>
  );
}

export default Auth;
