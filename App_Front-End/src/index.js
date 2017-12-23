import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory,IndexRedirect,browserHistory } from 'react-router'

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'

//*********import the pages************************//
import NotFound from './Containers/404';
import AddBook from './Containers/AddBook' ;
import Books from './Containers/Books' ;
import Contact from './Containers/Contact';
import Home from './Containers/Home' ;
import Login from './Containers/login';
import Profile from './Containers/Profile';
import Register from  './Containers/Register';

import Demande from './Containers/Demande' ;



import Dashboard from './Containers/Dashboard' ;
import Notifications from './Containers/Notifications' ;
import MyLibrary from './Containers/MyLibrary' ;



ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
 <IndexRedirect to="/Home" />

  <Route path="/App" component={App}/>
       <Route path="/Home" component={Home}/>
      <Route path="/Books" component={Books}/>
      <Route path="/SignIN" component={Login}/>
    <Route path="/Register" component={Register}/>


 <Route path="/Profile" component={Profile}/>
 <Route path="/Dashboard" component={Dashboard}/>
 <Route path="/Notifications" component={Notifications}/>
 <Route path="/MyLibrary" component={MyLibrary}/>
 <Route path="/Demande" component={Demande}/>

 <Route path="/Contact" component={Contact}/>
 <Route path="/AddBook" component={AddBook}/>
 <Route path="/NotFound" component={NotFound}/>
  </Route>
    </Router>, document.getElementById('root'));
registerServiceWorker();
