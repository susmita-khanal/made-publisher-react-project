import React from "react";
import "./App.css";
import Menu from "./component/Menu";
import Storepage from "./component/Storepage";
import SinglePage from "./component/SinglePage";
import Journal from "./component/Journal";
import Publication from "./component/Publication";
import About from "./component/About";
import Follow from "./component/Storepage";
import Footer from "./component/Footer";
// import Follow from "./component/Follow";
import Cart from "./component/Cart";
import Login from "./component/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/journal" component={Journal} />
          <Route exact path="/SinglePage/:id" component={SinglePage} />
          <Route exact path="/publication" component={Publication} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/follow" component={Follow} /> */}
          <Route exact path="/cart" component={Cart} />
          {/* <Route exact path="/login" component={Login}/> */}
          <Route exact path="/" component={Storepage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
