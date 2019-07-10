import React from "react";
import { Switch, Route } from "react-router-dom";
import { Stylori } from '../screens'
import routes from "./routes";



export const RouterApp = () => {
    return (
        <Switch>
            <Route key="stylori" component={Stylori} exact path={routes.stylori} />
            <Route key="stylori" component={Stylori} exact path={'/'} />
        </Switch>
    );
};

export default RouterApp;
