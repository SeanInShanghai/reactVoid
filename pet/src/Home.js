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
import Test from './pages/FrontDesk';
import {Switch, Route, Link} from 'react-router-dom';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';
import './Home.css';
require('./pages/css/style.css');
require('./pages/css/slider.css');
// import 'antd/lib/icon/style/css';
const {Header, Content, Footer, Sider} = Layout;



class Home extends Component {
    render(){
        return (
        <Layout>
            <Header className="header" style={{backgroundColor:'#65A360', height:'180px'}}>
                <div className="logo" />
                <div class="header" style={{marginTop:'2px', index:100}}>
                    <div class="wrap">
                        <div class="header-top">
                            <div class="logo">
                                <img src={require('./pages/images/logo.png')} alt=""/>
                            </div>
                            <div class="cart">
                                <div class="span6 header-sidebar" data-motopress-type="dynamic-sidebar" data-motopress-sidebar-id="footer-sidebar-4">
                                    <div><img src={require('./pages/images/footprint.png')} alt="" /></div>

                                </div>

                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </Header>
            <Layout>

                <Sider
                    breakpoint="md"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    style={{textAlign:'center', height:'100%', backgroundColor:'#fff'}}>

                    <div className="logo" style={{height:70, width:200, backgroundColor:'#232323', marginTop:'0px'}}/>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} >

                        <Menu.Item key="1" className="Menu-item">
                            <Link to="/frontdesk" class="Menu-link">
                                <span className="nav-text">前台</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" className="Menu-item">
                            <Link to="/archivesroom" class="Menu-link">
                                <span className="nav-text">档案室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" className="Menu-item">
                            <Link to="/consulting" class="Menu-link">
                                <span className="nav-text">诊室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" className="Menu-item">
                            <Link to="/immunity" class="Menu-link">
                                <span className="nav-text">免疫室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" className="Menu-item">
                            <Link to="/laboratory" class="Menu-link">
                                <span className="nav-text">化验室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6" className="Menu-item">
                            <Link to="/affect" class="Menu-link">
                                <span className="nav-text">影响室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7" className="Menu-item">
                            <Link to="/specialconsulting" class="Menu-link">
                                <span className="nav-text">专科检查室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8" className="Menu-item">
                            <Link to="/dispose" class="Menu-link">
                                <span className="nav-text">处置室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9" className="Menu-item">
                            <Link to="/pharmacy" class="Menu-link">
                                <span className="nav-text">药房</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="10" className="Menu-item">
                            <Link to="/injection" class="Menu-link">
                                <span className="nav-text">注射室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="11" className="Menu-item">
                            <Link to="/operationprepare" class="Menu-link">
                                <span className="nav-text">手术准备室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="12" className="Menu-item">
                            <Link to="/operation" class="Menu-link">
                                <span className="nav-text">手术室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="13" className="Menu-item">
                            <Link to="/inpatient" class="Menu-link">
                                <span className="nav-text">住院部</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="14" className="Menu-item">
                            <Link to="/pathologyanalysis" class="Menu-link">
                                <span className="nav-text">病理剖析室</span>
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
                                <Route path="/frontdesk" component={FrontDesk}/>
                                <Route path="/archivesroom" component={ArchivesRoom}/>
                                <Route path="/consulting" component={ConsultingRoom}/>
                                <Route path="/immunity" component={ImmunityRoom}/>
                                <Route path="/laboratory" component={LaboratoryRoom}/>
                                <Route path="/affect" component={AffectRoom}/>
                                <Route path="/specialconsulting" component={SpecialConsulitingRoom}/>
                                <Route path="/dispose" component={DisposeRoom}/>
                                <Route path="/pharmacy" component={PharmacyRoom}/>
                                <Route path="/injection" component={InjectionRoom}/>
                                <Route path="/operationprepare" component={OperationPrepareRoom}/>
                                <Route path="/operation" component={OperationRoom}/>
                                <Route path="/inpatient" component={InpatientRoom}/>
                                <Route path="/pathologyanalysis" component={PathologyAnalysisRoom}/>
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