import { useSelector } from "react-redux";
import CartPage from "../Components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <CartPage key={`${item.id}-${index}`} item={item} />
          ))}
        </ul>
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
