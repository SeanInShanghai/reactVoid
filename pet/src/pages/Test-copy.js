/**
 * Created by fsg on 2018/3/20.
 */

import React, { Component } from 'react';
import { Carousel } from 'antd';
import './Test.css';

//前台



class Test extends Component {
    render(){
        return(
            <div>
                <Carousel autoplay>
                    <div><h3><img src={require('./images/banner1.jpg')}/></h3></div>
                    <div><h3><img src={require('./images/banner2.jpg')}/></h3></div>
                    <div><h3><img src={require('./images/banner3.jpg')}/></h3></div>
                    <div><h3><img src={require('./images/banner4.jpg')}/></h3></div>
                    <div><h3><img src={require('./images/banner5.jpg')}/></h3></div>
                </Carousel>
            </div>

        );
    }
}

export default Test;