import './App.scss';

import React, { Component } from 'react';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            chats: [
                { name: 'John', id: 1 },
                { name: 'Piotr', id: 2 },
                { name: 'Vasja', id: 3 },
            ],
            interval: null,
            newLogin: false,
            user: { login: '', id: 0 }
        }
    }

    componentDidUpdate() {
        console.log('Updated');
    }

    render() {

        return (
            <div className="app">
            Hello
            </div>
        )
    }
}