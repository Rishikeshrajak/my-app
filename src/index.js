import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './Todo_List/Todo'
import Home from './Home'
import Time from './time'
import Component from './Components/App3'


ReactDOM.render((
    <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/app/" component={App} />
      <Route path="/time/" component={Time} />
      <Route path="/comp/" component={Component} />
    </div>
    </Router>
 ), document.getElementById('root'))