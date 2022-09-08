import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.onClick}
      <span className={classes.down_arrow}>&#8595; </span>
    </button>
  );
};

export default Button;
