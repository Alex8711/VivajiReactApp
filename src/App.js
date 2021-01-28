import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePageTest from "./components/HomePageTest/HomePageTest";

function App() {
    return (
        <BrowserRouter>


            <div>
                <Switch>
                    <Route exact path="/" component={HomePageTest}/>
                    <Route exact path="/login" component={LoginPage}/>
                </Switch>
            </div>

        </BrowserRouter>
    );
}

export default App;
