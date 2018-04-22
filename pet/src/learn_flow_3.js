/**
 * Created by fsg on 2018/3/16.
 */
import React from 'react';
import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import FrontDesk from './pages/FrontDesk';
import ArchivesRoom from './pages/ArchivesRoom';
import AffectRoom from './pages/AffectRoom';
import ConsultingRoom from './pages/ConsultingRoom';
import DisposeRoom from './pages/DisposeRoom';
import ImmunityRoom from './pages/ImmunityRoom';
import InjectionRoom from './pages/InjectionRoom';
import InpatientRoom from './pages/InpatientRoom';
import LaboratoryRoom from './pages/LaboratoryRoom';
import OperationPrepareRoom from './pages/OperationPrepareRoom';
import OperationRoom from './pages/OperationRoom';
import PathologyAnalysisRoom from './pages/PathologyAnalysisRoom';
import PharmacyRoom from './pages/PharmacyRoom';
import SpecialConsulitingRoom from './pages/SpecialConsultingRoom';
import RouterPages from './RounterPages';

import Test from './pages/FrontDesk';
import MyHeader from './CurHeader';
import {Switch, Route, Link} from 'react-router-dom';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';
import './Home.css';
require('./pages/css/style.css');
require('./pages/css/slider.css');
// import 'antd/lib/icon/style/css';
const {Header, Content, Footer, Sider} = Layout;



class Home extends Component {
    componentDidMount() {
        var user = localStorage.getItem('user');
        if(user == null){
            this.props.history.push("/index");
        }
    }
    render(){
        return (
        <Layout>
            {/*<MyHeader />*/}
            <Layout>
                <Header className="header" style={{backgroundColor:'#65A360', height:'180px'}}>
                    <div className="logo" />
                    <div class="header">
                        <div class="wrap">
                            <div class="header-top">
                                <div class="logo">
                                    <Link to="/learn"><img src={require('./pages/images/logo.png')} alt=""/></Link>
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
            <Layout>

                <Sider
                    breakpoint="md"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    style={{textAlign:'center', height:'100%', backgroundColor:'#fff'}}>

                    <div className="logo" />
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >

                        <Menu.Item key="3" className="Menu-item">
                            <Link to="/home3/consulting" class="Menu-link">
                                <span className="nav-text">诊室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" className="Menu-item">
                            <Link to="/home3/immunity" class="Menu-link">
                                <span className="nav-text">免疫室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" className="Menu-item">
                            <Link to="/home3/laboratory" class="Menu-link">
                                <span className="nav-text">化验室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6" className="Menu-item">
                            <Link to="/home3/affect" class="Menu-link">
                                <span className="nav-text">影像室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7" className="Menu-item">
                            <Link to="/home3/specialconsulting" class="Menu-link">
                                <span className="nav-text">专科检查室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8" className="Menu-item">
                            <Link to="/home3/dispose" class="Menu-link">
                                <span className="nav-text">处置室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9" className="Menu-item">
                            <Link to="/home3/pharmacy" class="Menu-link">
                                <span className="nav-text">药房</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="10" className="Menu-item">
                            <Link to="/home3/injection" class="Menu-link">
                                <span className="nav-text">注射室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="11" className="Menu-item">
                            <Link to="/home3/operationprepare" class="Menu-link">
                                <span className="nav-text">手术准备室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="12" className="Menu-item">
                            <Link to="/home3/operation" class="Menu-link">
                                <span className="nav-text">手术室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="13" className="Menu-item">
                            <Link to="/home3/inpatient" class="Menu-link">
                                <span className="nav-text">住院部</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="14" className="Menu-item">
                            <Link to="/home3/pathologyanalysis" class="Menu-link">
                                <span className="nav-text">病理剖检室</span>
                            </Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout>
                    {/*<Header style={{background: '#fff', padding: 0, textAlign: 'right', paddingRight: '20px'}}></Header>*/}

                    <Content >
                        <div>
                            <Switch>
                                <Route exact path="/" component={FrontDesk}/>
                                <Route path="/home3/frontdesk" component={FrontDesk}/>
                                <Route path="/home3/archivesroom" component={ArchivesRoom}/>
                                <Route path="/home3/consulting" component={ConsultingRoom}/>
                                <Route path="/home3/immunity" component={ImmunityRoom}/>
                                <Route path="/home3/laboratory" component={LaboratoryRoom}/>
                                <Route path="/home3/affect" component={AffectRoom}/>
                                <Route path="/home3/specialconsulting" component={SpecialConsulitingRoom}/>
                                <Route path="/home3/dispose" component={DisposeRoom}/>
                                <Route path="/home3/pharmacy" component={PharmacyRoom}/>
                                <Route path="/home3/injection" component={InjectionRoom}/>
                                <Route path="/home3/operationprepare" component={OperationPrepareRoom}/>
                                <Route path="/home3/operation" component={OperationRoom}/>
                                <Route path="/home3/inpatient" component={InpatientRoom}/>
                                <Route path="/home3/pathologyanalysis" component={PathologyAnalysisRoom}/>
                            </Switch>

                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Pet Hospital Website Designed By YXL ©2018
                    </Footer>
                </Layout>

            </Layout>

        </Layout>
        );
    }
}

export default Home;