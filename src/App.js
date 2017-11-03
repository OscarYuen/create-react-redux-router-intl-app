import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {FormattedMessage} from 'react-intl';
import {Route, Link} from 'react-router-dom'
import Home from './containers/Home';
import About from './containers/About';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About</Link>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <FormattedMessage
                    id="welcome"
                    defaultMessage="Hello This is Create React App With redux, router v4, yahoo intl!"
                />
                <main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about-us" component={About}/>
                </main>

            </div>
        );
    }
}

export default App;
