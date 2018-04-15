/**
 * Created by fsg on 2018/3/31.
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import MyHeader from '../../CurHeader';
import {Switch, Route, Link} from 'react-router-dom';
require('../css/style.css');
require('../css/slider.css');
const {Header, Content, Footer, Sider} = Layout;

class Learn extends Component{
    render(){
        return(

            <Layout>

                <Layout>
                    {/*<Header className="header" style={{backgroundColor:'#65A360', height:'180px'}}>
                        <div className="logo" />
                        <div class="header">
                            <div class="wrap">
                                <div class="header-top">
                                    <div class="logo">
                                        <img src={require('../images/logo.png')} alt=""/>
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
                                            <div><img src={require('../images/footprint.png')} alt="" style={{width:'160px',height:'80px'}} /></div>

                                        </div>

                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                    </Header>*/}
                    {/*<Header className="header-bottom">
                        <div class="wrap">
                            <div id='cssmenu'>
                                <ul>
                                    <li class='active'><a href='index.html'><span>首页</span></a></li>

                                    <li class='has-sub'><a href=''><span>业务流程学习</span></a>
                                        <ul>
                                            <Link to="/home1"><li class='has-sub'><span>前台</span></li></Link>
                                            <Link to="/home2"><li class='has-sub'><span>助理</span></li></Link>
                                            <Link to="/home3"><li class='has-sub'><span>执业兽医师</span></li></Link>
                                        </ul>
                                    </li>
                                    <li><Link to="/casestudy"><span>病例学习</span></Link></li>
                                </ul>
                            </div>

                            <div class="clear"></div>
                        </div>
                    </Header>*/}
                </Layout>

                {/*<MyHeader/>*/}
                <Header className="header" style={{backgroundColor:'#65A360', height:'180px'}}>
                    <div className="logo" />
                    <div class="header">
                        <div class="wrap">
                            <div class="header-top">
                                <div class="logo">
                                    <img src={require('../images/logo.png')} alt=""/>
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
                                        <div><img style={{width:'auto'}} src={require('../images/footprint.png')} alt="" /></div>

                                    </div>

                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </Header>

                <div class="header-bottom">
                    <div class="wrap">
                        <div id='cssmenu'>
                            <ul>
                                <li class='active'><a href='index.html'><span>首页</span></a></li>

                                <li class='has-sub'><a href=''><span>业务流程学习</span></a>
                                    <ul>
                                        <Link to="/home1"><li class='has-sub'><span>前台</span></li></Link>
                                        <Link to="/home2"><li class='has-sub'><span>助理</span></li></Link>
                                        <Link to="/home3"><li class='has-sub'><span>执业兽医师</span></li></Link>
                                    </ul>
                                </li>
                                <li><Link to="/casestudy"><span>病例学习</span></Link></li>
                            </ul>
                        </div>

                        <div class="clear"></div>
                    </div>
                </div>

                <div class="main">
                    <div class="content-bottom">
                        <div class="wrap">
                            <div class="section group">

                                <div class="lsidebar span_1_of_2 offers_list">
                                    <div class="learn_box">
                                        <h3>业务流程学习</h3>
                                        <p><span class="quotes"></span>请选择您的工作岗位，然后您可以进入各科室，对于您所在的岗位在不同科室的工作内容、岗位责任和业务流程进行系统化的学习。<span class="quotes-down"></span></p>
                                    </div>
                                </div>
                                <div class="lsidebar span_1_of_2 offers_list">
                                    <div class="learn_box">
                                        <h3>病例学习</h3>
                                        <p><span class="quotes"></span>您可以通过病例目录，根据疾病种类、疾病名称对病例进行有针对性的学习，了解宠物医院对患病宠物治疗的全过程。<span class="quotes-down"></span></p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Learn;