import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

// line 1 - import CartIcon from Cart folder

// line 4 - 12 - return / render the JSX displaying the imported CartIcon component, 'Your Cart' text and the total (which has been hard coded for now until we write the logic)
