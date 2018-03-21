/**
 * Created by fsg on 2018/3/20.
 */

import React from 'react';
import {Component} from 'react';
import { Carousel } from 'antd';
import './Test.css';

//前台



class Test extends Component {
    render(){
        return(
            <div>
                Test
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>

        );
    }
}

export default Test;