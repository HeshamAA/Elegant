import { useNavigate } from "react-router-dom";
import styles from "./error404.module.css";
import { TbError404Off } from "react-icons/tb";
import { HiOutlineEmojiSad } from "react-icons/hi";
import PagesFirstSection from "../PagesFirstSection/PagesFirstSection";
const { error404Container, errorText, info, errorMessage, goHome } = styles;
export const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <PagesFirstSection title="">
        <TbError404Off className={errorText} />
      </PagesFirstSection>

      <section className={error404Container}>
        <HiOutlineEmojiSad className={errorText} />

        <div className="flex">
          <div className={info}>Oops! Not Found</div>
        </div>

        <div className={errorMessage}>
          The page you requested for is not found.
        </div>

        <button
          className={goHome}
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Go Home
        </button>
      </section>
    </>
  );
};
