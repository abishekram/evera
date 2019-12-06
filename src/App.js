import React from "react";
import "./App.css";
import EveHeader from "./components/eve-header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContent from "./components/index/index-content";
import TryoutContainer from "./components/tryit/tryout-container";

function App() {
  return (
    <div className="App">
      <Router>
        <EveHeader></EveHeader>
        <Switch>
          <Route exact path="/">
            <HomeContent />
          </Route>
          <Route path="/tryit">
            <TryoutContainer></TryoutContainer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
