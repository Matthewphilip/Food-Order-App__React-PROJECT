import MealItemForm from "./MealItemForm";
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
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
