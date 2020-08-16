import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Error from "./pages/Error";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Single from "./pages/SingleP";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={AboutUs} />
        <Route path="/products" exact component={Products}></Route>
        <Route path="/products/:slug" exact component={Single}></Route>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
