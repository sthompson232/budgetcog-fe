import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {

    render() {
        return (
            <h1>Hello</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));