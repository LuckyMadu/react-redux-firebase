import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projetcs/ProjectDetails";
import SignedIn from "./components/auth/SignedIn";
import SignedUp from "./components/auth/SignUp";
import CreateProject from "./components/projetcs/CreateProject";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignedIn} />
          <Route path="/signup" component={SignedUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
