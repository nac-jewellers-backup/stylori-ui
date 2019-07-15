import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Stylori } from '../screens'
import routes from "./routes";



export const RouterApp = () => {
    return (
        <Switch>
            <Redirect key="stylori-redirect" from="/" exact to={routes.stylori} />
            <Route key="stylori" component={Stylori} exact path={routes.stylori} />
        </Switch>
    );
};

export default RouterApp;
