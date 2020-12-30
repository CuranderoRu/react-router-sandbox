import './About.scss';
    
import React, { Component } from 'react';
    
export default class About extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log('About componentDidMount', this.props.match);
    }

    render(){
        return(
            <article className="about">
                <h1>About page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim asperiores voluptates dicta doloremque iusto. Dolorum, similique fugit vitae cupiditate asperiores amet beatae illo aliquid deserunt, porro sunt eos. Ducimus, eum.</p>
            </article>
        )
    }
}