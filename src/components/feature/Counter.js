import React from "react";
import store from "../store/store";
import { INCREMENT, DECREMENT, asyncINCREMENT } from "../actinos/index";
import "./Counter.css";

class Counter extends React.Component {
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(asyncINCREMENT);
  // }
  render() {
    return (
      <div className="container">
        <h1>Counter</h1>
        <h2>{store.getState()}</h2>
        <button
          onClick={() => {
            store.dispatch(INCREMENT());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispatch(DECREMENT());
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
