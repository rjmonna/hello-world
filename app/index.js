import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(<React.Fragment>
            <img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" id="octocat" alt="octocat-gif" />

            <p>Hello World! I'm rjmonna. This is my website!</p>

            <p>Building websites is fun! You should try it too.</p>
        </React.Fragment>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
