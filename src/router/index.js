import React from "react";
import { Switch, Route } from "react-router-dom";
import Stylori from '../screens/Stylori/index'
import routes from "./routes";



export const RouterApp = () => {
	return (
        <Switch>
       <Route key="stylori" component={Stylori} path={routes.stylori} />
    </Switch>
	);
};

export default RouterApp;
