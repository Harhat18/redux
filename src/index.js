import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
function reducer(state, action) {
  if (action.type === "changeTheState") {
    return action.payload.newState;
  }

  return "state";
}
const store = createStore(reducer);

console.log(store.getState());

const action = {
  type: "changeTheState",
  payload: {
    newState: "my New State",
  },
};
const action2 = {
  type: "changeTheState",
  payload: {
    newState: "my New State 2",
  },
};
store.subscribe(() => {
  console.log("store updated");
  console.log(store.getState());
});

store.dispatch(action);
store.dispatch(action2);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
