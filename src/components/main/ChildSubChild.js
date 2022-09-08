import React from "react";
import classes from "./ChildSubChild.module.css";

const ChildSubChild = (props) => {
  return (
    <>
      <h2>Ok. How many hours sleep do you get in a typical night?</h2>
      <div className={classes.child_sub_child}>
        <hr />
        <select>
          Hrs.
          <option value="2hrs">2hrs</option>
          <option value="2hrs">3hrs</option>
          <option value="2hrs">4hrs</option>
          <option value="2hrs">5hrs</option>
          <option value="2hrs">6hrs</option>
          <option value="2hrs">7hrs</option>
          <option value="2hrs">8hrs</option>
          <option value="2hrs">9hrs</option>
          <option value="2hrs">10hrs</option>
        </select>
        <hr />
      </div>
    </>
  );
};

export default ChildSubChild;
