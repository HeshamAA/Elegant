import styles from "./cartPage.module.css";
import useCart from "../../../hooks/useCart";
import Empty from "../../../components/feedback/empty/Empty";
import { TbShoppingCartOff } from "react-icons/tb";
import { useEffect, useState } from "react";
import getCart from "../../../store/cart/thunk/getCart";
import CartProductsStep from "../cartProductsStep/CartProductsStep";
import CartHeader from "../../../components/Ecommerce/cart/cartHeader/CartHeader";
import CheckoutDetails from "../cartCheckoutDetailsStep/CheckoutDetails";
import CartOrderComplete from "../cartOrderCompleteStep/cartOrderComplete";

const { cartPageSection } = styles;
function CartPage() {
  const { dispatch } = useCart();
  const [formStep, setFormStep] = useState(1);
  const { fullProductsWithQuantity } = useCart();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  const renderMutlipleForms = () => {
    switch (formStep) {
      case 1:
        return (
         
            <CartProductsStep
              setNextStep={() => setFormStep(2)}
              />
         
        );
      case 2:
        return (
     
            <CheckoutDetails formStepBackward={() => setFormStep(1)} formStepForward={() => setFormStep(3)}/>
            
         
        );
      case 3:
        return (
          <CartOrderComplete/>
        );
      default:
        return <div>1</div>;
    }
  };

  return (
    <section className={cartPageSection}>
      {fullProductsWithQuantity.length === 0 ? (
        <Empty
          children={<TbShoppingCartOff size={200} />}
          text="Your cart is empty"
        />
      ) : (
        <>
          <CartHeader formStep={formStep} />
          {renderMutlipleForms()}
        </>
      )}
    </section>
  );
}

export default CartPage;
