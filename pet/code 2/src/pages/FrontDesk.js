/**
 * Created by fsg on 2018/3/20.
 */

import React from 'react';
import {Component} from 'react';
import {Carousel} from 'antd';
import './frontdesk.css';
require('./css/style.css');
require('./css/slider.css');

//前台


function onChange(a, b, c) {
    console.log(a, b, c);
}

class Test extends Component {
    render(){
        return(

            <div>

{/*                 <div class="header">
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
                </div>*/}


                <div style={{marginTop:'3px'}}>
                    <Carousel autoplay>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner1.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner2.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner3.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner4.jpg')}/></h3></div>
                        <div><h3><img style={{width:'100%'}} src={require('./images/banner5.jpg')}/></h3></div>
                    </Carousel>
                </div>



             </div>
        );
    }
}

export default Test;