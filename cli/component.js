//Run command:
//node cli/component.js -n CompName

const fs = require('fs');
const path = require('path')

const args = require('minimist')(process.argv.slice(2), { alias: { name: 'n' } });

const { name } = args;
const l_name = name.toLowerCase();

fs.mkdirSync(path.resolve(__dirname, '..', 'src', 'components', name));
fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', name, `${name}.jsx`),
    `import './${name}.scss';
    
import React, { Component } from 'react';
import PropTypes from 'prop-types';
    
export default class ${name} extends Component {
    static propTypes = {}

    static defaultProps = {}

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
    }

    componentDidUpdate() {
        console.log('${name} componentDidUpdate run after Render');
    }

    componentDidMount() {
        console.log('${name} componentDidMount run after Render');
    }

    componentWillUnmount() {
        console.log('${name} componentDidMount run just before destruction');
    }

    handleClick = (e) => {
        console.log('${name} Clicked');
        this.setState(
            {
                clicked: true,
            }
        )
    }

    render(){
        return(
            <div className="${l_name}" onClick={this.handleClick}></div>
        )
    }
}`,
);

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', name, `${name}.scss`),
    `.${l_name} {}`,
);