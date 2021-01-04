import React from "react";
import Content from "./component/content/content";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import "./scss/app.scss";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route path="/" component={Content} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
