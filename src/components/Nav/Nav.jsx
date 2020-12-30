import './Nav.scss';
    
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
    
export default class Nav extends Component {
    render(){
        const navItems = [
            {
                url: '/about',
                text: 'About'
            },
            {
                url: '/content',
                text: 'Content'
            },
        ];

        const navList = navItems.map((item, index) => {
            return <li key={'navItem' + index}>
            <NavLink to={item.url} >{ item.text }</NavLink></li>;
            });

        return(
            <nav className="nav">
                <h3>Logo</h3>
                <ul className="nav-links">
                    { navList }
                </ul>
            </nav>
        )
    }
}