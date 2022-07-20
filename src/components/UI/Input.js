import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;

// reuseable input field component created for input into MealItemForm.js

// props.label and props.input coming from lines 8 & 9 from MealItemForm.js
