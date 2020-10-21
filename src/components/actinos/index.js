export const INCREMENT = () => {
  return {
    type: "INCREMENT",
  };
};

export const DECREMENT = () => {
  return {
    type: "DECREMENT",
  };
};

// export const asyncINCREMENT = ({ dispatch }) => {
//   setTimeout(() => {
//     dispacth(INCREMENT());
//   }, 1000);
// };

export const asyncDECREMENT = () => {
  return (dispacth) => {
    setTimeout(() => {
      dispacth(DECREMENT);
    }, 1000);
  };
};
