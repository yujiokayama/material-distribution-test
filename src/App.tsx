import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Auth";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import SearchResult from "./views/SearchResult";
import NotFound from "./views/NotFound";

import Header from "./components/Header";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search/:searchWord" component={SearchResult} />
          {/* <Route component={NotFound} /> */}
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default App;
