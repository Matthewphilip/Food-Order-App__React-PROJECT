import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}> Close </button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;

// line 3 - here we have just hard coded an array of cart items to map over for now, and then popped it in line 14 within return statement
