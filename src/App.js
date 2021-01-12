import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
      <BrowserRouter>


              <div style={{marginTop:"20px"}}>
                  <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route exact path="/login" component={LoginPage} />
                  </Switch>
              </div>

      </BrowserRouter>
  );
}

export default App;
