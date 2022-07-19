import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;

// line 5 & 14 - using built in Fragment wrapper in the return (rather than <div>)

// line 2 - import meals.jpg image from assets folder
// line 11 - this is how to add/render a local image in the return (could also add a URL as a 'src')
