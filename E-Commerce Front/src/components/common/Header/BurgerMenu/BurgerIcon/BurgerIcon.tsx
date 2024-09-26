import { TBurgerIconProps } from "../../../../../types/headerTypes";
import styles from "../burgerMenu.module.css";
const { burger, burgerOpen } = styles;

function BurgerIcon({
  isBurgerOpened,
  setIsBurgerOpened,
  setIsCategoriesOpened,
}: TBurgerIconProps) {

  
  return (
    <div
      onClick={() => {
        setIsBurgerOpened(!isBurgerOpened);
        setIsCategoriesOpened(false);
      }}
      className={`${burger} ${isBurgerOpened ? burgerOpen : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerIcon;
