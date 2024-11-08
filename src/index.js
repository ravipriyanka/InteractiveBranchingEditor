// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// In index.js or App.js
import "./index.css"; // Importing the CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
