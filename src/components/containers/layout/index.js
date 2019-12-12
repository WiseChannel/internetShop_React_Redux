import React from "react";
import {Switch, Route} from "react-router";

import Phones from "../phones/index";

const routes =(
    <Switch>
        <Route exact path='/' component={Phones}  />
    </Switch>
);

const Layout = () => (
    <div className='viev-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    SideBar
                </div>
                <div className='col-md-9'>
                    {routes}
                </div>
            </div>
        </div>
    </div>
);


export default Layout