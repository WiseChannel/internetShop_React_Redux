import React from "react";
import {Switch, Route} from "react-router";

import Phones from "./containers/phones/index";
import Phone from "./containers/phone/index";

export default (
    <Switch>
        <Route exact path='/' component={Phones}  />
        <Route path='/phone:id' component={Phone}  />
    </Switch>
);