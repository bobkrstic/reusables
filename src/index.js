import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// what do i want to render and where do i want to render it?
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
