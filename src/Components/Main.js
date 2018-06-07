import React from "react"
import { Switch, Route } from "react-router-dom"

import profile from "./profile";
import product from "./product";
import Form from "./Form";
import Editproduct from "./Editproduct";

const Main =() =>(
    <Switch>
        <Route exact path='/profile' component={profile}/>
        <Route exact path='/product' component={product}/>
        <Route exact path='/Form' component={Form}/>
        <Route exact path='/Editproduct' component={Editproduct}/>
    </Switch>
);

export default Main;