import React from "react";
import Content from "./component/content/content";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Nav from "./component/nav/nav";
import "./scss/app.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
