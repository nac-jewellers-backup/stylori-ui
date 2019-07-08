import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Stylori } from '../screens'
import routes from "./routes";



export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route key="stylori" component={Stylori} path={routes.stylori} />
            </Switch>
        </Router>
    );
};

export default RouterApp;
