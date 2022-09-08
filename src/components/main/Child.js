import React, { useState } from "react";
import BasicTimePicker from "../BasicTimePicker";
import Card from "../UI/Card";
import classes from "./Child.module.css";

const Child = () => {
  return (
    <>
      <h2 className={classes.child}>What time do you go to bed for sleep?</h2>
      <Card>
        <BasicTimePicker className={classes.child} />
        <span className={classes.child_span}>&#x27A4;</span>
      </Card>
    </>
  );
};

export default Child;
