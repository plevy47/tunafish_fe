import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import TaskEntry from "./components/taskEntryPage/TaskEntry";
import Signup from "./components/signupPage/Signup";
import PricingWidget from "./components/pricingWidget/PricingWidget";
import HomePage from "./components/homePage/HomePage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <div>
                <Switch>
                    < Route
                        exact path="/"
                        component={HomePage}>
                    </Route>
                    < Route
                        exact path="/task-entry"
                        component={TaskEntry}>
                    </Route>
                    < Route
                        exact path="/signup"
                        component={Signup}>
                    </Route>
                    < Route
                        exact path="/pricing"
                        component={PricingWidget}>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)