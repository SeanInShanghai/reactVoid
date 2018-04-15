/**
 * Created by fsg on 2018/3/21.
 */
import React from 'react';
import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
const {Header, Content, Footer, Sider} = Layout;

class MyHeader extends Component {
    render(){
        return(
            <Layout>
                <Header className="header" style={{backgroundColor:'#65A360', height:'180px'}}>
                    <div className="logo" />
                    <div class="header">
                        <div class="wrap">
                            <div class="header-top">
                                <div class="logo">
                                    <img src={require('./pages/images/logo.png')} alt=""/>
                                </div>
                                <div class="cart">
                                    <div class="span6 header-sidebar" data-motopress-type="dynamic-sidebar" data-motopress-sidebar-id="footer-sidebar-4">
                                        <div id="text-6" class="visible-all-devices " style={{width:'357.11px', height:'53px'}}>
                                            <div class="textwidget">
                                                <div class="section group" style={{display:'none'}}>
                                                    <a href="#" class="login-btn">注册</a>
                                                    <a href="#" class="register-btn">登录</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div><img style={{width:'auto'}} src={require('./pages/images/footprint.png')} alt="" /></div>

                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </Header>
                <Header className="header" style={{backgroundColor:'#232323'}}>

                </Header>
            </Layout>

        );
    }
}

export default MyHeader;