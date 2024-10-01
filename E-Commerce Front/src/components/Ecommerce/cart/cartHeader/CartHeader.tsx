
import styles from "./cartHeader.module.css";


const {
  headings,
  heading,
  done,
  disabled,
  active,
} = styles;

type TProps = {
  formStep: number;
}
function CartHeader({formStep}: TProps) {
  return (
    <div className={headings}>
      <div
        className={`${heading} ${(formStep === 1
          ? active
          : formStep > 1
          ? done
          : "")}`}
      >
        <div>1</div>
        <span>Shopping cart</span>
      </div>
      <div className={`${heading} ${formStep < 2 ? disabled : formStep > 2 ? done : active}`}>
        <div>2</div>
        <span>Checkout details</span>
      </div>
      <div className={`${heading} ${formStep < 3 ? disabled : active}`}>
        <div>3</div>
        <span>Order complete</span>
      </div>
    </div>
  );
}

export default CartHeader;
