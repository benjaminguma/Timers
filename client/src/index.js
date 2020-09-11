import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Board from "./tic-tac-toe/Board";
import * as serviceWorker from "./serviceWorker";
// ReactDOM.render(<Board />, document.getElementById("root"));

import TimerDashboard from "./timers/pages/TimersDashboard";
ReactDOM.render(<TimerDashboard />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// import A from "./demo/A";
// ReactDOM.render(<A />, document.getElementById("root"), () => {
//   console.log("app is mounted in root");
// });
serviceWorker.unregister();
