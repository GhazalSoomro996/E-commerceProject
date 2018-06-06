import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route, 
    Switch
} from "react-router-dom";
import LoginOptions from "./loginOptions/index.js";
import Signup from "./signup/index.js";
import Empsignup from "./empsignup/index.js";
import Adminsignup from "./adminsignup/index.js";
import Login from "./login/index.js";
import Emplogin from "./emplogin/index.js";
import Adminlogin from "./adminlogin/index.js";
import Dashboard from "./dashboard/index.js";
import Empdashboard from "./empdashboard/index.js";
import Admindashboard from "./admindashboard/index.js";
import Empaddproduct from "./empaddproduct/index.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(  <BrowserRouter>
    <Switch>
         <Route exact path='/' name='LoginOptions' component={LoginOptions} />
         <Route exact path='/loginOptions' name='LoginOptions' component={LoginOptions} />
         <Route exact path='/login' name='Login' component={Login} />
         <Route exact path='/emplogin' name='Emplogin' component={Emplogin} />
         <Route exact path='/adminlogin' name='Adminogin' component={Adminlogin} />
         <Route exact path='/signup' name='Signup' component={Signup} />
         <Route exact path='/empsignup' name='Empsignup' component={Empsignup} />
         <Route exact path='/adminsignup' name='Adminsignup' component={Adminsignup} />
         <Route exact path='/dashboard' name='Dashboard' component={Dashboard} />
         <Route exact path='/empdashboard' name='Empdashboard' component={Empdashboard} />
         <Route exact path='/admindashboard' name='Admindashboard' component={Admindashboard} />
         <Route exact path='/empaddproduct' name='Empaddproduct' component={Empaddproduct} />

      
    </Switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
