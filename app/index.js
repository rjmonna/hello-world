import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Experiments from './Components/Experiments'

import './index.css';

class App extends React.Component{
    render(){return(<Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/experiments">Experiments</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div>
            <Switch>
                <Route path="/experiments">
                    <Experiments />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>)}
}

ReactDOM.render(
   <App />,
   document.getElementById('app')
)
