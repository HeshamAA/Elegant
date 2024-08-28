import styles from "./themes.module.css";
import { IoIosColorPalette } from "react-icons/io";
import useThemes from "../../../hooks/useThemes";


const { themes, themesContainer } = styles;

const Themes: React.FC = () => {
  const { themesAppearance, themesAppearanceHandler, themeHandlers } =
    useThemes();

 

  return (
    <div
      style={{ transform: `translateX(${themesAppearance})` }}
      className={themes}
    >
      <div onClick={themesAppearanceHandler}>
        <IoIosColorPalette size={40} />
      </div>
      <div className={themesContainer}>
        {themeHandlers.map((el,index) => {
          return <div key={index} onClick={el}></div>;
        })}
      </div>
    </div>
  );
};

export default Themes;
