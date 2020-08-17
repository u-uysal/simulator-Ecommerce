import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Error from "./pages/Error";
import Home from "./pages/Home";

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

        <Route path="/:slug" component={Single}></Route>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
