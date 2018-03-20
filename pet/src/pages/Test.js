/**
 * Created by fsg on 2018/3/20.
 */

import React from 'react';
import {Component} from 'react';

//前台
class Test extends Component {
    render(){
        return(

            <div>

                 <div class="header">
                     <div class="wrap">
                         <div class="header-top">
                             <div class="logo">
                                <a href="index.html"><img src={require('./images/logo.png')} alt=""/> </a>
                             </div>
                             <div class="cart">
                                 <div class="span6 header-sidebar" data-motopress-type="dynamic-sidebar" data-motopress-sidebar-id="footer-sidebar-4">
                                     <div id="text-6" class="visible-all-devices "><div class="textwidget">
                                         <div class="section group">
                                             <a href="#" class="login-btn">注册</a>
                                             <a href="#" class="register-btn">登录</a></div>
                                     </div></div>
                                     <div><img src={require('./images/footprint.png')} alt="" /></div>

                                 </div>

                             </div>
                             <div class="clear"></div>
                         </div>
                     </div>
                 </div>
                <div class="header-bottom">
                    <div class="wrap">
                        <div id='cssmenu'>

                        </div>

                        <div class="clear"></div>
                    </div>
                </div>

                <div class="slider">
                    <div class="slider-wrapper theme-default">
                        <div id="slider" class="nivoSlider">
                            <img src="../images/banner1.jpg" data-thumb="images/1.jpg" alt="" />
                            <img src="../images/banner2.jpg" data-thumb="images/2.jpg" alt="" />
                            <img src="../images/banner3.jpg" data-thumb="images/3.jpg" alt="" />
                            <img src="../images/banner4.jpg" data-thumb="images/4.jpg" alt="" />
                            <img src="../images/banner5.jpg" data-thumb="images/5.jpg" alt="" />
                        </div>
                    </div>
                </div>

                <div class="main">
                    <div class="content-top">
                        <div class="wrap">
                            <div class="section group">
                                <div class="col_1_of_3 span_1_of_3">
                                    <div class="css3">
                                        <div class="grid-img">
                                            <img src="../images/view.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col_1_of_3 span_1_of_3">
                                    <div class="css3">
                                        <div class="grid-img">
                                            <img src="../images/learn.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col_1_of_3 span_1_of_3">
                                    <div class="css3">
                                        <div class="grid-img">
                                            <img src="../images/test.png" alt=""/>
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

export default Test;