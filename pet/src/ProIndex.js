/**
 * Created by fsg on 2018/4/1.
 */
import React from 'react';
import {Component} from 'react';
import CurHeader from './CurHeader';
import {Carousel} from 'antd';
import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import { Modal} from 'antd';
require('./pages/frontdesk.css');
require('./pages/css/style.css');
require('./pages/css/slider.css');

const {Header, Content, Footer, Sider} = Layout;

class ProIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTag: false,
            userName: "",
            modelVis:false,
            modelContent:"请先登录"
        };
    }

    componentDidMount() {
        var user = localStorage.getItem('user');
        if(user == null){
            this.setState({showTag: true});
        }else {
            this.setState({userName: user});
            this.setState({showTag: false});
        }
    }

    handleModel= (e) => {
        this.setState({modelVis:false});
    }

    handleLogOut = () => {
        localStorage.removeItem("user");
        this.setState({userName: ""});

        this.componentDidMount();
    }

    handleImgClick = () => {
        this.setState({modelVis:true});
        this.componentDidMount();
    }

    render(){
        return (
            <div>
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
                                                    <div class="section group">
                                                        {
                                                            this.state.showTag ?
                                                                <div>
                                                                    <Link to="/register" class="Menu-link"><a href="#" class="login-btn">注册</a></Link>
                                                                    <Link to="/login" class="Menu-link"><a href="#" class="register-btn">登录</a></Link>
                                                                </div>
                                                                :
                                                                <div>
                                                                    <span class="logout-btn" onClick={this.handleLogOut}>{this.state.userName}注销</span>
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div><img style={{width: 'auto'}} src={require('./pages/images/footprint.png')} alt="" /></div>

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
                {/*<CurHeader/>*/}
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
                    <div class="content-top" style={{backgroundColor:"#fff"}}>
                        <div class="wrap">
                            <div class="section group">
                                <div class="col_1_of_3 span_1_of_3">
                                    <div class="css3">
                                        <div class="grid-img">
                                            {
                                                this.state.showTag ?
                                                    <img src={require('./pages/images/view.png')} alt="" onClick={this.handleImgClick}/>
                                                    :
                                                    <Link to="/view/view"><img src={require('./pages/images/view.png')} alt=""/></Link>
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div class="col_1_of_3 span_1_of_3">
                                    <div class="css3">
                                        <div class="grid-img">
                                            {
                                                this.state.showTag ?
                                                    <img src={require('./pages/images/learn.png')} alt="" onClick={this.handleImgClick}/>
                                                    :
                                                    <Link to="/learn"><img src={require('./pages/images/learn.png')} alt=""/></Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div class="col_1_of_3 span_1_of_3">
                                    <div class="css3">
                                        <div class="grid-img">
                                            {
                                                this.state.showTag ?
                                                    <img src={require('./pages/images/test.png')} alt="" onClick={this.handleImgClick}/>
                                                    :
                                                    <Link to="/newTest"><img src={require('./pages/images/test.png')} alt=""/></Link>
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal title="您还未登录" visible={this.state.modelVis}
                       onOk={this.handleModel} onCancel={this.handleModel}>
                    <p>{
                        this.state.modelContent
                    }</p>
                </Modal>
            </div>
        );
    }
}

export default ProIndex;