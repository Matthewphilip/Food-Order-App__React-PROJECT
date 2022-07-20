import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; // one $ to display the dollar sign and another for use with the curly brackets. (.toFixed(2) ensures we always render two decimal places). this variable is rendered below in the return statement within a div

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;

// props coming from AvailableMeals component (mealsList variable on line 32)

// this component details how to display the list of available meals we map through within AvailableMeals component

// line 13 - added a MealItemForm component to store the code / logic in a seperate component - within this second div we will have a simple form which allows users to  enter the amount of meals you want to add to the cart
