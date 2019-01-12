import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Es6 from './Es6';


ReactDOM.render((
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app/">App</Link>
          </li>
          <li>
            <Link to="/es6/">Es6</Link>
          </li>
          
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/app/" component={App} />
      <Route path="/es6/" component={Es6} />
    </div>
    </Router>
 ), document.getElementById('root'))

 