import { THeaderIcons } from "../../../../types/headerTypes";


function HeaderIcons({ className, value, children }: THeaderIcons) {
  return (
    <div style={{ position: "relative" }}>
      <div className={className}>{value}</div>
      {children}
    </div>
  );
}

export default HeaderIcons;
