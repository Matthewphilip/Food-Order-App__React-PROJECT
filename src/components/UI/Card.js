import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;

// we have created a component to display the available meals list data

// it takes {props.children} within the return so that whatever is passed between the opening and closing tage of the card component is subject to / used inside of the Card.js component
