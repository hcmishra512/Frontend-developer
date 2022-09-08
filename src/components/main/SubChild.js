import React from "react";
import BasicTimePicker from "../BasicTimePicker";
import Card from "../UI/Card";
import classes from "./SubChild.module.css";

const SubChild = () => {
  return (
    <>
      <h2>What time do you get of bed to start your day?</h2>
      <Card>
        <BasicTimePicker className={classes.sub_child} />
        <span className={classes.sub_child_span}>&#x27A4;</span>
      </Card>
    </>
  );
};

export default SubChild;
