import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import AFakeList from './Experiments/AFakeList'
import AnEditableList from './Experiments/AnEditableList'
import ResizableGrid from './Experiments/ResizableGrid'

class Experiments extends React.Component{
    render(){
        return(<Router>
            <p>These are my (simple) development experiments.</p>
                <nav>
                    <ul>
                        <li>
                        <Link to={process.env.APP_DIR + `/experiments/afakelist`}>A fake list</Link>
                    </li>
                    <li>
                        <Link to={process.env.APP_DIR + `/experiments/aneditablelist`}>An editable list</Link>
                    </li>
                    <li>
                        <Link to={process.env.APP_DIR + `/experiments/resizablegrid`}>Resizable grid</Link>
                    </li>
                    </ul>
                </nav>
            <div>
                <br />
                <Switch>
                    <Route path={`/experiments/afakelist`}>
                        <AFakeList />
                    </Route>
                    <Route path={`/experiments/aneditablelist`}>
                        <AnEditableList />
                    </Route>
                    <Route path={`/experiments/resizablegrid`}>
                        <ResizableGrid />
                    </Route>
                </Switch>
            </div>
        </Router>)
    }
}

export default Experiments
