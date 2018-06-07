import React from "react"
import { Switch, Route } from "react-router-dom"

import product from "./product/index.js";
import Edit from "./Edit/index.js";
import Approve from "./Approve/index.js";
import Form from "./Form/index.js";
import Profile from "./Profile/index.js";
import EditProduct from "./EditProduct/index.js"

const Main =() =>(
   <Switch>
       <Route exact path='/product' component={product}/>
       <Route exact path='/Edit' component={Edit}/>
       <Route exact path="/Approve" component={Approve}/>
       <Route exact path="/Form" component={Form}/>
       <Route exact path="/Profile" component={Profile}/>
       <Route exact path="/EditProduct" component={EditProduct}/>
       
       
       
   </Switch>
);

export default Main;