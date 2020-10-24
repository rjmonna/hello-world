import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AFakeList from './Experiments/AFakeList';

class Experiments extends React.Component{
    render(){
        return(<Router>
            <p>These are my (simple) development experiments.</p>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/experiments/afakelist`}>A fake list</Link>
                        </li>
                    </ul>
                </nav>
            <div>
                <Switch>
                    <Route path={`/experiments/afakelist`}>
                        <AFakeList />
                    </Route>
                </Switch>
            </div>
        </Router>)
    }
}

export default Experiments
