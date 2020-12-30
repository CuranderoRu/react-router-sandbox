import './App.scss';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from '../Nav/Nav'
import About from '../About/About'
import Content from '../Content/Content'

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <Nav />
                    <Switch>
                        <Route exact path='/about' component={About} />
                        <Route exact path='/content' component={Content} />
                    </Switch>
                </div>
            </Router>
        )
    }
}