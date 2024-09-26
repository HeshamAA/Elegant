export type THeaderIcons = {
    className: string;
    value: number;
    children: React.ReactNode;
  };

  export type TBurgerIconProps = {
    isBurgerOpened: boolean;
    setIsBurgerOpened: (value: boolean) => void;
    setIsCategoriesOpened: (value: boolean) => void;
  };