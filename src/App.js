import "./App.css";
import { useState } from "react";
import Button from "./components/UI/Button";
import Child from "./components/main/Child";
import SubChild from "./components/main/SubChild";
import ChildSubChild from "./components/main/ChildSubChild";
import Home from "./components/home/Home";

const childOne = "10:50PM";
const childTwo = "10:00AM";

function App() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    if (count === 4) {
      return count == 0;
    }
    setCount(count + 1);
    console.log({ count });
  };

  return (
    <div className="App">
      {count === 0 ? (
        <Home />
      ) : count === 1 ? (
        <Child item={childOne} />
      ) : count === 2 ? (
        <SubChild item={childTwo} />
      ) : count === 3 ? (
        <ChildSubChild />
      ) : (
        <h2>"You take a full sleep so I think, you don't have any problem"</h2>
      )}

      <div className="button">
        <Button onClick={countHandler} />
      </div>
    </div>
  );
}

export default App;
