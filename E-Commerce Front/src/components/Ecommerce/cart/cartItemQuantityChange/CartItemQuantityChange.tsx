import useCart from "../../../../hooks/useCart";
import {
  addToCart,
  cartProductQuantityDecrease,
} from "../../../../store/cart/addToCart/addToCartSlice";

type TQuantityChange = {
  id: string;
  quantity: number;
};
function CartItemQuantityChange({ id, quantity }: TQuantityChange) {
  const { dispatch } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle the quantity change here, if needed
    
  };
  return (
    <div className="flexBetween">
      <button
        onClick={() => {
          dispatch(cartProductQuantityDecrease(id));
        }}
      >
        -
      </button>
      <input
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
      ></input>
      <button
        onClick={() => {
          dispatch(addToCart(id));
        }}
      >
        +
      </button>
    </div>
  );
}

export default CartItemQuantityChange;
