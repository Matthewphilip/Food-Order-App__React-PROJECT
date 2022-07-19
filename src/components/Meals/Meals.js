import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;

// AvailableMeals.js component renders the array of meal objects into a list

// MealsSummary.js component renders a welcome message

// Meals.js brings them together and renders them both, and then is itself rendered within App.js below the Header component
