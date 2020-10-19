import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/feature/Counter";
import store from "./components/store/store";
import "./index.css";

/*
import { createStore } from "redux";

//reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//component
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

//store
const store = createStore(counter);

//react render
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      //actions
      onIncrement={() =>
        store.dispatch({
          type: "INCREMENT",
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: "DECREMENT",
        })
      }
    />,
    document.getElementById("root")
  );
};
*/

const render = () => {
  ReactDOM.render(<Counter />, document.getElementById("root"));
};

store.subscribe(render);
render();
