import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const renderEntriesTree = (value) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App data={value} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default renderEntriesTree;
