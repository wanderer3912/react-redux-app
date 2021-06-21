import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PageNotFound } from "./components/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />

        <NavBar />

        <Switch>
          <Route  path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Dashboard} />
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
