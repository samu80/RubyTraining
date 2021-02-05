import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import './index.css' ;
 
ReactDOM.render( <Router>
  <Login/>
</Router> ,
document.getElementById('root'));