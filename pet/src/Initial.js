/**
 * Created by fsg on 2018/3/19.
 */
import React from 'react';
import {Component} from 'react';
import {View} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import Home from './Home';
//初始页面

class Initial extends Component {

/*    componentDidMount() {
        this.props.history.push('/home');
    }*/

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.history.push('/home');
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    Redirect!!!
                </button>
            </div>
        );
    }
}

export default withRouter(Initial);