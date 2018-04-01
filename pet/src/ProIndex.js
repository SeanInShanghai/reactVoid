/**
 * Created by fsg on 2018/4/1.
 */
import React from 'react';
import {Component} from 'react';
import CurHeader from './CurHeader';
import {Carousel} from 'antd';
import {Switch, Route, Link} from 'react-router-dom';
require('./pages/frontdesk.css');
require('./pages/css/style.css');
require('./pages/css/slider.css');

class ProIndex extends Component {
    render(){
        return (
            <div>
                <CurHeader/>
                <div style={{marginTop:'3px'}}>
                    <Carousel autoplay>
                        <div><h3><img style={{width:'100%'}} src={require('./pages/images/banner1.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./pages/images/banner2.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./pages/images/banner3.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./pages/images/banner4.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./pages/images/banner5.jpg')}/></h3></div>
                    </Carousel>
                </div>
                <div class="main">
                    <div class="content-top">
                        <div class="wrap">
                            <div class="section group">
                                <div class="col_1_of_3 span_1_of_3">
                                    <div class="css3">
                                        <div class="grid-img">
                                            <Link to="/view/view"><img src={require('./pages/images/view.png')} alt=""/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col_1_of_3 span_1_of_3">
                                    <div class="css3">
                                        <div class="grid-img">
                                            <Link to="/learn"><img src={require('./pages/images/learn.png')} alt=""/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col_1_of_3 span_1_of_3">
                                    <div class="css3">
                                        <div class="grid-img">
                                            <Link to="/test"><img src={require('./pages/images/test.png')} alt=""/></Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProIndex;