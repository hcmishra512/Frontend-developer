import React from "react";
import Card from "../UI/Card";
import "./Main.css";

const Main = (props) => {
  return (
    <Card>
      <p>{props.title}</p>
      <input type="checkbox" className="checkbox" />
    </Card>
  );
};

export default Main;
