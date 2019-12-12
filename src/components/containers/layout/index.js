import React from "react";
import {Switch, Route} from "react-router";

import Phones from "../phones/index";

const routes =(
    <Switch>
        <Route exact path='/' component={Phones}  />
    </Switch>
);

const Layout = () => (
    <div> {routes} </div>
);


export default Layout