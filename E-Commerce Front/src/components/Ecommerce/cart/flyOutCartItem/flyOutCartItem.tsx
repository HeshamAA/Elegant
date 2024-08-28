import styles from "../flyOutCart/flyOutCart.module.css";
import { removeProductFromCart } from "../../../../store/cart/addToCart/addToCartSlice";
import useCart from "../../../../hooks/useCart";
import CartItemQuantityChange from "../cartItemQuantityChange/CartItemQuantityChange";
import { TProducts } from "../../../../types/products";
const { flyOutCartItem } = styles;
function FlyOutCartItem({
  id,
  img,
  title,
  quantity = 1,
  price,
  sizes = [],
}: TProducts) {
  const { dispatch, sizeChangeHandler } = useCart();

  const changeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = e.target.value;
    sizeChangeHandler(id, newSize);
  };
  return (
    <div className={flyOutCartItem}>
      <div>
        <img src={img}></img>
        <div>
          <div>{title}</div>
          <div>
            <label>Size: </label>
            <select onChange={changeSize}>
              {sizes.map((el) => {
                return <option value={el}>{el}</option>;
              })}
            </select>
          </div>

          <CartItemQuantityChange
            id={id}
            quantity={quantity}
          ></CartItemQuantityChange>
        </div>
      </div>
      <div>
        <div>{price.toFixed(2)}$</div>
        <button
          onClick={() => {
            dispatch(removeProductFromCart(id));
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default FlyOutCartItem;
