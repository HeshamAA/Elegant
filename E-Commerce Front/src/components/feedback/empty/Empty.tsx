import styles from "./empty.module.css";
const { empty } = styles;

function Empty({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <div className={empty}>
      {children}
      <div>{text}</div>
    </div>
  );
}

export default Empty;
