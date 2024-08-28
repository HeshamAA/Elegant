type THeaderIcons = {
  className: string;
  value: number;
  children: React.ReactNode;
};

function HeaderIcons({ className, value, children }: THeaderIcons) {
  return (
    <div style={{ position: "relative" }}>
      <div className={className}>{value}</div>
      {children}
    </div>
  );
}

export default HeaderIcons;
