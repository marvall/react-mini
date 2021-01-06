import React from "react";
import Gallery from "./component/content/gallery/gallery";
import Info from "./component/content/info";
import Contacts from "./component/content/contacts";
import Banner from "./component/content/banner";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import "./scss/reset.scss";
import "./scss/util/font.scss";
import "./scss/app.scss";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Route exact path="/" component={Banner} />
        <Route
          path="/gallery"
          render={() => {
            return <Gallery state={props.state} />;
          }}
        />
        <Route path="/info" component={Info} />
        <Route path="/contacts" component={Contacts} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
