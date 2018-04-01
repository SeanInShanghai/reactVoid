/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';

require('../css/style.css');
require('../css/slider.css');
require('../js/register');

class Register extends Component{
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
                                <div class="register-form">
                                    <h3>欢迎您！</h3>
                                    <form method="post" action="../php/register.php" onsubmit="return submitB()">


                                        <div>

                                            <span><input name="user" id="user" type="text" class="textbox" placeholder="请输入用户名" onblur="checkUser()"/></span>
                                            <span id="user_pass"></span>
                                            <br/>
                                        </div>
                                        <div>

                                            <span><input name="key" id="key" type="password" class="textbox" placeholder="请输入密码" onblur="checkKey()"/></span>
                                            <span id="key_pass"></span>
                                            <br/>
                                        </div>
                                        <div>

                                            <span><input name="comfirm_key" id="comfirm_key" type="password" class="textbox" placeholder="请确认密码" onblur="comfirm_key()"/></span>
                                            <span id="comfirm_key_pass"></span>
                                            <br/>
                                        </div>
                                        <div>
                                            <span><input id="submit" type="submit" value="注册" /></span>
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

export default Register;