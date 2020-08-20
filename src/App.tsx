import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./components/Auth";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default App;
