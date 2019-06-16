import React from 'react';
import ReactDOM from 'react-dom';
import "./global.css";

class App extends React.Component {
    render () {
        return <h1 className="header">React App</h1>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
