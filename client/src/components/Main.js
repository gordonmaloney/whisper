import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Whisp } from "./Whisp";

export const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <center><Whisp /></center>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
