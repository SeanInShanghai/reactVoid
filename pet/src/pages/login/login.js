/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');
require('../js/login');

class Login extends Component{
    render(){
        return(

            <Layout>
                <MyHeader/>

                <div class="main">
                    <div class="content-top">
                        <div class="wrap">




                        </div>
                    </div>
                    <div class="content-bottom">
                        <div class="wrap">
                            <div class="col span_2_of_3">
                                <div class="login-form">

                                    <h3>欢迎您！</h3>
                                    <form method="post" action="../php/login.php" onsubmit="return submitA()" >


                                        <div>
                                            <span><input name="user" id="user" type="text" class="textbox" placeholder="请输入账户" onblur="checkUser()"/></span>
                                            <span id="user_pass"></span>
                                            <br/>
                                        </div>
                                        <div>
                                            <span><input name="key" id="key" type="password" class="textbox" placeholder="请输入密码" onblur="checkKey()"/></span>
                                            <span id="key_pass"></span>
                                            <br/>
                                        </div>
                                        <div>
                                            <span><input type="submit" id="submit" value="登录" /></span>
                                            <br/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Login;