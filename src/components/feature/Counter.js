import React from "react";
import store from "../store/store";
import "./Counter.css";

class Counter extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Counter</h1>
        <h2>{store.getState()}</h2>
        <button
          onClick={() => {
            store.dispatch({ type: "INCREMENT" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "DECREMENT" });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
