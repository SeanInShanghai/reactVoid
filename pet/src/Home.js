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
import Test from './pages/Test';
import {Switch, Route, Link} from 'react-router-dom';
import 'antd/lib/layout/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';
const {Header, Content, Footer, Sider} = Layout;


class Home extends Component {
    render(){
        return (
            <Layout>

                <Sider
                    breakpoint="md"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >

                    <div className="logo"/>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1">
                            <Link to="/frontdesk">
                                <Icon type="bars"/>
                                <span className="nav-text">前台</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/archivesroom">
                                <Icon type="frown-o"/>
                                <span className="nav-text">档案室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/consulting">
                                <Icon type="smile" />
                                <span className="nav-text">诊室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/immunity">
                                <Icon type="smile" />
                                <span className="nav-text">免疫室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/laboratory">
                                <Icon type="smile" />
                                <span className="nav-text">化验室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/affect">
                                <Icon type="smile" />
                                <span className="nav-text">影响室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to="/specialconsulting">
                                <Icon type="smile" />
                                <span className="nav-text">专科检查室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to="/dispose">
                                <Icon type="smile" />
                                <span className="nav-text">处置室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to="/pharmacy">
                                <Icon type="smile" />
                                <span className="nav-text">药房</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Link to="/injection">
                                <Icon type="smile" />
                                <span className="nav-text">注射室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Link to="/operationprepare">
                                <Icon type="smile" />
                                <span className="nav-text">手术准备室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="12">
                            <Link to="/operation">
                                <Icon type="smile" />
                                <span className="nav-text">手术室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="13">
                            <Link to="/inpatient">
                                <Icon type="smile" />
                                <span className="nav-text">住院部</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="14">
                            <Link to="/pathologyanalysis">
                                <Icon type="smile" />
                                <span className="nav-text">病理剖析室</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="15">
                            <Link to="/test">
                                <Icon type="bars"/>
                                <span className="nav-text">Test</span>
                            </Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0, textAlign: 'right', paddingRight: '20px'}}></Header>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div style={{padding: 24, background: '#fff', minHeight: 500}}>
                            <Switch>
                                <Route exact path="/" component={FrontDesk}/>
                                <Route path="/test" component={Test}/>
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
        );
    }
}

export default Home;